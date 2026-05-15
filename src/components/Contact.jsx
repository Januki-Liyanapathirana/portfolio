import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_portfolio-januki",
        "template_rkpnd6y",
        form.current,
        "xqURr8Zrw86yId0dH"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="glass py-16">

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
            Feel free to connect with me through my social platforms or send
            me a message directly.
          </p>

          {/* Socials */}
          <div className="flex gap-5">

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
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/januki-liyanapathirana-a74780337"
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
              "
            >
              <FaLinkedinIn />
            </a>

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
              "
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="
            bg-white/5
            border border-white/10
            backdrop-blur-lg
            p-6
            rounded-3xl
          "
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="
              w-full mb-4 p-4
              rounded-2xl
              bg-transparent
              border border-white/10
              text-white
              placeholder-gray-400
              focus:outline-none
            "
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="
              w-full mb-4 p-4
              rounded-2xl
              bg-transparent
              border border-white/10
              text-white
              placeholder-gray-400
              focus:outline-none
            "
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="
              w-full mb-5 p-4
              rounded-2xl
              bg-transparent
              border border-white/10
              text-white
              placeholder-gray-400
              focus:outline-none
              resize-none
            "
          />

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