import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        {/* Profile Photo */}
        <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-[#D4AF37]">
          <Image
            src="/images/profile/profile.jpg"
            alt="Prince Nesher C. Magno - Computer Science Student"
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        {/* Name */}
        <h1 className="text-5xl font-bold mb-4">Prince Nesher C. Magno</h1>
        
        {/* Short Description */}
        <p className="text-xl mb-6 max-w-md font-semibold">
          Computer Science Student
        </p>
        
        {/* Introduction */}
        <p className="text-lg mb-12 max-w-2xl leading-relaxed">
          I'm a third-year Computer Science student passionate about building practical, user-focused software. 
          I enjoy solving complex problems and exploring new technologies to create solutions that blend 
          creativity with clean, efficient code. Currently expanding my skills in full-stack development 
          and software engineering, I'm always excited to take on new challenges that help me grow as a developer.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="/project"
            className="bg-[#0A174E] text-[#D4AF37] px-8 py-3 rounded-lg font-semibold hover:bg-[#1D2D5C] transition-colors duration-300"
          >
            View My Projects
          </a>
          <a
            href="/contact"
            className="border-2 border-[#D4AF37] px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0A174E] transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skills Preview */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-[#0A174E]">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'C#','TypeScript', 'HTML','Tailwind CSS', 'MySQL','liteDB', 'Lua', 'Luau'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#D4AF37] text-[#0A174E] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#F0D483] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Notable Achievements */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-[#0A174E]">Notable Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 mt-1">★</span>
                  <span>Won 2nd place in a School Hackathon in 2024, developing an innovative solution under time constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 mt-1">★</span>
                  <span>Awarded 2nd place in Engineering Design for Software Development, demonstrating innovative problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 mt-1">★</span>
                  <span>Developed and deployed multiple full-stack applications using modern technologies like React and Node.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 mt-1">★</span>
                  <span>Contributed to open-source projects and built a portfolio of 10+ personal projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-[#0A174E] text-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm text-[#F0D483]">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm text-[#F0D483]">Open Source</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-sm text-[#F0D483]">Hackathons</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm text-[#F0D483]">Technologies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}