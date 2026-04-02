import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function MentionsLegales() {
  return (
    <main style={{ background: "#fdf8f2", minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <section style={{ background: "#731702", position: "relative", overflow: "hidden", padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 48px)" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", background: "#bf3e0f", borderRadius: "50%", opacity: 0.2 }}></div>
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "16px", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Nunito', sans-serif" }}>
            <a href="/" style={{ color: "#f5c9a8", textDecoration: "none" }}>Accueil</a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Mentions légales</span>
          </div>
          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(28px, 4vw, 44px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
            Mentions légales
          </h1>
        </div>
      </section>

      {/* CONTENU */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px clamp(20px, 4vw, 48px)" }}>

        <Section titre="Éditeur du site">
          <p>Le site <strong>le-petit-vigneron.fr</strong> est édité par :</p>
          <p>
            <strong>Julien Poulain</strong><br />
            Personne physique — Particulier<br />
            Email : <a href="mailto:contact@le-petit-vigneron.fr" style={{ color: "#bf3e0f" }}>contact@le-petit-vigneron.fr</a>
          </p>
        </Section>

        <Section titre="Directeur de la publication">
          <p>Julien Poulain</p>
        </Section>

        <Section titre="Hébergement">
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#bf3e0f" }}>vercel.com</a>
          </p>
        </Section>

        <Section titre="Propriété intellectuelle">
          <p>
            L'ensemble du contenu de ce site (textes, images, illustrations, photographies, graphismes, logos) est la propriété exclusive de Julien Poulain ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Julien Poulain.
          </p>
        </Section>

        <Section titre="Liens hypertextes">
          <p>
            Le site le-petit-vigneron.fr contient des liens vers des sites tiers, notamment vers la plateforme Winalist dans le cadre d'un partenariat affilié. Ces liens sont fournis à titre informatif. Julien Poulain ne peut être tenu responsable du contenu de ces sites externes.
          </p>
          <p>
            Certains liens présents sur ce site sont des liens affiliés. Cela signifie que si vous effectuez un achat via ces liens, le site peut percevoir une commission, sans surcoût pour vous.
          </p>
        </Section>

        <Section titre="Responsabilité">
          <p>
            Les informations contenues sur ce site sont données à titre indicatif. Julien Poulain s'efforce de maintenir le site à jour et de fournir des informations exactes, mais ne saurait garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
          </p>
          <p>
            En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
          </p>
        </Section>

        <Section titre="Droit applicable et juridiction compétente">
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
          </p>
        </Section>

        <Section titre="Contact">
          <p>
            Pour toute question relative aux mentions légales, vous pouvez nous contacter à l'adresse suivante :<br />
            <a href="mailto:contact@le-petit-vigneron.fr" style={{ color: "#bf3e0f", fontWeight: 700 }}>contact@le-petit-vigneron.fr</a>
          </p>
        </Section>

        <p style={{ fontSize: "13px", color: "#c4a882", fontFamily: "'Nunito', sans-serif", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #f0d4b8" }}>
          Dernière mise à jour : avril 2026
        </p>

      </div>

      <Footer />
    </main>
  )
}

function Section({ titre, children }: { titre: string, children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "20px", color: "#731702", marginBottom: "16px", paddingBottom: "10px", borderBottom: "2px solid #f0d4b8" }}>
        {titre}
      </h2>
      <div style={{ fontSize: "16px", color: "#4a2010", lineHeight: 1.9, fontFamily: "'Nunito', sans-serif" }}>
        {children}
      </div>
    </div>
  )
}