export type CropType = 'rice' | 'durian';

export type ConfidenceLevel = 'high' | 'medium' | 'low';

export type ScanResult = {
  id: string;
  crop: CropType;
  conditionTh: string;
  conditionEn: string;
  confidence: ConfidenceLevel;
  confidenceTh: string;
  confidenceEn: string;
  stepsTh: string[];
  stepsEn: string[];
  ppeTh?: string;
  ppeEn?: string;
  ppeIcons?: string[];
};

export const MOCK_RESULTS: ScanResult[] = [
  // Rice diseases
  {
    id: 'rice_brown_spot',
    crop: 'rice',
    conditionTh: 'ใบจุดสีน้ำตาล',
    conditionEn: 'Brown Spot',
    confidence: 'high',
    confidenceTh: 'แน่ใจมาก',
    confidenceEn: 'High',
    stepsTh: [
      'ตัดใบที่เป็นโรคทิ้งเพื่อลดการแพร่กระจาย',
      'ฉีดพ่นด้วยสารป้องกันเชื้อรา เช่น คาร์เบนดาซิม',
      'ปรับปรุงการระบายอากาศในแปลง'
    ],
    stepsEn: [
      'Remove infected leaves to reduce spread',
      'Apply fungicide like Carbendazim',
      'Improve field ventilation'
    ],
    ppeTh: 'สวมถุงมือและหน้ากากขณะฉีดพ่น',
    ppeEn: 'Wear gloves and mask during spraying',
    ppeIcons: ['🧤', '😷']
  },
  {
    id: 'rice_blast',
    crop: 'rice',
    conditionTh: 'โรคไหม้',
    conditionEn: 'Blast Disease',
    confidence: 'medium',
    confidenceTh: 'ปานกลาง',
    confidenceEn: 'Medium',
    stepsTh: [
      'ลดการให้น้ำในช่วงที่มีความชื้นสูง',
      'ฉีดพ่นด้วยสารป้องกันเชื้อรา',
      'ติดตามอาการอย่างใกล้ชิด'
    ],
    stepsEn: [
      'Reduce watering during high humidity',
      'Apply fungicide treatment',
      'Monitor symptoms closely'
    ],
    ppeTh: 'สวมอุปกรณ์ป้องกันขณะฉีดพ่น',
    ppeEn: 'Wear protective equipment while spraying',
    ppeIcons: ['🧤', '😷', '🥽']
  },
  {
    id: 'rice_n_deficiency',
    crop: 'rice',
    conditionTh: 'ขาดธาตุไนโตรเจน',
    conditionEn: 'Nitrogen Deficiency',
    confidence: 'high',
    confidenceTh: 'แน่ใจมาก',
    confidenceEn: 'High',
    stepsTh: [
      'ใส่ปุ๋ยไนโตรเจนตามอัตราที่แนะนำ',
      'รดน้ำสม่ำเสมอเพื่อให้ปุ๋ยละลาย',
      'ประเมินอาการใหม่ใน 5-7 วัน'
    ],
    stepsEn: [
      'Apply nitrogen fertilizer as recommended',
      'Water regularly to dissolve fertilizer',
      'Reassess symptoms in 5-7 days'
    ],
    ppeTh: 'ล้างมือหลังการใส่ปุ๋ย',
    ppeEn: 'Wash hands after fertilizing',
    ppeIcons: ['🧤']
  },
  // Durian diseases
  {
    id: 'durian_anthracnose',
    crop: 'durian',
    conditionTh: 'แอนแทรคโนส',
    conditionEn: 'Anthracnose',
    confidence: 'high',
    confidenceTh: 'แน่ใจมาก',
    confidenceEn: 'High',
    stepsTh: [
      'ตัดใบและกิ่งที่เป็นโรคทิ้ง',
      'หลีกเลี่ยงการฉีดพ่นช่วงฝนตกหรือลมแรง',
      'ตรวจสอบอีกครั้งใน 3-5 วัน'
    ],
    stepsEn: [
      'Remove infected leaves and branches',
      'Avoid spraying during rain or strong wind',
      'Recheck in 3-5 days'
    ],
    ppeTh: 'สวมหน้ากากและถุงมือ',
    ppeEn: 'Wear mask and gloves',
    ppeIcons: ['😷', '🧤']
  },
  {
    id: 'durian_phytophthora',
    crop: 'durian',
    conditionTh: 'โรครากเน่า',
    conditionEn: 'Root Rot',
    confidence: 'medium',
    confidenceTh: 'ปานกลาง',
    confidenceEn: 'Medium',
    stepsTh: [
      'ปรับปรุงการระบายน้ำในแปลง',
      'ใช้สารป้องกันเชื้อราในดิน',
      'ลดการให้น้ำในช่วงที่ดินชื้น'
    ],
    stepsEn: [
      'Improve field drainage',
      'Apply soil fungicide',
      'Reduce watering when soil is moist'
    ],
    ppeTh: 'สวมถุงมือและรองเท้าบูท',
    ppeEn: 'Wear gloves and boots',
    ppeIcons: ['🧤', '👢']
  },
  {
    id: 'durian_k_deficiency',
    crop: 'durian',
    conditionTh: 'ขาดธาตุโพแทสเซียม',
    conditionEn: 'Potassium Deficiency',
    confidence: 'low',
    confidenceTh: 'น้อย',
    confidenceEn: 'Low',
    stepsTh: [
      'ใส่ปุ๋ยโพแทสเซียมตามอัตราที่แนะนำ',
      'ตรวจสอบค่า pH ของดิน',
      'ติดตามการเจริญเติบโตของใบใหม่'
    ],
    stepsEn: [
      'Apply potassium fertilizer as recommended',
      'Check soil pH levels',
      'Monitor new leaf growth'
    ],
    ppeTh: 'ล้างมือหลังการใส่ปุ๋ย',
    ppeEn: 'Wash hands after fertilizing',
    ppeIcons: ['🧤']
  }
];

export const analyzeImageMock = async (file: File, crop?: CropType): Promise<ScanResult> => {
  // Simulate analysis delay (0.5-1s)
  const delay = Math.random() * 500 + 500;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Filter results by crop if specified, otherwise random
  const availableResults = crop 
    ? MOCK_RESULTS.filter(result => result.crop === crop)
    : MOCK_RESULTS;
  
  // Return random result
  const randomIndex = Math.floor(Math.random() * availableResults.length);
  return availableResults[randomIndex];
};

export const getConfidenceColor = (confidence: ConfidenceLevel): string => {
  switch (confidence) {
    case 'high':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getCropIcon = (crop: CropType): string => {
  return crop === 'rice' ? '🌾' : '🥭';
};
