import React from 'react';

const PastProjectsSection = () => {
  const pastProjects = [
    {
      title: "AI-Powered Marketing Assistant for Customer Insight",
      description: "An AI-driven marketing assist tool that interprets product perception from customer feedback, recommends targeted marketing strategies, and generates promotional posters. The tool employs intuitive visualizations to transform complex sentiment data into clear, actionable insights, helping businesses craft targeted campaigns with precision. This solution empowers businesses to make data-driven decisions, optimize marketing efforts, and create engaging content efficiently.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Project C visualization",
      link: "https://github.com/ISHITA006/Strategify-ai"
    },
    {
      title: "AI-Powered health monitoring & support application",
      description: "A mobile health monitoring app using Flutter and Firebase that supports individuals with autism by detecting sensory overload through wearable watch data. Built and integrated a 99.2% accurate Random Forest classifier for real-time overload detection, alongside features like mood logging, guided breathing exercises, caretaker connectivity, real-time alerts, and access to educational resources. The app promotes proactive mental health support and personalized care for neurodiverse users.",
      image: "images/sensync.png",
      alt: "Project A visualization",
      link: "https://github.com/ISHITA006/SenSync"  // URL for the project
    },
    {
      title: "Privacy-Preserving medical chatbot built using federated learning",
      description: "A privacy-preserving medical chatbot built using peer-to-peer Federated Learning (FL) to overcome data scarcity and confidentiality challenges in healthcare. Trained and evaluated a BERT-based large language model on medical data. Demonstrated that FL can achieve comparable performance while maintaining strict data privacy, showcasing its potential for real-world medical NLP applications. This project highlights a scalable, secure AI solution framework suitable for industries with sensitive data constraints.",
      image: "https://images.unsplash.com/photo-1684369175809-f9642140a1bd?q=80&w=2142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Project C visualization",
      link: "https://github.com/ISHITA006/Final-Year-Project"
    },
    {
      title: "Deep learning based neuroprosthetic for imagined speech decoding",
      description: "A research project focused on developing a speech neuroprosthetic that translates non-invasive EEG brainwave data into words when a patient imagines speaking. Implemented a novel four-stage hierarchical model combining CNN, LSTM, deep autoencoder, and XGBoost classifier to classify epoched EEG signals into simple words. Built using PyTorch, the project covers end-to-end EEG signal processing, model training, and evaluation, showcasing the potential of brain-computer interfaces for communication restoration.",
      image: "https://images.unsplash.com/photo-1719813915465-35c09e9dca93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwZWVjaCUyMGRlY29kaW5nfGVufDB8fDB8fHww",
      alt: "Project B visualization",
      link: "https://github.com/ISHITA006/Speech_Decoder_URECA"
    },
    {
      title: "Accelerated Material Discovery with Machine Learning",
      description: "Optimized the discovery of novel transparent conductors by accurately predicting formation and bandgap energy using crystal property data. Achieved a top 4% rank on the public leaderboard with a stacking ensemble of XGBoost and LightGBM regressors. Applied advanced feature engineering, selection, and hyperparameter tuning through grid search cross-validation, significantly reducing the need for costly computational simulations.",
      image: "https://plus.unsplash.com/premium_photo-1664477032812-e5608c4425dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzY292ZXJ5fGVufDB8fDB8fHww",
      alt: "Project C visualization",
      link: "https://example.com/project-c"
    },
    {
      title: "Multi-class image classification using deep learning",
      description: "Developed a deep learning system that classifies fine-grained image categories, such as 102 types of flowers, with 97.6% accuracy using transfer learning and a CNN ensemble. Designed to perform well with limited data, it incorporates advanced techniques like Siamese networks with a triplet loss function to boost performance in real-world, low-resource environments—ideal for businesses with limited labeled data.",
      image: "https://images.unsplash.com/photo-1679658207692-73244f083813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlciUyMGNsYXNzaWZpY2F0aW9ufGVufDB8fDB8fHww",
      alt: "Project C visualization",
      link: "https://github.com/ISHITA006/Oxford_102_Flowers_Classification"
    },
  ];
  
  return (
    <section id="past-projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            My Past Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are some projects I've worked on that showcase my skills and expertise:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pastProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="max-width text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-6 text-gray-600">{project.description}</p>
                <a href={project.link} className="mt-6 inline-block bg-primary text-xs text-white py-2 px-4 rounded hover:bg-black transition">
                  Learn More
                </a>
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

export default PastProjectsSection;