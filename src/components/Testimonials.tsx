import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const testimonials = [
    {
      quote: isThai 
        ? 'ใช้แล้วรู้เลยว่าฝนจะตกเมื่อไหร่ ไม่ต้องเสียเวลาฉีดพ่นเปล่าๆ'
        : 'Using it, I know exactly when it will rain, no more wasted spraying time',
      author: isThai ? 'คุณสมชาย' : 'Mr. Somchai',
      location: isThai ? 'จังหวัดนครราชสีมา' : 'Nakhon Ratchasima Province'
    },
    {
      quote: isThai 
        ? 'สแกนใบข้าวแล้วรู้โรคทันที แก้ไขได้เร็ว ต้นข้าวไม่เสียหาย'
        : 'Scan rice leaves and know diseases instantly, fix quickly, no crop damage',
      author: isThai ? 'คุณสมหญิง' : 'Ms. Somjin',
      location: isThai ? 'จังหวัดขอนแก่น' : 'Khon Kaen Province'
    }
  ];

  return (
    <div className="card p-8 mb-8">
      <h3 className="text-display-2 text-ink text-center mb-8">
        {isThai ? 'เสียงจากเกษตรกร' : 'Farmer Testimonials'}
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 rounded-xl2 p-6">
            <div className="text-6xl text-pri-200 mb-4">"</div>
            <p className="text-ink text-lg leading-relaxed mb-4">
              {testimonial.quote}
            </p>
            <div className="border-t border-surface-border pt-4">
              <div className="font-bold text-ink">{testimonial.author}</div>
              <div className="text-sm text-ink-soft">{testimonial.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
