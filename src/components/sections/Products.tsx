import { useState } from 'react';

interface Product {
  name: string;
  description: string;
}

interface ProductCategory {
  title: string;
  description: string;
  products: Product[];
}

const Products = () => {
  const [searchTerm] = useState('');

  const getProductImage = (product: Product): string => {
    const imageMap: { [key: string]: string } = {
      'Cetostearyl Alcohol': 'https://i.ibb.co/60LVrZD5/cetostearyl-alcohol.jpg',
      'Cetostearyl Alcohol 50 Mole EO': 'https://i.ibb.co/3mgRCMJh/cetostearyl-alcohol-50-eo.jpg',
      'Cetyl Oleyl Alcohol 5 Mole EO': 'https://i.ibb.co/M59dGHWd/cetyl-oleyl-5-eo.png',
      'Cetyl Oleyl Alcohol 80 Mole EO': 'https://i.ibb.co/7JhDN60D/cetyl-oleyl-80-eo.png',
      'Lauryl Alcohol': 'https://i.ibb.co/Q3fq429C/lauryl-alcohol.png',
      'Lauryl Alcohol 2 Mole EO (AEO-2)': 'https://i.ibb.co/gMdc21Md/lauryl-alcohol-2-eo.png',
      'Styrenated Phenol 20 Mole EO': 'https://i.ibb.co/nqcnnW6x/styrenated-phenol.png',
      'Alfa Olefin Sulphonate (AOS) 40%': 'https://i.ibb.co/Ndz86GzV/aos-40.png',
      'Tallow Amine': 'https://i.ibb.co/1GfRSG3N/tallow-amine.png',
      'AC-1815 (15 Mole Ethoxylated Tallow Amine)': 'https://i.ibb.co/DfWMqJVY/default.png',
      'AC-1820 (20 Mole Ethoxylated Tallow Amine)': 'https://i.ibb.co/DfWMqJVY/default.png',
      'Oleic Acid & Derivatives': 'https://i.ibb.co/9mDvhnfR/oleic-acid.jpg',
      'Tripoglycerol 3 Oleic Acid Ester': 'https://i.ibb.co/cc1xc6SY/tripoglycerol-oleate.png',
      'Palm Oil': 'https://i.ibb.co/xKPtd3H7/palm-oil.png',
      'Mineral Oil (LLP)': 'https://i.ibb.co/Hfm4B748/mineral-oil.png',
      'Soya Lecithin': 'https://i.ibb.co/WW2fwk88/soya-lecithin.png',
      'PDMS AK 350 CST': 'https://i.ibb.co/gMwXyPm6/pdms-ak-350.png',
      'Monemide OD': 'https://i.ibb.co/hRGGS7Y5/monemide-od.png',
      'Phenoxy Ethanol': 'https://i.ibb.co/MyFzVvrC/phenoxy-ethanol.png',
      'PCMC': 'https://i.ibb.co/SDC6RQnc/pcmc.png',
      'Busan 1156': 'https://i.ibb.co/jPky94fS/busan-1156.png',
      'Busan 1078': 'https://i.ibb.co/SXGz82dY/busan-1078.png',
      'BBK 4884': 'https://i.ibb.co/HWMJP6c/bbk-4884.png',
      'BHT (Butylated Hydroxy Toluene)': 'https://i.ibb.co/zHZ8jhdv/bht.png',
      'Propylene Glycol': 'https://i.ibb.co/Vc3jrnfP/propylene-glycol.png',
      'PTSA': 'https://i.ibb.co/wrYkLyCn/ptsa.png',
      'Maleic Anhydride': 'https://i.ibb.co/233FTbCg/maleic-anhydride.png',
      'Sodium Sulphite': 'https://i.ibb.co/HfQgHmq2/sodium-sulphite.png',
      'SMBS': 'https://i.ibb.co/3mB32Wtb/smbs.webp',
      'DM Water': 'https://i.ibb.co/XZyk9sC4/dm-water.jpg',
      'DI Water': 'https://i.ibb.co/RTkDrVFP/di-water.png',
    };
    return imageMap[product.name] || '/products/default.png';
  };

  const categories: ProductCategory[] = [
    {
      title: 'Surfactants & Ethoxylates',
      description: 'High-quality surfactants and ethoxylated products for various industrial applications.',
      products: [
        { name: 'Cetostearyl Alcohol (CSA)', description: 'Fatty alcohol used as an emulsifier and thickener in cosmetics and pharmaceuticals.' },
        { name: 'Cetostearyl Alcohol 50 Mole EO', description: 'Ethoxylated cetostearyl alcohol for surfactant applications.' },
        { name: 'Cetyl Oleyl Alcohol 5 Mole EO', description: 'Ethoxylated fatty alcohol blend for emulsification.' },
        { name: 'Cetyl Oleyl Alcohol 80 Mole EO', description: 'Highly ethoxylated fatty alcohol for detergents.' },
        { name: 'Lauryl Alcohol', description: 'Fatty alcohol used in surfactants and detergents.' },
        { name: 'Lauryl Alcohol 2 Mole EO (AEO-2)', description: 'Ethoxylated lauryl alcohol for cleaning products.' },
        { name: 'Styrenated Phenol 20 Mole EO', description: 'Non-ionic surfactant for industrial applications.' },
        { name: 'Alfa Olefin Sulphonate (AOS) 40%', description: 'Anionic surfactant for detergents and cleaners.' },
      ],
    },
    {
      title: 'Amines & Specialty Chemicals',
      description:
        'Widely used in agrochemical formulations, textile processing, corrosion inhibition, and antistatic applications.',
      products: [
        { name: 'Tallow Amine', description: 'Amine derived from tallow for corrosion inhibition.' },
        { name: 'AC-1815 (15 Mole Ethoxylated Tallow Amine)', description: 'Ethoxylated tallow amine for emulsifiers.' },
        { name: 'AC-1820 (20 Mole Ethoxylated Tallow Amine)', description: 'Higher ethoxylated tallow amine.' },
      ],
    },
    {
      title: 'Oils, Esters & Functional Additives',
      description: 'Essential oils, esters, and functional additives for diverse industrial needs.',
      products: [
        { name: 'Oleic Acid & Derivatives', description: 'Fatty acid for soaps and lubricants.' },
        { name: 'Tripoglycerol 3 Oleic Acid Ester', description: 'Emollient and emulsifier in cosmetics.' },
        { name: 'Palm Oil', description: 'Vegetable oil for food and industrial uses.' },
        { name: 'Mineral Oil (LLP)', description: 'Lubricating oil for industrial applications.' },
        { name: 'Soya Lecithin', description: 'Emulsifier from soybeans.' },
        { name: 'PDMS AK 350 CST', description: 'Silicone oil for lubricants.' },
        { name: 'Monemide OD', description: 'Fatty acid amide for plastics.' },
      ],
    },
    {
      title: 'Preservatives & Process Chemicals',
      description: 'Preservatives, biocides, antioxidants, and process chemicals for product stability and performance.',
      products: [
        { name: 'Phenoxy Ethanol', description: 'Preservative for cosmetics.' },
        { name: 'PCMC', description: 'Preservative for personal care.' },
        { name: 'Busan 1156', description: 'Biocide for water treatment.' },
        { name: 'Busan 1078', description: 'Biocide for industrial water.' },
        { name: 'BBK 4884', description: 'Biocide for cooling water.' },
        { name: 'BHT (Butylated Hydroxy Toluene)', description: 'Antioxidant for plastics and oils.' },
        { name: 'Propylene Glycol', description: 'Solvent and humectant.' },
        { name: 'PTSA', description: 'Catalyst for resins.' },
        { name: 'Maleic Anhydride', description: 'Chemical intermediate for polymers.' },
        { name: 'Sodium Sulphite', description: 'Reducing agent and preservative.' },
        { name: 'SMBS', description: 'Sodium metabisulfite for bleaching.' },
      ],
    },
    {
      title: 'Utility Water',
      description: 'Purified water solutions for industrial applications.',
      products: [
        { name: 'DM Water', description: 'Demineralized water for processes.' },
        { name: 'DI Water', description: 'Deionized water for high purity.' },
      ],
    },
  ];



  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003060]">Our Products</h1>
          <div className="w-24 h-1 bg-[#FDB913] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We supply a comprehensive range of industrial chemicals, surfactants, specialty additives, and
            process chemicals sourced from approved manufacturers.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {categories
            .map((category, index) => ({
              ...category,
              products: category.products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ),
            }))
            .filter(category => category.products.length > 0 || searchTerm === '')
            .map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-5 bg-[#003060] text-white">
                  <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-gray-200 text-sm">{category.description}</p>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.products.map((product, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <img
                          src={getProductImage(product)}
                          alt={product.name}
                          className="w-16 h-16 rounded mr-4 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="text-gray-800 font-semibold mb-1">{product.name}</h4>
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-[#003060]">Need a specific product?</h3>
          <p className="text-gray-700 mb-6">
            Contact us for product specifications, availability, and pricing information.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#003060] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004080] transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
