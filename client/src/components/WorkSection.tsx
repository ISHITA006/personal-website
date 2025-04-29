import { Cpu, Settings, Users, RefreshCw } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Smart Automation Systems",
      description:
        "Building end-to-end automation systems that streamline  key business processes such as data management, customer engagement, appointment scheduling, lead management, and more.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Business automation graphics",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Driven Software",
      description:
        "Developing AI-powered software solutions that reduce workload and simplify complex tasks through intuitive, user-friendly interfaces - like smart reporting dashboards, AI assistants for document handling, and tailored recommendation systems for sales or support",
      image:
        "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "AI concept visualization",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Staff Training Programs",
      description:
        "Exploring staff training programs to empower teams to use AI tools confidently in their day-to-day operations.",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Team training visualization",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Constantly learning and experimenting with the latest in AI, automation, and business operations to deliver cutting-edge solutions.",
      image:
        "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Learning and growth concept",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            What I'm Working On
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            I'm building AI-driven solutions to help small and medium-sized
            businesses work smarter and more efficiently. My work spans both
            product development and consulting, and I'm open to collaborating on
            projects with meaningful, real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
