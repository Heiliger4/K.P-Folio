import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../../../public/images/nav.css';
import { Link } from 'react-scroll';
// where does it go

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`flex z-50 fixed top-0 left-1/2 transform -translate-x-1/2 justify-between mx-auto p-4 px-6 w-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="hidden md:flex w-full justify-center">
        <ul className="nav-text-color text-lg list-none nav-bg-color h-12 w-fit flex justify-center shadow-lg items-center gap-8 p-4 rounded-lg bg-opacity-75">
          <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="nav-link text-sm md:text-base">Home</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-10} duration={500} className="nav-link text-sm md:text-base">About</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="nav-link text-sm md:text-base">Projects</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className="nav-link text-sm md:text-base">Skills</Link></li>
          <li><Link to="experience" spy={true} smooth={true} offset={-10} duration={500} className="nav-link text-sm md:text-base">Experience</Link></li>
        </ul>
      </div>

      <div className="md:hidden flex justify-between w-full gap-2">
        <span className="text-white font-semibold text-xl">KP Folio</span>
        <FaBars
          onClick={toggleMobileMenu}
          className={`text-white text-2xl cursor-pointer transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
        />
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-gray-800 bg-opacity-75 transition-all duration-300 ease-in-out`}>
        <ul className="list-none p-4 text-center">
          <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="nav-link text-lg py-2">Home</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-10} duration={500} className="nav-link text-lg py-2">About</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="nav-link text-lg py-2">Projects</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className="nav-link text-lg py-2">Skills</Link></li>
          <li><Link to="experience" spy={true} smooth={true} offset={-10} duration={500} className="nav-link text-lg py-2">Experience</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
