export default function Landing() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8">
      {/* White card container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 lg:p-16">
        
        {/* Label + Heading */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-[7px] font-bold leading-none">5</span>
            </div>
            <span className="text-orange-500 text-[11px] font-semibold uppercase tracking-wider">Landing Page</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extralight text-gray-800 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Customizable Dashboards<br />
            <span className="font-light">For Every Need</span>
          </h2>
          <p className="text-gray-400 text-xs mt-3 max-w-md mx-auto leading-relaxed">
            Build custom dashboards tailored to your business needs with our intuitive drag-and-drop interface.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
          {/* Browser bar */}
          <div className="bg-gray-700 px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-gray-600 rounded-md px-3 py-1 flex items-center gap-2">
              <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span className="text-[10px] text-gray-300">app.clario.io/dashboard</span>
            </div>
          </div>
          {/* Dashboard content */}
          <div className="bg-[#f8f9fa] p-4 md:p-6">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-50">
                <p className="text-[8px] text-gray-400">Total Revenue</p>
                <p className="text-lg font-bold text-gray-800">$248K</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[8px] text-green-500 font-bold">+12%</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-50">
                <p className="text-[8px] text-gray-400">Active Users</p>
                <p className="text-lg font-bold text-gray-800">1,920</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[8px] text-green-500 font-bold">+8%</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-50">
                <p className="text-[8px] text-gray-400">Conversion</p>
                <p className="text-lg font-bold text-gray-800">4.1%</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-[8px] text-orange-500 font-bold">+2%</span>
                </div>
              </div>
            </div>
            {/* Chart area */}
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[9px] font-semibold text-gray-600">Revenue Overview</p>
                <div className="flex gap-2">
                  <span className="text-[8px] text-gray-400">Weekly</span>
                  <span className="text-[8px] text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded">Monthly</span>
                  <span className="text-[8px] text-gray-400">Yearly</span>
                </div>
              </div>
              <svg viewBox="0 0 400 80" className="w-full h-16">
                <defs>
                  <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[16, 32, 48, 64].map(y => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f0f0f0" strokeWidth="0.5" />
                ))}
                <path d="M0,65 L20,60 L40,55 L60,58 L80,50 L100,45 L120,48 L140,40 L160,35 L180,38 L200,30 L220,25 L240,28 L260,20 L280,18 L300,22 L320,15 L340,10 L360,8 L380,5 L400,3"
                  fill="url(#dashGrad)" stroke="#3b82f6" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
