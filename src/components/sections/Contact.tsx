import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  productRequirement: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    productRequirement: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const inquiryData = {
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      industry: formData.industry,
      productRequirement: formData.productRequirement,
      message: formData.message,
    };

    try {
      // Send to both Supabase and Google Sheets in parallel
      const queryParams = new URLSearchParams();
      Object.entries(inquiryData).forEach(([key, value]) => {
        queryParams.append(key, value as string);
      });

      const formData = new URLSearchParams();
      Object.entries(inquiryData).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const [supabaseResult, sheetsResponse] = await Promise.allSettled([
        supabase.from('inquiries').insert([inquiryData]),
        fetch('https://script.google.com/macros/s/AKfycbxSsnqKGgiujYPKfOxV1qzT6K9kywuk4fQnjzyuiF9fYbrP7_xlQY4Blm4YCwlslSWV/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }),
      ]);

      // Check Supabase result
      let supabaseSuccess = false;
      if (supabaseResult.status === 'fulfilled') {
        const { error } = supabaseResult.value;
        if (!error) {
          supabaseSuccess = true;
        } else {
          console.error('Supabase error:', error);
        }
      } else {
        console.error('Supabase promise rejected:', supabaseResult.reason);
      }

      // Check Google Sheets result
      let sheetsSuccess = false;
      if (sheetsResponse.status === 'fulfilled') {
        console.log('Google Sheets response:', sheetsResponse.value);
        console.log('Google Sheets response text:', await sheetsResponse.value.text());
        if (sheetsResponse.value.ok) {
          sheetsSuccess = true;
        } else {
          console.error('Google Sheets error:', sheetsResponse.value.status, sheetsResponse.value.statusText);
        }
      } else {
        console.error('Google Sheets promise rejected:', sheetsResponse.reason);
      }

      // If at least one succeeded, consider it a success
      if (supabaseSuccess || sheetsSuccess) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          industry: '',
          productRequirement: '',
          message: '',
        });
      } else {
        throw new Error('Both Supabase and Google Sheets failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit inquiry. Please try again or contact us directly.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003060]">Contact TPS Industries</h1>
          <div className="w-24 h-1 bg-[#FDB913] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            For product inquiries, sourcing requirements, or partnership discussions, please get in touch with
            us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#003060]">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#003060] p-3 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FDB913]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#003060] mb-1">Location</h3>
                  <p className="text-gray-700">
                    Boisar, Maharashtra, India
                  </p>
                  <p className="text-gray-600 text-sm mt-1">Serving customers across India</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#003060] p-3 rounded-lg mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FDB913]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#003060] mb-1">Phone</h3>
                  <a
                    href="tel:9373956572"
                    className="text-gray-700 hover:text-[#FDB913] transition-colors text-lg"
                  >
                    +91 9373956572
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#003060] p-3 rounded-lg mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FDB913]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#003060] mb-1">Email</h3>
                  <a
                    href="mailto:sales@tpsglobal.co"
                    className="text-gray-700 hover:text-[#FDB913] transition-colors text-lg"
                  >
                    sales@tpsglobal.co
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#003060] to-[#004080] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p className="text-gray-200 mb-2">Monday - Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-200">Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#003060]">Send An Inquiry</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003060] text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-gray-700 font-medium mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003060] text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003060] text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003060] text-gray-900"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="industry" className="block text-gray-700 font-medium mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003060] text-gray-900"
                >
                  <option value="">Select Industry</option>
                  <option value="Personal Care & Cosmetics">Personal Care & Cosmetics</option>
                  <option value="Cleaning & Detergent">Cleaning & Detergent Formulations</option>
                  <option value="Textiles & Leather">Textiles & Leather Processing</option>
                  <option value="Agrochemical">Agrochemical Manufacturing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="productRequirement" className="block text-gray-700 font-medium mb-2">
                  Product Requirement *
                </label>
                <input
                  type="text"
                  id="productRequirement"
                  name="productRequirement"
                  value={formData.productRequirement}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Cetostearyl Alcohol, Surfactants"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003060] text-gray-900"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Please provide additional details about your requirement..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003060] text-gray-900"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#003060] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004080] transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Inquiry
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    Thank you for your inquiry! We will get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">{errorMessage}</p>
                  <p className="text-red-600 text-sm mt-1">
                    You can also reach us directly at{' '}
                    <a href="tel:9373956572" className="underline">
                      +91 9373956572
                    </a>{' '}
                    or{' '}
                    <a href="mailto:sales@tpsglobal.co" className="underline">
                      sales@tpsglobal.co
                    </a>
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-[#003060] text-center">Our Location</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.8590485435163!2d72.75466305884798!3d19.781409990458037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f001b86794b%3A0xf63ec4d4b1d0f2fc!2sTarapur%20Power%20Solutions!5e0!3m2!1sen!2sin!4v1768980712184!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tarapur Power Solutions, Boisar, Maharashtra, India"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
