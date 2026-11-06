# Karishma Valley Restaurant - Demo Website

A modern, responsive, production-quality demo website for **Karishma Valley Restaurant**, located in Banashankari 6th Stage, Lingadheeranahalli, Bengaluru.

The design embodies a warm, rustic garden atmosphere, celebrating its authentic semi-open thatched huts, pet-friendly valley ambiance (with resident ducks and rabbits), and flavorful North Indian, Clay-Tandoor, and coastal delicacies.

---

## 🛠 Tech Stack
- **Framework:** React 18 + Vite (Plain JavaScript JSX)
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Routing:** `react-router-dom` v6
- **Icons:** `lucide-react`
- **State & Persistence:** React Context + `localStorage` (wrapped safely in `try/catch`)
- **Hosting / Deployment:** Zero-backend SPA ready for Netlify

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, production-ready static build inside the `dist` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deploying to Netlify

This repository is pre-configured for instant zero-configuration deployment to Netlify:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** `20` (specified in `netlify.toml`)
- **SPA Routing:** Redirect rule `/* /index.html 200` configured in both `netlify.toml` and `public/_redirects`.

---

## 🔐 Demo Authentication Notice
The Owner Portal (`/owner-login`) uses client-side demo authentication designed for presentation and evaluation purposes:
- **Email:** `owner@demo.com`
- **Password:** `demo1234`

> **Note on Security:** This is front-end simulated authentication stored in `localStorage`. In a real production deployment, this would be replaced by authenticated backend endpoints, HTTPS session cookies, and JWT tokens.

---

## 📝 Restaurant Data & Placeholders
All restaurant facts and customizable variables are centralized in `src/data/restaurant.js`. Any details pending final verification from the owners are explicitly labeled as editable placeholders (e.g. official email, live Instagram link).

