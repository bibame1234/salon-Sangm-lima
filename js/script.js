// ============ CATALOGUE PRODUITS ============
const WHATSAPP_NUMBER = "237694597595";

// Formatte un nombre en FCFA avec espaces (ex: 450000 -> "450 000 FCFA")
function formatPrice(n){
  return n.toLocaleString('fr-FR').replace(/,/g, ' ') + ' FCFA';
}

// Icône de secours affichée si une photo produit est introuvable
function handleProductImgError(imgEl){
  imgEl.style.display = 'none';
  const wrap = imgEl.parentElement;
  if(wrap && !wrap.querySelector('.fallback-icon')){
    const span = document.createElement('span');
    span.className = 'fallback-icon';
    span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3"/><path d="M15 11V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3"/><path d="M3 11h18v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M4 16v3M20 16v3"/></svg>';
    wrap.appendChild(span);
  }
}

// Construit une carte produit (HTML)
function buildProductCard(p){
  const badgeHtml = p.badge ? `<div class="product-badge">${p.badge}</div>` : '';
  const waText = encodeURIComponent(`Bonjour, je suis intéressé(e) par : ${p.name} (${formatPrice(p.price)})`);
  const waIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1s-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.5.5 0 0 0 0-.5c-.1-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.7 2.7 0 0 0-.9 2.1 4.8 4.8 0 0 0 1 2.5 10.9 10.9 0 0 0 4.2 3.7c.6.3 1 .4 1.4.5a3.4 3.4 0 0 0 1.5.1 2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.2-.4-.3z"/></svg>';
  return `
    <div class="product-card" data-category="${p.category}">
      <div class="product-img">
        <img src="images/${p.image}" alt="${p.name}" loading="lazy" onerror="handleProductImgError(this)">
        ${badgeHtml}
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="product-price">${formatPrice(p.price)}</div>
        <a class="product-order" href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}" target="_blank" rel="noopener">
          ${waIconSvg} Commander
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