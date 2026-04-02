import { supabase } from "../lib/supabase"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default async function Home() {
  const { data: articlesAccords } = await supabase.from("articles").select("*").eq("categorie", "accord-mets-vins").eq("publie", true).order("created_at", { ascending: false }).limit(4)
  const { data: articlesCepages } = await supabase.from("articles").select("*").eq("categorie", "cepages").eq("publie", true).order("created_at", { ascending: false }).limit(4)
  const { data: articlesAppellations } = await supabase.from("articles").select("*").eq("categorie", "appellations").eq("publie", true).order("created_at", { ascending: false }).limit(4)
  const { data: articlesOeno } = await supabase.from("articles").select("*").eq("categorie", "oenotourisme").eq("publie", true).order("created_at", { ascending: false }).limit(4)
  const { data: bouteilles } = await supabase.from("bouteilles").select("*").eq("disponible", true).limit(4)

  const categories = [
    { slug: "accord-mets-vins", label: "Accords mets-vins", desc: "Mariez les bons vins avec vos plats", img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Accord%20met%20vin.webp" },
    { slug: "cepages", label: "Cépages & Appellations", desc: "Explorez les grands cépages du monde", img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Cepages%20et%20appellations.webp" },
    { slug: "oenotourisme", label: "Oenotourisme", desc: "Partez à la découverte des vignobles", img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Oenotourisme.webp" },
    { slug: "boutique", label: "Boutique", desc: "Mes sélections de bouteilles coup de cœur", img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Boutique.webp" },
  ]

  return (
    <main style={{ background: "#fdf8f2", minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <section style={{ background: "#731702", position: "relative", overflow: "hidden", padding: "clamp(48px, 8vw, 96px) clamp(20px, 4vw, 48px)" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", background: "#bf3e0f", borderRadius: "50%", opacity: 0.2 }}></div>
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", background: "#9b2010", borderRadius: "50%", opacity: 0.3 }}></div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gap: "48px", alignItems: "center" }} className="hero-grid">
          <div>
            <span style={{ display: "inline-block", background: "#f28322", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", marginBottom: "20px", textTransform: "uppercase" as const, letterSpacing: "1px" }}>
              Le guide du vin pour amateurs passionnés
            </span>
            <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(36px, 5vw, 64px)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px" }}>
              Le vin, sans chichi<br />et avec <span style={{ color: "#f28322" }}>passion</span>
            </h1>
            <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", maxWidth: "520px", fontFamily: "'Nunito', sans-serif" }}>
              Accords mets-vins, cépages, appellations, oenotourisme — des articles accessibles pour tous ceux qui aiment le vin sans se prendre la tête.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
              <a href="/accord-mets-vins" style={{ background: "#ffffff", color: "#731702", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>
                Découvrir le blog
              </a>
              <a href="/oenotourisme" style={{ background: "transparent", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, padding: "13px 26px", borderRadius: "8px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
                Oenotourisme
              </a>
            </div>
          </div>

          <div className="hero-imgs" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ width: "120px", height: "180px", borderRadius: "14px", overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)", flexShrink: 0 }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Accord%20met%20vin.webp" alt="Accords mets-vins" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ width: "120px", height: "180px", borderRadius: "14px", overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)", flexShrink: 0, marginTop: "28px" }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Oenotourisme.webp" alt="Oenotourisme" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ width: "120px", height: "180px", borderRadius: "14px", overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)", flexShrink: 0 }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Cepages%20et%20appellations.webp" alt="Cépages" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CARROUSEL */}
      <section style={{ overflow: "hidden", background: "#fdf8f2", borderBottom: "1px solid #f0d4b8" }}>
        <div className="carousel-track">
          {[...categories, ...categories].map((cat, i) => (
            <a key={i} href={`/${cat.slug}`} style={{ textDecoration: "none", flexShrink: 0 }}>
              <div style={{ width: "260px", borderRadius: "16px", overflow: "hidden", position: "relative" as const, height: "180px", cursor: "pointer" }}>
                <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" as const, inset: 0 }} />
                <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to top, rgba(60,5,0,0.85) 0%, rgba(60,5,0,0.2) 60%, transparent 100%)" }}></div>
                <div style={{ position: "absolute" as const, bottom: 0, left: 0, right: 0, padding: "16px 18px" }}>
                  <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "16px", color: "#ffffff", lineHeight: 1.2, margin: "0 0 4px" }}>{cat.label}</h3>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#f28322", fontFamily: "'Nunito', sans-serif" }}>Découvrir →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px clamp(20px, 4vw, 48px)" }}>
        <div style={{ display: "grid", gap: "64px", alignItems: "center" }} className="about-grid">
          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #f0d4b8", aspectRatio: "4/5" as const, background: "#ffe7ca" }}>
            <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/julien%20poulain.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#bf3e0f", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ display: "block", width: "32px", height: "1px", background: "#bf3e0f" }}></span>
              À propos
            </div>
            <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(28px, 3vw, 40px)", color: "#731702", lineHeight: 1.1, marginBottom: "20px" }}>
              Bonjour, je suis<br /><span style={{ color: "#bf3e0f" }}>Julien</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#9a6040", lineHeight: 1.8, marginBottom: "16px", fontFamily: "'Nunito', sans-serif" }}>
  J'aime le vin, mais surtout les moments qu'il crée. Les verres qu'on partage, les rires qui vont avec, et les petites histoires qu'on se raconte autour d'une bonne bouteille.
</p>
<p style={{ fontSize: "16px", color: "#9a6040", lineHeight: 1.8, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
  Avec Le Petit Vigneron, j'ai juste envie de t'ouvrir la porte de mon univers : te faire découvrir de belles pépites, simplement, sans chichi… comme si on était à la maison.
</p>
<div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" as const }}>
  {["5 ans de passion", "30+ articles publiés"].map((label) => (
                <div key={label} style={{ fontSize: "12px", fontWeight: 700, color: "#731702", background: "#ffe7ca", padding: "7px 14px", borderRadius: "20px", border: "1px solid #f0d4b8", fontFamily: "'Nunito', sans-serif" }}>
                  {label}
                </div>
              ))}
            </div>
            <a href="/a-propos" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#731702", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "13px 24px", borderRadius: "8px", textDecoration: "none" }}>
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* SECTIONS THÉMATIQUES */}
      <SectionArticles titre="Accords mets-vins" desc="Mariez les bons vins avec vos plats du quotidien" slug="accord-mets-vins" articles={articlesAccords || []} />
      <SectionArticles titre="Cépages" desc="Explorez les grands cépages du monde" slug="cepages" articles={articlesCepages || []} alt />
      <SectionArticles titre="Appellations" desc="Découvrez les grandes appellations françaises" slug="appellations" articles={articlesAppellations || []} />
      <SectionArticles titre="Oenotourisme" desc="Partez à la découverte des plus beaux vignobles" slug="oenotourisme" articles={articlesOeno || []} alt />

      {/* BOUTIQUE */}
      <section style={{ padding: "72px clamp(20px, 4vw, 48px)", background: "#731702" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap" as const, gap: "12px" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#f28322", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "8px", fontFamily: "'Nunito', sans-serif" }}>✦ Boutique</div>
              <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(24px, 3vw, 32px)", color: "#ffffff", margin: 0 }}>Mes sélections</h2>
              <p style={{ fontSize: "14px", color: "#f5c9a8", marginTop: "6px", fontFamily: "'Nunito', sans-serif" }}>Des bouteilles soigneusement choisies pour vous</p>
            </div>
            <a href="/boutique" style={{ fontSize: "13px", fontWeight: 700, color: "#f28322", textDecoration: "none", fontFamily: "'Nunito', sans-serif" }}>Voir toute la boutique →</a>
          </div>
          {bouteilles && bouteilles.length > 0 ? (
            <div style={{ display: "grid", gap: "20px" }} className="cards-grid">
              {bouteilles.map((b: any) => (
                <div key={b.id} style={{ background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #f0d4b8" }}>
                  <div style={{ height: "180px", background: "#ffe7ca", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    {b.image ? <img src={b.image} alt={b.nom} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: "64px" }}>🍾</span>}
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "15px", color: "#731702", marginBottom: "6px" }}>{b.nom}</h3>
                    <p style={{ fontSize: "12px", color: "#9a6040", marginBottom: "12px", fontFamily: "'Nunito', sans-serif" }}>{b.appellation}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: "'Rammetto One', cursive", fontSize: "18px", color: "#bf3e0f" }}>{b.prix}€</span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#bf3e0f", fontFamily: "'Nunito', sans-serif" }}>Voir →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <p style={{ fontSize: "16px", color: "#f5c9a8", fontFamily: "'Nunito', sans-serif" }}>La boutique arrive bientôt...</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-grid { grid-template-columns: 1fr auto; }
        .about-grid { grid-template-columns: 1fr 1fr; }
        .cards-grid { grid-template-columns: repeat(4, 1fr); }
        .carousel-track {
          display: flex;
          gap: 16px;
          padding: 32px clamp(20px, 4vw, 48px);
          animation: scroll 24s linear infinite;
          width: max-content;
        }
        .carousel-track:hover { animation-play-state: paused; }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 1024px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-imgs { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}

function SectionArticles({ titre, desc, slug, articles, alt }: {
  titre: string
  desc: string
  slug: string
  articles: any[]
  alt?: boolean
}) {
  return (
    <section style={{ padding: "72px clamp(20px, 4vw, 48px)", background: alt ? "#ffffff" : "#fdf8f2" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap" as const, gap: "12px" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#bf3e0f", textTransform: "uppercase" as const, letterSpacing: "2px", marginBottom: "8px", fontFamily: "'Nunito', sans-serif" }}>✦ {titre}</div>
            <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(24px, 3vw, 32px)", color: "#731702", margin: 0 }}>{titre}</h2>
            <p style={{ fontSize: "14px", color: "#9a6040", marginTop: "6px", fontFamily: "'Nunito', sans-serif" }}>{desc}</p>
          </div>
          <a href={`/${slug}`} style={{ fontSize: "13px", fontWeight: 700, color: "#bf3e0f", textDecoration: "none", fontFamily: "'Nunito', sans-serif" }}>
            Voir tout →
          </a>
        </div>
        {articles.length > 0 ? (
          <div style={{ display: "grid", gap: "20px" }} className="cards-grid">
            {articles.map((article: any) => (
              <a key={article.slug} href={`/${article.categorie}/${article.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "white", borderRadius: "14px", border: "1px solid #f0d4b8", overflow: "hidden", height: "100%" }}>
                  <div style={{ height: "160px", background: "#bf3e0f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px", position: "relative" as const, overflow: "hidden" }}>
                    {article.image_couverture
                      ? <img src={article.image_couverture} alt={article.titre} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" as const, inset: 0 }} />
                      : <span style={{ position: "relative" as const, zIndex: 1 }}>🍷</span>
                    }
                    <span style={{ position: "absolute" as const, top: "10px", left: "10px", zIndex: 2, background: "rgba(255,255,255,0.92)", color: "#bf3e0f", fontSize: "9px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase" as const, fontFamily: "'Nunito', sans-serif" }}>
                      {article.sous_categorie || article.categorie}
                    </span>
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "15px", color: "#731702", lineHeight: 1.3, marginBottom: "8px" }}>
                      {article.titre}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#9a6040", lineHeight: 1.6, marginBottom: "12px", fontFamily: "'Nunito', sans-serif" }}>
                      {article.extrait}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid #f0d4b8" }}>
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
        ) : (
          <div style={{ textAlign: "center", padding: "48px 0", border: "1.5px dashed #f0d4b8", borderRadius: "14px" }}>
            <p style={{ fontSize: "15px", color: "#c4a882", fontFamily: "'Nunito', sans-serif" }}>Articles à venir bientôt...</p>
          </div>
        )}
      </div>
    </section>
  )
}