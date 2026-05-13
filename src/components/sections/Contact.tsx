export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-panel/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Connect with Us</h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-sans text-lg font-light">
            We're here to help you achieve your perfect smile. Reach out to book an appointment or ask any questions.
            <br/><span className="text-sm mt-1 block">ติดต่อเราเพื่อนัดหมายหรือสอบถามข้อมูลเพิ่มเติม ทีมงานของเราพร้อมดูแลคุณ</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">Our Location</h3>
                <p className="text-primary/70 font-sans leading-relaxed">
                  123 Wellness Street, Sukhumvit Road,<br/>
                  Bangkok, Thailand 10110
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">Contact Details</h3>
                <p className="text-primary/70 font-sans leading-relaxed">
                  Phone: +66 2 345 6789<br/>
                  Email: hello@chongpakdental.com
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">Opening Hours</h3>
                <p className="text-primary/70 font-sans leading-relaxed">
                  Mon - Sat: 09:00 - 20:00<br/>
                  Sunday: 10:00 - 18:00
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary">Social Media</h3>
                <p className="text-primary/70 font-sans leading-relaxed">
                  Line: @chongpakdental<br/>
                  FB/IG: chongpakdental
                </p>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="aspect-video w-full bg-surface border border-border/40 rounded-3xl overflow-hidden relative group cursor-pointer shadow-inner">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/30 group-hover:text-primary/50 transition-colors">
                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                <span className="font-sans text-sm uppercase tracking-widest">Click to view on Google Maps</span>
              </div>
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-panel p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-border/40 relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="text-3xl font-serif text-primary mb-8">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-primary/60 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-surface border-0 rounded-2xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-widest text-primary/60 ml-1">Phone Number</label>
                  <input type="tel" placeholder="081-234-5678" className="w-full bg-surface border-0 rounded-2xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-widest text-primary/60 ml-1">Service Interest</label>
                <select className="w-full bg-surface border-0 rounded-2xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none appearance-none">
                  <option>General Consultation</option>
                  <option>Teeth Whitening</option>
                  <option>Invisalign / Braces</option>
                  <option>Dental Veneers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-widest text-primary/60 ml-1">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-surface border-0 rounded-2xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-panel py-5 rounded-2xl font-sans font-bold uppercase tracking-widest shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-primary/95 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
