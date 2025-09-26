import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('email', formData.email.trim());
      formDataToSend.append('phone', formData.phone.trim());
      formDataToSend.append('message', formData.message.trim());
      formDataToSend.append('bot-field', ''); // honeypot field

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Clear success message after 8 seconds
        setTimeout(() => setSubmitStatus('idle'), 8000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout 
      title="Contact Us - Philadels Catering & Decor"
      description="Get in touch with Philadels Catering & Decor for your special events. Contact us for custom cakes, catering services, and event decorations."
    >
      {/* Hero Section */}
      <section 
        className="relative w-full h-64 sm:h-96 bg-cover bg-center overflow-hidden"  
        style={{ backgroundImage: "url('/assets/contact-us-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">  
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center animate-fade-in-up">  
            Contact Us  
          </h1>  
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">
          {/* Contact Information Card */}
          <div className="w-full md:w-1/2 bg-white shadow-xl rounded-3xl p-10 m-4 border border-purple-100 flex flex-col items-center">
            <h2 className="text-3xl font-extrabold mb-6 text-purple-700 text-center">Get In Touch</h2>
            <div className="space-y-6 w-full">
              <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-700 rounded-full p-3 text-2xl">
                  <i className="ri-phone-fill"></i>
                </span>
                <div>
                  <p className="text-gray-700 font-semibold">Phone</p>
                  <a href="tel:0242187608" className="text-gray-600 hover:text-purple-700 transition">024 218 7608</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-700 rounded-full p-3 text-2xl">
                  <i className="ri-mail-fill"></i>
                </span>
                <div>
                  <p className="text-gray-700 font-semibold">Email</p>
                  <a href="mailto:philadelscatering@gmail.com" className="text-gray-600 hover:text-purple-700 transition">philadelscatering@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-purple-100 text-purple-700 rounded-full p-3 text-2xl">
                  <i className="ri-map-pin-2-fill"></i>
                </span>
                <div>
                  <p className="text-gray-700 font-semibold">Location</p>
                  <p className="text-gray-600">Apolonia Junction Road<br />Afienya Jerusalem</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/Tarababane" className="text-purple-600 hover:text-purple-800 text-2xl">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="https://www.instagram.com/philadelscatering/?__pwa=1#" className="text-purple-600 hover:text-purple-800 text-2xl">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="http://tiktok.com/@philadelscatering" className="text-purple-600 hover:text-purple-800 text-2xl">
                <i className="ri-tiktok-fill"></i>
              </a>
              <a href="https://www.linkedin.com/in/becky-dunyo-46b853186/" className="text-purple-600 hover:text-purple-800 text-2xl">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-3xl p-10 m-4 border border-purple-100">
            <h2 className="text-3xl font-extrabold mb-6 text-purple-700 text-center">Send Us A Message</h2>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <input name="bot-field" />
              </div>
              
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-gray-50 text-lg font-normal rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-5 transition" 
                placeholder="Name" 
                required 
                disabled={isSubmitting}
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-gray-50 text-lg font-normal rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-5 transition" 
                placeholder="Email" 
                required 
                disabled={isSubmitting}
              />
              <input 
                type="text" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-gray-50 text-lg font-normal rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 pl-5 transition" 
                placeholder="Phone" 
                disabled={isSubmitting}
              />
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Message" 
                className="w-full border border-purple-200 rounded-2xl px-5 py-3 text-gray-700 text-lg font-normal leading-6 focus:ring-2 focus:ring-purple-400 bg-gray-50 transition" 
                rows={5} 
                required
                disabled={isSubmitting}
              ></textarea>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-line text-xl mr-2"></i>
                    <div>
                      <strong>Message sent successfully!</strong>
                      <p className="text-sm mt-1">Thank you for contacting us. We'll get back to you soon!</p>
                    </div>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-xl mr-2"></i>
                    <div>
                      <strong>Something went wrong!</strong>
                      <p className="text-sm mt-1">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:from-purple-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line mr-2 animate-spin"></i>Sending Message...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-2-fill mr-2"></i>Send Message
                  </>
                )}
              </button>
            </form>
            <div className="mt-6 text-center text-gray-400 text-sm">
              <i className="ri-lock-2-line mr-1"></i>Your information is safe with us.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

