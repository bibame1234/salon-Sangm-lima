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
    name: "Salon VIP Prestige 6 places",
    category: "salon",
    price: 350000,
    image: "salon-vip-prestige.jpg",
    badge: "VIP"
  },
  {
    name: "Salon standard angulaire 6 places",
    category: "salon",
    price: 250000,
    image: "salon-vip-royal.jpg",
    badge: "standard"
  },
  {
    name: "Salon VIP Impérial mousse",
    category: "salon",
    price: 350000,
    image: "salon-vip-imperial.jpg",
    badge: "VIP"
  },
  {
    name: "Salon angulaire VIP Élégance 8 places",
    category: "salon",
    price: 400000,
    image: "salon-vip-elegance.jpg",
    badge: "VIP"
  },
  {
    name: "salon 5 places Confort",
    category: "salon",
    price: 300000,
    image: "canape-3places-confort.jpg",
    badge: ""
  },
  {
    name: "salon 6 place maron",
    category: "salon",
    price: 220000,
    image: "canape-angle-moderne.jpg",
    badge: "Neuf"
  },
  {
    name: "salon angulaire 6 place veloure",
    category: "salon",
    price: 350000,
    image: "canape-2places-tissu.jpg",
    badge: "VIP"
  },
  {
    name: "salon veloure 6 place",
    category: "salon",
    price: 350000,
    image: "canape-lit-convertible.jpg",
    badge: ""
  },
  {
    name: "salon 6 places deux teintes",
    category: "salon",
    price: 200000,
    image: "canape-3places-cuir.jpg",
    badge: ""
  },
  {
    name: "lit confort blanc trois places",
    category: "lit",
    price: 120000,
    image: "fauteuil-cuir-confort.jpg",
    badge: ""
  },
  {
    name: "salle á manger 6 places",
    category: "salle á manger",
    price: 120000,
    image: "fauteuil-relax-inclinable.jpg",
    badge: "Neuf"
  },
  {
    name: "lit VIP trois places confort",
    category: "fauteuil",
    price: 95000,
    image: "fauteuil-vip-bois.jpg",
    badge: ""
  },
  {
    name: "lit VIP trois places confort",
    category: "lit",
    price: 145000,
    image: "fauteuil-vip-bois.jpg",
    badge: "VIP"
  }
];
