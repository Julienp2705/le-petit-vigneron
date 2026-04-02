export default function Footer() {
  return (
    <>
      <footer style={{ background: "#731702", padding: "56px 24px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* GRILLE PRINCIPALE */}
          <div style={{ display: "grid", gap: "40px", marginBottom: "48px" }} className="footer-grid">

            {/* COL 1 — LOGO + DESC */}
            <div>
              <a href="/" style={{ display: "inline-block", marginBottom: "20px" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Logo%20le%20petit%20vigneron.webp"
                  alt="Le Petit Vigneron"
                  style={{ height: "48px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.9 }}
                />
              </a>
              <p style={{ fontSize: "13px", color: "#f5c9a8", lineHeight: 1.8, maxWidth: "280px", fontFamily: "'Nunito', sans-serif", marginBottom: "20px" }}>
                Un blog passionné sur le vin, accessible à tous. Des articles concrets pour mieux choisir, déguster et apprécier le vin au quotidien.
              </p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: "36px", height: "36px", background: "#bf3e0f", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </a>
            </div>

            {/* COL 2 — BLOG */}
            <div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#f28322", textTransform: "uppercase" as const, letterSpacing: "1.5px", marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Blog
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "12px" }}>
                {[
                  { label: "Accords mets-vins", slug: "accord-mets-vins" },
                  { label: "Cépages", slug: "cepages" },
                  { label: "Appellations", slug: "appellations" },
                  { label: "Oenotourisme", slug: "oenotourisme" },
                  { label: "Boutique", slug: "boutique" },
                ].map((item) => (
                  <li key={item.slug} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#f28322", flexShrink: 0, display: "inline-block" }}></span>
                    <a href={`/${item.slug}`} style={{ fontSize: "13px", color: "#f5c9a8", textDecoration: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 — OENOTOURISME */}
            <div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#f28322", textTransform: "uppercase" as const, letterSpacing: "1.5px", marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Oenotourisme
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "12px" }}>
                {[
                  { label: "Bordeaux", href: "/oenotourisme/bordeaux" },
                  { label: "Bourgogne", href: "/oenotourisme/bourgogne" },
                  { label: "Champagne", href: "/oenotourisme/champagne" },
                ].map((item) => (
                  <li key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#f28322", flexShrink: 0, display: "inline-block" }}></span>
                    <a href={item.href} style={{ fontSize: "13px", color: "#f5c9a8", textDecoration: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 4 — INFORMATIONS */}
            <div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#f28322", textTransform: "uppercase" as const, letterSpacing: "1.5px", marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Informations
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "12px" }}>
                {[
                  { label: "Mentions légales", href: "/mentions-legales" },
                  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
                ].map((item) => (
                  <li key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#f28322", flexShrink: 0, display: "inline-block" }}></span>
                    <a href={item.href} style={{ fontSize: "13px", color: "#f5c9a8", textDecoration: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* BAS DE PAGE */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontFamily: "'Nunito', sans-serif" }}>
              © 2026 Le Petit Vigneron — Fait avec passion 🍷
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontFamily: "'Nunito', sans-serif" }}>
              Tous droits réservés
            </p>
          </div>

        </div>
      </footer>

      <style>{`
        .footer-grid {
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}