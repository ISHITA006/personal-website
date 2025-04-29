import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
            className="text-2xl font-bold text-primary transition hover:text-secondary"
          >
            Ishita Saraf
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about");
              }}
              className="text-gray-700 hover:text-primary transition duration-200"
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("work");
              }}
              className="text-gray-700 hover:text-primary transition duration-200"
            >
              Work
            </a>
            <a
              href="#newsletter"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("newsletter");
              }}
              className="text-gray-700 hover:text-primary transition duration-200"
            >
              Newsletter
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              className="text-gray-700 hover:text-primary transition duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-5 space-y-5 bg-white shadow-lg">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
            className="block text-gray-700 hover:text-primary"
          >
            About
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("work");
            }}
            className="block text-gray-700 hover:text-primary"
          >
            Work
          </a>
          <a
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("newsletter");
            }}
            className="block text-gray-700 hover:text-primary"
          >
            Newsletter
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="block text-gray-700 hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
