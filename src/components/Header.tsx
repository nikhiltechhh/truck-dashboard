import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fow-logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Flavor on Wheels" 
              className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-primary-foreground hover:text-accent font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="text-primary-foreground hover:text-accent font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Menu
            </a>
            <a 
              href="#food" 
              className="text-primary-foreground hover:text-accent font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-primary-foreground hover:text-accent font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
            <a 
              href="#menu" 
              className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-bold hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-md"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-center justify-center gap-1">
              <span
                className={`w-6 h-0.5 bg-accent transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-accent transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-accent transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2">
            <a
              href="#home"
              className="block px-4 py-2.5 text-primary-foreground hover:bg-primary/80 hover:text-accent font-semibold rounded-lg transition-all duration-200"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-4 py-2.5 text-primary-foreground hover:bg-primary/80 hover:text-accent font-semibold rounded-lg transition-all duration-200"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a
              href="#food"
              className="block px-4 py-2.5 text-primary-foreground hover:bg-primary/80 hover:text-accent font-semibold rounded-lg transition-all duration-200"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2.5 text-primary-foreground hover:bg-primary/80 hover:text-accent font-semibold rounded-lg transition-all duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="#menu"
              className="block mx-4 mt-4 px-6 py-2.5 bg-accent text-accent-foreground text-center rounded-full font-bold hover:bg-accent/90 transition-all duration-200"
              onClick={toggleMenu}
            >
              Order Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
