const Contact = () => {
  return (
    <section id="contact" className="glass">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

          <p className="text-gray-400 mb-6">
            Feel free to reach out through my social platforms.
          </p>

          <div className="space-y-4">

            {/* GitHub */}
            <a
              href="https://github.com/Januki-Liyanapathirana"
              target="_blank"
              className="block bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/januki-liyanapathirana-a74780337"
              target="_blank"
              className="block bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:jkuliyanapathirana23@gmail.com"
              className="block bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition"
            >
              Email
            </a>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl">

          <input
            className="w-full mb-3 p-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Name"
          />

          <input
            className="w-full mb-3 p-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />

          <textarea
            className="w-full mb-3 p-3 rounded-lg bg-transparent border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Message"
          />

          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">
            Send Message
          </button>

        </div>

      </div>
    </section>
  );
};

export default Contact;