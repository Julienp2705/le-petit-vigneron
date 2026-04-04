"use client"
import { useState, useEffect } from "react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
    if (typeof window !== "undefined") {
      const script = document.createElement("script")
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WB8V2TRJ');`
      document.head.appendChild(script)
    }
  }

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 9998, backdropFilter: "blur(2px)" }} />
      <div style={{ position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 9999, width: "min(680px, calc(100vw - 32px))", background: "white", borderRadius: "20px", boxShadow: "0 20px 60px rgba(115,23,2,0.2)", overflow: "hidden" }}>
        <div style={{ background: "#731702", padding: "16px 28px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "20px" }}>🍷</span>
          <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "16px", color: "#ffffff", margin: 0 }}>Ce site utilise des cookies</h2>
        </div>
        <div style={{ padding: "24px 28px" }}>
          <p style={{ fontSize: "14px", color: "#4a2010", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", marginBottom: "16px" }}>
            Nous utilisons des cookies pour mesurer l'audience de notre site et améliorer votre expérience. Aucun cookie publicitaire n'est utilisé.
          </p>
          <button onClick={() => setShowDetails(!showDetails)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: "#bf3e0f", fontFamily: "'Nunito', sans-serif", padding: 0, marginBottom: showDetails ? "16px" : 0, display: "flex", alignItems: "center", gap: "6px" }}>
            {showDetails ? "Masquer les détails" : "En savoir plus"}
          </button>
          {showDetails && (
            <div style={{ background: "#fdf8f2", borderRadius: "10px", padding: "16px", marginBottom: "16px", border: "1px solid #f0d4b8" }}>
              <p style={{ fontSize: "13px", fontWeight: 800, color: "#731702", fontFamily: "'Nunito', sans-serif", marginBottom: "8px" }}>Cookies strictement nécessaires (toujours actifs)</p>
              <p style={{ fontSize: "13px", color: "#9a6040", lineHeight: 1.6, fontFamily: "'Nunito', sans-serif", marginBottom: "12px" }}>Nécessaires au bon fonctionnement du site.</p>
              <p style={{ fontSize: "13px", fontWeight: 800, color: "#731702", fontFamily: "'Nunito', sans-serif", marginBottom: "8px" }}>Cookies analytiques (optionnels)</p>
              <p style={{ fontSize: "13px", color: "#9a6040", lineHeight: 1.6, fontFamily: "'Nunito', sans-serif", margin: 0 }}>Google Analytics via GTM — mesure d'audience anonymisée.</p>
            </div>
          )}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const }}>
            <button onClick={accept} style={{ flex: 1, minWidth: "140px", background: "#731702", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "12px 20px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
              Tout accepter
            </button>
            <button onClick={refuse} style={{ flex: 1, minWidth: "140px", background: "white", color: "#731702", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "12px 20px", borderRadius: "8px", border: "1.5px solid #f0d4b8", cursor: "pointer" }}>
              Tout refuser
            </button>
          </div>
          <p style={{ fontSize: "11px", color: "#c4a882", fontFamily: "'Nunito', sans-serif", marginTop: "14px", textAlign: "center" as const }}>
            Votre choix est mémorisé. Consultez notre <a href="/politique-confidentialite" style={{ color: "#bf3e0f", textDecoration: "none", fontWeight: 700 }}>politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </>
  )
}
