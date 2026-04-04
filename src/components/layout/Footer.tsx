export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div
              className="text-2xl font-display font-extrabold tracking-tight text-white cursor-pointer mb-4 inline-block"
              onClick={scrollToTop}
            >
              RE<span className="text-[var(--color-gold)]">CUR</span>
            </div>
            <p className="text-sm text-[#A09880] max-w-xs">
              The automated retention engine for restaurants. Build your database, increase
              repeat visits, and dominate local SEO.
            </p>
          </div>

          {/* Contact / Legal */}
          <div className="text-center md:text-right text-sm text-[#A09880]">
            <p className="mb-2">
              Powered by <span className="text-white font-medium">GeoTech Solutions</span>
            </p>
            <p className="mb-2">Lagos, Nigeria</p>
            <a
              href="mailto:hello@geotech.com"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              hello@geotech.com
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#A09880]">
          <p>&copy; {currentYear} GeoTech Automation Agency. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
