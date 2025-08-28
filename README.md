 
# Shreyansh Bhagwat Portfolio

A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built with Next.js for better search engine optimization
- **Performance**: Optimized for fast loading and smooth interactions
- **Animations**: Powered by Framer Motion for engaging user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ShreyanshBB007/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your resume file:
   - Place your `resume.pdf` file in the `public/` directory

4. Update project links:
   - Replace placeholder GitHub links in the projects section
   - Update YouTube video IDs with your actual project demos

## 🏃‍♂️ Running Locally

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🌐 Deployment on Vercel

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your project

## 🏠 Custom Domain Setup (shreyanshbhagwat.me)

### Step 1: Configure Domain in Vercel

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Domains**
3. Add your domain: `shreyanshbhagwat.me`
4. Also add the www subdomain: `www.shreyanshbhagwat.me`

### Step 2: Configure DNS Records

Add these DNS records in your domain registrar's control panel:

**A Records:**
- Name: `@` (or blank) → Value: `76.76.19.61`
- Name: `www` → Value: `76.76.19.61`

**Alternative CNAME Setup:**
- Name: `@` (or blank) → Value: `cname.vercel-dns.com`
- Name: `www` → Value: `cname.vercel-dns.com`

### Step 3: Verify Domain

1. Wait for DNS propagation (can take up to 48 hours)
2. Vercel will automatically issue SSL certificates
3. Your site will be live at `https://shreyanshbhagwat.me`

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/
│   └── resume.pdf           # Your resume file
├── components/              # Reusable components (if needed)
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── README.md                # This file
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#0ea5e9',
        600: '#0284c7',
        // ... add your colors
      }
    }
  }
}
```

### Content
Update your information in `app/page.tsx`:

- Personal information
- Skills and technologies
- Project details and links
- Contact information
- Resume download link

### Animations
Customize animations in the Framer Motion configurations throughout the component.

## 📱 Sections Included

1. **Home/About** - Hero section with introduction
2. **Resume** - Download link and key highlights
3. **Skills** - Technical skills with icons
4. **Projects** - Project showcase with videos
5. **Education** - Academic background
6. **Certifications** - Professional certifications
7. **Contact** - Contact information and links

## 🔧 Environment Variables

No environment variables are required for basic functionality. If you add analytics or other services, create a `.env.local` file:

```env
# Example for analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📈 Performance Tips

- Keep images optimized
- Minimize bundle size by removing unused dependencies
- Use lazy loading for heavy content
- Implement proper caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Vercel deployment docs](https://vercel.com/docs)
3. Open an issue on GitHub

---

Built with ❤️ by Shreyansh Bhagwat