# Aqstoria - Digital Agency Portfolio

A modern digital agency website built with Next.js, TypeScript, and Tailwind CSS. Features comprehensive services including custom software development, social media management, and digital marketing solutions.

## 📄 Pages & Features

### Main Pages
- **Homepage** - Hero section, services showcase, portfolio, testimonials
- **Store** - Script marketplace with PKR pricing and filtering
- **Social Media Management** - Service packages with detailed pricing
- **Case Studies** - Detailed project breakdowns and success stories
- **Blog** - Articles with categories and search functionality
- **About** - Team information and company details
- **Contact** - Contact form and information

### Key Features
- **Interactive Animations** - Smooth transitions and micro-interactions
- **Glassmorphism Design** - Modern glass-like UI elements
- **Dark/Light Theme** - Toggle between themes
- **Responsive Design** - Mobile-first approach
- **AI Chatbot** - Interactive customer support
- **Dynamic Content** - Real-time updates and filtering

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aqsa-portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to Vercel (production)
- `npm run deploy:preview` - Deploy to Vercel (preview)

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
npm run deploy
```

### GitHub Actions

The project includes GitHub Actions workflows for automated deployment:

- **CI Workflow** (`.github/workflows/ci.yml`): Runs on every push and PR
- **Deploy Workflow** (`.github/workflows/deploy.yml`): Deploys to Vercel on push to main/master

#### Required Secrets

Add these secrets to your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

## 📁 Project Structure

```
aqsa-portfolio/
├── app/                 # Next.js app directory
├── components/          # Reusable components
│   └── ui/            # UI components
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
└── hooks/              # Custom React hooks
```

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible components
- **Lucide React** for icons
- **Next Themes** for dark/light mode

## 📝 License

This project is licensed under the MIT License. 