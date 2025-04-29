import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 font-bold mb-6">
              Hi, I'm <span className="gradient-text">Ishita Saraf</span>.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              I'm a Computer Engineering graduate from Nanyang Technological
              University, Singapore, with a deep passion for AI and helping
              businesses & individuals grow through technology.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-10">
              Along with building real-world solutions as a full stack software
              developer at a fast-growing startup, I am focused on helping small
              businesses and professionals unlock the power of AI and
              automation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => scrollToSection("newsletter")}
                size="lg"
                className="px-8 py-6 bg-primary text-white hover:bg-black transition-colors"
              >
                Subscribe to my newsletter
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="px-8 py-6 bg-primary text-white hover:bg-black transition-colors"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern workspace with computer and AI concept visualization"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
