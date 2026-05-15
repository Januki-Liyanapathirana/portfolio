const certifications = [
  {
    title: "PM Gateway – IEEE Young Professionals Sri Lanka",
    subtitle: "Hands-on with Jira",
    issuer: "IEEE Young Professionals Sri Lanka",
    year: "2026",
    type: "Professional Program",
    button: "View Credential",
    link: "https://drive.google.com/file/d/1OKLatCMqCG24gGrI3aTOitkOKZRiDPzf/view",
  },

  {
    title: "Atlassian Agile Project Management Professional Certificate",
    subtitle: "",
    issuer: "Atlassian",
    year: "2026",
    type: "Professional Certificate",
    button: "View Credential",
    link: "https://www.linkedin.com/learning/certificates/63d4ab21a0dcbc703c2f651ef94bb0a9f74b55e9e022aa906ec5b85c00e7ab6a?u=76664938",
  },

  {
    title: "Article of the Month (March)",
    subtitle:
      "Recognition for Published Article on Digital Twin Cities and AI-Driven Urban Systems",
    issuer: "IEEE Computer Society Student Branch Chapter of IIT",
    year: "2026",
    type: "Publication Recognition",
    button: "View Article",
    link: "https://medium.com/@ieeecomputersocietyiit/did-you-know-some-cities-now-exist-twice-physically-and-digitally-81b90facbaf9",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="glass py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10">
          Certifications
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-lg
                rounded-2xl
                p-6
                flex flex-col
                justify-between
                transition-all duration-300
                hover:border-cyan-400/20
                hover:bg-white/[0.07]
                hover:scale-[1.02]
              "
            >

              {/* TOP CONTENT */}
              <div>

                {/* TYPE */}
                <p className="text-xs uppercase tracking-wider text-cyan-300/80 mb-3">
                  {cert.type}
                </p>

                {/* TITLE */}
                <h3 className="text-lg font-semibold leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* SUBTITLE */}
                {cert.subtitle && (
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {cert.subtitle}
                  </p>
                )}

              </div>

              {/* BOTTOM */}
              <div>

                {/* ISSUER + YEAR */}
                <div className="flex items-center justify-between mb-5">

                  <p className="text-gray-400 text-sm">
                    {cert.issuer}
                  </p>

                  <span
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-white/10
                      border border-white/10
                      text-gray-300
                    "
                  >
                    {cert.year}
                  </span>

                </div>

                {/* BUTTON */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-block
                    px-5 py-2
                    rounded-full
                    text-sm
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-500
                    hover:opacity-90
                    transition-all duration-300
                  "
                >
                  {cert.button}
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Certifications;