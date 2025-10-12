# 🚀 Rai AI Web MVP - Deployment Guide

## Vercel Deployment

### Prerequisites
1. Vercel account (free tier available)
2. GitHub repository with the code
3. API keys for Mapbox and MeteoSource

### Step-by-Step Deployment

#### 1. Prepare Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Rai AI Web MVP"

# Push to GitHub
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### 2. Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### 3. Set Environment Variables

In Vercel dashboard, go to Project Settings > Environment Variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_MAPBOX_ACCESS_TOKEN` | `pk.eyJ1...` | Get from [mapbox.com](https://mapbox.com) |
| `VITE_METEOSOURCE_API_KEY` | `your_key_here` | Get from [meteosource.com](https://meteosource.com) |
| `VITE_METEOSOURCE_API_URL` | `https://www.meteosource.com/api/v1/free` | API base URL |
| `VITE_APP_NAME` | `Rai AI` | App name |
| `VITE_APP_VERSION` | `1.0.0` | App version |
| `VITE_APP_DOMAIN` | `raiai.app` | App domain |

#### 4. Deploy

1. **Click "Deploy"**
2. **Wait for build to complete** (usually 2-3 minutes)
3. **Your app will be available at `https://your-project.vercel.app`**

#### 5. Custom Domain (Optional)

1. **Go to Project Settings > Domains**
2. **Add your domain** (e.g., `raiai.app`)
3. **Configure DNS records** as instructed by Vercel
4. **Enable HTTPS** (automatic with Vercel)

## API Keys Setup

### Mapbox Access Token
1. Go to [mapbox.com](https://mapbox.com)
2. Sign up for free account
3. Go to Account > Access Tokens
4. Create new token or use default public token
5. Copy token and add to Vercel environment variables

### MeteoSource API Key
1. Go to [meteosource.com](https://meteosource.com)
2. Sign up for free account
3. Go to API section
4. Generate API key
5. Copy key and add to Vercel environment variables

## Post-Deployment Checklist

- [ ] Site loads correctly at custom domain
- [ ] All pages are accessible
- [ ] Thai/English language toggle works
- [ ] Weather page shows mock data
- [ ] Scan page allows file upload
- [ ] Fields page shows map (may need Mapbox token)
- [ ] APK download works
- [ ] Mobile responsiveness tested
- [ ] HTTPS is enabled
- [ ] Analytics tracking added (optional)

## Monitoring & Maintenance

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor page views, bounce rate, and performance
- Track conversion to app downloads

### Performance Monitoring
- Use Vercel's built-in performance monitoring
- Monitor Core Web Vitals
- Check for any build errors or runtime issues

### Updates
- Push changes to main branch for automatic deployment
- Test changes in preview deployments first
- Monitor for any breaking changes

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Map Not Loading**
   - Verify Mapbox token is set correctly
   - Check if token has proper permissions
   - Ensure domain is added to Mapbox token restrictions

3. **Weather Data Not Loading**
   - Verify MeteoSource API key
   - Check API quota limits
   - Test API endpoint directly

4. **Styling Issues**
   - Ensure Tailwind CSS is building correctly
   - Check for missing CSS classes
   - Verify font loading (Noto Sans Thai)

### Support
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Rai AI support: support@raiai.app
