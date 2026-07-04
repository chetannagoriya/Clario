export default function Features() {
  return (
    <section id="features" className="py-10 md:py-16 px-4 md:px-8">
      {/* Light gray card container */}
      <div className="max-w-6xl mx-auto bg-[#f5f5f7] rounded-2xl p-8 md:p-12 lg:p-16">
        
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-[7px] font-bold leading-none">2</span>
              </div>
              <span className="text-orange-500 text-[11px] font-semibold uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extralight text-gray-800 leading-tight font-serif-heading">
              Everything You Need to<br />
              <span className="font-light">Analyze Your Business</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 text-center lg:text-right">
            <p className="text-gray-400 text-xs mb-4 max-w-[200px] lg:ml-auto leading-relaxed">
              Powerful tools designed to simplify data and maximize growth.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-[11px] font-semibold transition-colors inline-flex items-center gap-1.5 shadow-sm">
              See All Features <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* Two feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Real-Time Analytics */}
          <div>
            <div className="bg-gradient-to-br from-[#145a7a] to-[#0e3d5c] rounded-2xl p-5 relative overflow-hidden mb-4 h-64 md:h-72">
              {/* Leaf decorations */}
              <div className="absolute top-0 left-0 w-24 h-24 opacity-15">
                <svg viewBox="0 0 120 120" className="w-full h-full text-green-400 fill-current">
                  <path d="M60,0 C100,15 110,50 60,120 C10,50 20,15 60,0Z" />
                  <circle cx="40" cy="30" r="8" fill="currentColor" opacity="0.3" />
                  <circle cx="80" cy="20" r="5" fill="currentColor" opacity="0.2" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-40 h-12 opacity-10">
                <svg viewBox="0 0 200 40" className="w-full h-full">
                  <path d="M0,30 Q30,10 60,25 Q90,5 120,20 Q150,8 200,18" stroke="currentColor" fill="none" strokeWidth="2" className="text-green-300" />
                  <circle cx="60" cy="25" r="4" fill="currentColor" opacity="0.3" />
                  <circle cx="120" cy="20" r="3" fill="currentColor" opacity="0.2" />
                </svg>
              </div>

              {/* White chart card */}
              <div className="relative z-10 bg-white rounded-xl p-4 shadow-xl h-full flex flex-col">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { label: 'Active Users', value: '$1,920+' },
                    { label: 'Revenue', value: '$148,310' },
                    { label: 'Conv. Rate', value: '4.1%' },
                  ].map((m) => (
                    <div key={m.label} className="bg-[#f8f9fa] rounded-lg p-2 text-center border border-gray-50">
                      <p className="text-[7px] text-gray-400 mb-0.5">{m.label}</p>
                      <p className="text-[11px] font-bold text-gray-800">{m.value}</p>
                    </div>
                  ))}
                </div>
                {/* Chart */}
                <div className="flex flex-1 gap-2">
                  <div className="flex flex-col justify-between text-[7px] text-gray-300 py-1 pr-1">
                    <span>$160k</span>
                    <span>$120k</span>
                    <span>$80k</span>
                    <span>$40k</span>
                    <span>$0k</span>
                  </div>
                  <div className="flex-1 relative">
                    <svg viewBox="0 0 200 80" className="w-full h-full">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.12" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[16, 32, 48, 64].map(y => (
                        <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#f0f0f0" strokeWidth="0.5" />
                      ))}
                      <path d="M0,72 L10,70 L20,68 L30,65 L40,62 L50,58 L60,55 L70,52 L80,48 L90,44 L100,40 L110,35 L120,30 L130,25 L140,20 L150,15 L160,10 L170,6 L180,3 L190,1 L200,0 L200,80 L0,80 Z" fill="url(#chartGrad)" />
                      <path d="M0,72 L10,70 L20,68 L30,65 L40,62 L50,58 L60,55 L70,52 L80,48 L90,44 L100,40 L110,35 L120,30 L130,25 L140,20 L150,15 L160,10 L170,6 L180,3 L190,1 L200,0" fill="none" stroke="#f97316" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-gray-800 font-semibold text-base mb-1.5 font-serif-heading">
              Real-Time Analytics
            </h3>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Monitor live business performance instantly and stay informed with accurate, up-to-the-second analytics.
            </p>
          </div>

          {/* AI-Powered Insights */}
          <div>
            <div className="bg-gradient-to-br from-[#145a7a] to-[#0e3d5c] rounded-2xl p-5 relative overflow-hidden mb-4 h-64 md:h-72">
              {/* Leaf decorations top right */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-15">
                <svg viewBox="0 0 120 120" className="w-full h-full text-green-400 fill-current">
                  <path d="M60,0 C100,15 110,50 60,120 C10,50 20,15 60,0Z" />
                  <circle cx="80" cy="30" r="6" fill="currentColor" opacity="0.3" />
                  <circle cx="40" cy="20" r="4" fill="currentColor" opacity="0.2" />
                </svg>
              </div>

              {/* White chart card */}
              <div className="relative z-10 bg-white rounded-xl p-4 shadow-xl h-full flex flex-col">
                {/* Alert rows */}
                <div className="space-y-2 mb-3">
                  {[
                    { icon: 'bar', text: 'Revenue expected to increase', badge: '+18%', badgeColor: 'bg-green-500' },
                    { icon: 'alert', text: 'Customer churn risk detected', badge: '+10%', badgeColor: 'bg-red-500' },
                    { icon: 'trend', text: 'Top campaign 2x better', badge: '+2%', badgeColor: 'bg-green-500' },
                  ].map((row) => (
                    <div key={row.text} className="flex items-center justify-between bg-[#f8f9fa] rounded-lg px-3 py-2 border border-gray-50">
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {row.icon === 'bar' && <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></>}
                          {row.icon === 'alert' && <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>}
                          {row.icon === 'trend' && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />}
                        </svg>
                        <span className="text-[9px] text-gray-600 font-medium">{row.text}</span>
                      </div>
                      <span className={`${row.badgeColor} text-white text-[8px] px-2 py-0.5 rounded-md font-bold`}>{row.badge}</span>
                    </div>
                  ))}
                </div>
                {/* Bar chart */}
                <div className="flex items-end gap-1.5 h-12 mt-auto">
                  {[30, 55, 35, 60, 40, 65, 45, 70, 35, 55, 40, 60].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-t-sm ${i % 3 === 0 ? 'bg-orange-500' : i % 3 === 1 ? 'bg-orange-400' : 'bg-orange-300'}`}
                      style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-gray-800 font-semibold text-base mb-1.5 font-serif-heading">
              AI-Powered Insights
            </h3>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              Predict trends and uncover hidden opportunities with advanced AI-driven analytics and real-time data insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
