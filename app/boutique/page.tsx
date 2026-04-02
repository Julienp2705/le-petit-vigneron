import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Boutique() {
  return (
    <main style={{ background: "#fdf8f2", minHeight: "100vh" }}>
      <Header />
      <section style={{ background: "#731702", padding: "clamp(56px, 8vw, 96px) clamp(20px, 4vw, 48px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(32px, 5vw, 56px)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px" }}>
            Mes sélections
          </h1>
          <p style={{ fontSize: "17px", color: "#f5c9a8", lineHeight: 1.8, fontFamily: "'Nunito', sans-serif" }}>
            Des bouteilles soigneusement choisies pour vous.
          </p>
        </div>
      </section>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px clamp(20px, 4vw, 48px)", textAlign: "center" as const }}>
        <p style={{ fontFamily: "'Rammetto One', cursive", fontSize: "24px", color: "#f0d4b8", marginBottom: "16px" }}>
          La boutique arrive bientôt...
        </p>
        <a href="/" style={{ fontSize: "14px", fontWeight: 700, color: "#bf3e0f", textDecoration: "none", fontFamily: "'Nunito', sans-serif" }}>
          ← Retour à l'accueil
        </a>
      </div>
      <Footer />
    </main>
  )
}