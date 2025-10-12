# ✅ Rai AI Web MVP Implementation Checklist

## 1️⃣ Setup
- [ ] Init React + TypeScript (Vite or Next.js) project.
- [ ] Install Tailwind CSS + ShadCN UI + Lucide icons.
- [ ] Add Noto Sans Thai font (global).
- [ ] Configure i18n (Thai default, English toggle).

## 2️⃣ Pages
### Home
- [ ] Hero section (bilingual headline + CTA).
- [ ] Feature cards (Weather, Scan, Fields).
- [ ] Download App + Try Free buttons.

### Weather
- [ ] Fetch live 3–5 day forecast from MeteoSource API.
- [ ] Location picker (ตำบล/จังหวัด manual).
- [ ] Show temperature, rain probability, wind speed.

### Scan (Demo)
- [ ] Single file upload + camera access (WebRTC).
- [ ] Mock AI analysis display with confidence bar.
- [ ] Show “Download App for Unlimited Scans”.

### Fields
- [ ] Mapbox read-only map with 2 sample fields.
- [ ] Legend for Rice / Durian.
- [ ] Banner → “จัดการแปลงใน แอปมือถือ”.

### About / Help
- [ ] Mission + Story sections (bilingual).
- [ ] FAQ Q&A (What is Rai AI? Is it free? Accuracy?).
- [ ] Contact: support@raiai.app.

### APK Download
- [ ] Static file hosted at /public/downloads/rai-ai-v0.1.0.apk.
- [ ] Page shows version, size, SHA-256, Thai install guide.
- [ ] Generate QR link to APK.

## 3️⃣ Design Consistency
- [ ] Thai default UI + language toggle.
- [ ] Big fonts, soft green gradient backgrounds.
- [ ] Rounded cards + subtle shadow + white space.

## 4️⃣ Integrations
- [ ] MeteoSource API key via .env.
- [ ] Mapbox token via .env.
- [ ] Express API proxy for Weather.

## 5️⃣ Testing & Deployment
- [ ] Local QA for mobile responsiveness.
- [ ] Verify Thai/English toggle works.
- [ ] Check HTTPS enforced (Vercel).
- [ ] Publish Vercel preview → Production.
- [ ] Add Google Analytics basic tracking.

---

**Deliverable:**
Live site at https://raiai.app showing Weather, Scan demo, Fields demo, About, Help, and APK Download pages — Thai default, responsive, ready for farmer testing.
