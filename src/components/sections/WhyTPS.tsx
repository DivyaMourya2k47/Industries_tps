import { Layers, Award, TrendingUp, Truck, FileCheck, Users } from 'lucide-react';

const WhyTPS = () => {
  const reasons = [
    {
      icon: Layers,
      title: 'Single-Window Sourcing',
      description: 'Access multiple chemical categories through one trusted partner',
    },
    {
      icon: Award,
      title: 'Approved Manufacturer Sourcing',
      description: 'Products sourced exclusively from reputed and approved manufacturers',
    },
    {
      icon: TrendingUp,
      title: 'Ethical Trade Practices',
      description: 'Transparent pricing and ethical business conduct in all transactions',
    },
    {
      icon: Truck,
      title: 'Reliable Pan-India Logistics',
      description: 'Nationwide distribution network aligned with your production schedules',
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'Full batch traceability and comprehensive documentation for compliance',
    },
    {
      icon: Users,
      title: 'Long-Term Partnerships',
      description: 'Focus on stable, long-term supply relationships that support your growth',
    },
  ];

  return (
    <section id="why-tps" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003060]">
            Why Choose TPS Industries
          </h1>
          <div className="w-24 h-1 bg-[#FDB913] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            TPS Industries stands as your reliable chemical supply-chain partner, committed to quality,
            transparency, and dependable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-b-4 border-[#FDB913] group"
            >
              <div className="bg-gradient-to-br from-[#003060] to-[#004080] w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-[#FDB913]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#003060]">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#003060] to-[#004080] text-white p-12 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The TPS Industries Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FDB913] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-100 text-lg">
                  Consistent quality through approved manufacturer partnerships
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FDB913] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-100 text-lg">
                  Transparent commercial practices you can trust
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FDB913] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-100 text-lg">
                  Fast coordination and responsive customer service
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FDB913] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-100 text-lg">
                  Supply consistency supporting your production needs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#003060]">
            Ready to Partner with TPS Industries?
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            Experience reliable chemical supply with a partner committed to your success.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#003060] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#004080] transition-colors text-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyTPS;
