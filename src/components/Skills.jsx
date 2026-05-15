import { useState } from "react";

const categories = {
  Skills: [
    {
      name: "HTML5",
      icon: "https://skillicons.dev/icons?i=html",
    },
    {
      name: "CSS3",
      icon: "https://skillicons.dev/icons?i=css",
    },
    {
      name: "JavaScript",
      icon: "https://skillicons.dev/icons?i=javascript",
    },
    {
      name: "React",
      icon: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "Tailwind CSS",
      icon: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      name: "Express.js",
      icon: "https://skillicons.dev/icons?i=express",
    },
    {
      name: "Python",
      icon: "https://skillicons.dev/icons?i=python",
    },
    {
      name: "Java",
      icon: "https://skillicons.dev/icons?i=java",
    },
    {
      name: "MongoDB",
      icon: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      name: "MySQL",
      icon: "https://skillicons.dev/icons?i=mysql",
    },
  ],

  Tools: [
    {
      name: "Git",
      icon: "https://skillicons.dev/icons?i=git",
    },
    {
      name: "GitHub",
      icon: "https://skillicons.dev/icons?i=github",
    },
    {
      name: "Jira",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Notion",
      icon: "https://skillicons.dev/icons?i=notion",
    },
    {
      name: "Postman",
      icon: "https://skillicons.dev/icons?i=postman",
    },
    {
      name: "Figma",
      icon: "https://skillicons.dev/icons?i=figma",
    },
    {
      name: "Microsoft Office",
      icon: "https://skillicons.dev/icons?i=windows",
    },
  ],
};

const tabs = Object.keys(categories);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="skills" className="glass py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">
          Skills & Tools
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-1.5
                rounded-full
                text-sm
                transition-all duration-300
                border border-white/10
                ${
                  activeTab === tab
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-gray-400 hover:bg-white/5"
                }
              `}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-3">

          {categories[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="
                w-[110px]
                h-[110px]
                bg-white/5
                border border-white/10
                backdrop-blur-md
                rounded-xl
                flex flex-col
                items-center
                justify-center
                gap-2
                transition-all duration-300
                hover:scale-[1.03]
                hover:border-cyan-400/20
                hover:bg-white/[0.07]
              "
            >

              {/* Icon */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />

              {/* Name */}
              <p className="text-xs text-center text-gray-200 font-medium">
                {skill.name}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;