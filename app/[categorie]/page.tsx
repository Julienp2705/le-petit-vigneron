import { supabase } from "../../lib/supabase"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default async function CategoriePage({
  params
}: {
  params: Promise<{ categorie: string }>
}) {
  const { categorie } = await params

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .eq("categorie", categorie)
    .eq("publie", true)
    .order("created_at", { ascending: false })

  const vedette = articles?.[0] || null
  const reste = articles?.slice(1) || []

  const categorieLabel = categorie
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <main style={{ background: "#fdf8f2", minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px clamp(20px, 4vw, 48px) 0" }}>
        <div style={{ fontSize: "12px", color: "#bf3e0f", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "1.5px", marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
          <a href="/" style={{ color: "#bf3e0f", textDecoration: "none", fontWeight: 700 }}>Accueil</a>
          <span style={{ color: "#f0d4b8", margin: "0 8px" }}>›</span>
          <span style={{ color: "#9a6040" }}>{categorieLabel}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "end", paddingBottom: "32px", borderBottom: "2px solid #f0d4b8" }} className="title-row">
          <div>
            <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(32px, 5vw, 58px)", color: "#731702", lineHeight: 1.05, marginBottom: "16px" }}>
              {categorieLabel}
            </h1>
            <p style={{ fontSize: "16px", color: "#9a6040", lineHeight: 1.75, maxWidth: "520px", fontFamily: "'Nunito', sans-serif" }}>
              Découvrez tous nos articles sur {categorieLabel.toLowerCase()} — des conseils accessibles pour tous les amateurs de vin.
            </p>
          </div>
          <div style={{ textAlign: "right" }} className="cat-count">
            <div style={{ fontFamily: "'Rammetto One', cursive", fontSize: "52px", color: "#f0d4b8", lineHeight: 1 }}>
              {articles?.length || 0}
            </div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#bf3e0f", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>articles</div>
          </div>
        </div>
      </div>

      {/* ARTICLE VEDETTE */}
      {vedette && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px clamp(20px, 4vw, 48px) 0" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#bf3e0f", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "16px", fontFamily: "'Nunito', sans-serif" }}>
            ✦ Article à la une
          </div>
          <div style={{ display: "grid", borderRadius: "20px", overflow: "hidden", border: "1px solid #f0d4b8", background: "white" }} className="vedette-grid">
            <div style={{ minHeight: "400px", background: "#731702", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" as const, overflow: "hidden" }}>
              {vedette.image_couverture ? (
                <img src={vedette.image_couverture} alt={vedette.titre} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" as const, inset: 0 }} />
              ) : (
                <>
                  <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(135deg,#731702,#bf3e0f)" }}></div>
                  <span style={{ position: "relative" as const, zIndex: 1, fontSize: "110px" }}>🍷</span>
                </>
              )}
              <span style={{ position: "absolute" as const, top: "24px", left: "24px", zIndex: 2, background: "#f28322", color: "white", fontSize: "10px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
                {vedette.sous_categorie || categorieLabel}
              </span>
            </div>
            <div style={{ padding: "40px", display: "flex", flexDirection: "column" as const, justifyContent: "space-between" }}>
              <div>
                <span style={{ display: "inline-block", background: "#ffe7ca", color: "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", marginBottom: "16px", textTransform: "uppercase" as const, fontFamily: "'Nunito', sans-serif" }}>
                  À la une
                </span>
                <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "24px", color: "#731702", lineHeight: 1.2, marginBottom: "16px" }}>
                  {vedette.titre}
                </h2>
                <p style={{ fontSize: "15px", color: "#9a6040", lineHeight: 1.8, marginBottom: "24px", fontFamily: "'Nunito', sans-serif" }}>
                  {vedette.extrait}
                </p>
                <div style={{ height: "1px", background: "#f0d4b8", marginBottom: "24px" }}></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", border: "2px solid #f0d4b8" }}>
                    <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 800, color: "#731702", fontFamily: "'Nunito', sans-serif" }}>{vedette.auteur || "Julien"}</div>
                    <div style={{ fontSize: "11px", color: "#9a6040", fontFamily: "'Nunito', sans-serif" }}>
                      {vedette.temps_lecture && `${vedette.temps_lecture} min · `}{vedette.date}
                    </div>
                  </div>
                </div>
                <a href={`/${categorie}/${vedette.slug}`} style={{ background: "#731702", color: "white", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 800, padding: "11px 22px", borderRadius: "8px", textDecoration: "none" }}>
                  Lire →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GRILLE */}
      {reste.length > 0 && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px clamp(20px, 4vw, 48px) 64px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px", paddingBottom: "16px", borderBottom: "1px solid #f0d4b8" }}>
            <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "22px", color: "#731702" }}>
              Tous les articles
            </h2>
          </div>
          <div style={{ display: "grid", gap: "20px" }} className="cards-grid">
            {reste.map((article: any) => (
              <a key={article.slug} href={`/${categorie}/${article.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "white", borderRadius: "14px", border: "1px solid #f0d4b8", overflow: "hidden", height: "100%" }}>
                  <div style={{ height: "160px", background: "#bf3e0f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "52px", position: "relative" as const, overflow: "hidden" }}>
                    {article.image_couverture ? (
                      <img src={article.image_couverture} alt={article.titre} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" as const, inset: 0 }} />
                    ) : (
                      <span style={{ position: "relative" as const, zIndex: 1 }}>🍷</span>
                    )}
                    <span style={{ position: "absolute" as const, top: "12px", left: "12px", zIndex: 2, background: "rgba(255,255,255,0.92)", color: "#bf3e0f", fontSize: "9px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase" as const, fontFamily: "'Nunito', sans-serif" }}>
                      {article.sous_categorie || categorieLabel}
                    </span>
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "15px", color: "#731702", lineHeight: 1.3, marginBottom: "8px" }}>
                      {article.titre}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#9a6040", lineHeight: 1.6, marginBottom: "14px", fontFamily: "'Nunito', sans-serif" }}>
                      {article.extrait}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #f0d4b8" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#731702", fontFamily: "'Nunito', sans-serif" }}>{article.auteur || "Julien"}</span>
                      <span style={{ fontSize: "11px", color: "#bf3e0f", fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>
                        {article.temps_lecture ? `${article.temps_lecture} min →` : "Lire →"}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* MESSAGE SI PAS D'ARTICLES */}
      {!articles?.length && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px clamp(20px, 4vw, 48px)", textAlign: "center" as const }}>
          <p style={{ fontFamily: "'Rammetto One', cursive", fontSize: "24px", color: "#f0d4b8", marginBottom: "16px" }}>
            Aucun article pour le moment
          </p>
          <a href="/" style={{ fontSize: "14px", fontWeight: 700, color: "#bf3e0f", textDecoration: "none", fontFamily: "'Nunito', sans-serif" }}>
            ← Retour à l'accueil
          </a>
        </div>
      )}

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .vedette-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .title-row { grid-template-columns: 1fr !important; }
          .cat-count { display: none !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
        }
        .cards-grid { grid-template-columns: repeat(3, 1fr); }
        .vedette-grid { grid-template-columns: 1fr 1fr; }
      `}</style>

    </main>
  )
}