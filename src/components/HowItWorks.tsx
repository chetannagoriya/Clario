import { Database, BarChart3, Lightbulb, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Connect Your Data',
    description: 'Integrate your CRM, sales, and data sources to pull in all data.',
    icon: Database,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Analyze Automatically',
    description: 'Our AI engine processes and analyzes your data in real-time.',
    icon: BarChart3,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Get Smart Insights',
    description: 'Receive actionable insights and recommendations for your business.',
    icon: Lightbulb,
    color: 'from-orange-500 to-orange-600',
  },
];

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState(1);

  return (
    <section className="py-10 md:py-16 px-4 md:px-8">
      {/* White card container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 lg:p-16">
        
        {/* Label + Heading */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-[7px] font-bold leading-none">3</span>
          </div>
          <span className="text-orange-500 text-[11px] font-semibold uppercase tracking-wider">Process</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extralight text-gray-800 leading-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Get Started in 3<br />
              <span className="font-light">Simple Steps</span>
            </h2>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-2xl font-bold text-gray-800">20</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Data Integrations</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-gray-800">10x</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Faster Insights</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border rounded-xl transition-all cursor-pointer ${
                    openStep === step.id ? 'border-orange-200 bg-orange-50/30' : 'border-gray-100 hover:border-gray-200'
                  }`}
                  onClick={() => setOpenStep(step.id)}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-sm`}>
                        <step.icon size={12} className="text-white" />
                      </div>
                      <span className={`text-sm font-medium ${openStep === step.id ? 'text-gray-800' : 'text-gray-500'}`}>
                        {step.title}
                      </span>
                    </div>
                    <ChevronDown size={14} className={`text-gray-300 transition-transform duration-300 ${openStep === step.id ? 'rotate-180 text-orange-400' : ''}`} />
                  </div>
                  {openStep === step.id && (
                    <div className="px-4 pb-4">
                      <p className="text-[11px] text-gray-400 ml-10 leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Circular Diagram */}
          <div className="flex justify-center">
            <div className="relative w-60 h-60">
              {/* Center circle */}
              <div className="absolute inset-[22%] bg-gradient-to-br from-[#1a5276] to-[#0e3d5c] rounded-full shadow-xl flex items-center justify-center overflow-hidden">
                <img src="/images/flower-center.jpg" alt="" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl"></span>
                    <p className="text-white/70 text-[8px] font-medium mt-0.5">Clario</p>
                  </div>
                </div>
              </div>

              {/* Circular nodes */}
              {steps.map((step, i) => {
                const angle = (i * 120 - 90) * (Math.PI / 180);
                const radius = 90;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div key={step.id} className="absolute"
                    style={{ left: `calc(50% + ${x}px - 20px)`, top: `calc(50% + ${y}px - 20px)` }}>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md ring-2 ring-white`}>
                      <step.icon size={16} className="text-white" />
                    </div>
                  </div>
                );
              })}

              {/* Dashed connecting circle */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 240">
                <circle cx="120" cy="120" r="90" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
