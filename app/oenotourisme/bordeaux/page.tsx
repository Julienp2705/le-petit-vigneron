import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function OenotourismeBordeaux() {

  const stats = [
    { num: "2,5M", label: "Oenotouristes par an" },
    { num: "6 000", label: "Châteaux viticoles" },
    { num: "65", label: "Appellations" },
    { num: "#1", label: "Destination oenoto. de France" },
  ]

  const raisons = [
    {
      titre: "Une diversité d'appellations sans équivalent",
      desc: "Du Médoc austère au Sauternes liquoreux, en passant par les vins de Saint-Émilion aux notes de fruits rouges confits — chaque visite est une découverte différente. Vous pourriez revenir dix fois et ne jamais voir deux fois le même vignoble.",
    },
    {
      titre: "Paris–Bordeaux en TGV : la fugue parfaite",
      desc: "Depuis l'arrivée du TGV Océane, Bordeaux s'est rapprochée d'un coup de l'Île-de-France. Partez le vendredi soir, rentrez le dimanche. En 48 heures, vous avez le temps de visiter deux châteaux, déguster une douzaine de cuvées et dîner dans un restaurant étoilé.",
    },
    {
      titre: "Des châteaux ouverts, et pas seulement les grands noms",
      desc: "L'une des forces de Bordeaux est l'hospitalité de ses domaines. Des Grands Crus Classés aux petits vignerons familiaux de l'Entre-Deux-Mers, l'accueil est sincère. Et souvent, c'est dans les propriétés confidentielles qu'on vit les meilleurs moments.",
    },
    {
      titre: "Des expériences qui vont bien au-delà de la dégustation",
      desc: "Nuit dans un tonneau géant au Château de Bonhoste, vélo électrique dans les vignes de Pessac-Léognan, escape game œnologique, balade en side-car entre les cépages… Bordeaux a réinventé l'œnotourisme pour ceux qui veulent autre chose qu'un verre et une brochure.",
    },
    {
      titre: "Un patrimoine classé et une ville vivante",
      desc: "Saint-Émilion est le premier vignoble de France inscrit au patrimoine mondial de l'UNESCO (1999). Et Bordeaux-ville n'est pas en reste : la Cité du Vin, les quais rénovés, les Chartrons, les restaurants étoilés — la ville vaut le détour à elle seule.",
    },
    {
      titre: "Une gastronomie à la hauteur du terroir",
      desc: "La métropole bordelaise compte onze étoiles Michelin et des dizaines de tables de châteaux où la cuisine rivalise avec la cave. Cannelés, entrecôte bordelaise, huîtres du Bassin d'Arcachon et vins de Sauternes : l'accord parfait existe, et il est ici.",
    },
  ]

  const vignobles = [
    {
      id: "medoc",
      label: "Le Médoc",
      badge: "Rive gauche · Haut-Médoc",
      desc: "C'est ici que se trouvent les noms qui ont fait la réputation mondiale de Bordeaux : Margaux, Pauillac, Saint-Estèphe. Une route des vins de 80 kilomètres borde l'estuaire de la Gironde, jalonnée de châteaux architecturalement spectaculaires. On vient au Médoc pour être impressionné — et rarement déçu.",
      detail: "Les vins sont puissants, structurés, construits pour vieillir. Les Cabernet Sauvignon dominent. Attendez-vous à des tannins fermes, des arômes de cassis, de cèdre, de cuir. Le Médoc, c'est le vin de ceux qui savent attendre.",
      conseil: "Réservez une visite chez un Cru Bourgeois accessible pour comparer avec un Grand Cru Classé. La différence est réelle, mais les propriétés familiales offrent souvent une expérience humaine plus mémorable.",
      chateaux: [
        { nom: "Château Mouton Rothschild", label: "1er Grand Cru" },
        { nom: "Château Léoville Poyferré", label: "2ème Grand Cru" },
        { nom: "Château Sénéjac", label: "Cru Bourgeois" },
        { nom: "Château Malescasse", label: "Pique-nique vignes" },
      ],
      periode: "Avril (Portes Ouvertes) · Juin–Octobre (haute saison)",
    },
    {
      id: "saint-emilion",
      label: "Saint-Émilion",
      badge: "Rive droite · UNESCO",
      desc: "Classé au patrimoine mondial de l'UNESCO depuis 1999, Saint-Émilion est probablement le site œnotouristique le plus complet de France. Le village médiéval se visite à pied entre deux dégustations, les caves souterraines plongent sous les ruelles pavées, et les vins — dominés par le Merlot — sont parmi les plus appréciables jeunes de toute la Gironde.",
      detail: "C'est aussi le terroir idéal pour les néophytes : les vins sont ronds, fruités, accessibles. Une visite guidée à pied ou en tuk-tuk électrique — avec arrêt chez Angélus ou Pavie — suffit à comprendre pourquoi cette appellation est l'une des plus convoitées au monde.",
      conseil: "Évitez la haute saison (juillet–août) si vous cherchez une expérience authentique. Venez en mai pour les Portes Ouvertes, ou en septembre pour les vendanges.",
      chateaux: [
        { nom: "Château Angélus", label: "Premier Grand Cru A" },
        { nom: "Château Pavie", label: "Premier Grand Cru A" },
        { nom: "Clos Fourtet", label: "Premier Grand Cru B" },
        { nom: "Cloître des Cordeliers", label: "Visite + crémant" },
      ],
      periode: "Mai (Portes Ouvertes) · Sept–Oct (vendanges)",
    },
    {
      id: "sauternes",
      label: "Sauternes",
      badge: "L'or liquide",
      desc: "On ne vient pas à Sauternes par hasard. On vient pour le Château d'Yquem, le seul Premier Grand Cru Classé Supérieur au monde, et pour comprendre comment le botrytis cinerea — la pourriture noble — transforme des raisins passerillés en quelque chose d'extraordinaire. Le vin de Sauternes est liquoreux, complexe, d'une longévité rare.",
      detail: "Moins fréquenté que Saint-Émilion, Sauternes réserve des expériences uniques : escape game au Château Guiraud, accord chocolat–Sauternes, dégustations verticales de millésimes. Une destination plus confidentielle, et pour cette raison plus attachante.",
      conseil: "Réservez impérativement à l'avance pour Château d'Yquem. Les visites sont limitées et très demandées. Château Guiraud, bio depuis 2011, est une excellente alternative plus accessible.",
      chateaux: [
        { nom: "Château d'Yquem", label: "Premier GCC Supérieur" },
        { nom: "Château Guiraud", label: "Bio · Best of Gold" },
        { nom: "Château Rayne Vigneau", label: "Pique-nique privatif" },
        { nom: "Château de Malle", label: "Jardin classé MH" },
      ],
      periode: "Toute l'année · Automne (récolte tardive)",
    },
    {
      id: "pomerol",
      label: "Pomerol & Libournais",
      badge: "Rive droite · Vins confidentiels",
      desc: "Pas d'église majestueuse, pas de village pittoresque — Pomerol est une appellation qui se mérite. C'est ici que se trouve Pétrus, l'un des vins les plus rares et les plus chers du monde, produit sur un sol d'argile bleue unique. Le Libournais regroupe aussi Lalande-de-Pomerol, Fronsac et Canon-Fronsac, des appellations moins connues mais aux rapports qualité/prix remarquables.",
      detail: "Pour le visiteur curieux, c'est une région idéale : moins de tourisme de masse, des propriétaires accessibles, et des vins d'une richesse et d'une complexité rares à ce niveau de production.",
      conseil: "Combinez Pomerol avec Saint-Émilion dans une même journée — les deux appellations sont séparées par quelques kilomètres seulement.",
      chateaux: [
        { nom: "Château La Fleur de Boüard", label: "Lalande-Pomerol" },
        { nom: "Château de la Rivière", label: "Caves souterraines" },
        { nom: "Château La Conseillante", label: "Pomerol" },
        { nom: "Château Moulin Haut-Laroque", label: "Fronsac" },
      ],
      periode: "Juin–Octobre · Combinable avec Saint-Émilion",
    },
    {
      id: "graves",
      label: "Graves & Pessac-Léognan",
      badge: "Rive gauche · À 20 min de Bordeaux",
      desc: "Pessac-Léognan est probablement le terroir le plus pratique à visiter depuis Bordeaux-centre : certains châteaux sont à 15 minutes en voiture de la gare Saint-Jean. La zone produit des rouges fins et des blancs secs d'une complexité rare, souvent négligés au profit du Médoc alors qu'ils méritent largement le détour.",
      detail: "Château Les Carmes Haut-Brion, avec son chai imaginé par Philippe Starck, est un must architecturel autant qu'œnologique. Château La Louvière propose des balades en trottinette électrique dans ses vignes.",
      conseil: "Une demi-journée suffit pour visiter deux propriétés de Pessac-Léognan depuis Bordeaux. Idéal pour une arrivée le vendredi soir avant un weekend plus complet.",
      chateaux: [
        { nom: "Château Les Carmes Haut-Brion", label: "Chai Starck" },
        { nom: "Château La Louvière", label: "Trottinette E" },
        { nom: "Château Smith Haut Lafitte", label: "2 ★ Michelin" },
        { nom: "Château Bouscaut", label: "GCC Graves 1953" },
      ],
      periode: "Toute l'année · Idéal en complément de Bordeaux-ville",
    },
  ]

  const experiences = [
    {
      profil: "Débutant",
      chateau: "Château Palais Cardinal · Saint-Émilion",
      appellation: "Saint-Émilion Grand Cru",
      note: "★4,9 · 21 avis",
      titre: "Visite & dégustation Grand Cru avec sphères en chocolat",
      desc: "L'entrée en matière parfaite pour découvrir Saint-Émilion sans intimidation. Visite guidée du domaine, dégustation commentée de 3 vins avec un accord chocolat artisanal. Simple, mémorable, accessible — le bon point de départ avant d'aller plus loin dans le vignoble.",
      lieu: "Saint-Sulpice-de-Faleyrens",
      lien: "https://www.winalist.fr/experiences/6454/visite-degustation-vins-et-spheres-en-chocolat?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
    },
    {
      profil: "Débutant",
      chateau: "Vignobles Bardet · Rive droite",
      appellation: "Saint-Émilion Grand Cru",
      note: "★4,8 · 108 avis",
      titre: "Balade à vélo 14 km dans les vignes, dégustation au bord de la Dordogne",
      desc: "La famille Bardet vous invite à sillonner leurs parcelles en autonomie sur un parcours balisé de 14 km avant une dégustation panoramique en bord de Dordogne. Le meilleur rapport grand air / terroir du vignoble bordelais — sans prérequis d'aucune sorte.",
      lieu: "Vignonet, près de Saint-Émilion",
      lien: "https://www.winalist.fr/experiences/3693/visite-avec-la-bulle-verte-parcours-a-velo-14km?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
    },
    {
      profil: "Débutant",
      chateau: "Château Soutard · Saint-Émilion",
      appellation: "Saint-Émilion Grand Cru Classé",
      note: "★4,9 · 57 avis",
      titre: "De la vigne à la bouteille — visite complète d'un Grand Cru Classé",
      desc: "Poussez les portes de l'une des plus anciennes propriétés de l'appellation pour un parcours de la vigne à la bouteille : vignes, chai à barriques, cave, dégustation finale. La façon la plus concrète de comprendre comment naît un grand vin bordelais.",
      lieu: "Saint-Émilion",
      lien: "https://www.winalist.fr/experiences/6278/de-la-vigne-a-la-bouteille?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
    },
    {
      profil: "Passionné",
      chateau: "Château Yon-Figeac · Saint-Émilion",
      appellation: "Saint-Émilion Grand Cru Classé",
      note: "★4,8 · 251 avis",
      titre: "Dégustation à la barrique — l'arôme en devenir au cœur des chais",
      desc: "Peu de châteaux offrent ce niveau d'accès. Vous goûtez directement au fût, discutez avec le maître de chai de l'élevage en cours, et comprenez comment le bois transforme le vin mois après mois. L'expérience qui change radicalement la façon dont on lit une étiquette de bordeaux.",
      lieu: "Saint-Émilion",
      lien: "https://www.winalist.fr/experiences/2569/degustation-a-la-barrique-l-arome-en-devenir?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
    },
    {
      profil: "Passionné",
      chateau: "Château Suduiraut · Sauternes",
      appellation: "Sauternes — 1er Cru Classé 1855",
      note: "★4,8 · 239 avis",
      titre: "Masterclass dégustation verticale — 3 millésimes d'un 1er Cru Classé",
      desc: "Un Premier Cru Classé de 1855 vous ouvre ses caves pour une masterclass rare : dégustation verticale de 3 millésimes commentée par l'œnologue du domaine. Comprendre pourquoi les grandes années transforment un terroir exceptionnel en quelque chose d'inoubliable.",
      lieu: "Preignac, Sauternes",
      lien: "https://www.winalist.fr/experiences/2036/masterclass-degustation-verticale?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
    },
    {
      profil: "Passionné",
      chateau: "Château Ferrand · Pomerol",
      appellation: "Pomerol — Agriculture biologique",
      note: "★4,8 · 212 avis",
      titre: "Le dégustateur — immersion sensorielle complète dans un Pomerol bio",
      desc: "Propriété familiale depuis 1934, Château Ferrand conduit ses vignes en bio et vous propose une expérience sensorielle complète : olfaction, analyse visuelle, dégustation commentée sur plusieurs cuvées. Pour ceux qui veulent affiner leur palais dans un cadre authentique et familial.",
      lieu: "Libourne, Pomerol",
      lien: "https://www.winalist.fr/experiences/7268/le-degustateur?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
    },
    {
      profil: "Luxe",
      chateau: "Château Pape Clément · Pessac-Léognan",
      appellation: "Grand Cru Classé Graves — fondé en 1299",
      note: "★4,7 · 166 avis",
      titre: "B-Winemaker — créez votre propre vin dans l'un des plus anciens châteaux de Bordeaux",
      desc: "Fondé au XIVe siècle par le futur pape Clément V, ce domaine d'exception vous ouvre ses chais pour une session de vinification aux côtés du chef de cave. Assemblage, analyses sensorielles, dosage des cépages — vous repartez avec votre propre cuvée.",
      lieu: "Pessac — 15 min de Bordeaux",
      lien: "https://www.winalist.fr/experiences/371/b-winemaker-creez-votre-propre-vin?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
    },
    {
      profil: "Luxe",
      chateau: "Château de Rayne Vigneau · Sauternes",
      appellation: "Sauternes — 1er Grand Cru Classé 1855",
      note: "★4,8 · 294 avis",
      titre: "Dégustation Gold — cuvées millésimées d'exception dans un Premier Grand Cru Classé",
      desc: "Formule exclusive dans un domaine de 84 hectares classé en 1855 : dégustation Gold des cuvées les plus remarquables commentée par l'équipe technique. Pour ceux qui veulent vivre une expérience rare au cœur d'un grand Sauternes.",
      lieu: "Sauternes",
      lien: "https://www.winalist.fr/experiences/2036/masterclass-degustation-verticale?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158#utm_source=affiliate-ae",
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
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Bordeaux</span>
          </div>
          <span style={{ display: "inline-block", background: "#f28322", color: "#ffffff", fontSize: "11px", fontWeight: 800, padding: "5px 14px", borderRadius: "20px", marginBottom: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif" }}>
            Guide complet
          </span>
          <h1 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "clamp(30px, 5vw, 52px)", color: "#ffffff", lineHeight: 1.05, marginBottom: "20px", maxWidth: "800px" }}>
            Œnotourisme à Bordeaux : mes expériences coup de cœur au cœur des vignes
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", maxWidth: "620px", fontFamily: "'Nunito', sans-serif" }}>
            Capitale mondiale du vin, Bordeaux n'est pas qu'une destination pour sommeliers en col blanc. C'est un terrain de jeu immense — 110 000 hectares de vignes, 6 000 châteaux, 65 appellations — où chaque profil de voyageur trouve son bonheur.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}>
              <img src="https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Julien-le-petit-vigneron.webp" alt="Julien" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff", fontFamily: "'Nunito', sans-serif" }}>Julien</div>
              <div style={{ fontSize: "12px", color: "#f5c9a8", fontFamily: "'Nunito', sans-serif" }}>Guide Bordeaux · 12 min de lecture</div>
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

            {/* INTRO */}
            <div style={{ paddingTop: "64px", marginBottom: "48px" }}>
              <div style={{ background: "#ffe7ca", borderLeft: "4px solid #bf3e0f", borderRadius: "0 12px 12px 0", padding: "20px 28px" }}>
                <p style={{ fontSize: "18px", color: "#731702", lineHeight: 1.7, fontWeight: 600, margin: 0, fontFamily: "'Nunito', sans-serif" }}>
                  Ce guide vous dit exactement où aller, quoi faire, et comment ne pas rater l'essentiel à Bordeaux — avec mes expériences coup de cœur et les meilleurs liens pour réserver directement.
                </p>
              </div>
            </div>

            {/* SECTION 1 */}
            <h2 id="raisons" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "24px", scrollMarginTop: "90px" }}>
              6 raisons de choisir Bordeaux plutôt qu'une autre région viticole
            </h2>
            <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
              Bourgogne, Alsace, Val de Loire : la France ne manque pas de vignobles à explorer. Alors pourquoi Bordeaux ? Parce qu'aucune autre région ne combine à ce point la diversité des terroirs, l'accessibilité et la richesse de l'offre touristique.
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", marginBottom: "56px" }}>
              {raisons.map((r, i) => (
                <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #f0d4b8", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#ffe7ca", border: "1px solid #f0d4b8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Rammetto One', cursive", fontSize: "13px", color: "#bf3e0f" }}>
                    {String(i + 1)}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "17px", color: "#731702", marginBottom: "8px" }}>{r.titre}</h3>
                    <p style={{ fontSize: "15px", color: "#9a6040", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", margin: 0 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION 2 */}
            <h2 id="vignobles" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "24px", scrollMarginTop: "90px" }}>
              Quel vignoble choisir selon vos envies ?
            </h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "24px", marginBottom: "56px" }}>
              {vignobles.map((v) => (
                <div key={v.id} style={{ background: "white", borderRadius: "16px", border: "1px solid #f0d4b8", overflow: "hidden" }}>
                  <div style={{ background: "#fdf8f2", padding: "16px 24px", borderBottom: "1px solid #f0d4b8", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ background: "#f28322", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "1px", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap" as const }}>
                      {v.badge}
                    </span>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "20px", color: "#731702", margin: 0 }}>{v.label}</h3>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ fontSize: "16px", color: "#4a2010", lineHeight: 1.9, marginBottom: "16px", fontFamily: "'Nunito', sans-serif" }}>{v.desc}</p>
                    <p style={{ fontSize: "16px", color: "#4a2010", lineHeight: 1.9, marginBottom: "20px", fontFamily: "'Nunito', sans-serif" }}>{v.detail}</p>
                    <div style={{ background: "#ffe7ca", borderRadius: "8px", padding: "14px 18px", marginBottom: "20px", border: "1px solid #f0c49a" }}>
                      <p style={{ fontSize: "14px", color: "#731702", lineHeight: 1.7, fontWeight: 600, fontFamily: "'Nunito', sans-serif", margin: 0 }}>
                        Notre conseil : {v.conseil}
                      </p>
                    </div>
                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 800, color: "#bf3e0f", textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "10px", fontFamily: "'Nunito', sans-serif" }}>Châteaux recommandés</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {v.chateaux.map((c) => (
                          <div key={c.nom} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: "#fdf8f2", borderRadius: "8px", border: "1px solid #f0d4b8" }}>
                            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#bf3e0f", flexShrink: 0, display: "inline-block" }}></span>
                            <div>
                              <div style={{ fontSize: "13px", fontWeight: 700, color: "#731702", fontFamily: "'Nunito', sans-serif" }}>{c.nom}</div>
                              <div style={{ fontSize: "11px", color: "#9a6040", fontFamily: "'Nunito', sans-serif" }}>{c.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#9a6040", fontFamily: "'Nunito', sans-serif", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#f28322", display: "inline-block" }}></span>
                      Meilleure période : {v.periode}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION 3 — EXPÉRIENCES */}
            <h2 id="experiences" style={{ fontFamily: "'Rammetto One', cursive", fontSize: "28px", color: "#731702", marginBottom: "16px", scrollMarginTop: "90px" }}>
              Les expériences à faire à Bordeaux
            </h2>
            <p style={{ fontSize: "17px", color: "#4a2010", lineHeight: 1.9, marginBottom: "8px", fontFamily: "'Nunito', sans-serif" }}>
              La dégustation commentée, c'est le point de départ. Mais l'œnotourisme bordelais est allé bien au-delà. Voici ma sélection personnelle d'expériences à réserver via Winalist.
            </p>
            <p style={{ fontSize: "13px", color: "#9a6040", marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
              Crédit photo : <a href="https://www.winalist.fr/" target="_blank" rel="noopener noreferrer" style={{ color: "#bf3e0f" }}>winalist.fr</a>
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px", marginBottom: "56px" }}>
              {experiences.map((exp, i) => (
                <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #f0d4b8", overflow: "hidden" }}>
                  <div style={{ padding: "20px 24px 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" as const }}>
                      <span style={{ background: profilColors[exp.profil]?.bg || "#ffe7ca", color: profilColors[exp.profil]?.color || "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>
                        {exp.profil}
                      </span>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#f28322", fontFamily: "'Nunito', sans-serif" }}>{exp.note}</span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#9a6040", fontFamily: "'Nunito', sans-serif", marginBottom: "4px" }}>{exp.chateau}</div>
                    <div style={{ fontSize: "11px", color: "#bf3e0f", fontWeight: 700, fontFamily: "'Nunito', sans-serif", textTransform: "uppercase" as const, letterSpacing: "0.5px", marginBottom: "12px" }}>{exp.appellation}</div>
                    <h3 style={{ fontFamily: "'Rammetto One', cursive", fontSize: "18px", color: "#731702", marginBottom: "12px", lineHeight: 1.3 }}>{exp.titre}</h3>
                    <p style={{ fontSize: "15px", color: "#4a2010", lineHeight: 1.8, marginBottom: "16px", fontFamily: "'Nunito', sans-serif" }}>{exp.desc}</p>
                    <div style={{ fontSize: "13px", color: "#9a6040", fontFamily: "'Nunito', sans-serif", marginBottom: "16px" }}>
                      <strong style={{ color: "#731702" }}>Localisation :</strong> {exp.lieu}
                    </div>
                  </div>
                  <div style={{ padding: "0 24px 20px" }}>
                    <a href={exp.lien} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#bf3e0f", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "12px 22px", borderRadius: "8px", textDecoration: "none" }}>
                      Réserver cette expérience
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
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
                    <span style={{ background: "#ffe7ca", color: "#bf3e0f", fontSize: "10px", fontWeight: 800, padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase" as const, letterSpacing: "0.5px", fontFamily: "'Nunito', sans-serif" }}>Expert Bordeaux</span>
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
                  { anchor: "raisons", label: "6 raisons de choisir Bordeaux" },
                  { anchor: "vignobles", label: "Quel vignoble choisir ?" },
                  { anchor: "experiences", label: "Les expériences à faire" },
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
                Toutes nos expériences Bordeaux sur Winalist
              </p>
              <a href="https://www.winalist.fr/france/bordeaux?utm_medium=affiliate-ae&utm_campaign=le-petit-vigneron&utm_source=affiliate-ae&ae=158" target="_blank" rel="noopener noreferrer nofollow" style={{ display: "block", background: "#f28322", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 800, padding: "10px 16px", borderRadius: "8px", textDecoration: "none" }}>
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
            Prêt à découvrir Bordeaux ?
          </h2>
          <p style={{ fontSize: "16px", color: "#f5c9a8", lineHeight: 1.8, marginBottom: "32px", fontFamily: "'Nunito', sans-serif" }}>
            Retrouvez toutes nos destinations oenotouristiques et préparez votre prochain séjour dans les vignes.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" as const, flexWrap: "wrap" as const }}>
            <a href="/oenotourisme" style={{ background: "#ffffff", color: "#731702", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, padding: "13px 26px", borderRadius: "8px", textDecoration: "none" }}>
              Toutes les destinations
            </a>
            <a href="/oenotourisme/bourgogne" style={{ background: "transparent", color: "#ffffff", fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, padding: "13px 26px", borderRadius: "8px", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Oenotourisme Bourgogne
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
        @media (max-width: 1024px) {
          .content-layout { grid-template-columns: 1fr !important; }
          .sommaire-desktop { display: none !important; }
        }
      `}</style>

    </main>
  )
}