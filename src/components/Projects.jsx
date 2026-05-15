const projects = [
  {
    title: "CookMate – Cooking Companion App",
    desc: "AI-powered cooking assistant with smart recipe generation and real-time temperature monitoring integration.",
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase"],
    img: "/cookmate.jpg",
    github: "https://github.com/yehenidodanwela/CookMate.git",
  },
  {
    title: "Artiverse – Artist Platform",
    desc: "Platform for Sri Lankan artists with immersive features using AR and interactive UI experiences.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Firebase"],
    img: "/artiverse.jpg",
    github: "#",
    figma:
      "https://www.figma.com/design/WiZ7cQ6sGk5OpPizeN4OAw/ArtiverseLK?node-id=670-7164&t=K9wymFxyjLeEvaTJ-1",
  },
  {
    title: "Smart Campus REST API",
    desc: "Backend REST API built with JAX-RS for smart campus management, featuring versioned endpoints, nested resources, filtering, validation, and custom exception handling.",
    tech: ["Java", "JAX-RS", "Jersey", "Maven", "Tomcat"],
    img: "/smart-campus-api.jpg",
    github:
      "https://github.com/Januki-Liyanapathirana/smart-campus-api.git",
  },
  {
    title: "Health Awareness Website",
    desc: "Interactive website promoting healthy lifestyle awareness with responsive UI and engaging content.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/health.jpg",
    github:
      "https://github.com/JK-19-jjk/Good-Health-and-Well-Being.git",
  },
  {
    title: "Traffic Data Visualizer",
    desc: "Python-based desktop app for CSV data processing and visualization using graphical interfaces.",
    tech: ["Python", "Tkinter"],
    img: "/traffic.jpg",
    github:
      "https://github.com/JK-19-jjk/Traffic-Data-Visualizer.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="glass py-16">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-left">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-2xl
                overflow-hidden
                hover:scale-[1.02]
                hover:border-cyan-400/20
                transition-all duration-300
              "
            >

              {/* IMAGE */}
              <img
                src={project.img}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">

                {/* TITLE */}
                <h3 className="font-semibold text-lg mb-2">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-5">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs
                        px-3 py-1
                        bg-white/10
                        border border-white/10
                        rounded-full
                        text-gray-200
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-4 py-2
                      text-sm
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-500
                      hover:opacity-90
                      transition-all duration-300
                    "
                  >
                    GitHub
                  </a>

                  {/* FIGMA */}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-4 py-2
                        text-sm
                        rounded-full
                        bg-gradient-to-r
                        from-pink-500
                        to-purple-500
                        hover:opacity-90
                        transition-all duration-300
                      "
                    >
                      Figma
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;