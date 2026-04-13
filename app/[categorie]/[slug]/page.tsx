import { Metadata } from "next"
import ReactMarkdown from "react-markdown"
import { getArticle } from "../../../lib/articles"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

function extractHeadings(contenu: string) {
  return contenu
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "").trim()
      const anchor = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
      return { text, anchor }
    })
}

function parseWinalisteBlocks(contenu: string): string {
  return contenu.replace(/::winaliste\n([\s\S]*?)::/g, (match, inner) => {
    const lines = inner.trim().split("\n")
    const props: Record<string, string> = {}
    lines.forEach((line: string) => {
      const idx = line.indexOf("=")
      if (idx !== -1) {
        props[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
      }
    })
    const encoded = encodeURIComponent(JSON.stringify(props))
    return `<winaliste data="${encoded}"></winaliste>`
  })
}

function WinalisteCard({ lien, image, titre }: { lien: string, image?: string, titre: string }) {
  return (
    <div style={{ background: "white", borderRadius: "16px", border: "1px solid #f0d4b8", overflow: "hidden", margin: "32px 0", boxShadow: "0 4px 20px rgba(115,23,2,0.08)" }}>
      {image && (
        <div style={{ height: "220px", overflow: "hidden", position: "relative" as const }}>
          <img src={image} alt={titre} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to top, rgba(60,5,0,0.5) 0%, transparent 60%)" }} />
          <span style={{ position: "absolute" as const, top: "14px", left: "14px", background: "#f28322", color: "white", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
            Expérience Winaliste
          </span>
        </div>
      )}
      <div style={{ padding: "20px 24px" }}>
        <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "18px", color: "#731702", marginBottom: "16px", lineHeight: 1.3 }}>{titre}</h3>
        <a href={lien} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#bf3e0f", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "12px 22px", borderRadius: "8px", textDecoration: "none" }}>
          Réserver cette expérience
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

function WinalisteBanner() {
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #f0d4b8", margin: "40px 0", position: "relative" as const }}>
      <div style={{ position: "absolute" as const, inset: 0 }}>
        <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Oenotourisme%20Winalist.webp" alt="Expériences oenotouristiques" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to right, rgba(60,5,0,0.88) 0%, rgba(60,5,0,0.6) 60%, rgba(60,5,0,0.3) 100%)" }} />
      </div>
      <div style={{ position: "relative" as const, zIndex: 1, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" as const }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" as const }}>
          <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Logo%20le%20petit%20ballon.webp" alt="Winalist" style={{ height: "32px", width: "auto", objectFit: "contain", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: "16px", fontWeight: 800, color: "#ffffff", fontFamily: "'Rammetto One', cursive", margin: "0 0 4px", lineHeight: 1.3 }}>La bouteille parfaite livrée chez vous chaque mois.</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontFamily: "'Nunito', sans-serif", margin: 0, lineHeight: 1.5 }}>Sélection par des experts, découverte garantie — dès 29€/mois.</p>
          </div>
        </div>
        <a href="https://c3po.link/QqvpKyCnTm" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#ffffff", color: "#731702", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 800, padding: "11px 20px", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
          Découvrir Le Petit Ballon
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10M7 3L10 6L7 9" stroke="#731702" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

const md: any = {
  h2: ({ children }: any) => {
    const text = String(children)
    const anchor = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
    return <h2 id={anchor} style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", margin: "48px 0 16px", lineHeight: 1.2, scrollMarginTop: "90px" }}>{children}</h2>
  },
  h3: ({ children }: any) => <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "22px", color: "#731702", margin: "36px 0 12px", lineHeight: 1.2 }}>{children}</h3>,
  h4: ({ children }: any) => <h4 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 800, color: "#bf3e0f", margin: "28px 0 10px" }}>{children}</h4>,
  p: ({ children }: any) => <p style={{ marginBottom: "24px", fontSize: "17px", color: "#4a2010", lineHeight: 1.9, fontFamily: "'Nunito', sans-serif" }}>{children}</p>,
  strong: ({ children }: any) => <strong style={{ fontWeight: 800, color: "#731702" }}>{children}</strong>,
  em: ({ children }: any) => <em style={{ fontStyle: "italic", color: "#bf3e0f" }}>{children}</em>,
  ul: ({ children }: any) => <ul style={{ margin: "0 0 24px 24px", fontSize: "17px", color: "#4a2010", lineHeight: 1.9, fontFamily: "'Nunito', sans-serif" }}>{children}</ul>,
  ol: ({ children }: any) => <ol style={{ margin: "0 0 24px 24px", fontSize: "17px", color: "#4a2010", lineHeight: 1.9, fontFamily: "'Nunito', sans-serif" }}>{children}</ol>,
  li: ({ children }: any) => <li style={{ marginBottom: "8px" }}>{children}</li>,
  blockquote: ({ children }: any) => <blockquote style={{ borderLeft: "4px solid #bf3e0f", background: "#ffe7ca", borderRadius: "0 12px 12px 0", padding: "16px 24px", margin: "32px 0", fontStyle: "italic", color: "#731702" }}>{children}</blockquote>,
  img: ({ src, alt }: any) => <img src={src} alt={alt} style={{ width: "100%", borderRadius: "12px", margin: "32px 0", display: "block" }} />,
  hr: () => <hr style={{ border: "none", borderTop: "1px solid #f0d4b8", margin: "40px 0" }} />,
  a: ({ href, children }: any) => {
    const isAffiliate = href && (href.includes("c3po.link") || href.includes("winalist"))
    return (
      <a
        href={href}
        style={{ color: "#bf3e0f", fontWeight: 700 }}
        {...(isAffiliate ? { rel: "noopener noreferrer nofollow sponsored", target: "_blank" } : {})}
      >
        {children}
      </a>
    )
  },
  code: ({ children }: any) => <code style={{ background: "#ffe7ca", color: "#731702", padding: "2px 8px", borderRadius: "4px", fontSize: "14px" }}>{children}</code>,
  winaliste: ({ node }: any) => {
    try {
      const props = JSON.parse(decodeURIComponent(node?.properties?.data || ""))
      return <WinalisteCard lien={props.lien || "#"} image={props.image} titre={props.titre || "Expérience Winaliste"} />
    } catch { return null }
  },
}

