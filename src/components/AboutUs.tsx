export default function AboutUs() {
  return (
    <section id="about" className="py-10 md:py-16 px-4 md:px-8">
      {/* White card container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text content */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-[7px] font-bold leading-none">1</span>
              </div>
              <span className="text-orange-500 text-[11px] font-semibold uppercase tracking-wider">About Us</span>
            </div>

            {/* Paragraph */}
            <p className="text-gray-400 leading-relaxed text-sm md:text-[15px] font-serif-heading">
              Experience AI-powered business intelligence that transforms complex data into clear, actionable growth strategies. Designed for modern teams who value clarity, speed, and precision.{' '}
              <span className="text-gray-700 font-medium">Our platform simplifies</span> analysis, helping you focus on what truly matters—growth, performance, and smarter outcomes.
            </p>

            {/* Team avatars */}
            <div className="mt-12">
              <div className="flex -space-x-2.5">
                <div className="w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden">
                  <img src="/images/hero-person.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden">
                  <img src="/images/cloud-graph.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden">
                  <img src="/images/flower-center.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-3 leading-relaxed max-w-[180px]">
                Built for forward-thinking teams who rely on data to move faster and smarter.
              </p>
            </div>
          </div>

          {/* Right: Blue stats card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-[#1a6b8a] to-[#0e4d6b] rounded-xl p-6 text-white shadow-lg w-full max-w-[240px] relative overflow-hidden">
              {/* Cloud image */}
              <img
                src="/images/cloud-graph.jpg"
                alt=""
                className="absolute -top-2 -right-2 w-28 h-28 object-cover opacity-25 rounded-lg"
              />
              
              <div className="relative z-10">
                <p className="text-3xl font-light tracking-tight mb-4">+42%</p>
                
                {/* Mini chart */}
                <div className="bg-white/10 rounded-lg p-3 mb-4">
                  <svg viewBox="0 0 200 35" className="w-full h-8">
                    <polyline
                      points="0,30 12,28 24,25 36,27 48,20 60,22 72,15 84,18 96,10 108,12 120,5 132,8 144,3 156,6 168,2 180,3 200,1"
                      fill="url(#aboutGrad2)"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="aboutGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-[10px] text-white/60 leading-relaxed">
                  Faster decision-making across business operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
