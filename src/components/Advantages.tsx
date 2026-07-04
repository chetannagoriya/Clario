import { Zap, Clock, Bot, Shield, ArrowRight } from 'lucide-react';

export default function Advantages() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8">
      {/* White card container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 lg:p-16">
        
        {/* Label + Heading */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-[7px] font-bold leading-none">4</span>
              </div>
              <span className="text-orange-500 text-[11px] font-semibold uppercase tracking-wider">Advantages</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extralight text-gray-800 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Your Data, Smarter<br />
              <span className="font-light">Than Ever</span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-xs mt-3 lg:mt-0 lg:max-w-[200px] lg:text-right leading-relaxed">
            Transform complex data into clear, actionable insights with powerful analytics tools.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 99% Accuracy */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={14} className="text-blue-500" />
              <p className="text-2xl font-bold text-gray-800">99%</p>
            </div>
            <p className="text-sm font-semibold text-gray-700">Accuracy</p>
            <p className="text-[10px] text-gray-400 mt-1.5 leading-relaxed">
              Deliver accurate insights with real-time analytics
            </p>
          </div>

          {/* Automated Tasks */}
          <div className="bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-white">
            <div className="flex items-center gap-2 mb-3">
              <Bot size={14} className="text-orange-400" />
              <p className="text-sm font-semibold">Automated Tasks</p>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Automate repetitive tasks and save time
            </p>
          </div>

          {/* Real-Time Decision Making */}
          <div className="bg-gradient-to-br from-[#1a5276] to-[#0e3d5c] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-white relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-30">
              <span className="text-lg"></span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-3">
                <Zap size={12} className="text-yellow-300" />
                <span className="text-xs font-semibold">Real-Time Decision Making</span>
              </div>
              <p className="text-[10px] text-white/60 mb-3 leading-relaxed">
                Make faster decisions with live data
              </p>
              <button className="bg-white/20 text-white px-3 py-1 rounded-full text-[10px] font-semibold inline-flex items-center gap-1 hover:bg-white/30 transition-colors">
                Try Dashboard <ArrowRight size={10} />
              </button>
            </div>
          </div>

          {/* 24/7 Monitoring */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <Clock size={16} className="text-blue-500" />
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <p className="text-xl font-bold text-gray-800">24/7</p>
            <p className="text-sm font-semibold text-gray-700 mt-0.5">Always-On Monitoring</p>
            <p className="text-[10px] text-gray-400 mt-1.5 leading-relaxed">
              Track performance anytime with real-time monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