const sousCategorieLabels: Record<string, string> = {
  "cuisine-francaise": "Cuisine française",
  "cuisine-espagnole": "Cuisine espagnole",
  "cuisine-du-monde": "Cuisine du monde",
  "que-manger-avec": "Que manger avec...",
  "riesling": "Riesling",
  "sylvaner": "Sylvaner",
  "garnacha": "Garnacha",
  "sauvignon-blanc": "Sauvignon blanc",
  "haut-medoc": "Haut-Médoc",
  "pouilly-fume": "Pouilly-Fumé",
  "sancerre": "Sancerre",
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string, slug: string }> }): Promise<Metadata> {
  const { categorie, slug } = await params
  const article = await getArticle(slug)
  if (!article) return { title: "Article introuvable" }
  const titre = article.meta_titre || article.titre
  const description = article.meta_description || article.extrait
  const image = article.image_couverture || "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Logo%20le%20petit%20vigneron.webp"
  const url = `https://le-petit-vigneron.fr/${categorie}/${slug}`
  return {
    title: titre, description,
    alternates: { canonical: url },
    openGraph: { title: titre, description, url, type: "article", publishedTime: article.date, authors: [article.auteur || "Julien"], images: [{ url: image, width: 1200, height: 630, alt: article.titre }] },
    twitter: { card: "summary_large_image", title: titre, description, images: [image] },
  }
}

