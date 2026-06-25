# AIMS — Dental Implant, Facial Aesthetic, Trauma & Hair Transplant Centre

A single-page React website for AIMS, built with Vite. Includes Navbar, Hero,
About Us, Why Choose Us, Our Doctors, Gallery (auto-playing slider + hover
thumbnails) and a Contact/appointment form wired up to EmailJS.

## 1. Install dependencies

You'll need [Node.js](https://nodejs.org) 18+ installed. Then, from this folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

This prints a local URL (usually `http://localhost:5173`) — open it in your browser.

## 3. Connect the contact form to EmailJS

The contact form uses [EmailJS](https://www.emailjs.com) so it can send real
emails straight from the browser, with no backend server needed.

1. Create a free account at https://www.emailjs.com
2. Go to **Email Services** → **Add New Service** (Gmail, Outlook, etc.) and
   connect your inbox. Copy the **Service ID** it gives you.
3. Go to **Email Templates** → **Create New Template**. Use these variable
   names in your template body so they match the form fields:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{from_phone}}`
   - `{{message}}`

   Copy the **Template ID**.
4. Go to **Account** → **General** and copy your **Public Key**.
5. Open `src/emailjsConfig.js` and paste your three values in:

   ```js
   export const EMAILJS_SERVICE_ID = 'service_xxxxxxx'
   export const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'
   export const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'
   ```

6. Save, then submit the form on the site — you should receive an email.

Until you fill these in, the form will show a friendly reminder instead of
sending, so nothing breaks.

## 4. Edit the content

- **Clinic details** (address, phone, email, timing): `src/components/Contact.jsx`
- **Doctors**: `src/components/Doctors.jsx` — edit the `DOCTORS` array
- **Why Choose Us cards**: `src/components/WhyChooseUs.jsx` — edit `REASONS`
- **Gallery slides**: `src/components/Gallery.jsx` — edit `SLIDES`
- **Colours / fonts**: `src/index.css` — all design tokens are CSS variables
  at the top of the file (`--teal`, `--gold`, `--ink`, fonts, etc.)
- **Illustrations**: `src/components/Illustrations.jsx` and `Icons.jsx` are
  hand-drawn SVGs (no external images), so the site works offline and never
  has broken image links. Swap any `<svg>` for a real `<img>` if you'd like
  to use your own clinic photography instead — just replace the
  corresponding component import with an `<img src="/your-photo.jpg" />`.

## 5. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished static site, which you can
upload to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

```bash
npm run preview
```

lets you preview that production build locally before deploying.

## Project structure

```
src/
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    WhyChooseUs.jsx / .css
    Doctors.jsx / .css
    Gallery.jsx / .css      ← slider + hover thumbnails
    Contact.jsx / .css      ← EmailJS form
    Footer.jsx / .css
    Icons.jsx                ← shared line icons + brand mark
    Illustrations.jsx        ← larger scene illustrations
  emailjsConfig.js           ← paste your EmailJS IDs here
  App.jsx
  index.css                  ← design tokens (colors, fonts, spacing)
  main.jsx
index.html
```
