import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_sk4zj7l';
    const TEMPLATE_ID = 'template_b3zr8pp';
    const PUBLIC_KEY = '91gf-kp-CGHY7hArR';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setStatus('success');
          setFormData({ user_name: '', user_email: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        }, (error) => {
          console.log(error.text);
          setStatus('error');
        });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manojmanoj88680@gmail.com",
      href: "mailto:manojmanoj88680@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8921030900",
      href: "tel:+918921030900",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      href: "#",
      color: "green"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/manojmanoj143",
      color: "text-gray-600 hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manoj-k-029274267/",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://www.portfolio-dharun.com",
      color: "text-green-600 hover:text-green-700"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600'
      },
      accent: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and bring your ideas to life
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MessageCircle size={20} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Send size={18} />
                  <span>
                    {status === 'sending' ? 'Sending...' :
                      status === 'success' ? 'Message Sent!' :
                        status === 'error' ? 'Failed to Send' : 'Send Message'}
                  </span>
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-center mt-2">Thank you! Your message has been sent successfully.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center mt-2">Something went wrong. Please check your internet connection or try again later.</p>
                )}
              </form>
            </div>
          </div>
          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const colors = getColorClasses(info.color);
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group"
                      >
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                          <info.icon size={20} className={colors.text} />
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">{info.label}</p>
                          <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white border border-gray-200 hover:border-blue-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Let's Build Something Amazing</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a project in mind or just want to connect, I'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;