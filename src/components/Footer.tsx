import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChefHat, UtensilsCrossed } from 'lucide-react';
import logo from "@/assets/fow-logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Logo & About Section */}
           <div className="space-y-4">
        <div className=" -mt-8 rounded-lg inline-block ">
  <img 
    src={logo}
    alt="Logo"
    className="w-32 h-32 object-contain"
  />
</div>

            <p className="text-red-100 text-sm leading-relaxed">
              Bringing authentic Korean flavors to your neighborhood. Follow us for daily locations and special events!
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.instagram.com/flavoronwheelsaustin?igsh=ZnN6anRtMWx3YnFm&utm_source=qr" 
                className="bg-red-800 hover:bg-yellow-400 hover:text-red-900 p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a 
                href="#" 
                className="bg-red-800 hover:bg-yellow-400 hover:text-red-900 p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a> */}
              {/* <a 
                href="#" 
                className="bg-red-800 hover:bg-yellow-400 hover:text-red-900 p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
 <div>
  <h3 className="text-yellow-400 font-bold text-lg mb-4 uppercase tracking-wide">
    Quick Links
  </h3>

  <ul className="space-y-3">
    {[
      { name: 'Home', id: '/' },
      { name: 'Menu', id: 'menu' },
      { name: 'About Us', id: 'food' },
      { name: 'Contact', id: 'contact' },
    ].map((link) => (
      <li key={link.name}>
        <a
          href={`#${link.id}`}
          className="text-red-100 hover:text-yellow-400 transition-colors duration-300 inline-flex items-center group text-sm"
        >
          <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>



          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4 uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+14159611921" className="text-red-100 hover:text-yellow-400 transition-colors duration-300">
                    415-961-1921
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:flavoronwheel@gmail.com" className="text-red-100 hover:text-yellow-400 transition-colors duration-300 break-all">
                    flavoronwheel@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-red-100">
                    Leanden, TX
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4 uppercase tracking-wide">Specialties</h3>
            <ul className="space-y-3">
              {['Korean Fried Chicken', 'KFC Rice Bowl', 'Bulgogi Taco', 'Bulgogi Fries'].map((item) => (
                <li key={item}>
                  <span 
                    className="text-red-100 inline-flex items-center group text-sm hover:text-yellow-400 transition-colors duration-300"
                  >
                    <UtensilsCrossed className="h-4 w-4 text-yellow-400 mr-2" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-red-200">
              © {currentYear} <span className="text-yellow-400 font-semibold">Flavor on Wheels</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-red-200 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-red-200 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
    </footer>
  );
};

export default Footer;