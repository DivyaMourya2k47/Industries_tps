import { CheckCircle, TrendingUp, Shield, Truck } from 'lucide-react';

const Home = () => {
  const highlights = [
    { icon: TrendingUp, title: 'Pan-India Chemical Supply', desc: 'Serving customers across India' },
    { icon: Shield, title: 'Approved Manufacturer Sourcing', desc: 'Quality assured materials' },
    { icon: CheckCircle, title: 'Complete COA & Batch Traceability', desc: 'Full documentation' },
    { icon: Truck, title: 'Reliable Logistics Network', desc: 'Timely deliveries' },
  ];

  const categories = [
    'Surfactants & Ethoxylates',
    'Amines & Specialty Chemicals',
    'Oils, Esters & Functional Additives',
    'Preservatives & Process Chemicals',
  ];

  const industries = [
    'Personal Care & Cosmetics',
    'Cleaning & Detergent Formulations',
    'Textiles & Leather Processing',
    'Agrochemical Manufacturing',
  ];

  return (
    <section id="home" className="pt-20">
      <div className="bg-cover bg-center bg-no-repeat text-white py-20 relative" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/008/526/538/small/container-cargo-for-import-export-business-logistic-3d-rendering-photo.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#003060] via-[#004080] to-[#002040] opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              TPS Industries
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-[#FDB913] font-semibold">
              Your Trusted Partner in Industrial Chemical Trading & Distribution
            </p>
            <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
              TPS Industries is a professionally managed chemical trading and distribution company supplying
              high-quality industrial chemicals, surfactants, specialty additives, oils, preservatives, and
              process chemicals across India. We focus on consistent quality, transparent trade practices,
              and dependable logistics to support our customers' production needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-[#FDB913] text-[#003060] px-8 py-3 rounded-lg font-semibold hover:bg-[#fcc43d] transition-colors text-lg"
              >
                View Products
              </a>
              <a
                href="#contact"
                className="bg-white text-[#003060] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003060]">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 text-[#FDB913] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[#003060]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://bazaar5.com/image/catalog/pro/category/8.jpg')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white bg-opacity-90 py-12 rounded-lg">
          <div className="mb-6">
            <img src="https://www.yogaiya.in/wp-content/uploads/2018/08/Patanjali-Yogpeeth.jpg" alt="Patanjali Logo" className="h-20 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-[#003060]">Authorized Patanjali Soya Lecithin Dealer</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Supplying premium-grade soya lecithin for food, pharma & industrial applications — with reliable quality, competitive pricing, and timely delivery.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-[#003060]">About TPS Industries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              TPS Industries was established in 2015 and operates from Boisar, Maharashtra, serving customers
              on a pan-India basis. We work as a trusted supply-chain partner to manufacturers and processors
              by sourcing specification-compliant materials from reputed and approved manufacturers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our business is built on ethical trading, transparent pricing, reliable documentation, and
              long-term partnerships that support customer growth and consistency.
            </p>
            <a
              href="#about"
              className="inline-flex items-center text-[#003060] font-semibold hover:text-[#FDB913] transition-colors"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003060]">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-t-4 border-[#FDB913]"
              >
                <h3 className="text-lg font-semibold text-[#003060]">{category}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#products"
              className="inline-block bg-[#003060] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004080] transition-colors"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003060]">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#003060] to-[#004080] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003060]">Why Choose TPS Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              'Single-window sourcing across multiple chemical categories',
              'Approved manufacturer sourcing with full documentation',
              'Ethical trade practices and transparent pricing',
              'Pan-India logistics aligned with production schedules',
              'Focus on long-term, stable supply partnerships',
              'Complete batch traceability',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#FDB913] mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#003060] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for a reliable chemical supply partner?</h2>
          <p className="text-xl mb-8 text-gray-200">Contact TPS Industries today</p>
          <a
            href="#contact"
            className="inline-block bg-[#FDB913] text-[#003060] px-10 py-4 rounded-lg font-semibold hover:bg-[#fcc43d] transition-colors text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
