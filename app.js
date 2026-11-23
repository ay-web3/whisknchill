/**
 * WHISKnCHILL by Bukkie - Main Application Logic
 * WhatsApp Ordering & Menu Management
 * Phone: 07010511962 (Nigeria: 2347010511962)
 * Orders taken ONLY on Thursdays | Delivery on Saturdays
 * Location: Ibadan Only
 */

const WHATSAPP_NUMBER = "2347010511962";
const PHONE_DISPLAY = "07010511962";

// 1. PRODUCT CATALOG DATA (Cleaned of fancy adjectives; descriptions removed)
const PRODUCTS = [
  // --- BREAD VARIANTS ---
  {
    id: "bread-sardine",
    title: "Sardine Bread",
    category: "bread",
    categoryName: "Bread Variants",
    badge: "Popular",
    image: "sardine_bread.jpg",
    variants: [
      { name: "Midi Size", price: 4500 },
      { name: "Big", price: 10500 }
    ],
    minOrderNote: "Min. 2 Breads"
  },
  {
    id: "bread-coconut",
    title: "Coconut Bread",
    category: "bread",
    categoryName: "Bread Variants",
    badge: "Fresh",
    image: "coconut_bread.jpg",
    variants: [
      { name: "Midi Size", price: 4500 }
    ],
    minOrderNote: "Min. 2 Breads"
  },
  {
    id: "bread-cheesy-garlic",
    title: "Cheesy Garlic Bread",
    category: "bread",
    categoryName: "Bread Variants",
    badge: "Cheese & Garlic",
    image: "cheesy_garlic_bread.jpg",
    variants: [
      { name: "Midi Size", price: 5500 }
    ],
    minOrderNote: "Min. 2 Breads"
  },
  {
    id: "bread-honey-oat",
    title: "Honey Oat Bread (2 pcs)",
    category: "bread",
    categoryName: "Bread Variants",
    badge: "2 pcs Pack",
    image: "honey_oats_bread.jpg",
    variants: [
      { name: "2 pcs Pack", price: 9500 }
    ],
    minOrderNote: "Pack of 2 breads"
  },

  // --- BANANA BREAD VARIANTS ---
  {
    id: "banana-oreo",
    title: "Oreo Cookies Banana Bread",
    category: "banana-bread",
    categoryName: "Banana Bread",
    badge: "Best Seller",
    image: "IMG-20261117-WA0056.jpg",
    variants: [
      { name: "Mini", price: 1500 },
      { name: "Midi", price: 5500 },
      { name: "Big", price: 10500 }
    ]
  },
  {
    id: "banana-coconut",
    title: "Coconut Banana Bread",
    category: "banana-bread",
    categoryName: "Banana Bread",
    badge: "Coconut",
    image: "IMG-20261117-WA0055.jpg",
    variants: [
      { name: "Mini", price: 1500 },
      { name: "Midi", price: 5500 },
      { name: "Big", price: 10500 }
    ]
  },
  {
    id: "banana-raisins",
    title: "Raisins Banana Bread",
    category: "banana-bread",
    categoryName: "Banana Bread",
    badge: "Raisins",
    image: "photo_4_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "Mini", price: 1500 },
      { name: "Midi", price: 5500 },
      { name: "Big", price: 10500 }
    ]
  },
  {
    id: "banana-mixed-classic",
    title: "Mixed-Classic Banana Bread",
    category: "banana-bread",
    categoryName: "Banana Bread",
    badge: "Classic",
    image: "IMG-20261117-WA0059.jpg",
    variants: [
      { name: "Standard", price: 6000 }
    ]
  },
  {
    id: "banana-love-shaped",
    title: "Love-shaped Oreo Banana Bread",
    category: "banana-bread",
    categoryName: "Banana Bread",
    badge: "Love Shape",
    image: "IMG-20261117-WA0053.jpg",
    variants: [
      { name: "Standard", price: 7500 }
    ]
  },
  {
    id: "banana-strawberry-oreo",
    title: "Strawberry Oreo Banana Bread",
    category: "banana-bread",
    categoryName: "Banana Bread",
    badge: "Strawberry & Oreo",
    image: "IMG-20261117-WA0054.jpg",
    variants: [
      { name: "Standard", price: 6500 }
    ]
  },

  // --- CAKES & PASTRIES ---
  {
    id: "cupcakes",
    title: "Cupcakes",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Freshly Frosted",
    image: "cupcakes.jpg",
    variants: [
      { name: "Box of 4", price: 6500 },
      { name: "Box of 6", price: 10500 }
    ]
  },
  {
    id: "cinnamon-rolls",
    title: "Cinnamon Roll",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Freshly Glazed",
    image: "IMG-20261117-WA0051.jpg",
    variants: [
      { name: "Box of 2", price: 7000 },
      { name: "Box of 4", price: 13000 }
    ]
  },
  {
    id: "burger-bun",
    title: "Burger Bun (Pack of 4)",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Soft & Fluffy",
    image: "IMG-20261117-WA0052.jpg",
    variants: [
      { name: "Pack of 4", price: 3500 }
    ]
  },
  {
    id: "spicy-puff-puff",
    title: "Spicy Puff Puff (Pack of 10)",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Pack of 10",
    image: "IMG-20261117-WA0050.jpg",
    variants: [
      { name: "Pack of 10", price: 3000 }
    ]
  },
  {
    id: "cake-combo-slices",
    title: "Combo Cake Slices",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Vanilla + Chocolate + Strawberry",
    image: "IMG-20261117-WA0058.jpg",
    variants: [
      { name: "Combo Slice", price: 6000 }
    ]
  },
  {
    id: "cake-red-velvet",
    title: "Moist Red Velvet Cake Slice",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Cake Slice",
    image: "photo_2_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "1 Slice", price: 3000 }
    ]
  },
  {
    id: "cake-vanilla",
    title: "Moist Vanilla Cake Slice",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Cake Slice",
    image: "photo_1_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "1 Slice", price: 3000 }
    ]
  },
  {
    id: "cake-marble-swirl",
    title: "Marble Cake Slice",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Cake Slice",
    image: "photo_1_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "1 Slice", price: 3000 }
    ]
  },
  {
    id: "cake-chocolate",
    title: "Chocolate Cake Slice",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "Cake Slice",
    image: "photo_5_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "1 Slice", price: 3000 }
    ]
  },
  {
    id: "cake-love-shaped-raisin",
    title: "Raisin Love-Shaped Cake",
    category: "pastries",
    categoryName: "Cakes & Pastries",
    badge: "3 Flavours in 1",
    image: "photo_5_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "Heart Cake", price: 7500 }
    ]
  },

  // --- DRINKS & YOGHURT ---
  {
    id: "greek-yoghurt-sweet",
    title: "Greek Yoghurt - Sweetened",
    category: "yoghurt",
    categoryName: "Drinks - Yoghurt",
    badge: "Thick, Creamy & Sweet",
    image: "photo_6_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "500ml", price: 4500 },
      { name: "1 Litre", price: 9000 }
    ]
  },
  {
    id: "greek-yoghurt-unsweet",
    title: "Greek Yoghurt - Unsweetened",
    category: "yoghurt",
    categoryName: "Drinks - Yoghurt",
    badge: "Thick, Creamy, No Sugar",
    image: "photo_6_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "500ml", price: 4250 },
      { name: "1 Litre", price: 8500 }
    ]
  },
  {
    id: "plain-yoghurt-sweet",
    title: "Plain Yoghurt - Sweetened",
    category: "yoghurt",
    categoryName: "Drinks - Yoghurt",
    badge: "Smooth & Sweet",
    image: "photo_6_2026-11-18_14-37-40.jpg",
    variants: [
      { name: "500ml", price: 4500 }
    ]
  }
];

