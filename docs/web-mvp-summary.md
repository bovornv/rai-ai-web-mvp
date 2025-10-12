# Rai AI Web MVP – Implementation Summary

**Purpose:**
Serve as Rai AI’s public front door — letting farmers test AI features, see real weather, and be convinced to download the mobile app.

**Core Features**
- 3 interactive pages + 2 static info pages.
- Weather → Live MeteoSource forecast.
- Scan → Demo photo upload (mock AI result).
- Fields → Mapbox demo (two sample plots).
- About & Help → Build trust and explain purpose.
- APK Download → Direct test install link + QR.

**Tone & Style**
- Thai first, farmer-friendly, no technical jargon.
- Large font sizes, simple sentences, icons with labels.
- Calm teal/green palette matching mobile app.

**Tech Stack**
- React 18 + TypeScript
- Tailwind CSS / ShadCN UI
- Mapbox GL JS (read-only)
- Express proxy (API / weather)
- Deployed via Vercel

**Goal Metrics**
- Bounce < 30%
- 50 K visitors in 6 months
- ≥ 15% click “Download App”

**Next Steps after MVP**
- Enable user login (V1).
- Add Co-op Portal (V2).
- Launch Marketplace Lite (V3).
- Outbreak Radar Map (V4).
