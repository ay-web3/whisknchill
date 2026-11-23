# WHISKnCHILL by Bukkie - Website Documentation

A fast, responsive, and appetizing e-commerce website for **WHISKnCHILL by Bukkie** with direct WhatsApp ordering and payments.

---

## 🌟 Key Features

1. **Brand Identity & Atmosphere**:
   - Official brand: **WHISKnCHILL by Bukkie**
   - Tagline: *"Everyday Sumptuous...."*
   - Warm luxury bakery color palette (rich warm chocolate, golden caramel, whipping cream).

2. **Weekly Pre-Order & Delivery System**:
   - **Pre-orders on Thursdays** (notices across the header announcement ticker, hero card, order bag, and checkout modal).
   - **Delivery on Saturdays** (freshly baked on Friday and delivered for weekend enjoyment).
   - Automated date calculator: dynamically displays the upcoming Thursday pre-order window and Saturday delivery date.

3. **Menu Categories & Real Product Photos**:
   - **Artisan Breads**: Sardine Bread, Coconut Bread, Cheesy Garlic Bread, Honey Oat Bread (with 2-bread minimum order advisory).
   - **Banana Breads**: Oreo Cookies Banana Bread, Coconut Banana Bread, Raisins Banana Bread, Mixed-Classic, Love-shaped Oreo, Strawberry Oreo (Mini, Midi, Big sizes).
   - **Cakes & Pastries**: Gourmet Cinnamon Rolls (Box of 2 / Box of 4), Fluffy Brioche Burger Buns (Pack of 4), Spicy Nigerian Puff Puff (Pack of 10), Combo 3-in-1 Cake Slices, Moist Red Velvet, Moist Vanilla, Marble Swirl, Rich Chocolate Slice, and Raisin Love-Shaped Cake.
   - **Creamy Yoghurt**: Thick Sweetened Greek Yoghurt (500ml / 1L), Unsweetened Greek Yoghurt (500ml / 1L), and Smooth Plain Sweetened Yoghurt (500ml).

4. **Interactive Ordering & Cart**:
   - Dynamic size/pack selector on each product card.
   - Live search bar and category filter chips.
   - Slide-out cart drawer with quantity counters, instant subtotal calculation, and persistent bag state (`localStorage`).
   - Image Lightbox: Click on any food image or original price flyer to view full-resolution photo.

5. **Direct WhatsApp Checkout (`07010511962`)**:
   - Customers fill out their Name, Phone, Ibadan Delivery Area/Address, and any special requests.
   - Generates a formatted WhatsApp order summary with order reference ID, itemized products, quantities, prices, and total amount due.
   - One click launches WhatsApp directly to **07010511962** (`2347010511962`).

---

## 📁 Project Structure

- `index.html`: Main website page
- `style.css`: Styling, responsiveness, and animations
- `app.js`: Product catalog, interactive bag, filters, and WhatsApp generator
- `START_WEBSITE.bat`: 1-click launcher to open the website in your browser
- `*.jpg`: High-resolution bakery product photos and official menu flyers

---

## 🚀 How to Launch & Host

### To view locally:
Simply double-click `START_WEBSITE.bat` or open `index.html` in Chrome, Edge, or Safari.

### To host for free (online link for Instagram bio & WhatsApp status):
1. **Netlify Drop** (Easiest - 30 seconds):
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop this folder (`bukola site`) into the window.
   - Netlify will instantly provide a live URL (e.g., `whisknchill.netlify.app`).
2. **GitHub Pages / Vercel**:
   - Upload the repository and enable Pages for an instant free domain.
