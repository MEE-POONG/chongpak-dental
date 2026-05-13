import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-panel">
              <Image 
                src="/about.png" 
                alt="Our Wellness Clinic" 
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-1/2 bg-primary/5 rounded-full -z-10"></div>
            
            {/* Years of Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-panel p-8 rounded-3xl shadow-xl border border-border/40 z-20">
              <div className="text-4xl font-serif font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-primary/60 font-sans uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium tracking-wider text-primary/80 uppercase">
                Our Philosophy
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight">
                Where Dental Care <br/>
                <span className="italic">Meets Artistry</span>
              </h2>
            </div>
            
            <p className="text-lg text-primary/80 font-sans leading-relaxed font-light">
              At Chongpak Dental Wellness, we believe that a visit to the dentist should be more than just a check-up. It should be a rejuvenating experience for both your smile and your soul.
            </p>
            
            <p className="text-primary/70 font-sans leading-relaxed font-light">
              เราก่อตั้งขึ้นด้วยความตั้งใจที่จะเปลี่ยนมุมมองการทำฟันให้เป็นเรื่องที่ผ่อนคลาย ด้วยการผสมผสานเทคโนโลยีทางการแพทย์ที่ทันสมัย เข้ากับบรรยากาศที่หรูหราและการบริการที่ใส่ใจประหนึ่งสปาชั้นนำ เพื่อให้ทุกรอยยิ้มของคุณคือความมั่นใจที่แท้จริง
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="text-primary font-serif text-xl font-bold">Expert Doctors</h4>
                <p className="text-sm text-primary/60 font-sans">ทีมแพทย์ผู้เชี่ยวชาญเฉพาะทางหลากหลายสาขา</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-primary font-serif text-xl font-bold">Modern Tech</h4>
                <p className="text-sm text-primary/60 font-sans">เทคโนโลยีที่ทันสมัยเพื่อผลลัพธ์ที่ดีที่สุด</p>
              </div>
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center text-primary font-medium text-lg border-b-2 border-primary/30 pb-1 hover:border-primary transition-all duration-300 group">
                Learn More About Our Team
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
