import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" backdrop-blur-md bg-white/80 border-t border-gray-200 text-gray-700 text-sm mt-16 shadow-sm">
  <div className=" mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-center md:text-left">
      © {new Date().getFullYear()} Sanjana Biswas. All rights reserved.
    </p>
    <div className="flex gap-4">
      <a href="#about" className="hover:text-[#6c63ff] transition">About</a>
      <a href="#projects" className="hover:text-[#6c63ff] transition">Projects</a>
      <a href="#contact" className="hover:text-[#6c63ff] transition">Contact</a>
    </div>
  </div>
</footer>


  );
};



export default Footer;
