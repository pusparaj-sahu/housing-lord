# Housing Lord - Luxury Property Rentals

A modern React application for Housing Lord, a luxury property rental service. This application provides a beautiful and responsive interface for users to browse properties, learn about services, and get in touch with the team.

## Features

- Responsive design that works on all devices
- Smooth animations and transitions
- Interactive property showcase
- FAQ section with expandable answers
- Contact form with validation
- Mobile-friendly navigation
- Back to top button
- Social media integration

## Technologies Used

- React 18
- React Router DOM
- GSAP for animations
- AOS (Animate On Scroll)
- Font Awesome icons
- Google Fonts
- Vite for development and building

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd housing-lord
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will open in your default browser at `http://localhost:3000`.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
housing-lord/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Showcase.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
