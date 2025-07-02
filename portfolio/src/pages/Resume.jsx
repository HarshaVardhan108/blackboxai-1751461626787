const Resume = () => {
  const experience = [
    {
      id: 1,
      role: "Senior Space Systems Engineer",
      company: "Space Tech Solutions",
      period: "2020 - Present",
      description: [
        "Led development of collision avoidance systems",
        "Managed team of 5 engineers in satellite tracking projects",
        "Reduced system response time by 40% through optimization"
      ]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Orbital Dynamics Inc",
      period: "2018 - 2020",
      description: [
        "Developed real-time space debris tracking algorithms",
        "Implemented machine learning models for trajectory prediction",
        "Collaborated with international space agencies"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science in Aerospace Engineering",
      school: "Space University",
      period: "2016 - 2018",
      description: "Specialized in orbital mechanics and space systems"
    },
    {
      id: 2,
      degree: "Bachelor of Engineering in Computer Science",
      school: "Tech Institute",
      period: "2012 - 2016",
      description: "Focus on software engineering and artificial intelligence"
    }
  ];

  const skills = {
    technical: [
      "Space Systems Engineering",
      "Orbital Mechanics",
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "Machine Learning",
      "Data Analysis"
    ],
    soft: [
      "Leadership",
      "Problem Solving",
      "Team Management",
      "Communication",
      "Project Management"
    ]
  };

  return (
    <div className="min-h-screen bg-light-pink">
      {/* Hero Section */}
      <section className="bg-dark-teal text-white py-20">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
          <p className="text-xl max-w-3xl">
            Experienced space systems engineer with expertise in collision avoidance
            and debris tracking systems.
          </p>
        </div>
      </section>

      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Experience & Education */}
          <div className="lg:col-span-2">
            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-dark-teal">Experience</h2>
              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-mint-green font-medium">{job.company}</p>
                    <p className="text-gray-600 mb-4">{job.period}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {job.description.map((item, index) => (
                        <li key={index} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-dark-teal">Education</h2>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-mint-green font-medium">{edu.school}</p>
                    <p className="text-gray-600 mb-2">{edu.period}</p>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Skills */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-dark-teal">
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-mint-green text-dark-teal rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-dark-teal">
                  Soft Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Download Resume Button */}
              <div className="mt-8">
                <a
                  href="#"
                  className="btn btn-primary w-full text-center"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
