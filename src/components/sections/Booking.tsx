export default function Booking() {
  const services = [
    "Aesthetic Dentistry (ฟอกสีฟัน/วีเนียร์)",
    "Orthodontics (จัดฟัน)",
    "Wellness Care (ขูดหินปูน/ตรวจสุขภาพ)",
    "Dental Implants (รากเทียม)",
    "Other (อื่นๆ)"
  ];

  const timeSlots = [
    "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
    "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00",
    "16:00 - 17:00", "17:00 - 18:00"
  ];

  return (
    <section id="booking" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium mb-4 tracking-wider text-primary/80 uppercase">
            Online Appointment
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Book Your Visit 🗓️</h2>
          <p className="text-primary/70 font-sans text-lg font-light">
            นัดหมายล่วงหน้าเพื่อรับบริการที่สะดวกและรวดเร็ว
          </p>
        </div>

        <div className="bg-panel p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-border/40">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-3">
                <label className="text-sm font-sans uppercase tracking-widest text-primary/60 ml-1">
                  Full Name (ชื่อ-นามสกุล)
                </label>
                <input 
                  type="text" 
                  placeholder="คุณสมชาย ใจดี" 
                  className="w-full bg-surface border-0 rounded-2xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none"
                />
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <label className="text-sm font-sans uppercase tracking-widest text-primary/60 ml-1">
                  Phone Number (เบอร์ติดต่อ)
                </label>
                <input 
                  type="tel" 
                  placeholder="08x-xxx-xxxx" 
                  className="w-full bg-surface border-0 rounded-2xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-3">
              <label className="text-sm font-sans uppercase tracking-widest text-primary/60 ml-1">
                Service Type (ประเภทที่ต้องการรับบริการ)
              </label>
              <div className="relative">
                <select className="w-full bg-surface border-0 rounded-2xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none appearance-none cursor-pointer">
                  <option value="" disabled selected>เลือกประเภทบริการ</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>{service}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Calendar Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-sans uppercase tracking-widest text-primary/60 ml-1">
                    Select Date (เลือกวันที่)
                  </label>
                  <div className="flex gap-4 text-xs font-sans">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
                      <span>Holiday</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-200"></span>
                      <span>Fully Booked</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-[2rem] p-6 border border-border/20">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-8 px-2">
                    <button type="button" className="p-2 hover:bg-primary/5 rounded-full transition-colors text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <h4 className="font-serif text-xl font-bold text-primary">May 2026</h4>
                    <button type="button" className="p-2 hover:bg-primary/5 rounded-full transition-colors text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 text-center mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="text-[10px] font-sans font-bold text-primary/30 uppercase tracking-widest pb-4">
                        {day}
                      </div>
                    ))}
                    
                    {/* Mock Days */}
                    {Array.from({ length: 31 }).map((_, i) => {
                      const day = i + 1;
                      const isHoliday = [4, 11, 18, 25].includes(day); // Sundays
                      const isFullyBooked = [13, 14, 20].includes(day);
                      const isSelected = day === 15;
                      
                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={isHoliday || isFullyBooked}
                          className={`
                            aspect-square rounded-xl flex flex-col items-center justify-center transition-all relative group
                            ${isSelected ? 'bg-primary text-panel shadow-lg scale-110 z-10' : 'hover:bg-primary/5'}
                            ${isHoliday ? 'text-primary/20 cursor-not-allowed' : ''}
                            ${isFullyBooked ? 'bg-red-50 text-red-300 cursor-not-allowed' : ''}
                            ${!isHoliday && !isFullyBooked && !isSelected ? 'text-primary' : ''}
                          `}
                        >
                          <span className="text-sm font-medium">{day}</span>
                          {isFullyBooked && <span className="text-[8px] absolute bottom-1 font-sans">คิวเต็ม</span>}
                          {isHoliday && <span className="w-1 h-1 bg-primary/20 rounded-full absolute bottom-2"></span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Form Details Column */}
              <div className="space-y-8">
                {/* Time Selection */}
                <div className="space-y-4">
                  <label className="text-sm font-sans uppercase tracking-widest text-primary/60 ml-1">
                    Select Time (เลือกเวลา)
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {timeSlots.map((time, idx) => (
                      <button 
                        key={idx} 
                        type="button"
                        className={`
                          py-3.5 px-6 rounded-2xl border text-sm font-medium transition-all text-left flex items-center justify-between group
                          ${idx === 2 ? 'bg-secondary/10 border-secondary text-primary' : 'border-border/60 text-primary/70 hover:border-secondary hover:bg-secondary/5'}
                        `}
                      >
                        <span>{time}</span>
                        <span className={`w-2 h-2 rounded-full ${idx === 4 ? 'bg-red-400' : 'bg-green-400 opacity-0 group-hover:opacity-100'}`}></span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Selection (New Feature) */}
            <div className="pt-4 space-y-4 border-t border-border/20 mt-8">
              <label className="text-sm font-sans uppercase tracking-widest text-primary/60 ml-1">
                Select Doctor (เลือกแพทย์)
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Dr. Sarah", status: "Available" },
                  { name: "Dr. James", status: "On Leave (ลาพักร้อน)", color: "text-red-400" },
                  { name: "Dr. Emily", status: "Available" }
                ].map((doc, idx) => (
                  <button 
                    key={idx}
                    type="button"
                    className="flex-1 min-w-[200px] p-4 rounded-2xl border border-border/60 hover:border-secondary transition-all text-left flex items-center gap-4 bg-surface/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">{doc.name}</div>
                      <div className={`text-[10px] uppercase tracking-wider ${doc.color || 'text-primary/40'}`}>{doc.status}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button className="w-full bg-primary text-panel py-5 rounded-[2rem] font-sans font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-primary/95 transition-all duration-300">
                Confirm Booking
              </button>
              <p className="text-center text-xs text-primary/40 mt-6 font-light">
                * ทีมงานจะติดต่อกลับเพื่อยืนยันวันและเวลาอีกครั้งภายใน 24 ชม.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
