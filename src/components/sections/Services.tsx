export default function Services() {
  const services = [
    {
      title: "Aesthetic Dentistry",
      description: "Transform your smile with our premium veneers and professional teeth whitening.",
      thai: "ยกระดับรอยยิ้มของคุณด้วยวีเนียร์และฟอกสีฟัน",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
    },
    {
      title: "Orthodontics",
      description: "Clear aligners and modern braces for perfect alignment and a confident smile.",
      thai: "จัดฟันใสและเครื่องมือจัดฟันที่ทันสมัย",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
      )
    },
    {
      title: "Wellness Care",
      description: "Routine checkups, spa-like cleanings, and holistic health for your teeth and gums.",
      thai: "ตรวจสุขภาพช่องปากและขูดหินปูนในบรรยากาศสปา",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      )
    }
  ];

  return (
    <section id="services" className="bg-panel/40 py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary/20"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Our Premium Services</h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-sans text-lg font-light leading-relaxed">
            Comprehensive dental care tailored to your needs. <br className="hidden sm:block" />
            <span className="text-base">บริการทันตกรรมครบวงจรที่ออกแบบมาเพื่อคุณ โดยทีมแพทย์ผู้เชี่ยวชาญ</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="group bg-panel border border-border/60 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-bl-full -mr-8 -mt-8 group-hover:scale-[2] transition-transform duration-700 ease-in-out opacity-80 z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-8 text-primary shadow-sm border border-border/40 group-hover:bg-primary group-hover:text-panel transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4 font-medium group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-primary/70 mb-8 font-sans text-base leading-relaxed font-light">
                  {service.description} <br/><span className="text-sm mt-2 block">{service.thai}</span>
                </p>
                <div className="inline-flex items-center text-primary font-medium text-sm border-b border-primary/30 pb-1 group-hover:border-primary transition-colors">
                  Discover more
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
