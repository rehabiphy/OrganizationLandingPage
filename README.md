# Rehabiphy Health Technologies — Landing Page

React + Vite. All source files use the `.js` extension (JSX in `.js` is enabled in `vite.config.js`).

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  main.js            entry
  App.js             page layout
  data.js            all text, product data and the Play Store link
  index.css          styles + responsive breakpoints (1024 / 860 / 600 / 380px)
  assets/            app screenshots and Rehabefy logo
  components/        Header, Hero, About, Products, ProductCard, Vision, Why,
                     Partners (contact form), Footer, PlayStoreButton, ...
```

## To finish before launch

- Forms (partner enquiry, NUKKD launch updates) only show a thank-you message.
  Connect them to your backend or a form service in `Partners.js` / `ProductCard.js`.
- Replace `[Registered office address]` and `[CIN]` in `Footer.js`.
- Privacy Policy and Terms links point to `#privacy` / `#terms` placeholders.
