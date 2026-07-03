# InAmigos Foundation® — Web Application

> **Uniting Minds for Change**  
> A modern, responsive, high-impact web application built for the **InAmigos Foundation**, dedicated to grassroots community empowerment, sustainable development, clean water initiatives, education, and social accountability.

---

## 🌟 Overview

The **InAmigos Foundation** portal is designed to provide transparent accountability, showcase verifiable community impact, share real field stories, and engage volunteers, donors, and partners. 

Built with modern web technologies, it features a clean aesthetic, seamless dark/light mode theming, interactive storytelling modals, and responsive data visualizers that highlight the organization's nationwide initiatives across 28+ states.

---

## ✨ Key Features

- **🎯 Interactive Mission & Vision**: Engaging hero and philosophy sections highlighting core initiatives like *Project Vikas*, *Save Water Campaign*, *Harita Bhumi (Agroforestry)*, and *Mission LiFE*.
- **📊 Verifiable Accountability & Reach Metrics**: Dedicated impact showcases featuring real-time volunteer numbers (`200+ Volunteers`), nationwide presence (`28 States`), core causes (`6 Causes`), and community reach (`50,000+ Beneficiaries`).
- **📰 Articles & Field Impact Stories**: Rich blog and field story integration with detailed reading modals, formatted content rendering, read-time calculators, and interactive engagement.
- **🖼️ Visual Impact Gallery**: Interactive photo gallery featuring real community action, field distributions, and education drives with lightbox viewing capabilities.
- **🤝 Get Involved Ecosystem**: Direct action modals for **Donations**, **Volunteering**, **Corporate Partnerships**, and **Social Amplification**.
- **🌗 Adaptive Dark/Light Mode**: Smooth theme transitions tailored for readability and visual accessibility.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Animations**: Standard React Hooks & CSS micro-transitions

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Step-by-Step Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/inamigos-foundation.git
   cd inamigos-foundation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will be running locally at `http://localhost:3000` or `http://localhost:5173`.*

4. **Build for production**:
   ```bash
   npm run build
   ```
   *This compiles the TypeScript code and bundles optimized static assets into the `dist/` directory.*

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 📦 Deployment Guide

This project is a **Client-Side Single Page Application (SPA)** built with React and Vite. It compiles into static HTML, CSS, and JavaScript files inside the `dist/` folder.

### 1️⃣ Deploying on Vercel (Recommended ⭐)

Vercel is natively optimized for frontend SPAs and provides zero-configuration deployments. We have included a `vercel.json` file in the root directory to automatically handle SPA routing rewrites.

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: *None required for core frontend functionality.* (If you add external backend APIs or analytics keys in the future, add them with the `VITE_` prefix, e.g., `VITE_API_URL`).

---

### 2️⃣ Deploying on Render

Render supports static sites with free SSL and global CDN distribution.

- **Service Type**: Select **Static Site** (Do *not* select Web Service, as this is a frontend application).
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Redirects/Rewrites**: In Render dashboard under *Redirects/Rewrites*, add a rule:
  - **Source**: `/*`
  - **Destination**: `/index.html`
  - **Action**: `Rewrite` (This ensures browser refreshes on sub-paths load the React app correctly).

---

## 🤝 Contributing

We welcome contributions from developers, designers, and social activists! 
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License & Foundation Info

**InAmigos Foundation®** — *Uniting Minds for Change*  
All rights reserved. Dedicated to grassroots action, sustainable ecosystems, and youth empowerment.
