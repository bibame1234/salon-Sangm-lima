/* =========================================================
   LISTE DES PRODUITS — Ets Freddy Endzie
   =========================================================
   Pour AJOUTER un produit : copiez un bloc { ... } ci-dessous,
   collez-le, changez les valeurs, et sauvegardez.

   Champs :
   - name     : nom du produit (texte)
   - category : "salon"  |  "canape"  |  "fauteuil"
   - price    : prix en FCFA (nombre, sans espace ni lettre)
   - image    : nom du fichier photo, placé dans le dossier images/
   - badge    : (optionnel) texte court, ex: "VIP", "Neuf", "Promo"
                laissez "" (vide) si vous ne voulez pas de badge

   Pour SUPPRIMER un produit : supprimez tout son bloc { ... },
   avec la virgule qui suit.

   Pour CHANGER l'ORDRE : déplacez les blocs entre eux.
   ========================================================= */

const products = [
  {
    name: "Salon VIP Prestige 7 places",
    category: "salon",
    price: 450000,
    image: "salon-vip-prestige.jpg",
    badge: "VIP"
  },
  {
    name: "Salon VIP Royal 5 places",
    category: "salon",
    price: 380000,
    image: "salon-vip-royal.jpg",
    badge: "VIP"
  },
  {
    name: "Salon VIP Impérial cuir",
    category: "salon",
    price: 520000,
    image: "salon-vip-imperial.jpg",
    badge: "VIP"
  },
  {
    name: "Salon VIP Élégance 6 places",
    category: "salon",
    price: 410000,
    image: "salon-vip-elegance.jpg",
    badge: ""
  },
  {
    name: "Canapé 3 places Confort",
    category: "canape",
    price: 150000,
    image: "canape-3places-confort.jpg",
    badge: ""
  },
  {
    name: "Canapé d'angle moderne",
    category: "canape",
    price: 220000,
    image: "canape-angle-moderne.jpg",
    badge: "Neuf"
  },
  {
    name: "Canapé 2 places tissu",
    category: "canape",
    price: 110000,
    image: "canape-2places-tissu.jpg",
    badge: ""
  },
  {
    name: "Canapé lit convertible",
    category: "canape",
    price: 180000,
    image: "canape-lit-convertible.jpg",
    badge: ""
  },
  {
    name: "Canapé 3 places cuir",
    category: "canape",
    price: 195000,
    image: "canape-3places-cuir.jpg",
    badge: ""
  },
  {
    name: "Fauteuil Cuir Confort",
    category: "fauteuil",
    price: 120000,
    image: "fauteuil-cuir-confort.jpg",
    badge: ""
  },
  {
    name: "Fauteuil Relax inclinable",
    category: "fauteuil",
    price: 135000,
    image: "fauteuil-relax-inclinable.jpg",
    badge: "Neuf"
  },
  {
    name: "Fauteuil bureau capitonné",
    category: "fauteuil",
    price: 95000,
    image: "fauteuil-bureau-capitonne.jpg",
    badge: ""
  },
  {
    name: "Fauteuil VIP accoudoirs bois",
    category: "fauteuil",
    price: 145000,
    image: "fauteuil-vip-bois.jpg",
    badge: "VIP"
  }
];
