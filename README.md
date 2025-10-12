# Rai AI Web MVP

A modern, farmer-friendly web application for Thai agriculture, featuring weather forecasting, plant disease scanning, and field management tools.

## 🌾 Features

- **Weather Forecasting**: 3-5 day weather predictions with spray recommendations
- **Plant Disease Scanning**: AI-powered crop disease detection (demo)
- **Field Management**: Interactive field maps and management tools
- **Bilingual Support**: Thai (default) and English language support
- **Mobile-First Design**: Optimized for rural farmers and mobile devices

## 🎨 Design System

Built with a **Kakao Healthcare-inspired** design system featuring:
- Clean, airy layout with generous white space
- Blue-teal gradient color scheme
- Large, readable fonts (18px+ base) for rural users
- High contrast for accessibility
- Modern card-based interface

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: React Router DOM
- **Internationalization**: i18next
- **Icons**: Lucide React
- **Fonts**: Noto Sans Thai (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bovornv/rai-ai-web-mvp.git
   cd rai-ai-web-mvp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── PhoneMock.tsx   # Phone mockup component
│   ├── TodayAtFarm.tsx # Weather widget
│   ├── WhyDownload.tsx # App benefits section
│   ├── Testimonials.tsx # Farmer testimonials
│   └── PartnerLogos.tsx # Partner logos
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Weather.tsx     # Weather forecast
│   ├── Scan.tsx        # Disease scanning demo
│   ├── Fields.tsx      # Field management
│   ├── About.tsx       # About page
│   ├── Help.tsx        # Help & FAQ
│   └── Download.tsx    # App download page
├── i18n/               # Internationalization
│   ├── i18n.ts         # i18n configuration
│   └── locales/        # Translation files
│       ├── th.json     # Thai translations
│       └── en.json     # English translations
├── styles/             # Global styles
│   └── globals.css     # Design system CSS
└── mocks/              # Mock data
    └── scanMock.ts     # Scan demo data
```

## 🌐 Pages

- **Home** (`/`): Landing page with hero, features, and CTAs
- **Weather** (`/weather`): Weather forecast with spray recommendations
- **Scan** (`/scan`): Plant disease scanning demo
- **Fields** (`/fields`): Field management dashboard
- **About** (`/about`): Company information and mission
- **Help** (`/help`): FAQ and support information
- **Download** (`/apkdownload`): App download page

## 🎯 Target Audience

- **Primary**: Thai farmers in rural areas
- **Secondary**: Agricultural cooperatives and farm stores
- **Tertiary**: Agricultural researchers and extension workers

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface (56px+ tap targets)
- Optimized for 3G connections
- Large fonts for readability in bright sunlight
- Thai language support with proper font rendering

## 🚀 Deployment

The app is ready for deployment on platforms like:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Design System

The app uses a custom design system defined in `src/styles/globals.css`:

- **Colors**: Cool blue-teal palette with agriculture accents
- **Typography**: Noto Sans Thai with large, readable sizes
- **Components**: Reusable classes for buttons, cards, and layouts
- **Spacing**: Consistent spacing using Tailwind utilities

## 📄 License

This project is proprietary software developed for Rai AI.

## 🤝 Contributing

This is a private MVP project. For questions or issues, please contact the development team.

## 📞 Support

- **Email**: support@raiai.app
- **Website**: https://raiai.app

---

**Built with ❤️ for Thai farmers** 🌾