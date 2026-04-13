import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
export const metadata = {
  title: "Oenotourisme en Bourgogne : routes des vins, UNESCO et dégustations uniques",
  description: "Vignobles classés UNESCO, Route des Grands Crus, Pinot Noir d'exception… Le guide complet pour vivre une expérience oenotouristique inoubliable en Bourgogne.",
  alternates: { canonical: "https://le-petit-vigneron.fr/oenotourisme/bourgogne" },
  openGraph: {
    title: "Oenotourisme en Bourgogne : routes des vins, UNESCO et dégustations uniques",
    description: "Vignobles classés UNESCO, Route des Grands Crus, Pinot Noir d'exception… Le guide complet pour une expérience oenotouristique en Bourgogne.",
    url: "https://le-petit-vigneron.fr/oenotourisme/bourgogne",
    type: "website",
  },
}
export default function OenotourismeBourgogne() {

  const stats = [
    { num: "812", label: "Prestataires labellisés" },
    { num: "8,5%", label: "Des oenotouristes de France" },
    { num: "100+", label: "Appellations AOC" },
    { num: "UNESCO", label: "Climats classés" },
  ]

  const routes = [
    {
      label: "Chablis & Grand Auxerrois",
      desc: "Berceau des blancs vifs et minéraux produits à 100 % en Chardonnay. Les carrières de Kimméridgien donnent au Chablis son caractère unique et calcaire.",
      cepages: "Chardonnay · Blancs secs",
    },
    {
      label: "Côte de Nuits",
      desc: "De Dijon à Nuits-Saint-Georges, c'est ici que naissent les plus grands vins rouges du monde : Chambertin, Musigny, Romanée-Conti.",
      cepages: "Pinot Noir · Grands Crus",
    },
    {
      label: "Côte de Beaune",
      desc: "Beaune, capitale des vins de Bourgogne, rayonne entre Corton, Meursault et Montrachet. Blancs secs d'exception et rouges élégants y cohabitent.",
      cepages: "Pinot Noir & Chardonnay",
    },
    {
      label: "Côte Chalonnaise & Mâconnais",
      desc: "Plus accessibles et tout aussi séduisants : Givry, Rully, Pouilly-Fuissé. Vignobles autour des Roches de Solutré pour des paysages sculptés.",
      cepages: "Excellent rapport qualité-prix",
    },
  ]

  const experiences = [
    {
      titre: "Escapade en side-car vintage dans les vignes",
      chateau: "Rétro Tour Bourgogne",
      prix: "58–85 €",
      desc: "Balade dans la Côte de Beaune à bord d'un side-car vintage, avec dégustation. Une façon totalement insolite de parcourir les Grands Crus.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/retro%20tour%20bourgogne.webp",
      lien: "https://www.winalist.fr/hosts/1084/retro-tour-bourgogne?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Insolite",
    },
    {
      titre: "Vol en montgolfière avec un vigneron",
      chateau: "Art Montgolfière Bourgogne",
      prix: "240 €",
      desc: "Un vigneron de Mercurey vous emmène survoler les vignobles de Bourgogne en montgolfière. Une expérience unique mêlant passion du ciel et du vin.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/mongolfiere.webp",
      lien: "https://www.winalist.fr/hosts/1099/art-montgolfiere-bourgogne?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Luxe",
    },
    {
      titre: "Dégustation Vins & Chocolats",
      chateau: "Château de Chamirey — Mercurey",
      prix: "",
      desc: "Accord original entre les vins du domaine et des chocolats fins, dans un cadre de château exceptionnel. Note de 4,8/5 sur 232 avis.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/Chateau%20chamirey.webp",
      lien: "https://www.winalist.fr/hosts/166/chateau-de-chamirey?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Débutant",
    },
    {
      titre: "Dégustation à l'aveugle en Bourgogne",
      chateau: "Domaine de Cardon — Rully",
      prix: "",
      desc: "Atelier dégustation à l'aveugle pour tester et affûter votre palais sur des vins bourguignons, dans un domaine bio en Côte Chalonnaise.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/Degustation%20a%20l'aveugle.webp",
      lien: "https://www.winalist.fr/hosts/1188/domaine-de-cardon?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Passionné",
    },
    {
      titre: "Devenez vigneron d'un jour",
      chateau: "Domaine Joseph Lafarge — Mâconnais",
      prix: "49–99 €",
      desc: "Immersion complète dans le travail du vigneron au cœur du Mâconnais, avec cours d'œnologie et dégustation privilège. L'expérience la plus immersive de la sélection.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/Vigneron%20d'un%20jour.webp",
      lien: "https://www.winalist.fr/hosts/1080/domaine-joseph-lafarge?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
      profil: "Passionné",
    },
  ]

  const saisons = [
    { label: "Printemps", note: "★★★★", desc: "Vignes en bourgeons, caves accessibles, fréquentation modérée. Idéal pour les balades." },
    { label: "Été", note: "★★★★★", desc: "Pic de fréquentation, vignes vertes et luxuriantes. Nombreux événements et festivals." },
    { label: "Automne", note: "★★★★★", desc: "Saison des vendanges (sept-oct). Couleurs exceptionnelles. Vente des Hospices en nov." },
    { label: "Hiver", note: "★★★", desc: "Atmosphère intime, vignoble au repos. Séjours de dégustation et courts séjours gastronomiques." },
  ]

  const pratique = [
    { titre: "Accès & mobilité", desc: "Paris-Dijon en TGV en 1h40. Depuis Beaune, louez un vélo ou un e-bike pour rejoindre les domaines. Voiture recommandée pour couvrir Chablis et le Mâconnais." },
    { titre: "Hébergement", desc: "Privilégiez les hôtels labellisés Vignobles & Découvertes ou les chambres d'hôtes chez le vigneron pour une immersion complète dans le terroir." },
    { titre: "Réservation", desc: "Beaucoup de domaines reçoivent sur rendez-vous uniquement. Réservez vos dégustations au minimum 48h à l'avance, surtout en été et pendant les vendanges." },
    { titre: "Budget", desc: "Dégustations gratuites à payantes (5–30 €). Compter 80–150 € par nuit en B&B de charme, 150–300 € dans les établissements gastronomiques avec cave." },
    { titre: "Itinéraire recommandé (3j)", desc: "Jour 1 : Beaune et Côte de Beaune. Jour 2 : Route des Grands Crus vers Dijon. Jour 3 : Chablis ou Mâconnais selon vos préférences." },
    { titre: "Sites utiles", desc: "bourgogne-tourisme.com — beaune-tourisme.fr — les-climatsduvinsdebourgogne.com pour les informations UNESCO." },
  ]

  const faq = [
    {
      q: "Quel est le meilleur endroit pour débuter l'oenotourisme en Bourgogne ?",
      r: "Beaune est le point de départ idéal : ville historique au cœur de la Côte de Beaune, elle concentre hôtels de charme, restaurants gastronomiques, caves à visiter (notamment les Hospices) et un office du tourisme très bien organisé pour les amateurs de vin.",
    },
    {
      q: "Faut-il être expert en vin pour profiter de l'oenotourisme bourguignon ?",
      r: "Absolument pas. La grande majorité des domaines et prestataires proposent des expériences adaptées à tous les niveaux, des grands débutants aux connaisseurs confirmés. L'essentiel est la curiosité et l'envie de découverte.",
    },
    {
      q: "Quelles appellations bourguignonnes sont les plus connues ?",
      r: "Parmi les plus emblématiques : Romanée-Conti, Chambertin, Musigny, Chablis Grand Cru, Meursault, Puligny-Montrachet, Pouilly-Fuissé. Ces noms sont des références mondiales pour les amateurs de vin.",
    },
    {
      q: "L'oenotourisme en Bourgogne est-il adapté aux familles ?",
      r: "Oui, avec un programme équilibré : balades vélo accessibles, villages médiévaux, marchés locaux, activités nature autour des vignobles. Les enfants peuvent participer à des ateliers jus de raisin pendant les vendanges.",
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
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Bourgogne</span>
          </div>
          <span style={{ display: "inline-block", background: "#f28322", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", marginBottom: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
            Guide complet
          </span>
          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(30px, 5vw, 52px)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px", maxWidth: "800px" }}>
            Oenotourisme en Bourgogne : le guide ultime pour un séjour entre vigne et terroir
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", maxWidth: "620px", fontFamily: "'Nunito', sans-serif" }}>
            Routes des vins, dégustations chez le vigneron, vélo dans les Climats UNESCO… Tout ce que vous devez savoir pour vivre une expérience oenotouristique inoubliable en Bourgogne.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", fontFamily: "'Nunito', sans-serif" }}>Julien</div>
              <div style={{ fontSize: "12px", color: "#f5c9a8", fontFamily: "'Nunito', sans-serif" }}>Guide Bourgogne · 12 min de lecture</div>
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
                Qu'est-ce que l'oenotourisme en Bourgogne ?
              </h2>
              <div style={{ background: "#ffe7ca", borderLeft: "4px solid #bf3e0f", borderRadius: "0 12px 12px 0", padding: "20px 28px", marginBottom: "32px" }}>
                <p style={{ fontSize: "18px", color: "#731702", lineHeight: 1.7, fontWeight: 600, margin: 0, fontFamily: "'Nunito', sans-serif" }}>
                  L'oenotourisme en Bourgogne prend une dimension particulière : les vignobles sont classés au Patrimoine mondial de l'UNESCO sous la dénomination Climats du vignoble de Bourgogne, ce qui en fait une destination unique au monde.
                </p>
              </div>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "24px", fontFamily: "'Nunito', sans-serif" }}>
                L'oenotourisme — ou tourisme vitivinicole — consiste à voyager à travers les vignobles pour découvrir les vins, les caves et les traditions locales. Concrètement, l'oenotourisme bourguignon, c'est à la fois la visite de caves voûtées du XIIe siècle, les dégustations de Pinot Noir et de Chardonnay directement chez le vigneron, les balades vélo au fil de la Route des Grands Crus, et les repas de terroir accompagnés des meilleures appellations locales.
              </p>

              {/* IMAGE 1 */}
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "40px 0", border: "1px solid #f0d4b8" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/vignobles%20Cote%20de%20Nuits%20Bourgogne%20automne%20oenotourisme.webp"
                  alt="Vignobles Côte de Nuits Bourgogne automne"
                  style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* SECTION 2 — ROUTES */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="routes" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Les 5 grandes routes des vins de Bourgogne à explorer
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                La Bourgogne se découvre du nord au sud, à travers cinq grandes zones viticoles, chacune avec ses cépages phares, ses paysages et ses villages typiques.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", marginBottom: "40px" }}>
                {routes.map((r, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#ffe7ca", border: "1px solid #f0d4b8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rammetto One', cursive", fontSize: "13px", color: "#bf3e0f" }}>
                      {String(i + 1)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "17px", color: "#731702", marginBottom: "8px" }}>{r.label}</h3>
                      <p style={{ fontSize: "15px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: "0 0 8px" }}>{r.desc}</p>
                      <span style={{ display: "inline-block", background: "#ffe7ca", color: "#bf3e0f", fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", fontFamily: "'Nunito', sans-serif" }}>{r.cepages}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* IMAGE 2 */}
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "40px 0", border: "1px solid #f0d4b8" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/velo%20route%20des%20Grands%20Crus%20Cote%20de%20Nuits%20Bourgogne.webp"
                  alt="Vélo Route des Grands Crus Côte de Nuits Bourgogne"
                  style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* SECTION 3 — EXPÉRIENCES */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="experiences" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Les meilleures expériences oenotouristiques à vivre en Bourgogne
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                Au-delà de la simple dégustation, l'oenotourisme bourguignon offre un spectre d'expériences sensorielles et culturelles remarquables. Voici les incontournables à intégrer à votre programme.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px", marginBottom: "32px" }}>
                {experiences.map((exp, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #f0d4b8", overflow: "hidden", display: "grid" }} className="exp-card">
                    <div style={{ height: "220px", overflow: "hidden", position: "relative" as const }}>
                      <img src={exp.img} alt={exp.titre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to top, rgba(60,5,0,0.4) 0%, transparent 60%)" }}></div>
                      <span style={{ position: "absolute" as const, top: "14px", left: "14px", background: profilColors[exp.profil]?.bg || "#ffe7ca", color: profilColors[exp.profil]?.color || "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>
                        {exp.profil}
                      </span>
                      {exp.prix && (
                        <span style={{ position: "absolute" as const, top: "14px", right: "14px", background: "white", color: "#731702", fontSize: "11px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", fontFamily: "'Nunito', sans-serif" }}>
                          {exp.prix}
                        </span>
                      )}
                    </div>
                    <div style={{ padding: "20px 24px" }}>
                      <div style={{ fontSize: "12px", color: "#9a6040", fontFamily: "'Nunito', sans-serif", marginBottom: "6px" }}>{exp.chateau}</div>
                      <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "18px", color: "#731702", marginBottom: "10px", lineHeight: 1.3 }}>{exp.titre}</h3>
                      <p style={{ fontSize: "15px", color: "#4a2010", lineHeight: 1.8, marginBottom: "16px", fontFamily: "'Nunito', sans-serif" }}>{exp.desc}</p>
                      <a href={exp.lien} target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#bf3e0f", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "11px 20px", borderRadius: "8px", textDecoration: "none" }}>
                        Réserver cette expérience
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* ENCART LABEL */}
              <div style={{ background: "#ffe7ca", borderRadius: "12px", padding: "20px 24px", border: "1px solid #f0c49a", marginBottom: "56px" }}>
                <p style={{ fontSize: "14px", color: "#731702", lineHeight: 1.7, fontWeight: 600, fontFamily: "'Nunito', sans-serif", margin: 0 }}>
                  Bon à savoir : Le label Vignobles & Découvertes garantit une offre oenotouristique de qualité. En Bourgogne, 812 prestataires ont été certifiés — hébergements, restaurants, caves et activités. Filtrez vos recherches sur ce critère pour une expérience qualitative assurée.
                </p>
              </div>

              {/* IMAGE 3 */}
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "0 0 56px", border: "1px solid #f0d4b8" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/degustation%20vin%20rouge%20Bourgogne%20cave%20vigneron%20oenotourisme.webp"
                  alt="Dégustation vin rouge Bourgogne cave vigneron"
                  style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* SECTION 4 — SAISONS */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="saisons" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Quelle saison choisir pour votre séjour oenotouristique ?
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                La Bourgogne se visite toute l'année, mais chaque saison offre une expérience différente. Le calendrier viticole rythme le territoire et influe directement sur les activités disponibles.
              </p>
              <div style={{ display: "grid", gap: "16px", marginBottom: "56px" }} className="saisons-grid">
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
            </div>

            {/* SECTION 5 — PRATIQUE */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="pratique" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Comment organiser votre séjour oenotouristique en Bourgogne ?
              </h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px", marginBottom: "40px" }}>
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

              {/* IMAGE 4 */}
              <div style={{ borderRadius: "16px", overflow: "hidden", margin: "0 0 56px", border: "1px solid #f0d4b8" }}>
                <img
                  src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/repas%20gastronomique%20domaine%20viticole%20Bourgogne%20oenotourisme.webp"
                  alt="Repas gastronomique domaine viticole Bourgogne"
                  style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* SECTION 6 — FAQ */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="faq" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "32px", scrollMarginTop: "90px" }}>
                Vos questions sur l'oenotourisme en Bourgogne
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
                    <span style={{ background: "#ffe7ca", color: "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>Expert Bourgogne</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#9a6040", lineHeight: 1.75, marginBottom: "14px", fontFamily: "'Nunito', sans-serif" }}>
                    J'aime le vin, mais surtout les moments qu'il crée. Les verres qu'on partage, les rires qui vont avec, et les petites histoires qu'on se raconte autour d'une bonne bouteille. Avec Le Petit Vigneron, j'ai juste envie de t'ouvrir la porte de mon univers : te faire découvrir de belles pépites, simplement, sans chichi… comme si on était à la maison.
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                    {["5 ans de passion", "30+ articles publiés"].map((label) => (
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
                  { anchor: "routes", label: "Les routes des vins" },
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
                Toutes nos expériences Bourgogne sur Winalist
              </p>
              <a href="https://www.winalist.fr/france/bourgogne?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158" target="_blank" rel="noopener noreferrer nofollow sponsored" style={{ display: "block", background: "#f28322", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 800, padding: "10px 16px", borderRadius: "8px", textDecoration: "none" }}>
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
            Prêt à découvrir la Bourgogne ?
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
            <a href="/oenotourisme/champagne" style={{ background: "transparent", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, padding: "13px 26px", borderRadius: "8px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Oenotourisme Champagne
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
        @media (max-width: 1024px) {
          .content-layout { grid-template-columns: 1fr !important; }
          .sommaire-desktop { display: none !important; }
          .exp-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .saisons-grid { grid-template-columns: 1fr !important; }
          .exp-card { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  )
}