import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaSpotify } from "react-icons/fa";

const ContactMe = () => {
  return (
    <footer id="contact" className=" foot bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">📬 Contact Me</h2>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" /> 22053101@KIIT.ac.in
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" /> sanjanabiswas557@kiit.ac.in
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone className="text-green-400" /> +9064347554
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt className="text-red-400" /> Bhubaneshwar, Odisha
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-2xl font-bold mb-4">🌐 Connect With Me</h2>
          <div className="flex gap-5">
            <a href="https://github.com/Sanj3101" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/sanjana783" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition">
              <FaLinkedin size={30} />
            </a>
            <a className="text-blue-500 hover:text-white transition">
              <FaTwitter size={30} />
            </a>
            <a className="text-green-400 hover:text-white transition">
              <FaSpotify size={30} />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default ContactMe;
