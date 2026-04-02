import { articles } from "../../../lib/articles"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
export default async function Article({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <main style={{ background: "#fffaf4", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Rametto One', serif", fontSize: "32px", color: "#731702", marginBottom: "16px" }}>Article introuvable</p>
          <a href="/" style={{ fontSize: "14px", fontWeight: 700, color: "#bf3e0f", textDecoration: "none" }}>← Retour à l'accueil</a>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: "#fffaf4", minHeight: "100vh" }}>

      {/* HEADER */}
      <Header />

      {/* HERO ARTICLE */}
      <section style={{ background: "#731702", padding: "56px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <a href="/" style={{ display: "inline-block", fontSize: "13px", fontWeight: 700, color: "#f5c9a8", textDecoration: "none", marginBottom: "24px" }}>
            ← Retour au blog
          </a>
          <div style={{ display: "inline-block", background: "#f28322", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", marginBottom: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", marginLeft: "16px" }}>
            Article
          </div>
          <h1 style={{ fontFamily: "'Rametto One', serif", fontSize: "52px", color: "#ffffff", lineHeight: 1.15, marginBottom: "16px" }}>
            {article.titre}
          </h1>
          <p style={{ fontSize: "14px", color: "#f5c9a8", fontWeight: 600 }}>{article.date}</p>
        </div>
      </section>

      {/* CONTENU */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Extrait mis en avant */}
          <div style={{ background: "#ffe7ca", borderLeft: "4px solid #bf3e0f", borderRadius: "0 12px 12px 0", padding: "20px 24px", marginBottom: "40px" }}>
            <p style={{ fontSize: "18px", color: "#731702", lineHeight: 1.7, fontWeight: 600 }}>
              {article.extrait}
            </p>
          </div>

          {/* Corps de l'article */}
          <div style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9 }}>
            {article.contenu}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      <div style={{ background: "#4a1000", padding: "16px 24px", textAlign: "center", fontSize: "12px", color: "#f5c9a8" }}>
        © 2026 Le Petit Vigneron — Fait avec passion 🍷
      </div>

    </main>
  )
}