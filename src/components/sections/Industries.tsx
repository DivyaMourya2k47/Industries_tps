import { Sparkles, Droplets, Scissors, Leaf } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Sparkles,
      title: 'Personal Care & Cosmetics',
      description:
        'We supply surfactants, emollients, preservatives, and specialty additives used in personal care and cosmetic formulations, ensuring consistent quality and reliable sourcing.',
    },
    {
      icon: Droplets,
      title: 'Cleaning & Detergent Formulations',
      description:
        'Our product range supports household and industrial cleaning formulations, including surfactants, additives, and process chemicals for performance and stability.',
    },
    {
      icon: Scissors,
      title: 'Textiles & Leather Processing',
      description:
        'TPS Industries supplies amines, surfactants, and functional chemicals used in textile processing, finishing, and leather treatment applications.',
    },
    {
      icon: Leaf,
      title: 'Agrochemical & Biofuel Manufacturing',
      description:
        'We supply specialty amines, surfactants, and process chemicals used in agrochemical formulations, supporting formulation performance and supply consistency.',
    },
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003060]">Industries We Serve</h1>
          <div className="w-24 h-1 bg-[#FDB913] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            TPS Industries serves diverse industrial sectors with specialized chemical solutions tailored to
            their specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-[#FDB913]"
            >
              <div className="flex items-start mb-4">
                <div className="bg-[#003060] p-3 rounded-lg mr-4">
                  <industry.icon className="w-8 h-8 text-[#FDB913]" />
                </div>
                <h3 className="text-2xl font-bold text-[#003060] mt-2">{industry.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#003060] to-[#004080] text-white p-10 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Serving Industries Across India</h3>
          <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
            Our pan-India distribution network ensures timely delivery and consistent supply to manufacturers
            and processors nationwide.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#FDB913] text-[#003060] px-8 py-3 rounded-lg font-semibold hover:bg-[#fcc43d] transition-colors"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
