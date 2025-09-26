# Philadels Catering & Decor Website

A modern, responsive website for Philadels Catering & Decor built with Next.js, TypeScript, and Tailwind CSS. This website showcases beautiful cakes, catering services, and event decorations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with TypeScript and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Static Site Generation**: Optimized for performance and SEO
- **Netlify Forms**: Built-in contact form and newsletter subscription
- **Image Optimization**: Next.js Image component for optimal loading
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   ├── gallery.tsx     # Gallery page
│   ├── contact.tsx     # Contact page
│   └── _app.tsx        # App configuration
├── public/             # Static assets
│   └── assets/         # Images and media files
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS and custom styles
└── netlify.toml        # Netlify configuration
```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to Netlify

### Option 1: Deploy from Git (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Use these build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `out`
     - **Node version**: `18`

3. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at a random URL
   - You can add a custom domain later

### Option 2: Manual Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Your site will be deployed instantly

## 📧 Contact Form Setup

The contact form uses Netlify Forms and will work automatically once deployed. No additional configuration needed!

### Form Fields:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Message** (required)

## 📬 Newsletter Subscription

The newsletter subscription form is also powered by Netlify Forms and will automatically collect email addresses.

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Indigo/Purple gradients
- Secondary: Pink/Rose accents
- Background: Light gradients

### Fonts
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Images
All images are stored in `public/assets/` and optimized using Next.js Image component.

## 🔧 Configuration Files

- `next.config.js`: Next.js configuration for static export
- `tailwind.config.js`: Tailwind CSS customization
- `netlify.toml`: Netlify deployment settings
- `tsconfig.json`: TypeScript configuration

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Meta tags for each page
- Open Graph tags
- Structured data
- Optimized images
- Fast loading times

## 🚀 Performance

- Static Site Generation (SSG)
- Image optimization
- CSS purging
- Minimal JavaScript bundle
- CDN delivery via Netlify

## 📞 Support

For any questions or issues, please contact:
- **Email**: philadelscatering@gmail.com
- **Phone**: 024 218 7608

## 📄 License

© 2025 Philadels Catering & Decor. All rights reserved.

---

**Built with ❤️ by [Melvin Kwaku Yawlui](https://portfolio-site-pi-sable.vercel.app/)**