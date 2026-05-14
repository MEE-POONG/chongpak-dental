'use client';

import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "คุณวิภาวรรณ",
    role: "นักธุรกิจ",
    content: "ประทับใจตั้งแต่ก้าวแรกที่เข้ามาค่ะ บรรยากาศเหมือนสปามากกว่าคลินิกทำฟัน คุณหมอมือเบามาก และอธิบายทุกขั้นตอนอย่างละเอียด แนะนำเลยค่ะสำหรับใครที่กลัวการทำฟัน",
    rating: 5,
  },
  {
    id: 2,
    name: "คุณธนพล",
    role: "วิศวกร",
    content: "มาทำรากฟันเทียมที่นี่ครับ อุปกรณ์ทันสมัยมาก สะอาด และดูแลเป็นกันเองสุดๆ ผลลัพธ์ออกมาเป็นที่น่าพอใจมากครับ ขอบคุณทีมงาน Chongpak ทุกท่านครับ",
    rating: 5,
  },
  {
    id: 3,
    name: "คุณรินรดา",
    role: "Influencer",
    content: "ชอบการบริการที่นี่มากค่ะ มาฟอกสีฟัน ฟันขาวใสขึ้นมาก ไม่เสียวฟันเลย พี่ๆ พนักงานน่ารักทุกคน คุ้มค่ากับการเดินทางมาจริงๆ ค่ะ",
    rating: 5,
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">เสียงตอบรับจากลูกค้า</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-primary/70 max-w-2xl mx-auto text-lg italic">
            "ความประทับใจของผู้รับบริการ คือหัวใจสำคัญของ Chongpak Dental Wellness"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-panel p-8 rounded-2xl shadow-sm border border-border/30 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-primary/80 mb-6 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {review.name.charAt(3)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-sm text-primary/60">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary/60">
            <span className="text-2xl font-bold">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span>จากกว่า 500+ รีวิวใน Google Maps</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
