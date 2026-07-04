import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-6 md:py-8 pt-6 md:pt-8 bg-gradient-to-b from-[#1b5585] via-[#174a75] to-[#0f2b4e]">
      {/* Outer container */}
      <div className="w-full overflow-hidden shadow-2xl relative">
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '25px 25px'
        }} />

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 pt-0 pb-3 relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="text-white text-lg font-semibold tracking-wide">Clario</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Features', 'Solutions', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/55 text-[11px] hover:text-white transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>

          {/* Book a Demo */}
          <button className="bg-white text-gray-700 text-[11px] font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-colors shadow-sm">
            Book a Demo
          </button>
        </div>

        {/* Hero Content */}
        <div className="px-6 md:px-12 lg:px-16 pb-10 pt-2 relative">
          {/* Headline */}
          <div className="text-center mb-10 relative z-20">
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extralight text-white leading-[1.15] mb-4 tracking-wide font-serif-heading">
              Unlock Powerful Business Insights<br />
              <span className="font-light">with Smart Analytics</span>
            </h1>
            <p className="text-white/45 text-xs md:text-[13px] max-w-lg mx-auto mb-6 leading-relaxed">
              Transform raw data into clear, actionable strategies. Make faster, smarter decisions with AI-powered business analysis tools.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-orange-500/20">
              Get Started Free <ArrowRight size={14} />
            </button>
          </div>

          {/* Three Cards */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto relative z-20">
            
            {/* Revenue Growth Card */}
            <div className="bg-white rounded-xl p-5 shadow-xl w-full md:w-[195px] flex-shrink-0">
              <h3 className="text-gray-500 text-[11px] font-medium mb-3">Revenue Growth</h3>
              <div className="flex gap-1.5 mb-4">
                <div className="flex-1 flex items-end gap-[2px] h-14">
                  {[20, 30, 42, 55, 70, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-[1px]"
                      style={{ height: `${h}%`, background: `linear-gradient(to top, #ea580c, #fed7aa)` }} />
                  ))}
                </div>
                <div className="flex-1 flex items-end gap-[2px] h-14">
                  {[15, 20, 25, 30, 35, 40].map((h, i) => (
                    <div key={i} className="flex-1 rounded-[1px] bg-gray-100" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-end pt-3 border-t border-gray-50">
                <div>
                  <p className="text-lg font-bold text-gray-800">$148,250</p>
                  <p className="text-[10px] text-gray-400">After</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold text-gray-400">$98,310</p>
                  <p className="text-[10px] text-gray-300">Before</p>
                </div>
              </div>
            </div>

            {/* Traffic Sources Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 w-full md:w-[195px] flex-shrink-0">
              <h3 className="text-white/70 text-[11px] font-medium mb-3">Traffic Sources</h3>
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#f97316" strokeWidth="12"
                    strokeDasharray="107.4 132" strokeDashoffset="0" transform="rotate(-90 50 50)" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#dc2626" strokeWidth="12"
                    strokeDasharray="59.7 179.7" strokeDashoffset="-107.4" transform="rotate(-90 50 50)" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#22c55e" strokeWidth="12"
                    strokeDasharray="47.7 191.7" strokeDashoffset="-167.1" transform="rotate(-90 50 50)" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5 text-[10px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-sm bg-orange-500" />
                  <span className="text-white/55">Organic 45%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-sm bg-red-700" />
                  <span className="text-white/55">Paid 25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-sm bg-green-500" />
                  <span className="text-white/55">Social 20%</span>
                </div>
              </div>
            </div>

            {/* Sales Performance Card */}
            <div className="bg-white rounded-xl p-5 shadow-xl w-full md:w-[195px] flex-shrink-0">
              <h3 className="text-gray-500 text-[11px] font-medium mb-2">Sales Performance</h3>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-50 text-orange-500 text-[7px] font-bold px-1.5 py-0.5 rounded">
                  $0-$1000K
                </div>
                <div className="flex items-end justify-between gap-[3px] h-14 mt-3">
                  {[30, 55, 40, 25, 80, 50, 65, 85, 45].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        className={`w-full rounded-t-[1px] ${i === 4 || i === 5 ? 'bg-orange-400' : 'bg-emerald-300'}`}
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-2">
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'].map((m) => (
                  <span key={m} className="text-[7px] text-gray-300 flex-1 text-center">{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Person Image - Behind cards */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[380px] md:w-[420px] h-[260px] sm:h-[320px] md:h-[360px] pointer-events-none z-10">
            <img
              src="/images/hero-person.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.08) 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.08) 60%, transparent 100%)',
              }}
            />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="px-6 md:px-12 lg:px-16 pb-6 relative z-20">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-50">
            <div className="text-white text-[10px] tracking-[0.3em] font-light">TESLA</div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
              <span className="text-white text-[11px] italic font-serif">Medium</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-green-500/60 flex items-center justify-center">
                <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>
              </div>
              <span className="text-white text-[11px] font-semibold">Spotify</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5z" /></svg>
              <span className="text-white text-[11px] font-semibold">Framer</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.7"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" opacity="0.7"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.7"/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.7"/>
              </svg>
              <span className="text-white text-[11px] font-medium">Microsoft</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <span className="text-white text-[11px] font-light">airbnb</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
