import { useEffect } from "react";
import { FiLinkedin } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import gsap from "gsap";

const SocialLinks = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".social-link");

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { x: -5, duration: 0.1, yoyo: true, repeat: 5 });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, { x: 0, duration: 0.1 });
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <aside className="hidden lg:flex z-50 flex-col fixed top-1/2 left-0 transform -translate-y-1/2 p-4 space-y-8 text-3xl text-white bg-black bg-opacity-50 rounded-tr-3xl rounded-br-3xl">
      <a href="https://www.linkedin.com/in/kidus-p-26a0862a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="social-link">
        <FiLinkedin />
      </a>
      <a href="https://github.com/Heiliger4" target="_blank" rel="noreferrer" className="social-link">
        <RxGithubLogo />
      </a>
      <a href="mailto:www.kiduspaulos@gmail.com" rel="noreferrer" className="social-link">
        <SiGmail />
      </a>
      <a href="https://twitter.com/KPG4404" target="_blank" rel="noreferrer" className="social-link">
        <FaXTwitter />
      </a>
      <a href="https://wa.me/251940070144" target="_blank" rel="noreferrer" className="social-link">
        <BsWhatsapp />
      </a>
    </aside>
  );
}

export default SocialLinks;
