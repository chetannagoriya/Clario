export default function Footer() {
  return (
    <footer className="py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="text-lg font-bold text-gray-400">Clario</span>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {['Features', 'Pricing', 'About', 'Blog', 'Contact', 'Privacy'].map((item) => (
            <a key={item} href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-300 text-xs">
            © 2026 Clario. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
