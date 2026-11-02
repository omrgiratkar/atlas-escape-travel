# Atlas & Escape — Travel Website

Responsive single-page travel website built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Project structure
```text
atlas-escape-travel/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── data.js
    ├── assets/
    └── components/
        ├── shared.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Destinations.jsx
        ├── Services.jsx
        ├── Gallery.jsx
        ├── Packages.jsx
        ├── OurGoal.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Notes
- Frontend only: no backend, database or authentication.
- Contact form validates in the browser and displays a local success message; it does not send or store submissions.
- Images are loaded from Unsplash and require an internet connection.
- Package prices and sample testimonials are illustrative.
