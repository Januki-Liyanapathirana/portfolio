const journeyData = [
  {
    year: "2024 - Present",
    title: "Computer Science Undergraduate",
    place: "IIT Sri Lanka (University of Westminster)",
    description:
      "Focused on full-stack development, backend systems, UI engineering, and software project workflows.",
  },

  {
    year: "2015 - 2022",
    title: "Secondary Education",
    place: "Sirimavo Bandaranaike Vidyalaya, Colombo 07",
    description:
      "Built strong foundations in academics, leadership, teamwork, and extracurricular activities.",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="glass py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10">
          My Journey
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 space-y-10">

          {journeyData.map((item, index) => (
            <div
              key={index}
              className="relative pl-10"
            >

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -left-[9px]
                  top-1
                  w-4
                  h-4
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  shadow-[0_0_12px_rgba(34,211,238,0.5)]
                "
              />

              {/* Year */}
              <p className="text-sm text-cyan-300 mb-2 tracking-wide">
                {item.year}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>

              {/* Place */}
              <p className="text-gray-300 text-sm mb-3">
                {item.place}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm max-w-2xl">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Journey;