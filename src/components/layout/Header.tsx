import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-primary tracking-wide hover:opacity-80 transition-opacity">
          Chongpak <span className="font-normal italic">Dental Wellness</span>
        </Link>
        <nav className="hidden md:flex space-x-10 text-primary font-medium text-sm tracking-wide">
          <Link href="#services" className="hover:text-primary/70 transition-colors duration-300 relative group flex items-center gap-1.5">
            ✨ Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="hover:text-primary/70 transition-colors duration-300 relative group flex items-center gap-1.5">
            🌿 About <span className="text-xs font-normal opacity-70">(เกี่ยวกับเรา)</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="hover:text-primary/70 transition-colors duration-300 relative group flex items-center gap-1.5">
            💌 Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <Link href="#booking" className="bg-primary text-panel px-7 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:bg-primary/90 transition-all duration-300 flex items-center gap-2">
          🗓️ Book Now <span className="font-normal">(จองคิว)</span>
        </Link>
      </div>
    </header>
  );
}
