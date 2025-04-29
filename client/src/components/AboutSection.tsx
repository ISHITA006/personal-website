const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/5">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/ishita_solo.jpeg"
                alt="Modern tech workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Story</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I studied Computer Engineering at NTU, specialising in
                Artificial Intelligence and Cybersecurity—two fields that
                continue to shape my passion for developing intelligent and
                secure systems.
              </p>
              <p>
                After graduation, I worked as a full stack software developer in
                a fast-paced startup environment, delivering end-to-end web and
                backend solutions with real impact.
              </p>
              <p>
                Today, I’m focused on making AI more accessible to small and
                medium-sized businesses—helping them optimise operations,
                enhance productivity, and compete more effectively through
                practical, data-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
