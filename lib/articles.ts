import { supabase } from "./supabase"

export async function getArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")

  console.log("DATA:", data)
  console.log("ERROR:", error)

  if (error) {
    console.error("Erreur Supabase:", error)
    return []
  }

  return data || []
}

export async function getArticle(slug: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single()

  console.log("ARTICLE DATA:", data)
  console.log("ARTICLE ERROR:", error)

  if (error) {
    console.error("Erreur Supabase:", error)
    return null
  }

  return data
}