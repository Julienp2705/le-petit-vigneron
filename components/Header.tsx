"use client"
import { useState } from "react"

const navigation = [
  {
    label: "Accords mets-vins",
    slug: "accord-mets-vins",
    subcategories: [
      { label: "Cuisine française", slug: "cuisine-francaise" },
      { label: "Cuisine espagnole", slug: "cuisine-espagnole" },
      { label: "Cuisine du monde", slug: "cuisine-du-monde" },
      { label: "Que manger avec...", slug: "que-manger-avec" },
    ]
  },
  {
    label: "Cépages",
    slug: "cepages",
    subcategories: [
      { label: "Riesling", slug: "riesling" },
      { label: "Sylvaner", slug: "sylvaner" },
      { label: "Garnacha", slug: "garnacha" },
      { label: "Sauvignon blanc", slug: "sauvignon-blanc" },
    ]
  },
  {
    label: "Appellations",
    slug: "appellations",
    subcategories: [
      { label: "Haut-Médoc", slug: "haut-medoc" },
      { label: "Pouilly-Fumé", slug: "pouilly-fume" },
      { label: "Sancerre", slug: "sancerre" },
    ]
  },
  {
    label: "Oenotourisme",
    slug: "oenotourisme",
    subcategories: [
      { label: "Bordeaux", slug: "bordeaux" },
      { label: "Bourgogne", slug: "bourgogne" },
      { label: "Champagne", slug: "champagne" },
    ]
  },
]

const ChevronDown = ({ rotated }: { rotated: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: rotated ? "rotate(180deg)" : "none", flexShrink: 0 }}>
    <path d="M2 4L6 8L10 4" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M4 2L8 6L4 10" stroke="#bf3e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const getSubcategoryHref = (categorieSlug: string, subSlug: string) => {
  if (categorieSlug === "oenotourisme") {
    return `/oenotourisme/${subSlug}`
  }
  return `/${categorieSlug}/categorie/${subSlug}`
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  const toggleMenu = (slug: string) => {
    setActiveMenu(activeMenu === slug ? null : slug)
  }

  return (
    <header style={{ background: "white", borderBottom: "1px solid #f0d4b8", position: "sticky", top: 0, zIndex: 100 }}>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* LOGO */}
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <img
            src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Logo%20le%20petit%20vigneron.webp"
            alt="Le Petit Vigneron"
            style={{ height: "54px", width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* NAV DESKTOP */}
        <nav style={{ display: "flex", gap: "2px", alignItems: "center" }} className="desktop-nav">
          {navigation.map((item) => (
            <div key={item.slug} style={{ position: "relative" as const }}>
              <button
                onClick={() => toggleMenu(item.slug)}
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  fontSize: "13px", fontWeight: 700,
                  color: activeMenu === item.slug ? "#bf3e0f" : "#7a3a20",
                  background: activeMenu === item.slug ? "#fdf8f2" : "transparent",
                  border: "none", cursor: "pointer", padding: "8px 12px", borderRadius: "8px",
                  transition: "all 0.15s", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap" as const,
                }}
              >
                {item.label}
                <ChevronDown rotated={activeMenu === item.slug} />
              </button>

              {activeMenu === item.slug && (
                <>
                  <div style={{ position: "fixed" as const, inset: 0, zIndex: 150 }} onClick={() => setActiveMenu(null)} />
                  <div style={{
                    position: "absolute" as const, top: "calc(100% + 4px)", left: 0, zIndex: 200,
                    background: "white", border: "1px solid #f0d4b8", borderRadius: "14px",
                    boxShadow: "0 12px 40px rgba(115,23,2,0.12)", padding: "6px", minWidth: "210px",
                  }}>
                    <a
                      href={`/${item.slug}`}
                      onClick={() => setActiveMenu(null)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "10px 14px", marginBottom: "4px", borderRadius: "8px", background: "#fdf8f2",
                        fontSize: "12px", fontWeight: 800, color: "#bf3e0f", textDecoration: "none",
                        textTransform: "uppercase" as const, letterSpacing: "0.8px", fontFamily: "'Nunito', sans-serif",
                      }}
                    >
                      Voir tous les articles
                      <ChevronRight />
                    </a>
                    <div style={{ height: "1px", background: "#f0d4b8", margin: "4px 6px 8px" }}></div>
                    {item.subcategories.map((sub) => (
                      <a
                        key={sub.slug}
                        href={getSubcategoryHref(item.slug, sub.slug)}
                        onClick={() => setActiveMenu(null)}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "9px 14px", fontSize: "13px", fontWeight: 700, color: "#7a3a20",
                          textDecoration: "none", borderRadius: "8px", transition: "all 0.15s", fontFamily: "'Nunito', sans-serif",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#fdf8f2"
                          ;(e.currentTarget as HTMLElement).style.color = "#bf3e0f"
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent"
                          ;(e.currentTarget as HTMLElement).style.color = "#7a3a20"
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f0d4b8", flexShrink: 0, display: "inline-block" }}></span>
                          {sub.label}
                        </span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4, flexShrink: 0 }}>
                          <path d="M3 1L7 5L3 9" stroke="#bf3e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

          <a href="/boutique" style={{ fontSize: "13px", fontWeight: 700, color: "#7a3a20", textDecoration: "none", padding: "8px 12px", borderRadius: "8px", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap" as const }}>
            Boutique
          </a>
        </nav>

        {/* BURGER MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="burger-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", flexDirection: "column" as const, gap: "5px" }}
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "#731702", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", background: "#731702", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", background: "#731702", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div style={{ borderTop: "1px solid #f0d4b8", background: "white", maxHeight: "80vh", overflowY: "auto" as const }}>
          <div style={{ padding: "12px 24px 24px", display: "flex", flexDirection: "column" as const, gap: "2px" }}>
            {navigation.map((item) => (
              <div key={item.slug}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <a href={`/${item.slug}`} style={{ fontSize: "15px", fontWeight: 800, color: "#731702", textDecoration: "none", padding: "12px 0", flex: 1, fontFamily: "'Nunito', sans-serif" }}>
                    {item.label}
                  </a>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.slug ? null : item.slug)}
                    style={{ background: mobileExpanded === item.slug ? "#fdf8f2" : "none", border: "1px solid #f0d4b8", borderRadius: "6px", cursor: "pointer", padding: "6px 8px", color: "#bf3e0f", display: "flex", alignItems: "center" }}
                  >
                    <ChevronDown rotated={mobileExpanded === item.slug} />
                  </button>
                </div>
                {mobileExpanded === item.slug && (
                  <div style={{ marginBottom: "8px", background: "#fdf8f2", borderRadius: "10px", padding: "6px" }}>
                    {item.subcategories.map((sub) => (
                      <a
                        key={sub.slug}
                        href={getSubcategoryHref(item.slug, sub.slug)}
                        style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 700, color: "#9a6040", textDecoration: "none", padding: "9px 12px", borderRadius: "8px", fontFamily: "'Nunito', sans-serif" }}
                      >
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#bf3e0f", flexShrink: 0, display: "inline-block" }}></span>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
                <div style={{ height: "1px", background: "#f0d4b8" }}></div>
              </div>
            ))}
            <a href="/boutique" style={{ fontSize: "15px", fontWeight: 800, color: "#731702", textDecoration: "none", padding: "12px 0", fontFamily: "'Nunito', sans-serif" }}>
              Boutique
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .burger-btn { display: none !important; }
        }
      `}</style>
    </header>
  )
}