import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Welcome Section - 2 Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Introduction */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">Hello, I'm Prince! 👋</h1>
            <p className="text-xl leading-relaxed mb-6">
              I'm a passionate Computer Science student who loves turning complex problems into elegant solutions. 
              When I'm not coding, you'll probably find me exploring new technologies, working on creative projects, 
              or diving into my latest gaming adventure.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I believe that great software starts with understanding people, and I'm always excited to collaborate 
              on projects that make a real difference.
            </p>
          </div>

          {/* Right Side - Photo */}
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-[#D4AF37]">
              <Image
                src="/images/aboutpic/doomfist.jpg"
                alt="Prince Nesher C. Magno"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Short Bio Block */}
        <section className="mb-16">
          <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#0A174E]">About Me</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                I'm a dedicated Computer Science student with a strong passion for software development and problem-solving. 
                My journey in tech started early, and I've been constantly learning and growing ever since.
              </p>
              <p>
                I thrive on challenges and enjoy working on projects that push my boundaries. Whether it's building 
                full-stack applications or exploring new programming paradigms, I'm always eager to expand my skill set.
              </p>
              <p>
                Beyond coding, I'm deeply interested in user experience design and how technology can be used to create 
                meaningful, accessible solutions for real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0A174E]">Education Journey</h2>
          <div className="space-y-8">
            {/* Kindergarten */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kindergarten - King's Way Baptist Academy</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Preschool: 2008 - 2009</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Kindergarten 1: 2009 - 2010</p>
                  <p className="text-gray-600 dark:text-gray-400">Skipped Kindergarten 2 to Grade 1</p>
                </div>
              </div>
            </div>

            {/* Elementary */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Elementary School</h3>
                  <p className="text-gray-600 dark:text-gray-400">2010 - 2016</p>
                </div>
              </div>
            </div>

            {/* JHS */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Junior High School - CPU JHS</h3>
                  <p className="text-gray-600 dark:text-gray-400">2016 - 2020</p>
                </div>
              </div>
            </div>

            {/* SHS */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Senior High School - CPU SHS STEM EITA</h3>
                  <p className="text-gray-600 dark:text-gray-400">2020 - 2022</p>
                </div>
              </div>
            </div>

            {/* College */}
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">College - CPU CCS</h3>
                  <p className="text-lg font-medium text-[#0A174E] mb-2">Specialization: Software Development</p>
                  <p className="text-gray-600 dark:text-gray-400">2022 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Philosophy */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#0A174E] to-[#1D2D5C] text-white rounded-xl p-12 shadow-lg text-center">
            <div className="text-6xl mb-6">"</div>
            <blockquote className="text-2xl font-light italic mb-6 max-w-3xl mx-auto leading-relaxed">
              In learning to code, experience is your greatest teacher. Theories can guide you, but it's through 
              hands-on practice that you learn to build meaningful projects—ones that may someday make a real impact. 
              Just like driving, you truly learn by doing.
            </blockquote>
            <div className="text-6xl mt-6">"</div>
          </div>
        </section>

        {/* Coding Journey */}
        <section className="mb-16">
          <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-[#0A174E]">My Coding Journey</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#0A174E]">🚀 The Beginning</h3>
                <p className="text-lg leading-relaxed">
                  Started my coding journey during junior high school when I was in Grade 9. We were taught by 
                  the teacher the basics of C++ - declaring variables, printing variables, loops, and arrays. 
                  We were also taught about the basics of binary numbers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#0A174E]">💡 Foundation Building</h3>
                <p className="text-lg leading-relaxed">
                  Those early lessons in C++ sparked my curiosity about how software works. Learning about 
                  binary numbers gave me a deeper understanding of how computers process information at the 
                  most fundamental level.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#0A174E]">🌟 Continuous Growth</h3>
                <p className="text-lg leading-relaxed">
                  From those basic concepts, I've continued to expand my knowledge, exploring web development, 
                  databases, and modern frameworks. Each new technology builds upon that initial foundation 
                  laid back in junior high school.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interests & Hobbies */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0A174E]">Interests & Hobbies</h2>
          
          {/* Favorite Games Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[#0A174E]">🎮 Favorite Games</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Payday 2 Card */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/games/pd2.jpg"
                    alt="Payday 2"
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center text-[#0A174E]">Payday 2</h4>
              </div>

              {/* CS2 Card */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/games/cs2.jpg"
                    alt="CS2"
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center text-[#0A174E]">CS2</h4>
              </div>

              {/* Valorant Card */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/games/valorant.jpg"
                    alt="Valorant"
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center text-[#0A174E]">Valorant</h4>
              </div>

              {/* Dispatch Card */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/games/dispatch.jpg"
                    alt="Dispatch"
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center text-[#0A174E]">Dispatch</h4>
              </div>

              {/* LA Noire Card */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/games/lanoire.jpg"
                    alt="LA Noire"
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center text-[#0A174E]">LA Noire</h4>
              </div>

              {/* Plants vs Zombies Card */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/games/pvz.jpg"
                    alt="Plants vs Zombies"
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center text-[#0A174E]">Plants vs Zombies</h4>
              </div>

            </div>
          </div>

          {/* Perfumes Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[#0A174E]">👃 Favorite Perfumes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* MFK Gentle Fluidity Silver */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/perfumes/gfs.jpg"
                    alt="MFK Gentle Fluidity Silver"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center text-[#0A174E]">MFK Gentle Fluidity Silver</h4>
              </div>

              {/* Polo 67 */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/perfumes/polo67.jpg"
                    alt="Polo 67"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center text-[#0A174E]">Polo 67</h4>
              </div>

              {/* Chanel Allure Homme Sport Extreme Edition */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/perfumes/cahsee.jpg"
                    alt="Chanel Allure Homme Sport Extreme Edition"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center text-[#0A174E]">Chanel Allure Homme Sport Extreme</h4>
              </div>

              {/* JPG Ultra Male */}
              <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/perfumes/ultramale.jpg"
                    alt="JPG Ultra Male"
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center text-[#0A174E]">JPG Ultra Male</h4>
              </div>

            </div>
          </div>

          {/* Gym Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#0A174E]">💪 Gym & Fitness</h3>
            <div className="bg-[var(--color-background)] border border-[var(--color-foreground)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/deadlift/deadliftt.jpg"
                    alt="Gym and Fitness"
                    width={300}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h4 className="text-xl font-semibold mb-3 text-[#0A174E]">Fitness Journey</h4>
                  <p className="text-lg leading-relaxed mb-4">
                    Staying active and maintaining physical fitness is an important part of my routine. 
                    It helps me stay focused and energized for coding sessions while building discipline.
                  </p>
                  <div className="group-hover:max-h-96 max-h-0 overflow-hidden transition-all duration-500">
                    <p className="font-semibold text-[#0A174E] mb-2">Favorite Bodybuilders:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Tom Platz - Legendary quad development</li>
                      <li>Jay Cutler - 4x Mr. Olympia champion</li>
                      <li>Mike Mentzer - High Intensity Training pioneer</li>
                      <li>Lee Priest - Incredible mass with aesthetics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}