import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white pt-8">
      <h2 className="text-3xl font-bold pt-8 text-center lg:mx-12 lg:text-left lg:pb-10 mb-4 lg:pl-[50px] ">
        Contact Me
      </h2>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 lg:mx-12">
        <div className="flex flex-col items-center justify-center md:items-start space-y-4">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
          />
          <h2 className="text-2xl font-bold">OSHIM PATHAN</h2>
        </div>

        <div className="text-center md:text-left space-y-4 font-semibold">
          <p>
            Email:{" "}
            <Link
              to="https://mail.google.com/mail/u/0/?fs=1&to=work.oshimkhan6@gmail.com&tf=cm"
              target="_blank"
              className="hover:underline"
            >
              work.oshimkhan@gmail.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link onTouchEnd="tel:+917317644253" className="hover:underline">
              +91-7317644253
            </Link>
          </p>
        </div>

        <div className="flex space-x-6">
          <Link to="https://github.com/oshimkhan" target="_blank">
            <FaGithub
              size={30}
              className="text-gray-white hover:scale-125 transition-transform duration-300"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/oshim7786/"
            target="_blank"
          >
            <FaLinkedin
              size={30}
              className=" text-blue-500 hover:scale-125 transition-transform duration-300"
            />
          </Link>
          <Link to="https://x.com/beginosem98333" target="_blank">
            <FaTwitter
              size={30}
              className="text-blue-400 hover:scale-125 transition-transform duration-300"
            />
          </Link>
          <Link
            to="https://www.instagram.com/oshim.x/"
            target="_blank"
          >
            <FaInstagram
              size={30}
              className="text-orange-300 hover:scale-125 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="text-center mt-8 text-white bg-gray-900 py-2  ">
        <p>
          Made with ❤️ by{"  "}
          <span className="font-semibold bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Oshim Pathan
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
