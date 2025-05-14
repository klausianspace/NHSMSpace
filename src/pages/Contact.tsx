import React from 'react';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock, User, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Contact Us';
  }, []);
  
  // Form state
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    
    // Show success message or reset form
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <ContactItem 
                  icon={<Mail className="w-5 h-5" />}
                  title="Email Us"
                  details={['finmatics.club@nhsm.edu.dz', 'academic.office@nhsm.edu.dz']}
                />
                <ContactItem 
                  icon={<Phone className="w-5 h-5" />}
                  title="Call Us"
                  details={['+213 783 00 11 09', '+213 21 90 10 01']}
                />
                <ContactItem 
                  icon={<MapPin className="w-5 h-5" />}
                  title="Visit Us"
                  details={['National Higher School of Mathematics', 'B.P. 75, Kouba, 16050, Algiers, Algeria']}
                />
                <ContactItem 
                  icon={<Clock className="w-5 h-5" />}
                  title="Office Hours"
                  details={['Monday - Thursday: 8:00 AM - 4:30 PM', 'Friday: 8:00 AM - 12:00 PM']}
                />
              </div>
            </div>
            
            {/* Social Media */}
            <div className="card">
              <h2 className="text-xl font-semibold text-white mb-4">Connect With Us</h2>
              <div className="flex gap-3">
                <SocialButton icon={<Facebook className="w-5 h-5" />} />
                <SocialButton icon={<Instagram className="w-5 h-5" />} />
                <SocialButton icon={<Twitter className="w-5 h-5" />} />
                <SocialButton icon={<Linkedin className="w-5 h-5" />} />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-1">Your Name</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-accent">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-darker/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-accent">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-darker/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-darker/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="academic">Academic Questions</option>
                    <option value="admission">Admission Information</option>
                    <option value="events">Events and Activities</option>
                    <option value="technical">Website Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-darker/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button 
                    type="submit"
                    className="btn-primary"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* Map Location */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Location</h2>
          <div className="rounded-xl overflow-hidden h-96 bg-dark-lighter/30 border border-white/10">
            {/* For a real implementation, you would use Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-white text-lg mb-2">National Higher School of Mathematics</p>
                <p className="text-white/70">Kouba, Algiers, Algeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, details }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-white/70">{detail}</p>
        ))}
      </div>
    </div>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-dark-darker/50 border border-white/10 flex items-center justify-center text-white/70
      transition-all duration-300 hover:bg-gradient-to-r from-accent to-secondary hover:text-white hover:border-transparent
      hover:-translate-y-1 hover:shadow-md hover:shadow-accent/30"
    >
      {icon}
    </a>
  );
};

export default Contact;