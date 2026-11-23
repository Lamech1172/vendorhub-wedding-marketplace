// --- INITIAL VENDOR DATA (JavaScript Array of Objects) ---
const defaultVendors = [
  {
    id: 1,
    name: "Grand Palace Royal Venue",
    category: "Venues",
    location: "Madurai",
    rating: 4.9,
    starting_price: 150000,
    price_range: "₹1,50,000 - ₹5,00,000",
    icon: "🏛️",
    description: "Luxury AC banquet hall and outdoor mandap lawn accommodating 800+ guests with bridal suites.",
    portfolio: ["Grand Banquet Hall", "Floral Mandap Lawn", "Royal Reception Stage"],
    services: ["Wedding Reception", "Muhurtham Hall", "Sangeet & Mehendi"],
    packages: [
      { name: "Half-Day Hall Package", price: 150000 },
      { name: "Full-Day Royal Wedding Package", price: 320000 }
    ]
  },
  {
    id: 2,
    name: "Shutter Magic Photography",
    category: "Photographers",
    location: "Chennai",
    rating: 4.8,
    starting_price: 65000,
    price_range: "₹65,000 - ₹1,80,000",
    icon: "📸",
    description: "Capturing timeless candid moments, 4K cinematic wedding films, and aerial drone coverage.",
    portfolio: ["Candid Couple Portraits", "4K Teaser Film", "Pre-Wedding Shoot"],
    services: ["Candid Photography", "Video Coverage", "Pre-wedding"],
    packages: [
      { name: "Candid + Traditional Photo", price: 65000 },
      { name: "Complete Cinema + Drone Suite", price: 145000 }
    ]
  },
  {
    id: 3,
    name: "Saffron Feast Caterers",
    category: "Caterers",
    location: "Mumbai",
    rating: 4.7,
    starting_price: 90000,
    price_range: "₹90,000 - ₹3,50,000",
    icon: "🍽️",
    description: "Authentic Indian cuisine, traditional banana-leaf feasts, live dessert counters, and custom menus.",
    portfolio: ["Traditional Banana Leaf", "Live Chaat & Dessert Bar", "Royal Buffet Setup"],
    services: ["Indian Cuisine", "Dessert", "Live Counters"],
    packages: [
      { name: "Classic Wedding Feast (250 Guests)", price: 90000 },
      { name: "Grand Royal Buffet (500 Guests)", price: 210000 }
    ]
  },
  {
    id: 4,
    name: "Petal & Bloom Florists",
    category: "Florists",
    location: "Bengaluru",
    rating: 4.9,
    starting_price: 55000,
    price_range: "₹55,000 - ₹2,00,000",
    icon: "🌸",
    description: "Bespoke bridal bouquets, jasmine-marigold mandap decor, and thematic floral arrangements.",
    portfolio: ["Pastel Orchid Stage", "Traditional Jasmine Mandap", "Bridal Entry Tunnel"],
    services: ["Bridal Bouquets", "Floral Arrangements", "Mandap Decor"],
    packages: [
      { name: "Essential Stage & Entrance Decor", price: 55000 },
      { name: "Luxury Full-Venue Floral Theme", price: 140000 }
    ]
  },
  {
    id: 5,
    name: "Aura Bridal Makeup & Styling",
    category: "Makeup & Styling",
    location: "Chennai",
    rating: 4.8,
    starting_price: 30000,
    price_range: "₹30,000 - ₹85,000",
    icon: "💄",
    description: "HD & Airbrush bridal makeup, traditional hairstyling, saree draping, and organic mehndi artists.",
    portfolio: ["HD Bridal Look", "Traditional Silk Draping", "Bridal Henna Art"],
    services: ["Bridal Makeup", "Hairstyling", "Mehndi Artists", "Draping"],
    packages: [
      { name: "Single Event HD Bridal Makeover", price: 30000 },
      { name: "Complete 3-Event Airbrush Suite", price: 75000 }
    ]
  },
  {
    id: 6,
    name: "Rhythm Beats Wedding DJs",
    category: "DJs",
    location: "Delhi",
    rating: 4.6,
    starting_price: 40000,
    price_range: "₹40,000 - ₹1,20,000",
    icon: "🎧",
    description: "High-energy Sangeet DJs, concert-grade sound systems, intelligent lighting, and cold pyro effects.",
    portfolio: ["Sangeet Night Console", "LED Dance Floor", "Baraat Sound Setup"],
    services: ["Sangeet DJ", "Sound & Lighting", "Cold Pyro"],
    packages: [
      { name: "Sangeet Night DJ + Sound", price: 40000 },
      { name: "Full Wedding Sound, Lights & Pyro", price: 95000 }
    ]
  },
  {
    id: 7,
    name: "Eternity Knot Planners",
    category: "Planners",
    location: "Madurai",
    rating: 4.9,
    starting_price: 80000,
    price_range: "₹80,000 - ₹4,00,000",
    icon: "📋",
    description: "End-to-end wedding coordination, guest hospitality, vendor scheduling, and budget management.",
    portfolio: ["Destination Coordination", "Hospitality Desk", "Timeline Execution"],
    services: ["Full Wedding Planning", "Day-Of Coordination", "Guest Logistics"],
    packages: [
      { name: "Day-Of Wedding Coordination", price: 80000 },
      { name: "End-to-End Luxury Wedding Planning", price: 250000 }
    ]
  }
];

