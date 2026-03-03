# Kalinga Fish Farm – React + Vite

Modern single-page marketing experience for Kalinga Fish Farm, rebuilt with React 18, Vite, Bootstrap 5, and modular EmailJS-powered contact handling.

## Development

```bash
npm install
npm run dev
```

The dev server (default `http://localhost:5173`) includes hot module replacement. Environment requires Node.js 18+.

## Production Build / Preview

```bash
npm run build   # outputs to dist/
npm run preview # serves the optimized build locally
```

Deploy the `dist` folder to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

## Key Files

- [src/App.jsx](src/App.jsx) – React components, data arrays, and interactive logic (hero slideshow, counters, gallery lightbox, EmailJS form, etc.)
- [style.css](style.css) – Design system, splash screen styling, responsive layout, and motion rules
- [vite.config.js](vite.config.js) – Vite + @vitejs/plugin-react configuration

## EmailJS & Contact Form

1. Copy `.env.example` to `.env`.
2. Fill in your EmailJS credentials (service, template, public key):

```bash
VITE_EMAIL_SERVICE_ID=service_xxxxxxx
VITE_EMAIL_TEMPLATE_ID=template_xxxxxxx
VITE_EMAIL_PUBLIC_KEY=public_xxxxxxxxxxxxxxxx
```

Vite exposes any `VITE_` prefixed variables to the browser build. Without these values the contact form stays disabled and the UI surfaces a warning. The form posts `from_name`, `phone_number`, `from_email`, and `message` fields to EmailJS.

## Brand Placeholders

- WhatsApp / phone references currently use `+255 672 411 558`
- Map embed points to Tanzania (update to exact farm coordinates if available)
- Cloudinary image/video links remain remote; swap with your own assets as needed
- Bundled fallbacks (`src/assets/hero-fallback.svg`, `src/assets/logo-fallback.svg`) ensure the hero background and logo remain visible if Cloudinary is unreachable—replace them with branded artwork when you have local files

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Create optimized production bundle |
| `npm run preview` | Preview production build locally |

---

Built with ❤️ to showcase sustainable aquaculture in Iringa, Tanzania.
