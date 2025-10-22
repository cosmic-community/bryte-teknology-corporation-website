# Bryte Teknology Corporation Website

![Bryte Teknology Corporation](https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=300&fit=crop&auto=format)

A professional, modern website for Bryte Teknology Corporation - providing generator parts, supplies, and technical services to remote islands and hard-to-reach areas.

## Features

- 🏠 **Modern Homepage** - Hero section with compelling visuals and clear mission statement
- 📖 **About Us** - Company history and commitment to island communities
- 🔧 **Services Page** - Detailed breakdown of generator parts, repairs, and technical services
- 💬 **Customer Testimonials** - Reviews from satisfied island communities
- 📸 **Project Highlights** - Showcase of successful generator installations and repairs
- 📱 **Contact & Quote Forms** - Professional inquiry system for service requests
- 🎨 **Professional Design** - Blue, gray, and white color scheme representing reliability and technology
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🚀 **SEO Optimized** - Proper meta tags and semantic HTML structure

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f8d96393dce2c7d2fc1ab7&clone_repository=68f8e0550e6ed044d496adf5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from scratch with custom content structure

### Code Generation Prompt

> Create a professional, modern website for Bryte Teknology Corporation, a company that provides generator parts and supplies for remote islands and hard-to-reach areas.
> 
> The website should include:
> 
> Homepage: Introduce Bryte Teknology Corporation with a clean, modern hero section showing generators or island power solutions. Emphasize the company's mission to keep remote islands powered.
> 
> About Us Page: Describe how the company started and its commitment to bringing reliable electricity to island communities through generator parts, repairs, and delivery.
> 
> Services Page:
> - Supply and delivery of generator parts and accessories
> - On-site generator repair and maintenance
> - Technical assistance and dispatch of skilled technicians to remote locations
> 
> Contact Page: Include a form and contact info for service inquiries, delivery requests, or partnership opportunities.
> 
> Visual Style: Use blue, gray, and white colors to represent technology, energy, and reliability.
> 
> Tone: Professional, dependable, and service-oriented.
> 
> Optional sections:
> - Testimonials from island communities
> - Project highlights showing successful generator repairs or deliveries
> - "Request a Quote" button linking to contact form

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React** - UI component library
- **Lucide Icons** - Modern icon system

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket
- Basic understanding of Next.js and React

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic CMS Integration

This website uses Cosmic CMS to manage all content including:

- **Pages Object Type** - Homepage, About, Services, Contact content
- **Services Object Type** - Individual service descriptions
- **Testimonials Object Type** - Customer reviews and ratings
- **Projects Object Type** - Case studies and project highlights
- **Company Info Object Type** - Contact details, mission statement, company values

### Setting Up Your Cosmic Bucket

1. Create a new bucket in your Cosmic dashboard
2. Create the following Object Types:
   - `pages` (title, content, hero_image, metadata)
   - `services` (title, description, icon, features)
   - `testimonials` (customer_name, location, rating, testimonial, image)
   - `projects` (title, description, location, image, completion_date)
   - `company-info` (company_name, tagline, phone, email, address, social_links)

3. Add sample content to each Object Type
4. Update your `.env.local` with your bucket credentials

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials
```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['title', 'metadata'])
  .depth(1)
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `.next`
6. Deploy!

## Project Structure

```
bryte-teknology/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   └── CosmicBadge.tsx
├── lib/
│   └── cosmic.ts
├── types.ts
└── public/
    ├── dashboard-console-capture.js
    └── ...
```

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues, please contact Bryte Teknology Corporation or refer to the [Cosmic documentation](https://www.cosmicjs.com/docs).

<!-- README_END -->