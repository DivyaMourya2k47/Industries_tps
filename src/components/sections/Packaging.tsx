import { Package, Truck, Clock, Shield } from 'lucide-react';

const Packaging = () => {
  const packagingOptions = [
    { size: '50 kg', type: 'Bags / Carboys' },
    { size: '200 kg', type: 'Drums' },
    { size: 'Bulk', type: 'Bulk Supply (where applicable)' },
  ];

  const logisticsFeatures = [
    {
      icon: Truck,
      title: 'Pan-India Dispatch',
      description: 'Nationwide delivery through reliable transporter network',
    },
    {
      icon: Shield,
      title: 'Safe Handling',
      description: 'Proper packaging and handling protocols for chemical safety',
    },
    {
      icon: Clock,
      title: 'Timely Deliveries',
      description: 'Delivery schedules aligned with production requirements',
    },
  ];

  return (
    <section id="packaging" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003060]">
            Packaging & Logistics
          </h1>
          <div className="w-24 h-1 bg-[#FDB913] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Reliable packaging solutions and efficient logistics to ensure safe, timely delivery of chemicals
            across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Package className="w-10 h-10 text-[#FDB913] mr-4" />
              <h2 className="text-3xl font-bold text-[#003060]">Packaging Options</h2>
            </div>
            <div className="space-y-4">
              {packagingOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FDB913] hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#003060] mb-1">{option.size}</h3>
                      <p className="text-gray-600">{option.type}</p>
                    </div>
                    <Package className="w-8 h-8 text-[#003060]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Truck className="w-10 h-10 text-[#FDB913] mr-4" />
              <h2 className="text-3xl font-bold text-[#003060]">Logistics Support</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              We offer pan-India dispatch through a reliable transporter network, ensuring safe handling,
              timely deliveries, and alignment with customer production schedules.
            </p>
            <div className="space-y-4">
              {logisticsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start"
                >
                  <div className="bg-[#003060] p-3 rounded-lg mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#FDB913]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#003060] mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#003060] to-[#004080] text-white p-10 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Packaging Solutions?</h3>
          <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
            Contact us to discuss your specific packaging and logistics requirements.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#FDB913] text-[#003060] px-8 py-3 rounded-lg font-semibold hover:bg-[#fcc43d] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
