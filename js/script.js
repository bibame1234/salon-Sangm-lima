// ============ CATALOGUE PRODUITS ============
const WHATSAPP_NUMBER = "237694597595";

// Formatte un nombre en FCFA avec espaces (ex: 450000 -> "450 000 FCFA")
function formatPrice(n){
  return n.toLocaleString('fr-FR').replace(/,/g, ' ') + ' FCFA';
}

// Construit une carte produit (HTML)
function buildProductCard(p){
  const badgeHtml = p.badge ? `<div class="product-badge">${p.badge}</div>` : '';
  const waText = encodeURIComponent(`Bonjour, je suis intéressé(e) par : ${p.name} (${formatPrice(p.price)})`);
  return `
    <div class="product-card" data-category="${p.category}">
      <div class="product-img">
        <img src="images/${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.innerHTML+='<i class=\\'ti ti-sofa\\'></i>';">
        ${badgeHtml}
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="product-price">${formatPrice(p.price)}</div>
        <a class="product-order" href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}" target="_blank" rel="noopener">
          <i class="ti ti-brand-whatsapp"></i> Commander
        </a>
      </div>
    </div>`;
}

// Affiche les produits (filtrés ou tous) dans la grille
function renderProducts(filter){
  const grid = document.getElementById('catalogGrid');
  if(!grid) return;
  const list = (filter && filter !== 'all')
    ? products.filter(p => p.category === filter)
    : products;
  grid.innerHTML = list.map(buildProductCard).join('');
}

// Gestion des boutons de filtre
document.addEventListener('DOMContentLoaded', function(){
  renderProducts('all');

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function(){
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderProducts(this.dataset.filter);
    });
  });
});

// Menu mobile
function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

// Formulaire -> WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nom = this.nom.value.trim();
  const tel = this.telephone.value.trim();
  const msg = this.message.value.trim();
  const texte = `Bonjour Ets Freddy Endzie,%0A%0ANom: ${encodeURIComponent(nom)}%0ATéléphone: ${encodeURIComponent(tel)}%0AMessage: ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/237694597595?text=${texte}`, '_blank');
});

// Fermer le menu mobile au clic sur un lien + fermer au resize desktop
window.addEventListener('resize', function(){
  if(window.innerWidth > 860){
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  }
});