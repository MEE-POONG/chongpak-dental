export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 rounded-l-full -z-10 blur-3xl"></div>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Ready to transform your smile?</h2>
        <p className="text-primary/70 font-sans text-lg mb-10 max-w-xl mx-auto font-light">
          Book your consultation today and step into a world of dental wellness.
          <br/><span className="text-sm mt-1 block">เริ่มต้นการเปลี่ยนแปลงรอยยิ้มของคุณกับเราได้แล้ววันนี้</span>
        </p>
        <button className="bg-primary text-panel px-10 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-primary/95 transition-all duration-300">
          Schedule an Appointment
        </button>
      </div>
    </section>
  );
}
