export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Learning AI Hub",
      description: "A web-based platform created by React.js powered by ChatGPT's API where students can upload PDF files, ask for lesson summaries, prompt questions, take quizzes, and use flashcard features within the PDF file.",
      role: "Frontend Developer",
      technologies: ["React.js", "ChatGPT API", "PDF.js", "CSS3"],
      features: [
        "PDF file upload and processing",
        "AI-powered lesson summarization",
        "Interactive quiz system",
        "Flashcard generation from content",
        "Real-time Q&A with AI"
      ]
    },
    {
      id: 2,
      title: "ASL Mobile App",
      description: "A mobile application that uses computer vision to recognize American Sign Language gestures through the device camera and translates them into text in real-time.",
      role: "Frontend Developer",
      technologies: ["React Native", "TensorFlow.js", "Computer Vision", "JavaScript"],
      features: [
        "Real-time hand gesture recognition",
        "ASL to text translation",
        "Camera integration for live detection",
        "User-friendly gesture interface",
        "Offline capability for basic gestures"
      ]
    },
    {
      id: 3,
      title: "POS System",
      description: "A comprehensive desktop Point of Sale system designed for cashiers to manage orders, update inventory stocks, and maintain transaction records with a robust database backend.",
      role: "Full Stack Developer",
      technologies: ["C#", "Windows Forms", "MySQL", "Entity Framework"],
      features: [
        "Order registration and management",
        "Real-time inventory tracking",
        "Transaction history logging",
        "Receipt generation",
        "Database entity design and implementation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in frontend development, 
            mobile applications, and full-stack solutions.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#0A174E] mb-2">{project.title}</h3>
                <div className="inline-block bg-[#D4AF37] text-[#0A174E] px-3 py-1 rounded-full text-sm font-semibold">
                  {project.role}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-4">
                <h4 className="font-semibold text-[#0A174E] mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-[#0A174E] mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#D4AF37] mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#0A174E] to-[#1D2D5C] text-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Interested in Collaborating?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and challenges. Whether you need a web application, 
              mobile app, or custom software solution, let's build something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#D4AF37] text-[#0A174E] px-8 py-3 rounded-lg font-semibold hover:bg-[#F0D483] transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}