const categoriesList = [
  { name: "Venues", icon: "🏛️" },
  { name: "Photographers", icon: "📸" },
  { name: "Caterers", icon: "🍽️" },
  { name: "Florists", icon: "🌸" },
  { name: "Makeup & Styling", icon: "💄" },
  { name: "DJs", icon: "🎧" },
  { name: "Planners", icon: "📋" }
];

// --- APPLICATION STATE (localStorage Persistence) ---
let vendors = JSON.parse(localStorage.getItem("vh_vendors")) || defaultVendors;
let bookings = JSON.parse(localStorage.getItem("vh_bookings")) || [];
let favorites = JSON.parse(localStorage.getItem("vh_favorites")) || [1, 2];
let currentUser = JSON.parse(localStorage.getItem("vh_user")) || null;
let reviews = JSON.parse(localStorage.getItem("vh_reviews")) || [
  { id: 101, vendor_id: 1, author: "Ananya & Karthik", rating: 5, comment: "Spacious banquet hall and seamless hospitality!", date: "2026-10-14" },
  { id: 102, vendor_id: 2, author: "Divya & Rohit", rating: 5, comment: "Captured every candid moment beautifully.", date: "2026-11-02" }
];

const formatINR = (num) => "₹" + Number(num).toLocaleString("en-IN");

function saveState() {
  localStorage.setItem("vh_vendors", JSON.stringify(vendors));
  localStorage.setItem("vh_bookings", JSON.stringify(bookings));
  localStorage.setItem("vh_favorites", JSON.stringify(favorites));
  localStorage.setItem("vh_reviews", JSON.stringify(reviews));
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
}

// --- NAVIGATION & DARK MODE ---
document.getElementById("hamburgerBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function updateAuthUI() {
  const btn = document.getElementById("authNavBtn");
  btn.textContent = currentUser ? `Hi, ${currentUser.name} (${currentUser.role})` : "Login / Register";
}

// --- RENDER CATEGORIES ---
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  const activeCat = document.getElementById("categoryFilter").value;

  grid.innerHTML = categoriesList
    .map((cat) => {
      const count = vendors.filter((v) => v.category === cat.name).length;
      return `
        <div class="category-card ${activeCat === cat.name ? "active" : ""}" onclick="selectCategory('${cat.name}')">
          <div class="category-icon">${cat.icon}</div>
          <h4>${cat.name}</h4>
          <span>${count} Vendor${count !== 1 ? "s" : ""}</span>
        </div>
      `;
    })
    .join("");
}

function selectCategory(categoryName) {
  const filter = document.getElementById("categoryFilter");
  filter.value = filter.value === categoryName ? "All" : categoryName;
  renderCategories();
  applyFilters();
  document.getElementById("vendors").scrollIntoView({ behavior: "smooth" });
}

function triggerHeroSearch() {
  document.getElementById("searchInput").value = document.getElementById("heroSearchInput").value;
  applyFilters();
  document.getElementById("vendors").scrollIntoView({ behavior: "smooth" });
}

