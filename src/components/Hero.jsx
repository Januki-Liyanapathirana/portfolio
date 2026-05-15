const Hero = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold mb-2">Hello, I'm</h2>

          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            Januki Liyanapathirana
          </h1>

          
          <div className="mb-4">
            <p className="font-bold text-lg">
              Computer Science Undergraduate
            </p>
            <p className="text-gray-500 font-medium">
              Full-Stack Development | Project Management | Business Analysis
            </p>
          </div>

          <p className="text-gray-600 mb-6">
            Background in full-stack development with clean UI and scalable backend systems, 
            along with working knowledge of project management and business analysis concepts.
          </p>

          <div className="flex gap-4">
            <a
              href="/Januki_liyanapathirana_Resume_2026_Portfolio.pdf"
              download
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              Download CV
            </a>

            <a href="#projects">
              <button className="btn-primary">
                View Projects
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Januki Liyanapathirana"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;