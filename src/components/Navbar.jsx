export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8 text-sm font-medium text-gray-300">

        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#certifications" className="hover:text-white transition">Certifications</a>
        <a href="#journey" className="hover:text-white transition">Journey</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>

      </div>
    </nav>
  );
}