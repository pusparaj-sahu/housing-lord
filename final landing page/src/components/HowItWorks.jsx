import React from 'react';

const HowItWorks = () => {
  const tenantSteps = [
    { icon: "🏡", title: "Step 1", description: "Browse verified properties" },
    { icon: "📞", title: "Step 2", description: "Connect with property owners" },
    { icon: "✅", title: "Step 3", description: "Complete legal formalities" },
    { icon: "🎉", title: "Step 4", description: "Move in stress-free" }
  ];

  const ownerSteps = [
    { icon: "📌", title: "Step 1", description: "List your property" },
    { icon: "🔍", title: "Step 2", description: "Get tenant verification" },
    { icon: "💰", title: "Step 3", description: "Set the best rental price" },
    { icon: "🤝", title: "Step 4", description: "Rent out stress-free" }
  ];

  return (
    <section className="how-it-works py-16 bg-[#111111] text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title text-center text-4xl mb-12 text-[#FFD700] bg-[#1a1a1a] py-4 rounded-lg">
          How It Works?
        </h2>
        
        <div className="process-map flex justify-between gap-8 mb-12">
          {/* Tenant Path */}
          <div className="tenant-path flex-1">
            <h3 className="text-center text-2xl mb-8 text-[#FFD700]">For Tenants</h3>
            <div className="steps relative">
              {tenantSteps.map((step, index) => (
                <div 
                  key={index}
                  className="step flex items-center mb-8 relative p-4 rounded-lg transition-all duration-400 hover:-translate-y-2 hover:bg-[#FFD700]/5 hover:shadow-lg hover:shadow-[#FFD700]/10"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="step-icon text-4xl mr-6 bg-[#FFD700]/10 p-5 rounded-full transition-all duration-400 group-hover:scale-120 group-hover:bg-[#FFD700]/20 group-hover:shadow-lg group-hover:shadow-[#FFD700]/30">
                    {step.icon}
                  </div>
                  <div className="step-content flex-1">
                    <h4 className="text-[#FFD700] mb-2 text-2xl font-semibold transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white group-hover:text-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                      {step.title}
                    </h4>
                    <p className="text-xl transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#FFD700]">
                      {step.description}
                    </p>
                  </div>
                  {index < tenantSteps.length - 1 && (
                    <div className="connector absolute left-10 bottom-[-2rem] w-0.5 h-8 bg-[#FFD700] transition-all duration-400 group-hover:bg-gradient-to-b group-hover:from-[#FFD700] group-hover:to-transparent group-hover:w-0.5 group-hover:shadow-lg group-hover:shadow-[#FFD700]/50" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Owner Path */}
          <div className="owner-path flex-1">
            <h3 className="text-center text-2xl mb-8 text-[#FFD700]">For Owners</h3>
            <div className="steps relative">
              {ownerSteps.map((step, index) => (
                <div 
                  key={index}
                  className="step flex items-center mb-8 relative p-4 rounded-lg transition-all duration-400 hover:-translate-y-2 hover:bg-[#FFD700]/5 hover:shadow-lg hover:shadow-[#FFD700]/10"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <div className="step-icon text-4xl mr-6 bg-[#FFD700]/10 p-5 rounded-full transition-all duration-400 group-hover:scale-120 group-hover:bg-[#FFD700]/20 group-hover:shadow-lg group-hover:shadow-[#FFD700]/30">
                    {step.icon}
                  </div>
                  <div className="step-content flex-1">
                    <h4 className="text-[#FFD700] mb-2 text-2xl font-semibold transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white group-hover:text-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                      {step.title}
                    </h4>
                    <p className="text-xl transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#FFD700]">
                      {step.description}
                    </p>
                  </div>
                  {index < ownerSteps.length - 1 && (
                    <div className="connector absolute left-10 bottom-[-2rem] w-0.5 h-8 bg-[#FFD700] transition-all duration-400 group-hover:bg-gradient-to-b group-hover:from-[#FFD700] group-hover:to-transparent group-hover:w-0.5 group-hover:shadow-lg group-hover:shadow-[#FFD700]/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cta-button text-center" data-aos="fade-up">
          <button className="start-journey-btn bg-[#FFD700] text-black px-8 py-4 text-xl rounded-full cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            Start Your Journey Today!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 