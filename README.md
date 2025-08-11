# Growth Capital - Enterprise Wealth Management Website

A professional, enterprise-level website for Growth Capital, an investment & wealth management firm. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏢 About Growth Capital

Growth Capital is a leading investment and wealth management firm that partners with ambitious investors to build enduring wealth through disciplined strategy, rigorous risk management, and transparent reporting.

## ✨ Features

- **Modern Design**: Professional navy blue and gold color scheme matching company branding
- **Responsive Layout**: Mobile-first design that works seamlessly across all devices
- **Comprehensive Pages**: Complete enterprise website with all necessary sections
- **Interactive Elements**: Financial calculators, FAQ search, and dynamic content
- **Professional Content**: Industry-appropriate copy and compliance-aware language
- **SEO Optimized**: Built-in sitemap, robots.txt, and meta optimization

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Themes**: next-themes (Dark/Light mode)
- **Animations**: Custom CSS animations + Framer Motion
- **Forms**: react-hook-form + zod validation
- **Notifications**: Sonner

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (site)/            # Route groups for pages
│   │   ├── about/         # About page
│   │   ├── careers/       # Careers page
│   │   ├── contact/       # Contact page
│   │   ├── faq/           # FAQ page
│   │   ├── calculators/   # Financial calculators
│   │   ├── events/        # Events & webinars
│   │   ├── partners/      # Partners page
│   │   ├── legal/         # Legal pages (terms, privacy, etc.)
│   │   ├── solutions/     # Investment solutions
│   │   └── who-we-serve/  # Target audience pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── logo.tsx           # Company logo component
│   ├── site-header.tsx    # Navigation header
│   ├── site-footer.tsx    # Footer component
│   └── theme-provider.tsx # Theme context
└── lib/
    └── utils.ts           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zenx-llc/growthcapital.git
cd growthcapital
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages Overview

### Main Pages
- **Homepage**: Hero section, statistics, solutions overview, process, testimonials
- **About**: Company story, values, team, certifications
- **Contact**: Multi-channel contact options, office locations, consultation booking
- **Solutions**: Investment strategies and portfolio management services
- **Who We Serve**: Target client segments (HNIs, Family Offices, Institutions, etc.)

### Tools & Resources
- **Calculators**: SIP calculator, retirement planner, goal planning tools
- **FAQ**: Searchable knowledge base with categorized questions
- **Events**: Webinars, workshops, and networking events
- **Partners**: Strategic partnerships and vendor relationships
- **Careers**: Job openings, company culture, application process

### Legal & Compliance
- **Terms of Service**: Legal terms and conditions
- **Privacy Policy**: Data protection and privacy practices
- **Cookie Policy**: Cookie usage and management
- **Disclosures**: Financial disclosures and disclaimers

## 🎨 Design System

### Colors
- **Primary Navy**: #1e3a8a (Professional, trustworthy)
- **Secondary Gold**: #d97706 (Premium, wealth-focused)
- **Neutral Grays**: Slate color palette for text and backgrounds

### Typography
- **Primary Font**: Geist (Vercel's modern font family)
- **Mono Font**: Geist Mono for code and technical content

### Components
- **Cards**: Glassmorphism effects with backdrop blur
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Professional styling with validation states
- **Navigation**: Sticky header with smooth transitions

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create a new directory in `src/app/(site)/`
2. Add a `page.tsx` file with your component
3. Update navigation in `site-header.tsx` if needed
4. Add to sitemap in `sitemap.ts`

### Customizing Components

All UI components are in `src/components/ui/` and can be customized using Tailwind classes. The design system follows a consistent pattern with:

- Navy blue and gold color scheme
- Rounded corners (lg = 8px)
- Subtle shadows and blur effects
- Smooth transitions (300ms duration)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All components use mobile-first design principles with progressive enhancement.

## 🔒 Security & Compliance

- GDPR-compliant privacy policy
- Cookie consent management
- Secure form handling
- Input validation and sanitization
- Professional disclaimers for financial content

## 📈 Performance

- Next.js 14 App Router for optimal performance
- Image optimization with next/image
- Dynamic imports for code splitting
- Tailwind CSS for minimal bundle size
- Static generation where possible

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For technical support or questions about the website:
- Email: tech@zenx.io
- GitHub Issues: [Create an issue](https://github.com/zenx-llc/growthcapital/issues)

## 📄 License

This project is proprietary and confidential. All rights reserved by Growth Capital.
