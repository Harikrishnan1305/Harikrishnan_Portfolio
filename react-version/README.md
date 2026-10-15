# Harikrishnan Portfolio

## Setup Guide

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Vite installed globally (`npm install -g vite`)

### Installation

1. Clone repository:
   `git clone https://github.com/harikrishnan/portfolio.git`
2. Navigate to project folder:
   `cd portfolio`
3. Install dependencies:
   `npm install`

### Environment Setup

1. Create `.env` file in root directory with EmailJS configuration:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
2. Replace placeholder values with actual EmailJS credentials

### Running Locally

`npm run dev` to start development server

### Building for Production

`npm run build` to generate optimized build in `dist/` folder

## Deployment

### Vercel Deployment

1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy site: `vercel`
4. Set environment variables in Vercel dashboard

## Component Structure

### Main Sections

1. Hero
2. About
3. Skills
4. Tools
5. Experience
6. Certifications
7. Projects
8. Contact
9. Footer

### Key Features

- Neon purple theme with glassmorphism
- AOS animations on all sections
- Swiper carousel in Projects section
- EmailJS form integration
- Dark/Light mode toggle
- Responsive design across devices

## Customization Guide

### Theme Customization

1. Modify Tailwind theme extensions in `tailwind.config.js`
2. Update neonPurple colors and glass variables as needed

### Adding New Projects

1. Duplicate project card in `Projects.jsx`
2. Update image path, title, description, and tech stack
3. Add new social media links in `Footer.jsx` as needed

## Troubleshooting

### Common Issues

- **EmailJS not sending**: Verify service ID, template ID, and public key
- **Animations not working**: Ensure AOS.js is initialized in component
- **Build failures**: Check Vite configuration and dependencies

### Debugging Tools

- Use React Developer Tools
- Check browser console for errors
- Verify network requests in DevTools
