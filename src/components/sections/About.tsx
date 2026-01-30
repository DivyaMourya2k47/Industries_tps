import { Target, CheckCircle } from 'lucide-react';

const About = () => {
  const principles = [
    'Ethical and transparent trade practices',
    'Specification-compliant sourcing',
    'Reliable documentation and batch traceability',
    'Long-term customer partnerships',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003060]">About TPS Industries</h1>
          <div className="w-24 h-1 bg-[#FDB913] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              TPS Industries is a professionally managed chemical trading and distribution company established
              in 2024 and headquartered in Boisar, Maharashtra. We serve customers across India by supplying
              high-quality industrial and specialty chemicals sourced from reputed and approved manufacturers.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We operate as a supply-chain partner to manufacturers and processors, ensuring consistent material
              quality, transparent commercial practices, and dependable logistics support.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#003060] to-[#004080] text-white p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-[#FDB913] mr-4" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-100 leading-relaxed text-lg">
              To deliver consistent quality chemicals with reliable service, transparent pricing, and fast
              coordination while ensuring complete batch traceability and documentation for customer confidence.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-[#003060] text-center">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto text-lg">
            Our operations are guided by:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#FDB913] mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium text-lg">{principle}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-8 text-center max-w-3xl mx-auto text-lg">
            We aim to support customer growth by ensuring supply consistency, timely coordination, and
            dependable service.
          </p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#003060] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#004080] transition-colors text-lg"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
