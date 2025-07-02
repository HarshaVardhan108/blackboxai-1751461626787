const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Space Mission Assurance Platform",
      description: "A sophisticated space traffic monitoring system offering robust Space Situational Awareness solutions.",
      image: "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg",
      technologies: ["React", "Node.js", "WebGL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Orbital Debris Tracker",
      description: "Advanced system for tracking and monitoring space debris to prevent collisions.",
      image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
      technologies: ["Python", "TensorFlow", "AWS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Space Weather Monitor",
      description: "Real-time monitoring and prediction of space weather conditions.",
      image: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg",
      technologies: ["Vue.js", "Django", "D3.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-light-pink">
      {/* Hero Section */}
      <section className="bg-dark-teal text-white py-20">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our innovative solutions in space technology and operations.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-mint-green text-dark-teal rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm"
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-sm"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-teal text-white py-16">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to create innovative solutions for your space operations.
          </p>
          <a
            href="/contact"
            className="btn bg-mint-green text-dark-teal hover:bg-teal"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
