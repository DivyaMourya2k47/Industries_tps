import { Award, FileCheck, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const Quality = () => {
  const qualityPoints = [
    {
      icon: Award,
      title: 'Approved Manufacturer Sourcing',
      description: 'All products sourced from reputed and approved manufacturers',
    },
    {
      icon: FileCheck,
      title: 'COA with Every Batch',
      description: 'Complete Certificate of Analysis provided for quality assurance',
    },
    {
      icon: TrendingUp,
      title: 'Complete Batch Traceability',
      description: 'Full traceability from source to delivery for compliance',
    },
    {
      icon: Shield,
      title: 'Transparent Documentation',
      description: 'Reliable and comprehensive documentation for all supplies',
    },
    {
      icon: CheckCircle,
      title: 'Consistent Quality Standards',
      description: 'Specification-compliant materials meeting industry standards',
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003060]">
            Quality & Compliance
          </h1>
          <div className="w-24 h-1 bg-[#FDB913] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our commitment to quality assurance and compliance ensures you receive reliable, specification-compliant
            chemicals with complete documentation.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#003060]">Quality Assurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-[#FDB913]"
              >
                <div className="bg-[#003060] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="w-8 h-8 text-[#FDB913]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#003060]">{point.title}</h3>
                <p className="text-gray-700 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-[#003060]">Our Quality Commitment</h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto text-lg mb-8">
            Our focus on documentation and traceability ensures confidence, compliance, and long-term
            reliability for our customers. Every batch is accompanied by complete documentation to support your
            quality control processes.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <p className="text-[#003060] font-bold text-center">Specification Compliance</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <p className="text-[#003060] font-bold text-center">Full Documentation</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <p className="text-[#003060] font-bold text-center">Batch Traceability</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <p className="text-[#003060] font-bold text-center">Quality Assurance</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#003060] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#004080] transition-colors text-lg"
          >
            Learn More About Our Quality Standards
          </a>
        </div>
      </div>
    </section>
  );
};

export default Quality;
