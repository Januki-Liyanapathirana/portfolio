const Journey = () => {
  return (
    <section id="journey" className="glass">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          My Journey
        </h2>

        <div className="space-y-6">

          {/* IIT */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-[1.02] transition">
            <h3 className="font-semibold text-lg">
              Computer Science Undergraduate
            </h3>
            <p className="text-blue-400 text-sm">
              IIT Sri Lanka (University of Westminster)
            </p>
            <p className="text-gray-400 text-sm">
              2024 - Present
            </p>
          </div>

          {/* School */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-[1.02] transition">
            <h3 className="font-semibold text-lg">
              Secondary Education
            </h3>
            <p className="text-blue-400 text-sm">
              Sirimavo Bandaranaike Vidyalaya, Colombo 07
            </p>
            <p className="text-gray-400 text-sm">
              2015 - 2022
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;