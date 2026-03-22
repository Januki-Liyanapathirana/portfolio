const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 75 },
  { name: "Python", level: 75 },
  { name: "Java", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "MySQL", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="glass">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-left">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>

              <div className="flex justify-between mb-1 text-sm text-gray-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-white/10 h-2 rounded">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;