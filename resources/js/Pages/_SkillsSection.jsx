import { useEffect } from 'react';
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs, FaPython, FaPhp, FaGitAlt, FaGithub, FaFigma, FaUnity, FaWordpress } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiFramer, SiAdobephotoshop } from "react-icons/si";
import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";
import { GrDocker } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import gsap from 'gsap';

const SkillsSection = () => {
  useEffect(() => {
    gsap.fromTo(".skill-item", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 });
  }, []);

  return (
    <section id="skills" className="flex flex-wrap gap-4 p-8 mx-auto text-white rounded-lg shadow-lg" style={{ backgroundColor: '#0d0d0d', maxWidth: '1200px' }}>
      <h1 className="w-full text-6xl font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaHtml5 className="text-orange-600 text-4xl" />
          <p className="text-white mt-2 text-sm">HTML5</p>
        </div>















        
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaHtml5 className="text-orange-600 text-4xl" />
          <p className="text-white mt-2 text-sm">HTML5</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaCss3 className="text-blue-600 text-4xl" />
          <p className="text-white mt-2 text-sm">CSS3</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <SiJavascript className="text-yellow-500 text-4xl" />
          <p className="text-white mt-2 text-sm">JavaScript</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaReact className="text-blue-400 text-4xl" />
          <p className="text-white mt-2 text-sm">React</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <RiTailwindCssFill className="text-teal-400 text-4xl" />
          <p className="text-white mt-2 text-sm">Tailwind CSS</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaBootstrap className="text-purple-600 text-4xl" />
          <p className="text-white mt-2 text-sm">Bootstrap</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaNodeJs className="text-green-600 text-4xl" />
          <p className="text-white mt-2 text-sm">Node.js</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaPython className="text-blue-400 text-4xl" />
          <p className="text-white mt-2 text-sm">Python</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <BiLogoFlask className="text-white text-4xl" />
          <p className="text-white mt-2 text-sm">Flask</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaPhp className="text-indigo-600 text-4xl" />
          <p className="text-white mt-2 text-sm">PHP</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <SiMysql className="text-blue-600 text-4xl" />
          <p className="text-white mt-2 text-sm">MySQL</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <SiMongodb className="text-green-600 text-4xl" />
          <p className="text-white mt-2 text-sm">MongoDB</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <BiLogoPostgresql className="text-blue-600 text-4xl" />
          <p className="text-white mt-2 text-sm">PostgreSQL</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaGitAlt className="text-orange-600 text-4xl" />
          <p className="text-white mt-2 text-sm">Git</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaGithub className="text-white text-4xl" />
          <p className="text-white mt-2 text-sm">GitHub</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <GrDocker className="text-blue-600 text-4xl" />
          <p className="text-white mt-2 text-sm">Docker</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaUnity className="text-white text-4xl" />
          <p className="text-white mt-2 text-sm">Unity</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaFigma className="text-purple-600 text-4xl" />
          <p className="text-white mt-2 text-sm">Figma</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <SiFramer className="text-blue-600 text-4xl" />
          <p className="text-white mt-2 text-sm">Framer</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <SiAdobephotoshop className="text-blue-600 text-4xl" />
          <p className="text-white mt-2 text-sm">Photoshop</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <FaWordpress className="text-blue-600 text-4xl" />
          <p className="text-white mt-2 text-sm">WordPress</p>
        </div>
        <div className="skill-item flex flex-col items-center justify-center bg-black rounded-lg shadow-glow w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <TbSeo className="text-green-600 text-4xl" />
          <p className="text-white mt-2 text-sm">SEO</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
