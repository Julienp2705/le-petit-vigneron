import Anthropic from "@anthropic-ai/sdk"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  "https://ciwihnnhdiwfqtywviko.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd2lobm5oZGl3ZnF0eXd2aWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTU0MzMsImV4cCI6MjA4OTUzMTQzM30.Pq0Qmy5RENDGaezIB-rumu3e45Bl2QtvJ1F8IbST2BQ"
)

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

async function main() {
  console.log("📚 Récupération des articles...")
  const { data: articles, error } = await supabase
    .from("articles")
    .select("id, titre, slug, categorie, sous_categorie, contenu")
    .eq("publie", true)

  if (error) { console.error("Erreur Supabase :", error); process.exit(1) }
  console.log(`✅ ${articles.length} articles récupérés\n`)

  const listeArticles = articles.map(a => ({
    titre: a.titre, slug: a.slug, categorie: a.categorie,
    sous_categorie: a.sous_categorie, url: `/${a.categorie}/${a.slug}`,
  }))

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i]
    console.log(`\n🔄 [${i + 1}/${articles.length}] ${article.titre}`)
    if (!article.contenu || article.contenu.trim().length < 100) {
      console.log("  ⏩ Contenu trop court, ignoré"); continue
    }
    try {
      const response = await anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8000,
        messages: [{
          role: "user",
          content: `Tu es un expert SEO spécialisé dans le maillage interne.

Article à traiter :
- Titre : ${article.titre}
- Catégorie : ${article.categorie}
- URL : /${article.categorie}/${article.slug}

Liste de tous les autres articles du site :
${JSON.stringify(listeArticles.filter(a => a.slug !== article.slug), null, 2)}

Contenu Markdown de l'article :
---
${article.contenu}
---

Ta mission :
1. Identifie les 3 à 5 articles les plus pertinents à lier
2. Insère ces liens NATURELLEMENT dans le texte existant
3. Utilise la syntaxe Markdown : [texte du lien](url)
4. Ne modifie PAS le contenu existant — tu AJOUTES seulement des liens
5. N'ajoute PAS de section "Articles similaires"
6. Retourne UNIQUEMENT le contenu Markdown complet, sans commentaire`
        }],
      })

      const nouveauContenu = response.content[0].type === "text" ? response.content[0].text.trim() : null
      if (!nouveauContenu) { console.log("  ❌ Pas de réponse"); continue }

      const { error: updateError } = await supabase
        .from("articles").update({ contenu: nouveauContenu }).eq("id", article.id)

      if (updateError) console.log("  ❌ Erreur Supabase :", updateError.message)
      else console.log("  ✅ Mis à jour avec succès")

      await new Promise(r => setTimeout(r, 2000))
    } catch (err) {
      console.error("  ❌ Erreur :", err.message)
    }
  }
  console.log("\n🎉 Maillage interne terminé !")
}

main()
