import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-16 min-h-[calc(100vh-5rem)]">
      <div className="w-full lg:w-1/2 space-y-8 z-10 text-center lg:text-left">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium mb-2 tracking-wider text-primary/80 uppercase">
          Premium Dental Spa
        </div>
        <h1 className="text-5xl lg:text-7xl font-serif text-primary leading-[1.15]">
          Elevate Your <br />
          <span className="italic text-primary/90">Smile Journey</span>
        </h1>
        <p className="text-lg text-primary/80 font-sans max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
          Experience premium dental care in a serene and relaxing environment. เรามอบประสบการณ์การทำฟันที่ผ่อนคลายและหรูหรา เพื่อรอยยิ้มที่มั่นใจของคุณ
        </p>
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-primary text-panel px-8 py-4 rounded-full text-base font-medium shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Discover Our Services
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <button className="px-8 py-4 rounded-full text-base font-medium border border-border hover:border-primary text-primary transition-all duration-300 hover:bg-primary/5">
            Consultation
          </button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
        {/* Background Decorative Elements */}
        <div className="absolute -inset-6 bg-secondary/30 rounded-t-full rounded-b-[40%] transform rotate-6 -z-10 blur-xl"></div>
        <div className="absolute -inset-4 bg-secondary/50 rounded-t-full rounded-b-[40%] transform -rotate-3 -z-10 transition-transform duration-700 hover:rotate-0"></div>
        <div className="absolute inset-4 border border-secondary rounded-t-[10rem] rounded-b-[2rem] transform rotate-3 -z-10"></div>
        
        {/* Main Image Container */}
        <div className="relative w-[90%] sm:w-[80%] lg:w-full max-w-md aspect-[4/5] rounded-t-[12rem] rounded-b-[3rem] overflow-hidden border-4 border-panel shadow-2xl group">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
          <Image 
            src="/hero.png" 
            alt="Dental Wellness Clinic" 
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
            priority
          />
        </div>
        
        {/* Floating Badge */}
        <div className="absolute -bottom-6 -left-6 bg-panel p-4 rounded-2xl shadow-xl border border-border/40 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
          <div>
            <div className="font-serif font-bold text-lg text-primary">5.0 / 5</div>
            <div className="text-xs text-primary/60 font-sans">Premium Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
