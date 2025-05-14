import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Send, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-6 bg-gradient-to-br from-dark-darker to-dark-lighter mt-24">
      {/* Wave SVG */}
      <div className="absolute top-[-100px] left-0 w-full h-[100px] overflow-hidden transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#7b68ee" 
            fillOpacity="0.25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#7b68ee" 
            fillOpacity="0.5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#7b68ee" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-4">
              NHSM Space
            </h3>
            <p className="text-white/70 mb-6">
              Your gateway to mathematical excellence and academic resources at the National Higher School of Mathematics.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Send className="w-5 h-5" />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-accent after:to-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/announcements" label="Announcements" />
              <FooterLink to="/academic" label="Academic System" />
              <FooterLink to="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-accent after:to-secondary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-accent" />
                finmatics.club@nhsm.edu.dz
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-accent" />
                +213 783 00 11 09
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>National Higher School of Mathematics, Algiers, Algeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center border-t border-white/10 pt-6 flex flex-col items-center gap-2">
          <p className="text-sm text-white/60">© 2023 NHSM Space. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/60">Developed by</span>
            <img 
              src="Assets/images/finmatics footer logo 2.png" 
              alt="Finmatics Quant Club"
              className="h-7 filter brightness-0 invert transition-transform hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white
      transition-all duration-300 hover:bg-gradient-to-r from-accent to-secondary
      hover:-translate-y-1 hover:shadow-md hover:shadow-accent/30"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  return (
    <li className="transition-transform duration-300 hover:translate-x-1">
      <Link 
        to={to} 
        className="text-white/70 hover:text-white transition-colors duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;