import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="glass py-16">

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
            Feel free to connect with me through my social platforms or send
            me a message directly.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/Januki-Liyanapathirana"
              target="_blank"
              rel="noreferrer"
              className="
                w-16 h-16
                rounded-full
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-2xl text-white
                transition-all duration-300
                hover:bg-white/10
                hover:scale-105
                hover:border-cyan-400/20
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/januki-liyanapathirana"
              target="_blank"
              rel="noreferrer"
              className="
                w-16 h-16
                rounded-full
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-2xl text-white
                transition-all duration-300
                hover:bg-white/10
                hover:scale-105
                hover:border-cyan-400/20
              "
            >
              <FaLinkedinIn />
            </a>

            {/* Email */}
            <a
              href="mailto:jkuliyanapathirana23@gmail.com"
              className="
                w-16 h-16
                rounded-full
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-2xl text-white
                transition-all duration-300
                hover:bg-white/10
                hover:scale-105
                hover:border-cyan-400/20
              "
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          action="https://formsubmit.co/jkuliyanapathirana23@gmail.com"
          method="POST"
          className="
            bg-white/5
            border border-white/10
            backdrop-blur-lg
            p-6
            rounded-3xl
          "
        >

          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Optional subject */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Message"
          />

          {/* Name */}
          <input
            type="text"
            name="name"
            required
            className="
              w-full mb-4 p-4
              rounded-2xl
              bg-transparent
              border border-white/10
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:border-cyan-400/30
            "
            placeholder="Your Name"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            required
            className="
              w-full mb-4 p-4
              rounded-2xl
              bg-transparent
              border border-white/10
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:border-cyan-400/30
            "
            placeholder="Your Email"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            required
            className="
              w-full mb-5 p-4
              rounded-2xl
              bg-transparent
              border border-white/10
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:border-cyan-400/30
              resize-none
            "
            placeholder="Your Message"
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-4
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              text-white
              font-medium
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;