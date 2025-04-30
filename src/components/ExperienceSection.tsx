import React from 'react';

const ExperienceSection = () => {
  const workExperience = [
    {
      employer: "Bueno Technologies",
      position: "Full Stack Software Engineer",
      duration: "Feb 2024 - Present",
      description: "At Bueno Technologies, I gained extensive experience in full-stack development, leading projects from design to deployment, and driving technical operations in the CTO’s absence. I led the migration to a modern tech stack and implemented secure authentication systems, focusing on scalability and automation. My work in transitioning to microservices, optimizing CI/CD pipelines, and integrating third-party services has deepened my technical expertise while developing strong project leadership skills.",
    },
    {
      employer: "SAP Asia Pte Ltd",
      position: "AI Scientist Intern",
      duration: "January 2023 - June 2023",
      description: "At SAP Asia, I worked on enhancing a large-scale Recommendations Engine using advanced NLP techniques. This role sharpened my ability to translate complex business requirements into practical AI solutions, reinforced through direct client interactions and collaborative development. The experience strengthened both my technical foundation and product-thinking mindset.",
      recommendation: "Ishita consistently impressed me with her technical skills and expertise in Machine Learning & Deep Learning . Ishita was always able to find innovative solutions to complex technical problems, demonstrating a strong ability to work well under pressure and handle multiple projects.",
      recommender: "Jia Xiang Lim, Data Scientist at SAP"
    },
    {
      employer: "Just Dabao Pte Ltd",
      position: "Software developer intern",
      duration: "March 2022 - August 2022",
      description: "At Just Dabao, I gained hands-on experience building scalable, user-focused features for a cross-platform food ordering app, while working across mobile, web, backend, and automation. This role taught me how to balance technical execution with real-world impact, strengthen cross-functional collaboration, and deliver efficient, production-ready systems.",
      recommendation: "Ishita's strong commitment to meeting deadlines and her open-mindedness towards learning new concepts made her a valuable asset.",
      recommender: "Srikanth Katikala, CTO and Cofounder"
    },
    {
      employer: "Kopi Date",
      position: "Full stack software developer intern",
      duration: "March 2022 - August 2022",
      description: "At Kopi Date, I worked across the full stack to build real-time features and improve user experience for a matchmaking platform. From implementing filtering systems and chat applications to automating notification workflows, I learned how to deliver user-centric, scalable solutions.",
    },
  ];

  return (
    <section id="work-experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            My Past Experience
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here's an overview of my past work experiences and skills I've learnt:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.position} at {job.employer}
                </h3>
                <p className="text-gray-600">{job.duration}</p>
                <p className="mt-2 text-gray-600 mt-2">{job.description}</p>
                {job.recommendation && <blockquote className="mt-4 italic text-gray-500 border-l-4 pl-4 border-accent">
                  "{job.recommendation}" - {job.recommender}
                </blockquote>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;