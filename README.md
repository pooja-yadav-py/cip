# Canada Immigration Law Firm Website

A modern, professional website for a Canada Immigration law firm built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with professional green theme
- 🏠 Hero section with call-to-action buttons
- 📋 Comprehensive services section covering major immigration programs
- 👥 About section highlighting expertise and success factors
- 💬 Client testimonials section
- 📞 Contact form and contact information
- 📱 Fully responsive mobile navigation
- ⚡ Fast loading with Next.js optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with Navbar and Footer
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services grid
│   ├── About.tsx        # About section
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx      # Contact form and info
│   └── Footer.tsx       # Footer component
├── package.json
└── tailwind.config.ts   # Tailwind configuration
```

## Customization

### Update Contact Information
Edit the contact details in `components/Contact.tsx` and `components/Footer.tsx`.

### Modify Services
Update the services array in `components/Services.tsx`.

### Change Colors
Adjust the primary color scheme in `tailwind.config.ts`.

### Update Content
Modify the text content in each component file to match your firm's specific details.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Icons** - Icon library

