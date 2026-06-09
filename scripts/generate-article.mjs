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
Consulte le-petit-vigneron.fr et trouve 3 pages existantes thématiquement proches du sujet. Tu ne peux placer que 3 lien par page. Les URLs sont absolues, commençant par /. N'invente jamais une URL.

## Étape 4 — Rédaction
Rédige l'article complet en Markdown en respectant ces règles :

**Structure :**
- Title (balise) : mot-clé au début, 50-60 caractères, sentence case
- Meta description : 140-155 caractères, bénéfice + incitation au clic
- Pas de H1 dans le contenu markdown car il est génére automatiquement par la colonne "Titre"
- Intro : réponse immédiate à l'intention, bénéfice clair, pas de chauffe inutile
- Bloc "En bref" : 3-5 puces résumant la réponse (optimisé featured snippet)
- Corps : H2 par sous-sujet + H2 par gap identifié, H3 pour les déclinaisons
- FAQ : reprendre les PAA, réponses courtes et directes


**Ton HubSpot :**
- Phrases courtes, une idée par phrase
- Conversationnel, vouvoiement
- Zéro jargon non expliqué, zéro superlatif creux
- Sentence case dans tous les titres
- Contenu structuré et agréable a lire avec assez de volume po

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
- TRES IMPORTANT = Aucune balise HTML dans le contenu : pas de <cite>, <span>, <div> ou toute autre balise. Markdown pur uniquement.

## Sortie JSON attendue
Réponds UNIQUEMENT avec un objet JSON valide, sans balises Markdown, sans texte avant ou après :
{
  "titre": "titre de l'article optimisé CTR",
  "slug": "slug-url-de-l-article",
  "meta_titre": "Title balise 50-60 caractères",
  "meta_description": "Meta description 140-155 caractères",
  "categorie": "accord-mets-vins | cepages | appellations | oenotourisme",
  "sous_categorie": "cuisine-francaise | cuisine-espagnole | cuisine-du-monde | que-manger-avec | null (si aucune ne correspond)"
  "extrait": "Résumé de 1-2 phrases pour l'aperçu article",
  "contenu": "Contenu complet en Markdown",
  "temps_lecture": 7,
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

async function generateArticle(keyword) {
  console.log(`Génération pour : ${keyword.keyword}`);

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8000,
    tools: [{ type: "web_search_20250305", name: "web_search" }],
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Mot-clé cible : "${keyword.keyword}"\nCatégorie : ${keyword.categorie}\n\nAnalyse la SERP, définis l'angle différenciant, trouve le maillage interne sur le-petit-vigneron.fr, puis rédige l'article complet. Retourne uniquement le JSON.`,
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
article.contenu = article.contenu.replace(/<[^>]*>/g, '');
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
  const res = await fetch(
    `${process.env.SITE_URL}/webhook/revalidate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidate-secret": process.env.REVALIDATE_SECRET,
      },
      body: JSON.stringify({ categorie, slug }),
    }
  );
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
