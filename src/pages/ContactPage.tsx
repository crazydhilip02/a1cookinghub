import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "react-feather";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const openWhatsApp = (text: string) => {
    window.open(`https://wa.me/917090707243?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="pt-24 pb-16">
      {/* Contact Hero */}
      <div className="relative py-16 bg-secondary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-text-dark">Contact Us</h1>
            <p className="text-lg text-text-medium mb-4">
              We'd love to hear from you! Get in touch with us for any questions or orders.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#fef8e8">
            <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Get In Touch</h2>
                <p className="text-text-medium mb-8">
                  Whether you have a question about our menu, need catering services, or want to provide feedback, we're here to help!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-light p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary">Phone</h3>
                      <p className="text-text-medium">
                        <a href="tel:7090707243" className="hover:text-accent transition-colors">
                          +91 7090707243
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-light p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary">Email</h3>
                      <p className="text-text-medium">
                        <a href="mailto:info@a1cookinghub.com" className="hover:text-accent transition-colors">
                          info@a1cookinghub.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-light p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary">Location</h3>
                      <p className="text-text-medium">
                        A1 Cooking Hub, Food Street, City Center
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-light p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary">Hours</h3>
                      <p className="text-text-medium">Open 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-lg text-secondary mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {/* Add Instagram, Facebook icons here as needed */}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-secondary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-text-dark font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-text-dark font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-text-dark font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-text-dark font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-secondary w-full flex items-center justify-center">
                    <Send size={18} className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="py-12 bg-primary-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">Prefer WhatsApp?</h2>
            <p className="text-lg text-text-medium mb-6 max-w-3xl mx-auto">
              For the quickest response, reach out to us directly on WhatsApp. We're available 24/7 to answer your questions and take your orders.
            </p>
            <button
              onClick={() => openWhatsApp("Hello, I have a question about A1 Cooking Hub")}
              className="btn btn-whatsapp inline-flex items-center justify-center mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.204-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
