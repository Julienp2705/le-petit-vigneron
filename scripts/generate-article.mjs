import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import ws from "ws";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { realtime: { transport: ws } }
);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Tu es un expert SEO et rédacteur web francophone spécialisé dans le vin.

## Identité du site
Tu rédiges pour le-petit-vigneron.fr — un blog vin tenu par Julien, amateur passionné de vin. Le ton est celui d'un ami qui partage son expérience autour d'un verre : chaleureux, direct, sans chichi. On parle à des humains, pas à des algorithmes.

## Étape 1 — Analyse SERP
Recherche le mot-clé cible sur Google France. Analyse le top 10 et identifie :
- L'intention dominante (informationnelle, commerciale, mixte)
- Le format attendu (guide, liste, comparatif, fiche pratique)
- Les sous-sujets que tout le monde couvre (= le plancher)
- Les gaps : questions non traitées, angles absents, données manquantes
- Les éléments SERP à capter (featured snippet, PAA)

## Étape 2 — Angle différenciant
Définis un axe éditorial unique que les concurrents n'ont pas. Exemples : une erreur courante expliquée, un retour d'expérience personnel, un conseil contre-intuitif, une donnée précise que personne ne donne. Cet angle doit faire que seul le-petit-vigneron.fr pouvait écrire cet article.

## Étape 3 — Maillage interne
Une liste d'articles existants sur le site te sera fournie dans le message utilisateur. Choisis EXACTEMENT 3 articles thématiquement proches du sujet — pas au hasard. Place chaque lien dans une phrase qui a du sens en contexte, jamais en fin d'article ou dans un bloc "à lire aussi". Le lecteur doit avoir une vraie raison de cliquer. Utilise UNIQUEMENT les URLs fournies, n'en invente jamais.

## Étape 4 — Rédaction
Rédige l'article complet en Markdown en respectant ces règles :

**Structure :**
- Title (balise) : mot-clé au début, 50-60 caractères, sentence case
- Meta description : 140-155 caractères, bénéfice + incitation au clic
- H1 : proche du title mais pas identique
- Intro : réponse immédiate à l'intention, bénéfice clair, pas de chauffe inutile
- Bloc "En bref" : 3-5 puces résumant la réponse (optimisé featured snippet)
- Corps : H2 par sous-sujet + H2 par gap identifié, H3 pour les déclinaisons
- FAQ : reprendre les PAA, réponses courtes et directes
- Conclusion avec CTA Le Petit Ballon si pertinent

**Ton HubSpot :**
- Phrases courtes, une idée par phrase
- Conversationnel, vouvoiement
- Zéro jargon non expliqué, zéro superlatif creux
- Sentence case dans tous les titres

**Insights uniques obligatoires :**
Intègre dans le corps de l'article au moins 3 éléments parmi :
- Un retour d'expérience personnel de Julien
- Une erreur courante que les autres blogs ne mentionnent pas
- Un conseil contre-intuitif avec explication
- Une information précise que les concurrents ne donnent pas
- Une anecdote sur un producteur, un terroir, une dégustation

**Format :**
- Markdown pur, sans tableau
- Longueur : 1500-2500 mots selon la concurrence SERP
- Pas de bullet points sur plus de 5 items consécutifs
- Aucune balise HTML dans le contenu : pas de <cite>, <span>, <div> ou toute autre balise. Markdown pur uniquement.

## Sortie JSON attendue
Réponds UNIQUEMENT avec un objet JSON valide, sans balises Markdown, sans texte avant ou après :
{
  "titre": "Titre H1 de l'article",
  "slug": "slug-url-de-l-article",
  "meta_titre": "Title balise 50-60 caractères",
  "meta_description": "Meta description 140-155 caractères",
  "categorie": "accord-mets-vins | cepages | appellations | oenotourisme",
  "sous_categorie": "cuisine-francaise | cuisine-espagnole | cuisine-du-monde | que-manger-avec | null (si aucune ne correspond)",
  "extrait": "Résumé de 1-2 phrases pour l'aperçu article",
  "contenu": "Contenu complet en Markdown",
  "temps_lecture": 7,6,3,4,5
  "auteur": "Julien"
}`;

async function getNextKeyword() {
  const { data, error } = await supabase
    .from("keywords")
    .select("*")
    .eq("statut", "pending")
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  if (error || !data) {
    console.log("Aucun mot-clé en attente.");
    process.exit(0);
  }
  return data;
}

async function getExistingArticles() {
  const { data } = await supabase
    .from("articles")
    .select("titre, slug, categorie, extrait, sous_categorie")
    .eq("publie", true)
    .order("created_at", { ascending: false })
    .limit(50);
  return data || [];
}

async function generateArticle(keyword) {
  console.log(`Génération pour : ${keyword.keyword}`);

  const articles = await getExistingArticles();
  const articlesContext = articles
    .map(
      (a) =>
        `- ${a.titre} | URL: /${a.categorie}/${a.slug} | Catégorie: ${a.categorie}${a.sous_categorie ? "/" + a.sous_categorie : ""} | Sujet: ${a.extrait?.slice(0, 120) || ""}`
    )
    .join("\n");

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8000,
    tools: [{ type: "web_search_20250305", name: "web_search" }],
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Mot-clé cible : "${keyword.keyword}"
Catégorie : ${keyword.categorie}

ARTICLES EXISTANTS SUR LE SITE (pour le maillage interne — choisis 3 articles THÉMATIQUEMENT PROCHES du sujet. Place chaque lien en contexte naturel dans le corps de l'article, jamais en fin) :
${articlesContext}

Analyse la SERP, définis l'angle différenciant, choisis 3 articles pertinents dans la liste ci-dessus pour le maillage, puis rédige l'article. Retourne uniquement le JSON.`,
      },
    ],
  });

  const text = response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

async function insertArticle(article, keywordId) {
  const today = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  article.contenu = article.contenu.replace(/<[^>]*>/g, "");

  const { data, error } = await supabase
    .from("articles")
    .insert({
      titre: article.titre,
      slug: article.slug,
      categorie: article.categorie,
      sous_categorie: article.sous_categorie || null,
      extrait: article.extrait,
      contenu: article.contenu,
      meta_titre: article.meta_titre,
      meta_description: article.meta_description,
      temps_lecture: article.temps_lecture,
      auteur: article.auteur,
      date: today,
      publie: true,
    })
    .select()
    .single();

  if (error) throw new Error(`Erreur insertion : ${error.message}`);

  await supabase
    .from("keywords")
    .update({ statut: "done", article_id: data.id })
    .eq("id", keywordId);

  return data;
}

async function revalidate(categorie, slug) {
  const res = await fetch(`${process.env.SITE_URL}/webhook/revalidate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-revalidate-secret": process.env.REVALIDATE_SECRET,
    },
    body: JSON.stringify({ categorie, slug }),
  });
  const json = await res.json();
  console.log("Revalidation :", json);
}

async function main() {
  const keyword = await getNextKeyword();
  const article = await generateArticle(keyword);
  const inserted = await insertArticle(article, keyword.id);
  await revalidate(inserted.categorie, inserted.slug);
  console.log(`Article publié : /${inserted.categorie}/${inserted.slug}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