// 2. STATE MANAGEMENT
let cart = [];
let currentCategory = "all";
let searchQuery = "";
const selectedVariants = {};

PRODUCTS.forEach(p => {
  selectedVariants[p.id] = 0;
});

function loadCart() {
  try {
    const saved = localStorage.getItem("whisknchill_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("whisknchill_cart", JSON.stringify(cart));
  } catch (e) {}
  updateCartUI();
}

function formatNaira(amount) {
  return "₦" + Number(amount).toLocaleString();
}

function calculateScheduleDates() {
  const now = new Date();
  const currentDay = now.getDay();
  
  let daysToThu = (4 - currentDay + 7) % 7;
  if (daysToThu === 0 && now.getHours() >= 22) {
    daysToThu = 7;
  }
  
  const nextThu = new Date(now);
  nextThu.setDate(now.getDate() + daysToThu);
  
  const nextSat = new Date(nextThu);
  nextSat.setDate(nextThu.getDate() + 2);

  const options = { month: 'short', day: 'numeric' };
  return {
    isThursdayToday: currentDay === 4,
    thursdayDate: nextThu.toLocaleDateString(undefined, options),
    saturdayDate: nextSat.toLocaleDateString(undefined, options)
  };
}

// 3. RENDER PRODUCTS - NO PRODUCT DESCRIPTIONS
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCat = (currentCategory === "all") || (p.category === currentCategory);
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      p.title.toLowerCase().includes(q) || 
      p.categoryName.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-menu-state">
        <i class="fas fa-cookie-bite"></i>
        <h3>No items found</h3>
        <p>Try searching for another keyword or selecting a different category.</p>
        <button class="btn-secondary" style="margin-top: 14px;" onclick="resetFilters()">View Full Menu</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const activeVarIdx = selectedVariants[p.id] || 0;
    const currentVar = p.variants[activeVarIdx] || p.variants[0];

    let variantsHTML = "";
    if (p.variants.length > 1) {
      variantsHTML = `
        <div class="variant-selector-box">
          <span class="variant-label">Select Size / Pack:</span>
          <div class="variant-options-group">
            ${p.variants.map((v, idx) => `
              <button 
                type="button"
                class="variant-pill ${idx === activeVarIdx ? 'selected' : ''}" 
                onclick="changeProductVariant('${p.id}', ${idx})">
                ${v.name}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="product-card" data-category="${p.category}">
        <div class="card-img-wrap" onclick="openLightbox('${p.image}', '${p.title}')" title="Click to view full photo">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <span class="card-badge">${p.badge}</span>
        </div>
        <div class="card-content">
          <span class="card-category">${p.categoryName}</span>
          <h3 class="card-title">${p.title}</h3>
          
          ${variantsHTML}
          
          ${p.minOrderNote ? `<div style="font-size: 0.75rem; color: #9A3412; margin-top: 4px; margin-bottom: 8px; font-weight: 700;">⚠️ ${p.minOrderNote}</div>` : ''}

          <div class="card-footer" style="margin-top: auto; padding-top: 12px;">
            <div class="price-display">
              <span class="price-curr">${formatNaira(currentVar.price)}</span>
              <span class="price-unit">${currentVar.name}</span>
            </div>
            <button class="btn-add-cart" onclick="addToCart('${p.id}')">
              <i class="fas fa-shopping-bag"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.changeProductVariant = function(productId, variantIndex) {
  selectedVariants[productId] = variantIndex;
  renderProducts();
};

window.resetFilters = function() {
  currentCategory = "all";
  searchQuery = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  
  document.querySelectorAll(".cat-chip").forEach(c => {
    c.classList.toggle("active", c.getAttribute("data-category") === "all");
  });
  renderProducts();
};

// 4. CART INTERACTIONS
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const varIdx = selectedVariants[productId] || 0;
  const variant = product.variants[varIdx] || product.variants[0];

  const cartItemId = `${productId}-${varIdx}`;
  const existing = cart.find(item => item.cartItemId === cartItemId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      cartItemId: cartItemId,
      productId: product.id,
      title: product.title,
      variantName: variant.name,
      price: variant.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  showToast(`Added ${product.title} (${variant.name}) to bag!`);
  
  const btn = document.getElementById("cartToggleBtn");
  if (btn) {
    btn.style.transform = "scale(1.15)";
    setTimeout(() => btn.style.transform = "", 250);
  }
};

window.updateQty = function(cartItemId, delta) {
  const item = cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  // Minimum quantity is 1. Item can only be removed via the trash button.
  if (delta < 0 && item.quantity <= 1) {
    return;
  }

  item.quantity += delta;
  saveCart();
};

window.removeFromCart = function(cartItemId) {
  cart = cart.filter(i => i.cartItemId !== cartItemId);
  saveCart();
  showToast("Item removed from bag");
};

function getCartSubtotal() {
  return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function getCartTotalCount() {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}

function updateCartUI() {
  const totalCount = getCartTotalCount();
  const subtotal = getCartSubtotal();

  const countBadge = document.getElementById("cartCounter");
  if (countBadge) countBadge.textContent = totalCount;

  const mobileCountBadge = document.getElementById("mobileCartCount");
  if (mobileCountBadge) mobileCountBadge.textContent = totalCount;

  const mobileTotal = document.getElementById("mobileCartTotal");
  if (mobileTotal) mobileTotal.textContent = formatNaira(subtotal);

  const body = document.getElementById("cartItemsBody");
  const footer = document.getElementById("cartFooter");

  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <i class="fas fa-shopping-basket"></i>
        <p>Your bag is currently empty.</p>
        <button class="btn-primary" onclick="closeCart(); document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
          View Menu
        </button>
      </div>
    `;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  body.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.title}</div>
        <div class="cart-item-variant">${item.variantName}</div>
        <div class="cart-item-price">${formatNaira(item.price)} × ${item.quantity} = ${formatNaira(item.price * item.quantity)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" ${item.quantity <= 1 ? 'disabled style="opacity: 0.35; cursor: not-allowed;"' : ''} onclick="updateQty('${item.cartItemId}', -1)" title="${item.quantity <= 1 ? 'Minimum quantity is 1' : 'Decrease quantity'}">-</button>
        <span class="qty-val">${item.quantity}</span>
        <button class="qty-btn" onclick="updateQty('${item.cartItemId}', 1)" title="Increase quantity">+</button>
      </div>
      <button class="cart-item-del" onclick="removeFromCart('${item.cartItemId}')" title="Remove">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');

  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = formatNaira(subtotal);

  const grandTotalEl = document.getElementById("cartGrandTotal");
  if (grandTotalEl) grandTotalEl.textContent = formatNaira(subtotal);
}

// 5. DRAWER AND MODAL TOGGLES
window.openCart = function() {
  document.getElementById("cartDrawerOverlay")?.classList.add("open");
  document.getElementById("cartDrawer")?.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeCart = function() {
  document.getElementById("cartDrawerOverlay")?.classList.remove("open");
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.body.style.overflow = "";
};

window.openCheckoutModal = function() {
  if (cart.length === 0) {
    showToast("Please add items to your bag first!");
    return;
  }
  closeCart();
  
  const sched = calculateScheduleDates();
  const dateField = document.getElementById("checkoutDeliveryDate");
  if (dateField) {
    dateField.value = `Saturday (${sched.saturdayDate})`;
  }

  document.getElementById("checkoutModalOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeCheckoutModal = function() {
  document.getElementById("checkoutModalOverlay")?.classList.remove("open");
  document.body.style.overflow = "";
};

// 6. WHATSAPP CHECKOUT ORDER GENERATOR
window.handleWhatsAppSubmit = function(e) {
  e.preventDefault();

  const customerName = document.getElementById("custName")?.value.trim() || "Customer";
  const customerPhone = document.getElementById("custPhone")?.value.trim() || "";
  const customerLocation = document.getElementById("custLocation")?.value.trim() || "Ibadan";
  const customerAddress = document.getElementById("custAddress")?.value.trim() || "";
  const customerNotes = document.getElementById("custNotes")?.value.trim() || "None";
  const deliveryDate = document.getElementById("checkoutDeliveryDate")?.value.trim() || "Saturday";

  const subtotal = getCartSubtotal();
  const orderRef = "WNC-" + Math.floor(1000 + Math.random() * 9000);

  // Formatted WhatsApp message for 07010511962
  let msg = `✨ *ORDER: WHISKnCHILL by Bukkie* ✨\n`;
  msg += `🏷️ *Order Ref:* #${orderRef}\n`;
  msg += `📅 *Order Day:* Thursday\n`;
  msg += `🚚 *Delivery Day:* ${deliveryDate}\n`;
  msg += `📍 *Location:* ${customerLocation}\n`;
  msg += `🏠 *Delivery Address:* ${customerAddress}\n`;
  msg += `---------------------------------\n`;
  msg += `👤 *Customer Name:* ${customerName}\n`;
  if (customerPhone) msg += `📞 *Phone:* ${customerPhone}\n`;
  if (customerNotes && customerNotes !== "None") msg += `📝 *Notes:* ${customerNotes}\n`;
  msg += `---------------------------------\n`;
  msg += `🛒 *ITEMS ORDERED:*\n`;

  cart.forEach((item, index) => {
    const itemTotal = formatNaira(item.price * item.quantity);
    msg += `${index + 1}. *${item.title}* (${item.variantName})\n`;
    msg += `   Qty: ${item.quantity} × ${formatNaira(item.price)} = ${itemTotal}\n`;
  });

  msg += `---------------------------------\n`;
  msg += `💰 *TOTAL AMOUNT:* *${formatNaira(subtotal)}*\n`;
  msg += `---------------------------------\n`;
  msg += `💬 _Hello Bukkie! I have placed my order on the website and I am here to make payment for Saturday delivery._`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  closeCheckoutModal();
  showToast("Opening WhatsApp with your order details...");
  window.open(whatsappUrl, "_blank");
};

// 7. LIGHTBOX FOR IMAGES
window.openLightbox = function(imgSrc, title) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  if (!modal || !img) return;

  img.src = imgSrc;
  img.alt = title;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeLightbox = function() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
};

// 8. TOAST SYSTEM
function showToast(text) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: #25D366;"></i> <span>${text}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 20);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 9. EVENT LISTENERS & INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderProducts();
  updateCartUI();

  // Category filter buttons
  document.querySelectorAll(".cat-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".cat-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.getAttribute("data-category") || "all";
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const parent = q.parentElement;
      const isOpen = parent.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("open"));
      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });

  // Checkout form submit
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleWhatsAppSubmit);
  }

  // Lightbox close on backdrop click
  const lightbox = document.getElementById("lightboxModal");
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Cart overlay close on backdrop click
  const cartOverlay = document.getElementById("cartDrawerOverlay");
  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  // Modal overlay close on backdrop click
  const modalOverlay = document.getElementById("checkoutModalOverlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeCheckoutModal();
    });
  }
});
