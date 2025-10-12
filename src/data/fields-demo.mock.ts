export type Crop = "rice" | "durian";
export type FieldStage = "กำลังจะปลูก" | "กำลังเจริญเติบโต" | "กำลังเก็บผลผลิต";

export type FieldDemo = {
  id: string;
  nameTh: string;
  nameEn: string;
  crop: Crop;
  areaRai: number;               // ไร่
  subdistrict: string;
  district: string;
  province: string;
  plantedAt: string;             // ISO date
  stage: FieldStage;
  progressPct: number;           // 0..100 growth progress (mock)
  center: [number, number];      // lon, lat (mock for map center)
};

export const FIELDS_DEMO: FieldDemo[] = [
  {
    id: "f-rice-1",
    nameTh: "แปลงข้าวที่ 1",
    nameEn: "Rice Field 1",
    crop: "rice",
    areaRai: 1,
    subdistrict: "ตาจั่น",
    district: "คง",
    province: "นครราชสีมา",
    plantedAt: "2025-06-15",
    stage: "กำลังเจริญเติบโต",
    progressPct: 60,
    center: [102.216, 15.616]
  },
  {
    id: "f-durian-1",
    nameTh: "แปลงทุเรียนที่ 1",
    nameEn: "Durian Field 1",
    crop: "durian",
    areaRai: 14,
    subdistrict: "ปากช่อง",
    district: "ปากช่อง",
    province: "นครราชสีมา",
    plantedAt: "2020-01-05",
    stage: "กำลังเก็บผลผลิต",
    progressPct: 85,
    center: [101.389, 14.707]
  },
  {
    id: "f-rice-2",
    nameTh: "แปลงข้าวที่ 2",
    nameEn: "Rice Field 2",
    crop: "rice",
    areaRai: 2.5,
    subdistrict: "ตาจั่น",
    district: "คง",
    province: "นครราชสีมา",
    plantedAt: "2025-07-01",
    stage: "กำลังจะปลูก",
    progressPct: 15,
    center: [102.220, 15.620]
  },
  {
    id: "f-durian-2",
    nameTh: "แปลงทุเรียนที่ 2",
    nameEn: "Durian Field 2",
    crop: "durian",
    areaRai: 8,
    subdistrict: "ปากช่อง",
    district: "ปากช่อง",
    province: "นครราชสีมา",
    plantedAt: "2019-03-15",
    stage: "กำลังเจริญเติบโต",
    progressPct: 45,
    center: [101.385, 14.710]
  }
];

export type AdviceDemo = {
  fieldId: string;
  messageTh: string;
  messageEn: string;
};

export const ADVICE_DEMO: AdviceDemo[] = [
  { 
    fieldId: "f-rice-1", 
    messageTh: "⚠️ อย่าฉีดพ่นวันนี้ มีโอกาสฝนตก 70%",
    messageEn: "⚠️ Avoid spraying today, 70% chance of rain"
  },
  { 
    fieldId: "f-durian-1", 
    messageTh: "💧 รดน้ำช่วงเช้า หลีกเลี่ยงลมแรง",
    messageEn: "💧 Water in the morning, avoid strong winds"
  },
  { 
    fieldId: "f-rice-2", 
    messageTh: "🌱 เตรียมดินและปุ๋ยก่อนปลูก",
    messageEn: "🌱 Prepare soil and fertilizer before planting"
  },
  { 
    fieldId: "f-durian-2", 
    messageTh: "🔍 ตรวจสอบใบยอดอ่อน มีความชื้นสูง",
    messageEn: "🔍 Check young leaves, high humidity detected"
  }
];

export type SummaryDemo = {
  weatherTodayTh: string;
  weatherTodayEn: string;
  lastDiseaseTh: string;
  lastDiseaseEn: string;
  sprayAdviceTh: string;
  sprayAdviceEn: string;
  yieldTrendTh: string;
  yieldTrendEn: string;
};

export const SUMMARY_DEMO: SummaryDemo = {
  weatherTodayTh: "🌧️ ฝนมีโอกาสตก 70%",
  weatherTodayEn: "🌧️ 70% chance of rain",
  lastDiseaseTh: "🌱 พบใบจุดสีน้ำตาล (ตัวอย่าง)",
  lastDiseaseEn: "🌱 Brown spot detected (demo)",
  sprayAdviceTh: "❌ ยังไม่ควรฉีดพ่นวันนี้",
  sprayAdviceEn: "❌ Not recommended to spray today",
  yieldTrendTh: "📈 แนวโน้มผลผลิต: ปกติ",
  yieldTrendEn: "📈 Yield trend: Normal"
};
