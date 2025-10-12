export type DemoItem = {
  id: string;                   // "rice_brown_spot", "durian_anthracnose"
  crop: "rice" | "durian";
  labelTh: string;
  labelEn: string;
  type: "disease" | "pest" | "deficiency";
  confidence: number;           // 0.72 etc (fixed for mock)
  stepsTh: string[];            // 3 short lines
  stepsEn: string[];
  ppeTh: string;
  ppeEn: string;
  sampleUrls?: string[];        // optional example images
};

export const DEMO_ITEMS: DemoItem[] = [
  {
    id: "rice_brown_spot",
    crop: "rice",
    labelTh: "ใบจุดสีน้ำตาล",
    labelEn: "Brown spot",
    type: "disease",
    confidence: 0.82,
    stepsTh: [
      "ตัดใบที่เป็นโรคทิ้งเพื่อลดการแพร่กระจาย",
      "ฉีดพ่นตามคำแนะนำปุ๋ย/สารจากร้านเกษตร",
      "ติดตามอีกครั้งใน 3–5 วัน"
    ],
    stepsEn: [
      "Remove heavily infected leaves",
      "Apply recommended input from agri shop",
      "Re-check in 3–5 days"
    ],
    ppeTh: "สวมถุงมือและหน้ากากขณะฉีดพ่น",
    ppeEn: "Wear gloves and a mask during spraying",
  },
  {
    id: "rice_n_deficiency",
    crop: "rice",
    labelTh: "ขาดธาตุไนโตรเจน",
    labelEn: "Nitrogen deficiency",
    type: "deficiency",
    confidence: 0.76,
    stepsTh: ["ใส่ปุ๋ย N ตามอัตราที่แนะนำ", "รดน้ำสม่ำเสมอ", "ประเมินอาการใหม่ใน 5–7 วัน"],
    stepsEn: ["Apply nitrogen fertilizer as recommended", "Maintain watering", "Reassess in 5–7 days"],
    ppeTh: "ล้างมือหลังการใส่ปุ๋ย",
    ppeEn: "Wash hands after fertilizing",
  },
  {
    id: "durian_anthracnose",
    crop: "durian",
    labelTh: "แอนแทรคโนส (ใบจุด)",
    labelEn: "Anthracnose",
    type: "disease",
    confidence: 0.84,
    stepsTh: ["ตัดใบ/กิ่งที่เป็นโรค", "หลีกเลี่ยงการฉีดพ่นช่วงฝนตก/ลมแรง", "ตรวจซ้ำใน 3 วัน"],
    stepsEn: ["Prune infected leaves/twigs", "Avoid spraying during rain/windy hours", "Recheck in 3 days"],
    ppeTh: "สวมหน้ากาก/ถุงมือ",
    ppeEn: "Use mask/gloves",
  }
];

export const getRandomDemoItem = (crop?: 'rice' | 'durian'): DemoItem => {
  const filteredItems = crop ? DEMO_ITEMS.filter(item => item.crop === crop) : DEMO_ITEMS;
  const randomIndex = Math.floor(Math.random() * filteredItems.length);
  return filteredItems[randomIndex];
};
