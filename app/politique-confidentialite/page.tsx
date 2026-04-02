import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function PolitiqueConfidentialite() {
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
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Politique de confidentialité</span>
          </div>
          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(28px, 4vw, 44px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
            Politique de confidentialité
          </h1>
        </div>
      </section>

      {/* CONTENU */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px clamp(20px, 4vw, 48px)" }}>

        <div style={{ background: "#ffe7ca", borderLeft: "4px solid #bf3e0f", borderRadius: "0 12px 12px 0", padding: "16px 24px", marginBottom: "48px" }}>
          <p style={{ fontSize: "15px", color: "#731702", lineHeight: 1.7, fontWeight: 600, margin: 0, fontFamily: "'Nunito', sans-serif" }}>
            Le site le-petit-vigneron.fr accorde une importance particulière à la protection de vos données personnelles et au respect de votre vie privée. Cette politique explique quelles données nous collectons, pourquoi et comment nous les utilisons.
          </p>
        </div>

        <Section titre="Responsable du traitement">
          <p>
            Le responsable du traitement des données personnelles collectées sur ce site est :<br />
            <strong>Julien Poulain</strong><br />
            Email : <a href="mailto:contact@le-petit-vigneron.fr" style={{ color: "#bf3e0f" }}>contact@le-petit-vigneron.fr</a>
          </p>
        </Section>

        <Section titre="Données collectées">
          <p>Nous sommes susceptibles de collecter les données suivantes :</p>
          <ul>
            <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, durée des visites — collectées via des outils d'analyse (Google Analytics ou équivalent).</li>
            <li><strong>Données de contact</strong> : adresse email si vous nous contactez directement ou si vous vous inscrivez à notre newsletter.</li>
            <li><strong>Cookies</strong> : fichiers déposés sur votre terminal pour améliorer votre expérience de navigation.</li>
          </ul>
          <p>
            Nous ne collectons aucune donnée sensible (santé, opinions politiques, etc.) et ne vendons jamais vos données à des tiers.
          </p>
        </Section>

        <Section titre="Finalités du traitement">
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Analyser l'audience et améliorer le contenu du site</li>
            <li>Envoyer notre newsletter si vous y êtes inscrit</li>
            <li>Répondre à vos demandes de contact</li>
            <li>Assurer le bon fonctionnement technique du site</li>
          </ul>
        </Section>

        <Section titre="Cookies">
          <p>
            Ce site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte déposé sur votre terminal lors de votre visite.
          </p>
          <p>Les cookies utilisés sur ce site sont :</p>
          <ul>
            <li><strong>Cookies fonctionnels</strong> : nécessaires au bon fonctionnement du site.</li>
            <li><strong>Cookies analytiques</strong> : pour mesurer l'audience et comprendre comment les visiteurs utilisent le site (Google Analytics).</li>
          </ul>
          <p>
            Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cette désactivation peut toutefois affecter votre expérience de navigation.
          </p>
        </Section>

        <Section titre="Liens affiliés">
          <p>
            Ce site contient des liens affiliés, notamment vers la plateforme <strong>Winalist</strong>. Lorsque vous cliquez sur ces liens et effectuez une réservation, le site peut percevoir une commission sans que cela n'entraîne de surcoût pour vous.
          </p>
          <p>
            Ces partenaires peuvent déposer leurs propres cookies sur votre terminal. Nous vous invitons à consulter leurs politiques de confidentialité respectives.
          </p>
        </Section>

        <Section titre="Base légale du traitement">
          <p>
            Le traitement de vos données repose sur les bases légales suivantes :
          </p>
          <ul>
            <li><strong>Votre consentement</strong> : pour l'envoi de la newsletter et les cookies non essentiels.</li>
            <li><strong>Notre intérêt légitime</strong> : pour l'analyse d'audience et l'amélioration du site.</li>
            <li><strong>L'exécution d'un contrat</strong> : pour répondre à vos demandes de contact.</li>
          </ul>
        </Section>

        <Section titre="Durée de conservation">
          <p>
            Vos données sont conservées pour la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées :
          </p>
          <ul>
            <li>Données de navigation : 13 mois maximum</li>
            <li>Adresse email newsletter : jusqu'à désinscription</li>
            <li>Données de contact : 3 ans à compter du dernier contact</li>
          </ul>
        </Section>

        <Section titre="Vos droits">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d'opposition</strong> : vous opposer à certains traitements</li>
            <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format lisible</li>
            <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à :<br />
            <a href="mailto:contact@le-petit-vigneron.fr" style={{ color: "#bf3e0f", fontWeight: 700 }}>contact@le-petit-vigneron.fr</a>
          </p>
          <p>
            Vous disposez également du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#bf3e0f" }}>www.cnil.fr</a>
          </p>
        </Section>

        <Section titre="Sécurité">
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction. Le site est hébergé sur Vercel, qui garantit un niveau de sécurité élevé.
          </p>
        </Section>

        <Section titre="Modifications de cette politique">
          <p>
            Cette politique de confidentialité peut être mise à jour à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à la consulter régulièrement.
          </p>
        </Section>

        <Section titre="Contact">
          <p>
            Pour toute question relative à cette politique de confidentialité ou à la protection de vos données :<br />
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