export default async function Article({ params }: { params: Promise<{ categorie: string, slug: string }> }) {
  const { categorie, slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return (
      <main style={{ background: "#fdf8f2", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "24px" }}>
          <p style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "16px" }}>Article introuvable</p>
          <a href="/" style={{ fontSize: "14px", fontWeight: 700, color: "#bf3e0f", textDecoration: "none" }}>← Retour à l'accueil</a>
        </div>
      </main>
    )
  }

  const contenuParse = parseWinalisteBlocks(article.contenu || "")
  const headings = extractHeadings(article.contenu || "")
  const categorieLabel = categorie.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())
  const sousCategorieLabel = article.sous_categorie ? (sousCategorieLabels[article.sous_categorie] || article.sous_categorie.replace(/-/g, " ")) : null

  return (
    <main style={{ background: "#fdf8f2", minHeight: "100vh" }}>
      <Header />

      <section style={{ background: "#731702", position: "relative", overflow: "hidden" }}>
        {article.image_couverture && (
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <img src={article.image_couverture} alt={article.titre} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
          </div>
        )}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "48px clamp(20px, 4vw, 48px) 56px" }}>
          <div style={{ marginBottom: "28px", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" as const, fontFamily: "'Nunito', sans-serif" }}>
            <a href="/" style={{ color: "#f5c9a8", textDecoration: "none" }}>Accueil</a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            {categorie === "oenotourisme" ? (
              <>
                <a href="/oenotourisme" style={{ color: "#f5c9a8", textDecoration: "none" }}>Oenotourisme</a>
                {article.region && (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
                    <a href={`/oenotourisme/${article.region}`} style={{ color: "#f5c9a8", textDecoration: "none", textTransform: "capitalize" as const }}>{article.region.replace(/-/g, " ")}</a>
                  </>
                )}
              </>
            ) : (
              <>
                <a href={`/${categorie}`} style={{ color: "#f5c9a8", textDecoration: "none" }}>{categorieLabel}</a>
                {article.sous_categorie && sousCategorieLabel && (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
                    <a href={`/${categorie}/categorie/${article.sous_categorie}`} style={{ color: "#f5c9a8", textDecoration: "none" }}>{sousCategorieLabel}</a>
                  </>
                )}
              </>
            )}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>{article.titre}</span>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ display: "inline-block", background: "#f28322", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
              {sousCategorieLabel || categorieLabel}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(28px, 5vw, 52px)", color: "#ffffff", lineHeight: 1.1, marginBottom: "28px", maxWidth: "800px" }}>
            {article.titre}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", fontFamily: "'Nunito', sans-serif" }}>{article.auteur || "Julien"}</div>
              <div style={{ fontSize: "12px", color: "#f5c9a8", fontFamily: "'Nunito', sans-serif" }}>
                {article.date}{article.temps_lecture && ` · ${article.temps_lecture} min de lecture`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>
        <div style={{ display: "grid", gap: "56px", alignItems: "start" }} className="article-layout">
          <div>
            {article.image_couverture && (
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "40px 0 0", border: "1px solid #f0d4b8" }}>
                <img src={article.image_couverture} alt={article.titre} style={{ width: "100%", height: "clamp(200px, 40vw, 400px)", objectFit: "cover", display: "block" }} />
              </div>
            )}

            <div style={{ background: "#ffe7ca", borderLeft: "4px solid #bf3e0f", borderRadius: "0 12px 12px 0", padding: "16px 20px", margin: "40px 0" }}>
              <p style={{ fontSize: "16px", color: "#731702", lineHeight: 1.7, fontWeight: 600, margin: 0, fontFamily: "'Nunito', sans-serif" }}>{article.extrait}</p>
            </div>

            <WinalisteBanner />

            {headings.length > 0 && (
              <div className="sommaire-mobile" style={{ background: "white", border: "1px solid #f0d4b8", borderRadius: "14px", overflow: "hidden", marginBottom: "32px" }}>
                <div style={{ background: "#731702", padding: "12px 20px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase" as const, letterSpacing: "2px", fontFamily: "'Nunito', sans-serif" }}>Sommaire</span>
                </div>
                <nav style={{ padding: "8px 0" }}>
                  {headings.map((h, i) => (
                    <a key={i} href={`#${h.anchor}`} style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "13px", fontWeight: 700, color: "#7a3a20", textDecoration: "none", padding: "10px 20px", borderBottom: i < headings.length - 1 ? "1px solid #f0d4b8" : "none", lineHeight: 1.4, fontFamily: "'Nunito', sans-serif" }}>
                      <span style={{ color: "#f0d4b8", fontFamily: "'Rammetto One', cursive", fontSize: "12px", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <ReactMarkdown
              components={md}
              allowedElements={["h2","h3","h4","p","strong","em","ul","ol","li","blockquote","img","hr","a","code","winaliste"]}
              unwrapDisallowed={false}
            >
              {contenuParse}
            </ReactMarkdown>

            <div style={{ margin: "56px 0 0", background: "white", border: "1px solid #f0d4b8", borderRadius: "20px", overflow: "hidden" }}>
              <div style={{ background: "#731702", padding: "14px 24px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase" as const, letterSpacing: "2px", fontFamily: "'Nunito', sans-serif" }}>À propos de l'auteur</span>
              </div>
              <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px", alignItems: "start" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", overflow: "hidden", border: "3px solid #f0d4b8", flexShrink: 0 }}>
                  <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexWrap: "wrap" as const }}>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "18px", color: "#731702", margin: 0 }}>Julien</h3>
                    <span style={{ background: "#ffe7ca", color: "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>Le Petit Vigneron</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#9a6040", lineHeight: 1.75, marginBottom: "14px", fontFamily: "'Nunito', sans-serif" }}>
                    J'aime le vin, mais surtout les moments qu'il crée. Les verres qu'on partage, les rires qui vont avec, et les petites histoires qu'on se raconte autour d'une bonne bouteille. Avec Le Petit Vigneron, j'ai juste envie de t'ouvrir la porte de mon univers : te faire découvrir de belles pépites, simplement, sans chichi… comme si on était à la maison.
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                    {["5 ans de passion", "30+ articles publiés"].map((label) => (
                      <div key={label} style={{ fontSize: "11px", fontWeight: 700, color: "#731702", background: "#fdf8f2", padding: "5px 10px", borderRadius: "20px", border: "1px solid #f0d4b8", fontFamily: "'Nunito', sans-serif" }}>{label}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ margin: "32px 0 56px", display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
              {article.sous_categorie && categorie !== "oenotourisme" && (
                <a href={`/${categorie}/categorie/${article.sous_categorie}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 700, color: "#bf3e0f", textDecoration: "none", padding: "12px 20px", border: "1.5px solid #f0d4b8", borderRadius: "8px", background: "white", fontFamily: "'Nunito', sans-serif" }}>
                  ← {sousCategorieLabel}
                </a>
              )}
              {categorie === "oenotourisme" && article.region ? (
                <a href={`/oenotourisme/${article.region}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 700, color: "#bf3e0f", textDecoration: "none", padding: "12px 20px", border: "1.5px solid #f0d4b8", borderRadius: "8px", background: "white", fontFamily: "'Nunito', sans-serif" }}>
                  ← Oenotourisme {article.region.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
                </a>
              ) : (
                <a href={`/${categorie}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 700, color: "#9a6040", textDecoration: "none", padding: "12px 20px", border: "1.5px solid #f0d4b8", borderRadius: "8px", background: "white", fontFamily: "'Nunito', sans-serif" }}>
                  ← Tous les articles {categorieLabel}
                </a>
              )}
            </div>
          </div>

          {headings.length > 0 && (
            <div className="sommaire-desktop" style={{ position: "sticky", top: "88px", marginTop: "40px" }}>
              <div style={{ background: "white", border: "1px solid #f0d4b8", borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ background: "#731702", padding: "14px 20px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase" as const, letterSpacing: "2px", fontFamily: "'Nunito', sans-serif" }}>Sommaire</span>
                </div>
                <nav style={{ padding: "8px 0" }}>
                  {headings.map((h, i) => (
                    <a key={i} href={`#${h.anchor}`} style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "13px", fontWeight: 700, color: "#7a3a20", textDecoration: "none", padding: "10px 20px", borderBottom: i < headings.length - 1 ? "1px solid #f0d4b8" : "none", lineHeight: 1.4, fontFamily: "'Nunito', sans-serif" }}>
                      <span style={{ color: "#f0d4b8", fontFamily: "'Rammetto One', cursive", fontSize: "12px", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style>{`
        .article-layout { grid-template-columns: 1fr 280px; }
        .sommaire-mobile { display: none; }
        .sommaire-desktop { display: block; }
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .sommaire-mobile { display: block !important; }
          .sommaire-desktop { display: none !important; }
        }
      `}</style>
    </main>
  )
}