// --- FILTER & RENDER VENDORS ---
function applyFilters() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const cat = document.getElementById("categoryFilter").value;
  const loc = document.getElementById("locationFilter").value;
  const maxPrice = Number(document.getElementById("priceFilter").value);
  const minRating = Number(document.getElementById("ratingFilter").value);

  renderCategories();

  const filtered = vendors.filter((v) => {
    const matchText =
      v.name.toLowerCase().includes(query) ||
      v.location.toLowerCase().includes(query) ||
      v.category.toLowerCase().includes(query);
    const matchCat = cat === "All" || v.category === cat;
    const matchLoc = loc === "All" || v.location.toLowerCase() === loc.toLowerCase();
    const matchPrice = v.starting_price <= maxPrice;
    const matchRating = v.rating >= minRating;
    return matchText && matchCat && matchLoc && matchPrice && matchRating;
  });

  const grid = document.getElementById("vendorGrid");
  if (!filtered.length) {
    grid.innerHTML = `<p style="color: var(--muted);">No wedding vendors match your selected filters.</p>`;
    return;
  }

  grid.innerHTML = filtered
    .map((v) => {
      const isFav = favorites.includes(v.id);
      return `
        <article class="vendor-card">
          <div class="vendor-cover">
            <span>${v.icon}</span>
            <span class="cat-tag">${v.category}</span>
            <button class="fav-btn" onclick="toggleFavorite(${v.id})" title="Save to Wishlist">
              ${isFav ? "❤️" : "🤍"}
            </button>
          </div>
          <div class="vendor-body">
            <div class="vendor-top">
              <h3>${v.name}</h3>
              <span class="rating-pill">★ ${v.rating}</span>
            </div>
            <div class="vendor-loc">📍 ${v.location} • ${v.price_range}</div>
            <p class="vendor-desc">${v.description}</p>
            <div class="service-tags">
              ${v.services.map((s) => `<span>${s}</span>`).join("")}
            </div>
            <div class="vendor-footer">
              <span class="price-text">From ${formatINR(v.starting_price)}</span>
              <div class="card-btns">
                <button class="btn-outline" onclick="openVendorDetail(${v.id})">Details</button>
                <button class="btn-primary-sm" onclick="openBookingModal(${v.id})">Book</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// --- WISHLIST / FAVORITES ---
function toggleFavorite(vendorId) {
  if (favorites.includes(vendorId)) {
    favorites = favorites.filter((id) => id !== vendorId);
    showToast("Removed from favorites");
  } else {
    favorites.push(vendorId);
    showToast("Saved to wishlist ❤️");
  }
  saveState();
  applyFilters();
  renderDashboards();
}

// --- VENDOR DETAIL & REVIEWS MODAL ---
function openVendorDetail(vendorId) {
  const v = vendors.find((item) => item.id === vendorId);
  const vendorReviews = reviews.filter((r) => r.vendor_id === vendorId);

  document.getElementById("modalBody").innerHTML = `
    <div style="font-size: 2.5rem;">${v.icon}</div>
    <h2>${v.name}</h2>
    <p style="color: var(--muted); margin-bottom: 0.75rem;">${v.category} • 📍 ${v.location} • ★ ${v.rating}</p>
    <p style="margin-bottom: 1rem;">${v.description}</p>

    <h4>📸 Portfolio Highlights</h4>
    <div class="portfolio-grid">
      ${v.portfolio.map((p) => `<div class="portfolio-tile">✨ ${p}</div>`).join("")}
    </div>

    <h4>💎 Pricing Packages</h4>
    ${v.packages
      .map(
        (pkg, idx) => `
      <div class="list-item">
        <div>
          <strong>${pkg.name}</strong>
          <div style="color: var(--primary); font-weight: 700;">${formatINR(pkg.price)}</div>
        </div>
        <button class="btn-primary-sm" onclick="openBookingModal(${v.id}, ${idx})">Select & Book</button>
      </div>
    `
      )
      .join("")}

    <h4 style="margin-top: 1.25rem;">⭐ Client Reviews (${vendorReviews.length})</h4>
    <div style="margin: 0.75rem 0;">
      ${
        vendorReviews.length
          ? vendorReviews
              .map(
                (r) => `
            <div class="list-item" style="display:block;">
              <div style="display:flex; justify-content:space-between;">
                <strong>${r.author}</strong>
                <span style="color: var(--primary);">${"★".repeat(r.rating)}</span>
              </div>
              <p style="font-size:0.9rem; margin-top:0.25rem;">"${r.comment}"</p>
            </div>
          `
              )
              .join("")
          : `<p style="color: var(--muted); font-size:0.9rem;">No reviews yet. Be the first to review!</p>`
      }
    </div>

    <form onsubmit="submitReview(event, ${v.id})" style="border-top: 1px solid var(--border); padding-top: 1rem;">
      <h4>Write a Review</h4>
      <div class="form-row" style="margin-top:0.5rem;">
        <div class="form-group">
          <input type="text" id="revAuthor" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <select id="revRating">
            <option value="5">★★★★★ (5)</option>
            <option value="4">★★★★☆ (4)</option>
            <option value="3">★★★☆☆ (3)</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <input type="text" id="revComment" placeholder="Share your experience with ${v.name}..." required />
      </div>
      <button type="submit" class="btn-outline full-width">Submit Review</button>
    </form>
  `;
  document.getElementById("modalBackdrop").classList.add("open");
}

function submitReview(e, vendorId) {
  e.preventDefault();
  reviews.unshift({
    id: Date.now(),
    vendor_id: vendorId,
    author: document.getElementById("revAuthor").value.trim(),
    rating: Number(document.getElementById("revRating").value),
    comment: document.getElementById("revComment").value.trim(),
    date: new Date().toISOString().split("T")[0]
  });
  saveState();
  renderDashboards();
  openVendorDetail(vendorId);
  showToast("Review published!");
}

// --- BOOKING SYSTEM MODAL ---
function openBookingModal(vendorId, pkgIndex = 0) {
  const v = vendors.find((item) => item.id === vendorId);
  const today = new Date().toISOString().split("T")[0];

  document.getElementById("modalBody").innerHTML = `
    <h2>📅 Book ${v.name}</h2>
    <p style="color: var(--muted); margin-bottom: 1rem;">Complete your wedding service reservation below.</p>
    <form onsubmit="confirmBooking(event, ${v.id})">
      <div class="form-group">
        <label>Select Package</label>
        <select id="bookPackage">
          ${v.packages
            .map(
              (p, i) =>
                `<option value="${i}" ${i === pkgIndex ? "selected" : ""}>${p.name} — ${formatINR(p.price)}</option>`
            )
            .join("")}
        </select>
      </div>
      <div class="form-group">
        <label>Event Date</label>
        <input type="date" id="bookDate" min="${today}" required />
      </div>
      <div class="form-group">
        <label>Couple / Client Name</label>
        <input type="text" id="bookClient" value="${currentUser ? currentUser.name : ""}" placeholder="Enter full name" required />
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" id="bookPhone" placeholder="+91 98765 43210" required />
      </div>
      <button type="submit" class="btn-primary full-width">Confirm Booking</button>
    </form>
  `;
  document.getElementById("modalBackdrop").classList.add("open");
}

function confirmBooking(e, vendorId) {
  e.preventDefault();
  const v = vendors.find((item) => item.id === vendorId);
  const pkg = v.packages[Number(document.getElementById("bookPackage").value)];

  const newBooking = {
    id: "BK-" + Math.floor(10000 + Math.random() * 90000),
    vendor_id: v.id,
    vendor_name: v.name,
    category: v.category,
    package_name: pkg.name,
    price: pkg.price,
    date: document.getElementById("bookDate").value,
    client_name: document.getElementById("bookClient").value.trim(),
    phone: document.getElementById("bookPhone").value.trim(),
    status: "Confirmed"
  };

  bookings.unshift(newBooking);
  saveState();
  renderDashboards();
  closeModal();
  showToast(`Booking Confirmed! ID: ${newBooking.id}`);
}

// --- LOGIN / REGISTER MODAL ---
function openAuthModal() {
  document.getElementById("modalBody").innerHTML = `
    <h2>🔐 Login / Register</h2>
    <p style="color: var(--muted); margin-bottom: 1rem;">Access your personalized Couple or Vendor workspace.</p>
    <form onsubmit="handleAuthSubmit(event)">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="authName" placeholder="e.g., Lamech Vedaraj" required />
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="authEmail" placeholder="you@example.com" required />
      </div>
      <div class="form-group">
        <label>Account Role</label>
        <select id="authRole">
          <option value="Couple">Couple (User)</option>
          <option value="Vendor">Wedding Vendor</option>
        </select>
      </div>
      <button type="submit" class="btn-primary full-width">Continue to VendorHub</button>
    </form>
  `;
  document.getElementById("modalBackdrop").classList.add("open");
}

function handleAuthSubmit(e) {
  e.preventDefault();
  currentUser = {
    name: document.getElementById("authName").value.trim(),
    email: document.getElementById("authEmail").value.trim(),
    role: document.getElementById("authRole").value
  };
  localStorage.setItem("vh_user", JSON.stringify(currentUser));
  updateAuthUI();
  closeModal();
  showToast(`Welcome, ${currentUser.name}!`);
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
}

// --- DASHBOARDS (USER & VENDOR VIEWS) ---
function switchDashboard(view) {
  document.getElementById("userTabBtn").classList.toggle("active", view === "user");
  document.getElementById("vendorTabBtn").classList.toggle("active", view === "vendor");
  document.getElementById("userDashboardPanel").classList.toggle("active", view === "user");
  document.getElementById("vendorDashboardPanel").classList.toggle("active", view === "vendor");
}

function handleAddVendor(e) {
  e.preventDefault();
  const price = Number(document.getElementById("newVendorPrice").value);
  const services = document
    .getElementById("newVendorServices")
    .value.split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const newVendor = {
    id: Date.now(),
    name: document.getElementById("newVendorName").value.trim(),
    category: document.getElementById("newVendorCategory").value,
    location: document.getElementById("newVendorLocation").value.trim(),
    rating: 5.0,
    starting_price: price,
    price_range: `${formatINR(price)} - ${formatINR(price * 2)}`,
    icon: "✨",
    description: document.getElementById("newVendorDesc").value.trim(),
    portfolio: ["Signature Showcase", "Client Event Gallery", "Custom Setup"],
    services: services.length ? services : ["Standard Wedding Service"],
    packages: [
      { name: "Standard Package", price: price },
      { name: "Premium Package", price: price * 2 }
    ]
  };

  vendors.unshift(newVendor);
  saveState();
  e.target.reset();
  applyFilters();
  renderDashboards();
  showToast("New vendor listing published!");
}

function cancelBooking(bookingId) {
  bookings = bookings.filter((b) => b.id !== bookingId);
  saveState();
  renderDashboards();
  showToast("Booking removed.");
}

function renderDashboards() {
  // User Stats
  document.getElementById("statUserBookings").textContent = bookings.length;
  document.getElementById("statUserFavorites").textContent = favorites.length;
  const totalBudget = bookings.reduce((sum, b) => sum + b.price, 0);
  document.getElementById("statTotalSpend").textContent = formatINR(totalBudget);

  // User Bookings List
  const userBookingsEl = document.getElementById("userBookingsList");
  userBookingsEl.innerHTML = bookings.length
    ? bookings
        .map(
          (b) => `
        <div class="list-item">
          <div>
            <strong>${b.vendor_name}</strong> (${b.id})
            <div style="font-size:0.85rem; color:var(--muted);">${b.package_name} • 📅 ${b.date}</div>
            <div style="color:var(--primary); font-weight:700;">${formatINR(b.price)}</div>
          </div>
          <button class="btn-outline-sm" onclick="cancelBooking('${b.id}')">Cancel</button>
        </div>
      `
        )
        .join("")
    : `<p style="color:var(--muted);">No bookings yet. Explore vendors to book your event!</p>`;

  // User Favorites List
  const favVendors = vendors.filter((v) => favorites.includes(v.id));
  document.getElementById("userFavoritesList").innerHTML = favVendors.length
    ? favVendors
        .map(
          (v) => `
        <div class="list-item">
          <div>
            <strong>${v.icon} ${v.name}</strong>
            <div style="font-size:0.85rem; color:var(--muted);">${v.category} • 📍 ${v.location}</div>
          </div>
          <button class="btn-primary-sm" onclick="openBookingModal(${v.id})">Book</button>
        </div>
      `
        )
        .join("")
    : `<p style="color:var(--muted);">No saved vendors yet.</p>`;

  // Vendor Stats & Incoming Bookings
  document.getElementById("statTotalVendors").textContent = vendors.length;
  document.getElementById("statIncomingBookings").textContent = bookings.length;
  document.getElementById("statTotalReviews").textContent = reviews.length;

  document.getElementById("vendorBookingsManageList").innerHTML = bookings.length
    ? bookings
        .map(
          (b) => `
        <div class="list-item">
          <div>
            <strong>${b.client_name}</strong> (${b.phone})
            <div style="font-size:0.85rem; color:var(--muted);">Booked: ${b.vendor_name} — ${b.package_name}</div>
            <div style="font-size:0.82rem;">Date: <strong>${b.date}</strong> • Status: <span style="color:var(--primary);">${b.status}</span></div>
          </div>
          <strong>${formatINR(b.price)}</strong>
        </div>
      `
        )
        .join("")
    : `<p style="color:var(--muted);">No client booking requests received yet.</p>`;
}

// --- INITIALIZE APP ---
updateAuthUI();
renderCategories();
applyFilters();
renderDashboards();
