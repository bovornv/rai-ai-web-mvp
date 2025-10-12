# 🌱 Rai AI Web MVP – Scope Document
**Domain:** https://raiai.app
**Goal:** Funnel users → Showcase key features → Convert to mobile app download

---

## 🎯 Core Objectives
1. Give farmers a fast, low-bandwidth demo of Rai AI’s capabilities.
2. Build trust and brand credibility (“เพื่อนเกษตรอัจฉริยะของคนไทย”).
3. Drive mobile app installs (APK or Play Store).

---

## 🗺️ Pages & Features
### 1. Home Page
- Hero: “ไร่ AI – Smart Farming” bilingual headline.
- Thai default, big fonts, green → teal gradient theme.
- Buttons: Try Free → `/weather`, Download App → `/apkdownload`.
- Key Features section (Weather Check, Disease Scan, Field View).
- CTA: “พร้อมจะเริ่มทำเกษตรอัจฉริยะหรือยัง?”

### 2. Weather Check
- Live 3–5 day forecast (MeteoSource API).
- Editable location (ตำบล / จังหวัด).
- Simple icons (☀️🌧️🌩️).
- Offline fallback mock data if API fails.

### 3. Scan Disease (Demo)
- Single image upload + camera access (WebRTC).
- Show mock result (e.g., “พบใบจุดสีน้ำตาล – Brown Spot”).
- Short recommendation text and CTA “ดาวน์โหลดแอปเพื่อสแกนไม่จำกัด”.

### 4. Fields (Demo Map)
- Mapbox readonly demo with 2 sample fields (rice & durian).
- Legend + “เพิ่ม/แก้ไขในแอปมือถือ → Download App” banner.
- Data: mock JSON from `/data/sample-fields.json`.

### 5. About Page
- Mission & Story (bilingual Thai/English).
- Tech stack: React + TypeScript + Express API.
- Teaser: “AI พัฒนาโดยคนไทย เพื่อเกษตรกรไทย”.

### 6. Help / FAQ
Q1 : What is Rai AI? → “เพื่อนเกษตรอัจฉริยะ ช่วยตรวจอากาศ โรคพืช และ แนะนำการฉีดพ่น.”
Q2 : Is it free? → “ฟรีสำหรับการใช้งานพื้นฐาน ทดลอง 1 แปลง.”
Q3 : How accurate? → “ผลลัพธ์เป็น AI ประมาณ 70–90% ต้องใช้ควบคู่กับการสังเกตจริง.”

### 7. APK Download Page
- Hosts APK from `/downloads/rai-ai-vX.Y.Z.apk`.
- Show version, size, SHA-256, Thai install steps + QR code.
- Optional Play Store link when available.

---

## 💡 Design & UI Guidelines
- Default language: Thai → English toggle top-right.
- Noto Sans Thai, large text, rounded cards, soft green palette.
- Use same “medical-grade calm” feel as mobile MVP.
- Responsive (Mobile-first grid).

---

## ⚙️ Data & Integration
| Feature | Source | Mode |
|----------|---------|------|
| Weather | MeteoSource API | Live |
| Fields | `/data/sample-fields.json` | Mock |
| Scan | Local mock inference | Mock |
| Prices | DOA RSS feed (optional) | Read-only |
| APK download | Static file hosting | Real |

---

## 🔐 Security / Privacy
- HTTPS only (Vercel).
- No user accounts in MVP.
- Show simple Thai Privacy Notice footer.

---

## 🧱 Deliverables
- React + TypeScript SPA.
- Deployed on Vercel.
- `/api` routes served by Express (Weather proxy + Ping).
- SEO meta tags and OpenGraph previews.
