import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── ACCORD METS-VINS (WordPress : /:slug/ → Next.js : /accord-mets-vins/:slug) ──
      { source: "/quel-plat-avec-un-haut-medoc", destination: "/accord-mets-vins/quel-plat-avec-un-haut-medoc", permanent: true },
      { source: "/quel-plat-avec-un-haut-medoc/", destination: "/accord-mets-vins/quel-plat-avec-un-haut-medoc", permanent: true },
      { source: "/chablis-et-raclette", destination: "/accord-mets-vins/chablis-et-raclette", permanent: true },
      { source: "/chablis-et-raclette/", destination: "/accord-mets-vins/chablis-et-raclette", permanent: true },
      { source: "/pouilly-fume-et-raclette", destination: "/accord-mets-vins/pouilly-fume-et-raclette", permanent: true },
      { source: "/pouilly-fume-et-raclette/", destination: "/accord-mets-vins/pouilly-fume-et-raclette", permanent: true },
      { source: "/riesling-et-raclette-laccord-parfait-en-5-points", destination: "/accord-mets-vins/riesling-et-raclette-laccord-parfait-en-5-points", permanent: true },
      { source: "/riesling-et-raclette-laccord-parfait-en-5-points/", destination: "/accord-mets-vins/riesling-et-raclette-laccord-parfait-en-5-points", permanent: true },
      { source: "/pouilly-fume-foie-gras", destination: "/accord-mets-vins/pouilly-fume-foie-gras", permanent: true },
      { source: "/pouilly-fume-foie-gras/", destination: "/accord-mets-vins/pouilly-fume-foie-gras", permanent: true },
      { source: "/plat-avec-sancerre-rouge", destination: "/accord-mets-vins/plat-avec-sancerre-rouge", permanent: true },
      { source: "/plat-avec-sancerre-rouge/", destination: "/accord-mets-vins/plat-avec-sancerre-rouge", permanent: true },
      { source: "/que-manger-avec-un-saint-estephe", destination: "/accord-mets-vins/que-manger-avec-un-saint-estephe", permanent: true },
      { source: "/que-manger-avec-un-saint-estephe/", destination: "/accord-mets-vins/que-manger-avec-un-saint-estephe", permanent: true },
      { source: "/quel-vin-avec-fajitas", destination: "/accord-mets-vins/quel-vin-avec-fajitas", permanent: true },
      { source: "/quel-vin-avec-fajitas/", destination: "/accord-mets-vins/quel-vin-avec-fajitas", permanent: true },
      { source: "/que-manger-avec-sancerre-blanc", destination: "/accord-mets-vins/que-manger-avec-sancerre-blanc", permanent: true },
      { source: "/que-manger-avec-sancerre-blanc/", destination: "/accord-mets-vins/que-manger-avec-sancerre-blanc", permanent: true },
      { source: "/que-manger-avec-riesling", destination: "/accord-mets-vins/que-manger-avec-riesling", permanent: true },
      { source: "/que-manger-avec-riesling/", destination: "/accord-mets-vins/que-manger-avec-riesling", permanent: true },
      { source: "/que-manger-avec-un-saint-julien", destination: "/accord-mets-vins/que-manger-avec-un-saint-julien", permanent: true },
      { source: "/que-manger-avec-un-saint-julien/", destination: "/accord-mets-vins/que-manger-avec-un-saint-julien", permanent: true },
      { source: "/quel-vin-choisir-avec-la-raclette", destination: "/accord-mets-vins/quel-vin-choisir-avec-la-raclette", permanent: true },
      { source: "/quel-vin-choisir-avec-la-raclette/", destination: "/accord-mets-vins/quel-vin-choisir-avec-la-raclette", permanent: true },
      { source: "/quel-vin-avec-safran", destination: "/accord-mets-vins/quel-vin-avec-safran", permanent: true },
      { source: "/quel-vin-avec-safran/", destination: "/accord-mets-vins/quel-vin-avec-safran", permanent: true },
      { source: "/que-manger-avec-sauvignon-blanc", destination: "/accord-mets-vins/que-manger-avec-sauvignon-blanc", permanent: true },
      { source: "/que-manger-avec-sauvignon-blanc/", destination: "/accord-mets-vins/que-manger-avec-sauvignon-blanc", permanent: true },
      { source: "/quel-vin-avec-paella", destination: "/accord-mets-vins/quel-vin-avec-paella", permanent: true },
      { source: "/quel-vin-avec-paella/", destination: "/accord-mets-vins/quel-vin-avec-paella", permanent: true },
      { source: "/accords-mets-pouilly-fume-les-10-plats-a-associer-avec-un-pouilly-fume", destination: "/accord-mets-vins/accords-mets-pouilly-fume-les-10-plats-a-associer-avec-un-pouilly-fume", permanent: true },
      { source: "/accords-mets-pouilly-fume-les-10-plats-a-associer-avec-un-pouilly-fume/", destination: "/accord-mets-vins/accords-mets-pouilly-fume-les-10-plats-a-associer-avec-un-pouilly-fume", permanent: true },
      { source: "/quel-vin-avec-sanglier", destination: "/accord-mets-vins/quel-vin-avec-sanglier", permanent: true },
      { source: "/quel-vin-avec-sanglier/", destination: "/accord-mets-vins/quel-vin-avec-sanglier", permanent: true },
      { source: "/quel-vin-avec-la-blanquette-de-veau-guide-complet-2026", destination: "/accord-mets-vins/quel-vin-avec-la-blanquette-de-veau-guide-complet-2026", permanent: true },
      { source: "/quel-vin-avec-la-blanquette-de-veau-guide-complet-2026/", destination: "/accord-mets-vins/quel-vin-avec-la-blanquette-de-veau-guide-complet-2026", permanent: true },
      { source: "/que-manger-avec-gewurztraminer", destination: "/accord-mets-vins/que-manger-avec-gewurztraminer", permanent: true },
      { source: "/que-manger-avec-gewurztraminer/", destination: "/accord-mets-vins/que-manger-avec-gewurztraminer", permanent: true },
      { source: "/quel-vin-avec-tajine-agneau", destination: "/accord-mets-vins/quel-vin-avec-tajine-agneau", permanent: true },
      { source: "/quel-vin-avec-tajine-agneau/", destination: "/accord-mets-vins/quel-vin-avec-tajine-agneau", permanent: true },
      { source: "/que-manger-avec-un-sylvaner-20-idees-daccords-mets-vins", destination: "/accord-mets-vins/que-manger-avec-un-sylvaner-20-idees-daccords-mets-vins", permanent: true },
      { source: "/que-manger-avec-un-sylvaner-20-idees-daccords-mets-vins/", destination: "/accord-mets-vins/que-manger-avec-un-sylvaner-20-idees-daccords-mets-vins", permanent: true },
      { source: "/riesling-et-choucroute-pourquoi-cest-laccord-ideal", destination: "/accord-mets-vins/riesling-et-choucroute-pourquoi-cest-laccord-idea", permanent: true },
      { source: "/riesling-et-choucroute-pourquoi-cest-laccord-ideal/", destination: "/accord-mets-vins/riesling-et-choucroute-pourquoi-cest-laccord-idea", permanent: true },
      { source: "/gewurztraminer-et-raclette-laccord-audacieux-en-5-points", destination: "/accord-mets-vins/que-manger-avec-gewurztraminer", permanent: true },
      { source: "/gewurztraminer-et-raclette-laccord-audacieux-en-5-points/", destination: "/accord-mets-vins/que-manger-avec-gewurztraminer", permanent: true },
      { source: "/quel-vin-avec-des-tapas", destination: "/accord-mets-vins/quel-vin-avec-des-tapas", permanent: true },
      { source: "/quel-vin-avec-des-tapas/", destination: "/accord-mets-vins/quel-vin-avec-des-tapas", permanent: true },
      { source: "/que-manger-avec-un-tempranillo", destination: "/accord-mets-vins/que-manger-avec-un-tempranillo", permanent: true },
      { source: "/que-manger-avec-un-tempranillo/", destination: "/accord-mets-vins/que-manger-avec-un-tempranillo", permanent: true },

      // ── APPELLATIONS ──
      { source: "/les-differences-entre-le-medoc-et-haut-medoc", destination: "/appellations/les-differences-entre-le-medoc-et-haut-medoc", permanent: true },
      { source: "/les-differences-entre-le-medoc-et-haut-medoc/", destination: "/appellations/les-differences-entre-le-medoc-et-haut-medoc", permanent: true },
      { source: "/classement-haut-medoc-grands-crus", destination: "/appellations/classement-haut-medoc-grands-crus", permanent: true },
      { source: "/classement-haut-medoc-grands-crus/", destination: "/appellations/classement-haut-medoc-grands-crus", permanent: true },
      { source: "/chateau-lafite-rothschild-vs-chateau-mouton-rothschild", destination: "/appellations/chateau-lafite-rothschild-vs-chateau-mouton-rothschild", permanent: true },
      { source: "/chateau-lafite-rothschild-vs-chateau-mouton-rothschild/", destination: "/appellations/chateau-lafite-rothschild-vs-chateau-mouton-rothschild", permanent: true },
      { source: "/pouilly-fume-sancerre", destination: "/appellations/pouilly-fume-sancerre", permanent: true },
      { source: "/pouilly-fume-sancerre/", destination: "/appellations/pouilly-fume-sancerre", permanent: true },

      // ── CÉPAGES ──
      { source: "/le-garnacha", destination: "/cepages/le-garnacha", permanent: true },
      { source: "/le-garnacha/", destination: "/cepages/le-garnacha", permanent: true },
      { source: "/riesling-vs-sylvaner-les-5-differences-essentielles", destination: "/cepages/riesling-vs-sylvaner-les-5-differences-essentielles", permanent: true },
      { source: "/riesling-vs-sylvaner-les-5-differences-essentielles/", destination: "/cepages/riesling-vs-sylvaner-les-5-differences-essentielles", permanent: true },

      // ── OENOTOURISME ──
      { source: "/liste-chateau-saint-estephe", destination: "/oenotourisme/liste-chateau-saint-estephe", permanent: true },
      { source: "/liste-chateau-saint-estephe/", destination: "/oenotourisme/liste-chateau-saint-estephe", permanent: true },
      { source: "/liste-chateau-pauillac", destination: "/oenotourisme/liste-chateau-pauillac", permanent: true },
      { source: "/liste-chateau-pauillac/", destination: "/oenotourisme/liste-chateau-pauillac", permanent: true },
      { source: "/liste-chateau-medoc-guide-complet-des-meilleurs-domaines-viticoles", destination: "/oenotourisme/liste-chateau-medoc-guide-complet-des-meilleurs-domaines-viticoles", permanent: true },
      { source: "/liste-chateau-medoc-guide-complet-des-meilleurs-domaines-viticoles/", destination: "/oenotourisme/liste-chateau-medoc-guide-complet-des-meilleurs-domaines-viticoles", permanent: true },
      { source: "/liste-chateau-saint-julien", destination: "/oenotourisme/liste-chateau-saint-julien", permanent: true },
      { source: "/liste-chateau-saint-julien/", destination: "/oenotourisme/liste-chateau-saint-julien", permanent: true },
      { source: "/liste-chateau-margaux-guide-complet-des-21-grands-crus-classes-2026", destination: "/oenotourisme/iste-chateau-margaux-guide-complet-des-21-grands-crus-classes-2026", permanent: true },
      { source: "/liste-chateau-margaux-guide-complet-des-21-grands-crus-classes-2026/", destination: "/oenotourisme/iste-chateau-margaux-guide-complet-des-21-grands-crus-classes-2026", permanent: true },
      { source: "/comment-conserver-un-vin-rouge-ouvert", destination: "/oenotourisme/comment-conserver-un-vin-rouge-ouvert", permanent: true },
      { source: "/comment-conserver-un-vin-rouge-ouvert/", destination: "/oenotourisme/comment-conserver-un-vin-rouge-ouvert", permanent: true },

      // ── SANS ÉQUIVALENT → accueil / boutique ──
      { source: "/domaines-fabre-chateau-le-chene-2019-tout-savoir-sur-cette-bouteille", destination: "/boutique", permanent: true },
      { source: "/domaines-fabre-chateau-le-chene-2019-tout-savoir-sur-cette-bouteille/", destination: "/boutique", permanent: true },
      { source: "/stephane-ogier-le-temps-est-venu-2023", destination: "/boutique", permanent: true },
      { source: "/stephane-ogier-le-temps-est-venu-2023/", destination: "/boutique", permanent: true },
      { source: "/paul-jaboulet-aine-cotes-du-rhone-parallele-45", destination: "/boutique", permanent: true },
      { source: "/paul-jaboulet-aine-cotes-du-rhone-parallele-45/", destination: "/boutique", permanent: true },
      { source: "/presentation-lacotte-grand-sejour-2023-saint-chinian", destination: "/boutique", permanent: true },
      { source: "/presentation-lacotte-grand-sejour-2023-saint-chinian/", destination: "/boutique", permanent: true },
      { source: "/le-petit-ballon-test-et-avis", destination: "/", permanent: true },
      { source: "/le-petit-ballon-test-et-avis/", destination: "/", permanent: true },
      { source: "/infographie-la-consommation-de-vin-en-france-et-ses-evolutions", destination: "/", permanent: true },
      { source: "/infographie-la-consommation-de-vin-en-france-et-ses-evolutions/", destination: "/", permanent: true },
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ciwihnnhdiwfqtywviko.supabase.co",
      },
    ],
  },
}

export default nextConfig