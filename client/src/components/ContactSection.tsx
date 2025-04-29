import { Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Whether you're a business owner, professional, a fellow builder,
              or someone curious about AI and automation, I'd love to connect.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://www.linkedin.com/in/ishita-saraf-6476511ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-primary transition duration-200"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ISHITA006/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-primary transition duration-200"
            >
              <Github className="w-6 h-6 mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
