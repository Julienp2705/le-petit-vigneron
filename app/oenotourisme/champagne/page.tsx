import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
export const metadata = {
  title: "Oenotourisme en Champagne : crayères, grandes Maisons et villages vignerons",
  description: "Crayères classées UNESCO, Avenue de Champagne, vignerons indépendants… Tout ce qu'il faut savoir pour vivre les bulles de l'intérieur lors d'un séjour en Champagne.",
  alternates: { canonical: "https://le-petit-vigneron.fr/oenotourisme/champagne" },
  openGraph: {
    title: "Oenotourisme en Champagne : crayères, grandes Maisons et villages vignerons",
    description: "Crayères classées UNESCO, Avenue de Champagne, vignerons indépendants… Tout ce qu'il faut savoir pour vivre les bulles de l'intérieur.",
    url: "https://le-petit-vigneron.fr/oenotourisme/champagne",
    type: "website",
  },
}
export default function OenotourismeChampagne() {

  const stats = [
    { num: "4e", label: "Destination oenotouristique FR" },
    { num: "12M", label: "Oenotouristes par an en France" },
    { num: "2015", label: "Inscription UNESCO" },
    { num: "300", label: "Villages vignerons" },
  ]

  const zones = [
    {
      label: "Montagne de Reims",
      desc: "Au cœur d'un Parc naturel régional, les coteaux de Verzenay et Verzy offrent des panoramas à 360° sur les vignes. Patrie du Pinot Noir. À ne pas manquer : le Phare de Verzenay, insolite vigie au milieu des vignobles.",
      cepages: "Pinot Noir · Vins structurés",
    },
    {
      label: "Vallée de la Marne",
      desc: "De Châlons à Épernay, les vignes de Pinot Meunier s'étendent sur des coteaux généreux. Hautvillers, berceau de Dom Pérignon, et l'Avenue de Champagne d'Épernay sont les étapes emblématiques.",
      cepages: "Pinot Meunier · Bulles festives",
    },
    {
      label: "Côte des Blancs",
      desc: "Au sud d'Épernay, cette zone est le territoire exclusif du Chardonnay. Avize, Cramant, Le Mesnil-sur-Oger : des noms légendaires pour des Blancs de Blancs d'une finesse incomparable.",
      cepages: "Chardonnay · Blancs de Blancs",
    },
    {
      label: "Côte des Bar (Aube)",
      desc: "La grande oubliée des itinéraires, pourtant l'une des plus attachantes. Vignerons indépendants passionnés, paysages intimistes, et des champagnes en biodynamie de plus en plus reconnus.",
      cepages: "Pinot Noir · Vignerons artisans",
    },
  ]

  const maisons = [
    { nom: "Moët & Chandon", desc: "Avenue de Champagne, Épernay. 28 km de caves à explorer en petit train souterrain. Incontournable.", badge: "Grande Maison · À partir de 40€" },
    { nom: "Veuve Clicquot", desc: "24 km de crayères classées UNESCO à Reims. Parcours immersif et interactif avec dégustation finale.", badge: "Grande Maison · Histoire & prestige" },
    { nom: "Ruinart", desc: "La plus ancienne maison de Champagne (1729). Crayères gothiques exceptionnelles, expérience ultra-immersive.", badge: "Grande Maison · Premium" },
    { nom: "Vranken-Pommery", desc: "Reims. Crayères spectaculaires mêlant art contemporain et bulles. Collections d'art permanentes.", badge: "Art & Champagne" },
    { nom: "Vignerons indépendants", desc: "Rencontre directe avec le producteur, accueil familial, cuvées parcellaires introuvables ailleurs.", badge: "Authenticité · Sur RDV" },
    { nom: "Coopératives champenoises", desc: "Accès facilité, souvent en vente directe. Idéal pour les premiers séjours et les budgets plus mesurés.", badge: "Accessible · Toute l'année" },
  ]

  const experiences = [
    {
      titre: "Visite permanente Ruinart",
      chateau: "Champagne Ruinart — Reims",
      desc: "La plus ancienne maison de Champagne (1729) ouvre ses crayères gothiques pour une expérience ultra-immersive. Un incontournable absolu de l'oenotourisme champenois.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/Ruinart%20visite.webp",
      lien: "https://www.winalist.fr/experiences/321/visite-permanente?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Luxe",
    },
    {
      titre: "Visite, Dégustation et Sabrage en Cave et Château",
      chateau: "Champagne Comtesse Lafond",
      desc: "Une expérience mémorable qui combine la visite des caves, la dégustation commentée et l'art du sabrage — la mise en scène parfaite pour vivre la Champagne à pleine effervescence.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/Sabrage%20champagne.webp",
      lien: "https://www.winalist.fr/experiences/539/visite-degustation-et-sabrage-en-cave-et-chateau?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Insolite",
    },
    {
      titre: "Cépages & Senteurs : les arômes du Champagne",
      chateau: "Champagne Christian Muller",
      desc: "Un atelier sensoriel pour apprendre à identifier les arômes du Champagne à travers ses cépages. Une approche pédagogique et ludique, idéale pour affiner son palais.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/cepages%20et%20senteurs.webp",
      lien: "https://www.winalist.fr/experiences/5224/cepages-senteurs-les-aromes-du-champagne?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Débutant",
    },
    {
      titre: "La route du Champagne en Combi VW",
      chateau: "Champagne Lévêque Dehan",
      desc: "Parcourez les routes de vignobles champenois à bord d'un Combi VW vintage, avec arrêts chez les vignerons et dégustation au fil du parcours. L'expérience la plus insolite de la région.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/La%20route%20chmapagne%20combi%20vw.webp",
      lien: "https://www.winalist.fr/experiences/1981/la-route-du-champagne-en-combi-vw?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Insolite",
    },
    {
      titre: "Croisière Semi Privée en Champagne — 3h",
      chateau: "My House Boat",
      desc: "Une croisière de 3 heures sur la Marne au cœur du vignoble champenois, avec dégustation à bord. Le moyen le plus élégant de découvrir la Champagne depuis l'eau.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/croisiere%20champagne.webp",
      lien: "https://www.winalist.fr/experiences/5317/croisiere-semi-prive-en-champagne-3-h?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Luxe",
    },
  ]

  const saisons = [
    { label: "Printemps", note: "★★★★", desc: "Vignes en bourgeons, caves ouvertes, fréquentation douce. Idéal pour la photo." },
    { label: "Été", note: "★★★★★", desc: "Plein essor touristique, caves et Grandes Maisons en mode immersif. Vendanges en vue." },
    { label: "Automne", note: "★★★★★", desc: "Vendanges (mi-sept). Couleurs somptueuses. L'âme de la Champagne se révèle." },
    { label: "Hiver", note: "★★★", desc: "Dégustations intimistes, certaines caves fermées. Parfait pour les weekends bulles." },
  ]

  const pratique = [
    { titre: "Accès depuis Paris", desc: "Paris-Reims en TGV en 45 minutes. Reims est la base idéale sans voiture. Avec un véhicule, Épernay est à 1h30 de Paris via l'A4." },
    { titre: "Hébergement", desc: "Le Royal Champagne Hotel & Spa (Champillon) offre une vue exceptionnelle sur les vignes. En centre-ville, Reims propose de nombreux hôtels 3 et 4 étoiles à proximité des crayères." },
    { titre: "Réservations", desc: "Les Grandes Maisons (Ruinart, Veuve Clicquot) sont souvent réservées plusieurs semaines à l'avance. Réservez en ligne dès que votre date de séjour est arrêtée." },
    { titre: "Budget moyen", desc: "Visite + dégustation Grande Maison : 30–80 €/pers. Vigneron indépendant : 10–25 €. Atelier assemblage : 50–120 €. Montgolfière : 200–300 €/pers." },
    { titre: "Itinéraire recommandé (2j)", desc: "Jour 1 : Reims, crayères et Avenue Gaston de Polignac. Jour 2 : Épernay, Avenue de Champagne, Hautvillers et déjeuner chez un vigneron en Vallée de la Marne." },
    { titre: "La Ligne des Bulles", desc: "Le train qui relie Reims à Épernay via la Montagne de Reims traverse des villages vignerons d'exception. Idéal pour éviter la voiture et profiter sereinement des dégustations." },
  ]

  const faq = [
    {
      q: "Faut-il être amateur de champagne pour apprécier l'oenotourisme champenois ?",
      r: "Absolument pas. L'oenotourisme en Champagne est accessible à tous. De nombreuses activités (visites de crayères, balades en vignoble) se vivent sans aucune connaissance préalable en oenologie. L'atmosphère, l'architecture et les paysages suffisent à rendre l'expérience mémorable.",
    },
    {
      q: "Quelle est la différence entre Reims et Épernay pour l'oenotourisme ?",
      r: "Reims est la ville culturelle, avec la cathédrale, les crayères monumentales et une offre hôtelière et gastronomique plus étoffée. Épernay est la capitale du Champagne, plus viticole et concentrée : l'Avenue de Champagne, les grandes Maisons et une atmosphère plus intime. Les deux se complètent parfaitement.",
    },
    {
      q: "Qu'est-ce qu'une crayère et pourquoi est-ce si spécial ?",
      r: "Les crayères sont d'anciennes carrières souterraines creusées dans la craie, utilisées depuis des siècles pour faire vieillir le champagne à température constante (10–12°C). Leur architecture gothique, leur profondeur et l'atmosphère qui s'en dégage en font des lieux d'exception, uniques au monde.",
    },
    {
      q: "Les enfants peuvent-ils participer aux visites oenotouristiques ?",
      r: "Certaines activités comme les balades dans les vignes ou le tour en montgolfière conviennent parfaitement aux familles. Les dégustations proprement dites sont réservées aux adultes, mais les vignerons savent généralement adapter leur accueil.",
    },
  ]

  const profilColors: Record<string, { bg: string; color: string }> = {
    Débutant: { bg: "#e8f5e9", color: "#2e7d32" },
    Passionné: { bg: "#ffe7ca", color: "#bf3e0f" },
    Luxe: { bg: "#731702", color: "#ffffff" },
    Insolite: { bg: "#e3f2fd", color: "#1565c0" },
  }

  return (
    <main style={{ background: "#fdf8f2", minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <section style={{ background: "#731702", position: "relative", overflow: "hidden", padding: "clamp(56px, 8vw, 96px) clamp(20px, 4vw, 48px)" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", background: "#bf3e0f", borderRadius: "50%", opacity: 0.2 }}></div>
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "250px", height: "250px", background: "#9b2010", borderRadius: "50%", opacity: 0.25 }}></div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "24px", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" as const, fontFamily: "'Nunito', sans-serif" }}>
            <a href="/" style={{ color: "#f5c9a8", textDecoration: "none" }}>Accueil</a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <a href="/oenotourisme" style={{ color: "#f5c9a8", textDecoration: "none" }}>Oenotourisme</a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Champagne</span>
          </div>
          <span style={{ display: "inline-block", background: "#f28322", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", marginBottom: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
            Guide complet
          </span>
          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(30px, 5vw, 52px)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px", maxWidth: "800px" }}>
            Oenotourisme en Champagne : le guide ultime pour vivre les bulles de l'intérieur
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", maxWidth: "620px", fontFamily: "'Nunito', sans-serif" }}>
            Crayères souterraines classées UNESCO, Avenue de Champagne, villages vignerons sur les coteaux de la Montagne de Reims… Tout ce qu'il faut savoir pour vivre une expérience oenotouristique inoubliable en Champagne.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", fontFamily: "'Nunito', sans-serif" }}>Julien</div>
              <div style={{ fontSize: "12px", color: "#f5c9a8", fontFamily: "'Nunito', sans-serif" }}>Guide Champagne · 13 min de lecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "#ffe7ca", borderBottom: "1px solid #f0c49a", padding: "24px clamp(20px, 4vw, 48px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap" as const, gap: "16px" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702" }}>{s.num}</div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#bf3e0f", textTransform: "uppercase" as const, letterSpacing: "0.5px", marginTop: "2px", fontFamily: "'Nunito', sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CORPS */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>
        <div style={{ display: "grid", gap: "56px", alignItems: "start" }} className="content-layout">

          {/* CONTENU PRINCIPAL */}
          <div>

            {/* SECTION 1 — DÉFINITION */}
            <div style={{ paddingTop: "64px" }}>
              <h2 id="definition" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Qu'est-ce que l'oenotourisme en Champagne ?
              </h2>
              <div style={{ background: "#ffe7ca", borderLeft: "4px solid #bf3e0f", borderRadius: "0 12px 12px 0", padding: "20px 28px", marginBottom: "32px" }}>
                <p style={{ fontSize: "18px", color: "#731702", lineHeight: 1.7, fontWeight: 600, margin: 0, fontFamily: "'Nunito', sans-serif" }}>
                  L'oenotourisme champenois, c'est bien plus qu'une simple dégustation de bulles. C'est une plongée dans un terroir millénaire classé au Patrimoine mondial de l'UNESCO depuis 2015, sous la dénomination Coteaux, Maisons et Caves de Champagne.
                </p>
              </div>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "24px", fontFamily: "'Nunito', sans-serif" }}>
                Entre crayères souterraines labyrinthiques, vignobles panoramiques et villages de vignerons authentiques, la Champagne offre une expérience sensorielle et culturelle unique en France. La région se classe au 4e rang des destinations oenotouristiques françaises les plus visitées. Deux villes en constituent les portes d'entrée incontournables : Reims, surnommée la Cité des Sacres, et Épernay, capitale mondiale du Champagne et de sa mythique Avenue éponyme.
              </p>

              {/* IMAGE HERO */}
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "40px 0", border: "1px solid #f0d4b8" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/Oenotourisme%20champagne.webp"
                  alt="Oenotourisme Champagne vignobles"
                  style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* SECTION 2 — ZONES */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="zones" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Les 4 grandes zones viticoles de la Champagne à explorer
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                Le vignoble champenois s'étend sur plus de 33 000 hectares et 300 villages. Chaque zone a son caractère, ses cépages dominants et ses maisons emblématiques.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", marginBottom: "56px" }}>
                {zones.map((z, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#ffe7ca", border: "1px solid #f0d4b8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rammetto One', cursive", fontSize: "13px", color: "#bf3e0f" }}>
                      {String(i + 1)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "17px", color: "#731702", marginBottom: "8px" }}>{z.label}</h3>
                      <p style={{ fontSize: "15px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: "0 0 8px" }}>{z.desc}</p>
                      <span style={{ display: "inline-block", background: "#ffe7ca", color: "#bf3e0f", fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", fontFamily: "'Nunito', sans-serif" }}>{z.cepages}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3 — GRANDES MAISONS */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="maisons" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Grandes Maisons ou vignerons indépendants : que choisir ?
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                C'est l'une des premières questions que se posent les oenotouristes en arrivant en Champagne. Les deux expériences sont complémentaires et s'adressent à des envies différentes.
              </p>
              <div style={{ display: "grid", gap: "16px", marginBottom: "32px" }} className="maisons-grid">
                {maisons.map((m) => (
                  <div key={m.nom} style={{ background: "white", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "18px 20px" }}>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "16px", color: "#731702", marginBottom: "6px" }}>{m.nom}</h3>
                    <p style={{ fontSize: "13px", color: "#9a6040", lineHeight: 1.6, fontFamily: "'Nunito', sans-serif", margin: "0 0 10px" }}>{m.desc}</p>
                    <span style={{ display: "inline-block", background: "#ffe7ca", color: "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", fontFamily: "'Nunito', sans-serif" }}>{m.badge}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#ffe7ca", borderRadius: "12px", padding: "20px 24px", border: "1px solid #f0c49a", marginBottom: "40px" }}>
                <p style={{ fontSize: "14px", color: "#731702", lineHeight: 1.7, fontWeight: 600, fontFamily: "'Nunito', sans-serif", margin: 0 }}>
                  Conseil pratique : Pour une expérience complète, combinez une grande Maison à Reims ou Épernay avec la visite d'un vigneron indépendant dans un village. Ces deux expériences se complètent parfaitement et donnent une vision équilibrée de la Champagne.
                </p>
              </div>

              {/* IMAGE CRAYÈRES */}
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "0 0 56px", border: "1px solid #f0d4b8" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/Cave%20champagne.webp"
                  alt="Crayères Champagne cave souterraine"
                  style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* SECTION 4 — EXPÉRIENCES */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="experiences" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Les meilleures expériences oenotouristiques à vivre en Champagne
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "8px", fontFamily: "'Nunito', sans-serif" }}>
                L'oenotourisme champenois a considérablement évolué. Au-delà des visites de caves classiques, la région propose aujourd'hui des expériences originales qui séduisent autant les novices que les amateurs éclairés.
              </p>
              <p style={{ fontSize: "13px", color: "#9a6040", marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                Crédit photos : <a href="https://www.winalist.fr/" target="_blank" rel="noopener noreferrer" style={{ color: "#bf3e0f" }}>winalist.fr</a>
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px", marginBottom: "56px" }}>
                {experiences.map((exp, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #f0d4b8", overflow: "hidden", display: "grid" }} className="exp-card">
                    <div style={{ height: "220px", overflow: "hidden", position: "relative" as const }}>
                      <img src={exp.img} alt={exp.titre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to top, rgba(60,5,0,0.4) 0%, transparent 60%)" }}></div>
                      <span style={{ position: "absolute" as const, top: "14px", left: "14px", background: profilColors[exp.profil]?.bg || "#ffe7ca", color: profilColors[exp.profil]?.color || "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>
                        {exp.profil}
                      </span>
                    </div>
                    <div style={{ padding: "20px 24px" }}>
                      <div style={{ fontSize: "12px", color: "#9a6040", fontFamily: "'Nunito', sans-serif", marginBottom: "6px" }}>{exp.chateau}</div>
                      <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "18px", color: "#731702", marginBottom: "10px", lineHeight: 1.3 }}>{exp.titre}</h3>
                      <p style={{ fontSize: "15px", color: "#4a2010", lineHeight: 1.8, marginBottom: "16px", fontFamily: "'Nunito', sans-serif" }}>{exp.desc}</p>
                      <a href={exp.lien} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#bf3e0f", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "11px 20px", borderRadius: "8px", textDecoration: "none" }}>
                        Réserver cette expérience
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5 — SAISONS */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="saisons" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Quelle saison pour visiter la Champagne oenotouristique ?
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                La Champagne se visite toute l'année, mais les saisons offrent des expériences radicalement différentes. Le calendrier viticole impose un rythme : de la taille hivernale aux vendanges de septembre, chaque moment a son charme.
              </p>
              <div style={{ display: "grid", gap: "16px", marginBottom: "32px" }} className="saisons-grid">
                {saisons.map((s) => (
                  <div key={s.label} style={{ background: "white", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "20px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                      <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "17px", color: "#731702", margin: 0 }}>{s.label}</h3>
                      <span style={{ fontSize: "13px", color: "#f28322" }}>{s.note}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: "#ffe7ca", borderRadius: "12px", padding: "20px 24px", border: "1px solid #f0c49a", marginBottom: "40px" }}>
                <p style={{ fontSize: "14px", color: "#731702", lineHeight: 1.7, fontWeight: 600, fontFamily: "'Nunito', sans-serif", margin: 0 }}>
                  Le moment ultime : Les vendanges champenoises en septembre sont parmi les plus spectaculaires de France. Entièrement manuelles (exigence de l'AOC Champagne), elles mobilisent des dizaines de milliers de cueilleurs. Certaines maisons proposent de participer à la récolte : à réserver dès le mois de mai.
                </p>
              </div>

              {/* IMAGE VENDANGES */}
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "0 0 56px", border: "1px solid #f0d4b8" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/Vendanges%20champagne.webp"
                  alt="Vendanges manuelles Champagne"
                  style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* SECTION 6 — PRATIQUE */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="pratique" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Comment organiser votre séjour oenotouristique en Champagne ?
              </h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px", marginBottom: "56px" }}>
                {pratique.map((p) => (
                  <div key={p.titre} style={{ background: "white", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "18px 22px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#bf3e0f", flexShrink: 0, marginTop: "6px" }}></div>
                    <div>
                      <h4 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "16px", color: "#731702", marginBottom: "6px" }}>{p.titre}</h4>
                      <p style={{ fontSize: "14px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: 0 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 7 — FAQ */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="faq" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "32px", scrollMarginTop: "90px" }}>
                Vos questions sur l'oenotourisme en Champagne
              </h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px", marginBottom: "64px" }}>
                {faq.map((item) => (
                  <div key={item.q} style={{ background: "#fdf8f2", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "22px 24px" }}>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "17px", color: "#731702", marginBottom: "10px" }}>{item.q}</h3>
                    <p style={{ fontSize: "14px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: 0 }}>{item.r}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOC AUTEUR EEAT */}
            <div style={{ background: "white", border: "1px solid #f0d4b8", borderRadius: "20px", overflow: "hidden", marginBottom: "64px" }}>
              <div style={{ background: "#731702", padding: "14px 32px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase" as const, letterSpacing: "2px", fontFamily: "'Nunito', sans-serif" }}>À propos de l'auteur</span>
              </div>
              <div style={{ padding: "28px 32px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "24px", alignItems: "start" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "3px solid #f0d4b8" }}>
                  <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" as const }}>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "18px", color: "#731702", margin: 0 }}>Julien</h3>
                    <span style={{ background: "#ffe7ca", color: "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>Expert Champagne</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#9a6040", lineHeight: 1.75, marginBottom: "14px", fontFamily: "'Nunito', sans-serif" }}>
                    Passionné de vin depuis plus de 10 ans, j'ai arpenté l'Avenue de Champagne, visité les crayères des grandes Maisons et rencontré des vignerons indépendants de la Côte des Bar à la Montagne de Reims. Toutes les expériences recommandées ici ont été soigneusement sélectionnées pour vous.
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                    {["10+ ans de passion", "Reims & Épernay", "100+ domaines visités"].map((label) => (
                      <div key={label} style={{ fontSize: "11px", fontWeight: 700, color: "#731702", background: "#fdf8f2", padding: "5px 10px", borderRadius: "20px", border: "1px solid #f0d4b8", fontFamily: "'Nunito', sans-serif" }}>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* SIDEBAR SOMMAIRE */}
          <div className="sommaire-desktop" style={{ position: "sticky", top: "88px", paddingTop: "64px" }}>
            <div style={{ background: "white", border: "1px solid #f0d4b8", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ background: "#731702", padding: "14px 20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase" as const, letterSpacing: "2px", fontFamily: "'Nunito', sans-serif" }}>Sommaire</span>
              </div>
              <nav style={{ padding: "8px 0" }}>
                {[
                  { anchor: "definition", label: "Qu'est-ce que l'oenotourisme ?" },
                  { anchor: "zones", label: "Les 4 zones viticoles" },
                  { anchor: "maisons", label: "Grandes Maisons ou vignerons ?" },
                  { anchor: "experiences", label: "Les meilleures expériences" },
                  { anchor: "saisons", label: "Quelle saison choisir ?" },
                  { anchor: "pratique", label: "Organiser son séjour" },
                  { anchor: "faq", label: "FAQ" },
                ].map((item, i, arr) => (
                  <a key={item.anchor} href={`#${item.anchor}`} style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "13px", fontWeight: 700, color: "#7a3a20", textDecoration: "none", padding: "10px 20px", borderBottom: i < arr.length - 1 ? "1px solid #f0d4b8" : "none", lineHeight: 1.4, fontFamily: "'Nunito', sans-serif" }}>
                    <span style={{ color: "#f0d4b8", fontFamily: "'Rammetto One', cursive", fontSize: "12px", flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div style={{ background: "#731702", borderRadius: "14px", padding: "20px", marginTop: "16px", textAlign: "center" as const }}>
              <p style={{ fontSize: "13px", fontWeight: 800, color: "#ffffff", fontFamily: "'Nunito', sans-serif", marginBottom: "12px" }}>
                Toutes nos expériences Champagne sur Winalist
              </p>
              <a href="https://www.winalist.fr/france/champagne?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158" target="_blank" rel="noopener noreferrer nofollow" style={{ display: "block", background: "#f28322", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 800, padding: "10px 16px", borderRadius: "8px", textDecoration: "none" }}>
                Voir toutes les expériences
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* CTA FINAL */}
      <section style={{ background: "#731702", padding: "72px clamp(20px, 4vw, 48px)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff", marginBottom: "16px" }}>
            Prêt à découvrir la Champagne ?
          </h2>
          <p style={{ fontSize: "16px", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
            Retrouvez toutes nos destinations oenotouristiques et préparez votre prochain séjour dans les vignes.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" as const, flexWrap: "wrap" as const }}>
            <a href="/oenotourisme" style={{ background: "#ffffff", color: "#731702", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>
              Toutes les destinations
            </a>
            <a href="/oenotourisme/bordeaux" style={{ background: "transparent", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, padding: "13px 26px", borderRadius: "8px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Oenotourisme Bordeaux
            </a>
            <a href="/oenotourisme/bourgogne" style={{ background: "transparent", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, padding: "13px 26px", borderRadius: "8px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Oenotourisme Bourgogne
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .content-layout { grid-template-columns: 1fr 280px; }
        .sommaire-desktop { display: block; }
        .exp-card { grid-template-columns: 300px 1fr; }
        .saisons-grid { grid-template-columns: repeat(2, 1fr); }
        .maisons-grid { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 1024px) {
          .content-layout { grid-template-columns: 1fr !important; }
          .sommaire-desktop { display: none !important; }
          .exp-card { grid-template-columns: 1fr !important; }
          .maisons-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .saisons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  )
}