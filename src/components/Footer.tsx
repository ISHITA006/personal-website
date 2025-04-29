import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer>
      {/* Newsletter CTA Banner */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-white max-w-xl">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">
                  Subscribe to my AI Newsletter
                </h3>
              </div>
              <p className="text-primary-foreground">
                Join my community receiving valuable insights on AI and
                automation. Stay ahead of the curve with daily updates.
              </p>
            </div>
            <Button
              onClick={() => scrollToSection("newsletter")}
              variant="secondary"
              className="whitespace-nowrap px-8 py-3 text-primary font-medium"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg font-semibold">
                © 2025 Ishita Saraf. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center space-x-6">
              <a
                href="#hero"
                onClick={(e) => handleClick(e, "hero")}
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleClick(e, "about")}
                className="text-gray-400 hover:text-white transition duration-200"
              >
                About
              </a>
              <a
                href="#work"
                onClick={(e) => handleClick(e, "work")}
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Work
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "contact")}
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
