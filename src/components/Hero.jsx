import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pt-14 pb-14 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center min-h-[78vh]">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Greeting */}
          <p className="
            text-2xl md:text-3xl
            font-semibold
            text-white
            mb-1
          ">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="
            text-5xl
            md:text-6xl
            font-bold
            leading-[0.92]
            mb-4
            bg-gradient-to-r
            from-blue-400
            via-cyan-300
            to-blue-500
            bg-clip-text
            text-transparent
          ">
            Januki

            <span className="block text-5xl md:text-6xl">
              Liyanapathirana
            </span>
          </h1>

          {/* Role */}
          <h2 className="
            text-lg
            md:text-xl
            font-semibold
            text-white/90
            mb-3
          ">
            Computer Science Undergraduate
          </h2>

          {/* Simple Role Text */}
          <p className="
            text-white/55
            text-sm
            md:text-base
            leading-relaxed
            mb-6
            max-w-xl
          ">
            Full-Stack Development • Project Management • Business Analysis
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mb-6">

            <a
              href="https://github.com/Januki-Liyanapathirana"
              target="_blank"
              rel="noreferrer"
              className="
                w-10 h-10
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-base text-white
                transition-all duration-300
                hover:scale-105
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/januki-liyanapathirana"
              target="_blank"
              rel="noreferrer"
              className="
                w-10 h-10
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-base text-white
                transition-all duration-300
                hover:scale-105
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:jkuliyanapathirana23@gmail.com"
              className="
                w-10 h-10
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-base text-white
                transition-all duration-300
                hover:scale-105
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="/Januki_liyanapathirana_Resume_2026_Portfolio.pdf"
              download
              className="
                px-6 py-2.5
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-white
                text-sm
                font-medium
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(34,211,238,0.30)]
              "
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="
                px-6 py-2.5
                rounded-full
                border border-white/10
                bg-white/5
                text-white
                text-sm
                font-medium
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white/10
                hover:scale-105
              "
            >
              View Projects
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            flex
            justify-center
            lg:justify-end
            lg:pr-10
          "
        >

          {/* Background Glow */}
          <div className="
            absolute
            w-[400px]
            h-[400px]
            bg-cyan-500/15
            blur-3xl
            rounded-full
          " />

          {/* Profile Container */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              relative
              z-10
              w-[290px]
              h-[290px]
              rounded-full
              p-[6px]
              bg-gradient-to-br
              from-cyan-400/60
              to-blue-500/40
            "
          >

            {/* Actual Image */}
            <div className="
              w-full
              h-full
              rounded-full
              overflow-hidden
              bg-[#0B1120]
            ">

              <img
                src="/profile.jpg"
                alt="Januki Liyanapathirana"
                className="
                  w-full
                  h-full
                  object-cover
                  block
                "
              />

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;