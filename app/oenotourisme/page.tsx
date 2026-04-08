import Header from "../../components/Header"
import Footer from "../../components/Footer"
export const metadata = {
  title: "Oenotourisme en France : le guide ultime pour découvrir les vignobles",
  description: "12 millions de visiteurs par an, 10 000 caves ouvertes, 17 régions viticoles. Tout ce qu'il faut savoir pour vivre une expérience oenotouristique inoubliable en France.",
  alternates: { canonical: "https://le-petit-vigneron.fr/oenotourisme" },
  openGraph: {
    title: "Oenotourisme en France : le guide ultime pour découvrir les vignobles",
    description: "12 millions de visiteurs par an, 10 000 caves ouvertes, 17 régions viticoles. Tout ce qu'il faut savoir pour vivre une expérience oenotouristique inoubliable en France.",
    url: "https://le-petit-vigneron.fr/oenotourisme",
    type: "website",
  },
}
export default function Oenotourisme() {

  const regions = [
    {
      slug: "bordeaux",
      label: "Bordeaux",
      desc: "Avec 65 appellations, 6 000 châteaux viticoles et 2,5 millions d'œnotouristes par an, la région bordelaise est la destination viticole la plus visitée de France.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Oenotourisme.webp",
      highlight: "2,5M de visiteurs / an",
      prix: "30 € / expérience",
    },
    {
      slug: "bourgogne",
      label: "Bourgogne",
      desc: "Les Climats du vignoble de Bourgogne, classés UNESCO en 2015, témoignent de 2 000 ans de savoir-faire viticole. Pinot Noir et Chardonnay d'exception.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20bourgogne/vignobles%20Cote%20de%20Nuits%20Bourgogne%20automne%20oenotourisme.webp",
      highlight: "UNESCO depuis 2015",
      prix: "55 € / expérience",
    },
    {
      slug: "champagne",
      label: "Champagne",
      desc: "Ses vignobles, classés UNESCO en 2015, et ses caves creusées dans la craie à des dizaines de mètres de profondeur offrent un décor unique au monde.",
      img: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/Oenotourisme%20champagne/Cave%20champagne.webp",
      highlight: "300 km de caves",
      prix: "46 € / expérience",
    },
  ]

  const stats = [
    { num: "12M", label: "visiteurs par an" },
    { num: "5,4Md€", label: "retombées économiques" },
    { num: "10 000", label: "caves ouvertes" },
    { num: "+60%", label: "de croissance en 10 ans" },
  ]

  const faq = [
    {
      q: "Qu'est-ce que l'œnotourisme ?",
      r: "L'œnotourisme est une forme de tourisme centrée sur la découverte des régions viticoles, des domaines, des vignerons et de leurs vins. Il englobe la dégustation, les visites de caves, le patrimoine culturel, la gastronomie, l'hébergement en domaine et de nombreuses activités de loisirs liées au monde du vin.",
    },
    {
      q: "Combien y a-t-il d'œnotouristes en France ?",
      r: "En 2023, 12 millions de personnes ont visité les vignobles français, dont 6,6 millions de Français et 5,4 millions d'étrangers. Ce chiffre a progressé de 60 % depuis 2009, témoignant de l'engouement croissant pour le tourisme viticole en France.",
    },
    {
      q: "Quelles sont les meilleures régions pour l'œnotourisme en France ?",
      r: "Les destinations les plus populaires sont Bordeaux, la Bourgogne, la Champagne et l'Alsace. Mais la Provence, la Vallée du Rhône, le Val de Loire, le Languedoc-Roussillon, le Beaujolais, le Sud-Ouest, le Jura, la Corse et Cognac offrent également des expériences remarquables.",
    },
    {
      q: "Quel budget prévoir pour un séjour œnotouristique ?",
      r: "Le coût d'une expérience varie de 17 € (Languedoc) à 79 € (Cognac) par personne. Pour un week-end de 2-3 jours avec hébergement, activités et repas, comptez entre 200 et 600 € par personne selon le niveau de prestation.",
    },
    {
      q: "L'œnotourisme est-il adapté aux familles ?",
      r: "Absolument. De nombreux domaines proposent des ateliers pédagogiques, balades nature et jeux de piste dans les vignes. L'Alsace et le Val de Loire sont particulièrement adaptés aux séjours en famille.",
    },
    {
      q: "Quelle est la meilleure saison pour l'œnotourisme ?",
      r: "Septembre et octobre sont considérés comme la période idéale : les vendanges animent les domaines, les paysages sont flamboyants. Le printemps (avril-juin) offre également des conditions très agréables. Mais chaque saison a ses atouts, y compris l'hiver avec ses visites intimistes et ses tarifs réduits.",
    },
    {
      q: "Qu'est-ce que le label Vignobles & Découvertes ?",
      r: "C'est un label officiel créé en 2009 par Atout France qui garantit la qualité d'une destination œnotouristique. Il certifie que la destination propose une offre complète — hébergement, restauration, visites, culture — répondant à des critères de qualité stricts. La France compte aujourd'hui 75 destinations labellisées.",
    },
  ]

  return (
    <main style={{ background: "#fdf8f2", minHeight: "100vh" }}>
      <Header />

      {/* HERO */}
      <section style={{ background: "#731702", position: "relative", overflow: "hidden", padding: "clamp(56px, 8vw, 96px) clamp(20px, 4vw, 48px)" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", background: "#bf3e0f", borderRadius: "50%", opacity: 0.2 }}></div>
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "250px", height: "250px", background: "#9b2010", borderRadius: "50%", opacity: 0.25 }}></div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "24px", fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Nunito', sans-serif" }}>
            <a href="/" style={{ color: "#f5c9a8", textDecoration: "none" }}>Accueil</a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Oenotourisme</span>
          </div>
          <span style={{ display: "inline-block", background: "#f28322", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", marginBottom: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
            Guide complet
          </span>
          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(32px, 5vw, 56px)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px", maxWidth: "800px" }}>
            Œnotourisme en France : le guide ultime pour découvrir les vignobles
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", maxWidth: "620px", fontFamily: "'Nunito', sans-serif" }}>
            La France est le premier producteur mondial de vin et la première destination touristique de la planète. Quand ces deux réalités se rencontrent, cela donne l'œnotourisme — une expérience qui va bien au-delà d'un simple verre de vin.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", fontFamily: "'Nunito', sans-serif" }}>Julien</div>
              <div style={{ fontSize: "12px", color: "#f5c9a8", fontFamily: "'Nunito', sans-serif" }}>Guide oenotourisme · 15 min de lecture</div>
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

          <div>

            {/* INTRO */}
            <div style={{ paddingTop: "64px" }}>
              <div style={{ background: "#ffe7ca", borderLeft: "4px solid #bf3e0f", borderRadius: "0 12px 12px 0", padding: "20px 28px", marginBottom: "40px" }}>
                <p style={{ fontSize: "18px", color: "#731702", lineHeight: 1.7, fontWeight: 600, margin: 0, fontFamily: "'Nunito', sans-serif" }}>
                  Imaginez : vous êtes assis au milieu des vignes, face à un paysage vallonné, un verre de grand cru à la main, tandis qu'un vigneron passionné vous raconte l'histoire de chaque cépage. L'œnotourisme, c'est exactement cette promesse.
                </p>
              </div>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "24px", fontFamily: "'Nunito', sans-serif" }}>
                Chaque année, <strong style={{ color: "#731702" }}>12 millions de visiteurs</strong> parcourent les vignobles français. Et ce chiffre ne cesse de croître. Si vous envisagez de vous lancer dans l'aventure — ou si vous cherchez simplement à comprendre ce phénomène en pleine expansion — ce guide est fait pour vous.
              </p>
            </div>

            {/* SECTION 1 — DÉFINITION */}
            <div style={{ paddingTop: "48px" }}>
              <h2 id="definition" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Qu'est-ce que l'œnotourisme ? Définition et origines
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                L'œnotourisme — également appelé tourisme viticole, tourisme du vin ou encore tourisme vitivinicole — désigne une forme de tourisme centrée sur la découverte des régions viticoles, des domaines, des vignerons et de leurs vins.
              </p>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Mais attention, il ne s'agit pas uniquement de déguster du vin. L'œnotourisme est une expérience immersive, à 360 degrés. C'est découvrir un terroir, rencontrer les hommes et les femmes qui façonnent le vin, explorer un patrimoine architectural et culturel, et savourer une gastronomie locale en parfait accord avec les crus de la région.
              </p>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                En d'autres termes, l'œnotourisme crée un pont entre le consommateur et le producteur. Il transforme une simple bouteille en une histoire vivante.
              </p>
              <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "22px", color: "#731702", marginBottom: "16px" }}>
                Un concept plus ancien qu'on ne le pense
              </h3>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Si le terme « œnotourisme » semble récent, la pratique, elle, ne l'est pas. La Route des Vins d'Alsace, créée en 1953, est considérée comme la première route viticole de France. Elle fêtera bientôt ses 75 ans et reste l'une des plus emblématiques du pays.
              </p>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                En France, le mouvement se démocratise dans les années 1980-1990. Depuis, le secteur n'a cessé de se structurer : création du label Vignobles & Découvertes en 2009, lancement du portail VisitFrenchWine en 2016, premières Assises Nationales de l'Œnotourisme en 2018.
              </p>
              <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "22px", color: "#731702", marginBottom: "16px" }}>
                Pourquoi la France est-elle la destination idéale ?
              </h3>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "40px", fontFamily: "'Nunito', sans-serif" }}>
                La réponse tient en quelques chiffres : 17 grandes régions viticoles, 789 000 hectares de vignobles, plus de 3 000 vins différents et des appellations connues dans le monde entier. Un touriste international sur deux associe fortement l'image de la France au vin.
              </p>
            </div>

            {/* SECTION 2 — CHIFFRES */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="chiffres" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                L'œnotourisme en chiffres : un secteur en pleine croissance
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                En 2023, la France a accueilli <strong style={{ color: "#731702" }}>12 millions d'œnotouristes</strong>, contre 10 millions en 2016 et 7,5 millions en 2009. C'est une hausse de 60 % en un peu plus d'une décennie.
              </p>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Parmi ces visiteurs, 6,6 millions sont français (55 %) et 5,4 millions sont étrangers (45 %). Les Britanniques arrivent en tête, suivis des Belges et des Américains.
              </p>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "40px", fontFamily: "'Nunito', sans-serif" }}>
                Côté retombées économiques, l'œnotourisme génère <strong style={{ color: "#731702" }}>5,4 milliards d'euros par an</strong> en France. Et 75 % des visiteurs achètent du vin lors de leur visite.
              </p>
            </div>

            {/* SECTION 3 — ACTIVITÉS */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="activites" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Que faire en œnotourisme ? Les activités incontournables
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "24px", fontFamily: "'Nunito', sans-serif" }}>
                L'une des forces de l'œnotourisme, c'est la diversité de ses activités. Que vous soyez néophyte ou connaisseur, il y a forcément une expérience qui vous correspond.
              </p>
              {[
                { titre: "Dégustation et initiation au vin", desc: "La dégustation commentée reste l'activité la plus prisée. Un œnologue vous guide à travers une sélection de vins, en vous apprenant à observer la robe, sentir les arômes et apprécier la structure en bouche." },
                { titre: "Visite de caves et domaines viticoles", desc: "Dans le Bordelais, des châteaux majestueux. En Bourgogne, de petites exploitations familiales. En Champagne, des caves souterraines creusées dans la craie. Chaque visite est unique." },
                { titre: "Les routes des vins", desc: "Des itinéraires balisés qui traversent les paysages viticoles d'une région. À pied, à vélo, en voiture ou en tuk-tuk électrique — de quoi s'adapter à tous les rythmes." },
                { titre: "Patrimoine, culture et gastronomie", desc: "Quatre vignobles sont classés au patrimoine mondial de l'UNESCO : Saint-Émilion, le Val de Loire, la Bourgogne et la Champagne. La Cité du Vin de Bordeaux accueille plus de 415 000 visiteurs par an." },
                { titre: "Hébergement et bien-être viticole", desc: "Chambres d'hôtes chez le vigneron, suites dans un château classé, tiny houses au cœur des vignes… La vinothérapie — soins à base de raisin — se développe fortement." },
                { titre: "Activités sportives et loisirs", desc: "Randonnées dans les vignes, circuits à vélo, survols en montgolfière, croisières œnologiques, escape games viticoles et vendanges participatives." },
              ].map((a) => (
                <div key={a.titre} style={{ background: "white", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "18px 22px", marginBottom: "12px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#bf3e0f", flexShrink: 0, marginTop: "8px" }}></div>
                  <div>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "16px", color: "#731702", marginBottom: "6px" }}>{a.titre}</h3>
                    <p style={{ fontSize: "14px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: 0 }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION 4 — DESTINATIONS */}
            <div style={{ paddingTop: "48px" }}>
              <h2 id="destinations" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Explorez nos guides régionaux
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
                Bordeaux, Bourgogne, Champagne — trois destinations emblématiques pour commencer votre aventure œnotouristique. La France compte 17 grandes régions viticoles, chacune avec son identité, ses cépages et ses traditions.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px", marginBottom: "40px" }}>
                {regions.map((region) => (
                  <a key={region.slug} href={`/oenotourisme/${region.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ background: "white", borderRadius: "16px", border: "1px solid #f0d4b8", overflow: "hidden", display: "grid", transition: "transform 0.2s, box-shadow 0.2s" }} className="region-card">
                      <div style={{ height: "220px", overflow: "hidden", position: "relative" as const }}>
                        <img src={region.img} alt={region.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to top, rgba(60,5,0,0.5) 0%, transparent 60%)" }}></div>
                        <div style={{ position: "absolute" as const, top: "16px", left: "16px", display: "flex", gap: "8px" }}>
                          <span style={{ background: "#f28322", color: "white", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
                            {region.highlight}
                          </span>
                          <span style={{ background: "white", color: "#731702", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", fontFamily: "'Nunito', sans-serif" }}>
                            {region.prix}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "24px 28px" }}>
                        <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "24px", color: "#731702", marginBottom: "10px" }}>
                          Oenotourisme {region.label}
                        </h3>
                        <p style={{ fontSize: "15px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", marginBottom: "16px" }}>
                          {region.desc}
                        </p>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 800, color: "#bf3e0f", fontFamily: "'Nunito', sans-serif" }}>
                          Découvrir notre guide {region.label}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M9 4L13 8L9 12" stroke="#bf3e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "40px", fontFamily: "'Nunito', sans-serif" }}>
                Au-delà de ces trois grandes destinations, l'Alsace, la Provence, la Vallée du Rhône, le Val de Loire, le Beaujolais, le Jura, la Corse, le Sud-Ouest et Cognac offrent des expériences tout aussi remarquables pour les voyageurs en quête d'authenticité.
              </p>
            </div>

            {/* SECTION 5 — LABEL */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="label" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Le label Vignobles & Découvertes : votre garantie qualité
              </h2>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Créé en 2009 par Atout France, ce label est attribué pour une durée de trois ans à des destinations qui proposent une offre complète et de qualité : hébergement, restauration, activités de découverte des caves, visites culturelles.
              </p>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "40px", fontFamily: "'Nunito', sans-serif" }}>
                <strong style={{ color: "#731702" }}>75 destinations sont aujourd'hui labellisées</strong> en France et 8 704 prestations portent la marque Vignobles & Découvertes, soit une augmentation de 117 % en sept ans.
              </p>
            </div>

            {/* SECTION 6 — TENDANCES */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="tendances" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Les tendances 2025-2026 de l'œnotourisme
              </h2>
              {[
                { titre: "Le slow tourisme viticole", desc: "Les visiteurs veulent prendre le temps de comprendre, d'échanger, de s'imprégner. Les séjours se rallongent, les itinéraires à vélo se multiplient, et les hébergements écoresponsables rencontrent un succès croissant." },
                { titre: "L'œnotourisme durable", desc: "Les domaines certifiés bio, biodynamie ou Terra Vitis attirent de plus en plus de curieux soucieux de l'impact environnemental de leur séjour." },
                { titre: "Des expériences toujours plus immersives", desc: "Vendanges participatives, nuits sous les étoiles dans les vignes, spectacles vivants dans les caves, réalité augmentée pour découvrir l'histoire d'un domaine." },
                { titre: "Le digital au service de l'œnotourisme", desc: "Les plateformes de réservation en ligne simplifient l'organisation des séjours. Avec une clientèle étrangère en hausse de 29 % en sept ans, l'œnotourisme français se tourne résolument vers l'international." },
              ].map((t) => (
                <div key={t.titre} style={{ marginBottom: "24px" }}>
                  <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "20px", color: "#731702", marginBottom: "10px" }}>{t.titre}</h3>
                  <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, fontFamily: "'Nunito', sans-serif" }}>{t.desc}</p>
                </div>
              ))}
            </div>

            {/* SECTION 7 — CONSEILS */}
            <div style={{ paddingTop: "16px" }}>
              <h2 id="conseils" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "20px", scrollMarginTop: "90px" }}>
                Préparer son séjour : conseils pratiques
              </h2>
              <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "22px", color: "#731702", marginBottom: "16px" }}>Quand partir ?</h3>
              {[
                { saison: "Le printemps (avril-juin)", desc: "La vigne se réveille, les fleurs apparaissent. Affluence modérée." },
                { saison: "L'été (juillet-août)", desc: "Haute saison touristique, prix plus élevés. Pensez à réserver." },
                { saison: "L'automne (septembre-octobre)", desc: "La saison star. Les vendanges battent leur plein, les paysages sont flamboyants." },
                { saison: "L'hiver (novembre-mars)", desc: "Les caves restent ouvertes. Idéal pour les visites intimistes et les tarifs réduits." },
              ].map((s) => (
                <p key={s.saison} style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "8px", fontFamily: "'Nunito', sans-serif" }}>
                  <strong style={{ color: "#731702" }}>{s.saison}</strong> : {s.desc}
                </p>
              ))}
              <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "22px", color: "#731702", margin: "32px 0 16px" }}>Quel budget prévoir ?</h3>
              <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>
                Les tarifs les plus abordables se trouvent dans le Languedoc (environ 17 €), suivi de Bordeaux (30 €) et de la Champagne (46 €). La Bourgogne se positionne dans le haut de gamme (55 €). Pour un week-end complet de 2-3 jours, comptez entre 200 et 600 € par personne.
              </p>
              <div style={{ background: "#ffe7ca", borderRadius: "12px", padding: "20px 24px", border: "1px solid #f0c49a", marginBottom: "40px" }}>
                <p style={{ fontSize: "15px", color: "#731702", lineHeight: 1.7, fontWeight: 600, fontFamily: "'Nunito', sans-serif", margin: 0 }}>
                  Conseil : limitez-vous à 2-3 domaines par jour maximum. L'œnotourisme se vit dans la lenteur. Mieux vaut approfondir que survoler. Et si vous prenez la voiture, prévoyez un conducteur désigné.
                </p>
              </div>
              <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "22px", color: "#731702", marginBottom: "16px" }}>Les événements à ne pas manquer</h3>
              {[
                { nom: "Bordeaux Fête le Vin", desc: "En juin, les années impaires. L'un des plus grands événements viticoles du monde." },
                { nom: "Portes Ouvertes du Médoc", desc: "En avril. Les châteaux du Médoc ouvrent leurs portes au grand public." },
                { nom: "Festival de Beaune", desc: "En octobre. Festival de cinéma couplé à la vente des vins des Hospices de Beaune." },
              ].map((e) => (
                <p key={e.nom} style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "8px", fontFamily: "'Nunito', sans-serif" }}>
                  <strong style={{ color: "#731702" }}>{e.nom}</strong> : {e.desc}
                </p>
              ))}
            </div>

            {/* SECTION 8 — FAQ */}
            <div style={{ paddingTop: "48px", marginBottom: "64px" }}>
              <h2 id="faq" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "32px", scrollMarginTop: "90px" }}>
                FAQ : les questions les plus fréquentes
              </h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
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
                    <span style={{ background: "#ffe7ca", color: "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>Le Petit Vigneron</span>
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
                  { anchor: "definition", label: "Définition et origines" },
                  { anchor: "chiffres", label: "L'œnotourisme en chiffres" },
                  { anchor: "activites", label: "Les activités incontournables" },
                  { anchor: "destinations", label: "Nos guides régionaux" },
                  { anchor: "label", label: "Label Vignobles & Découvertes" },
                  { anchor: "tendances", label: "Tendances 2025-2026" },
                  { anchor: "conseils", label: "Conseils pratiques" },
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
          </div>

        </div>
      </div>

      {/* CTA FINAL */}
      <section style={{ background: "#731702", padding: "72px clamp(20px, 4vw, 48px)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff", marginBottom: "16px" }}>
            Prêt à partir à la découverte des vignobles ?
          </h2>
          <p style={{ fontSize: "16px", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
            La vigne, les vignerons et leurs vins n'attendent que vous. Choisissez votre destination et lancez-vous dans l'aventure.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" as const, flexWrap: "wrap" as const }}>
            <a href="/oenotourisme/bordeaux" style={{ background: "#ffffff", color: "#731702", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>Bordeaux</a>
            <a href="/oenotourisme/bourgogne" style={{ background: "transparent", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, padding: "13px 26px", borderRadius: "8px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>Bourgogne</a>
            <a href="/oenotourisme/champagne" style={{ background: "transparent", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, padding: "13px 26px", borderRadius: "8px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>Champagne</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .content-layout { grid-template-columns: 1fr 280px; }
        .sommaire-desktop { display: block; }
        .region-card { grid-template-columns: 300px 1fr; }
        .region-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(115,23,2,0.1); }
        @media (max-width: 1024px) {
          .content-layout { grid-template-columns: 1fr !important; }
          .sommaire-desktop { display: none !important; }
          .region-card { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  )
}