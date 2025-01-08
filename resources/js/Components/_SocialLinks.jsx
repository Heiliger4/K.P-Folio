import { useEffect } from "react";
import { FiLinkedin } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import gsap from "gsap";
import { usePage } from "@inertiajs/react";

const SocialLinks = () => {
  const { socialLinks } = usePage().props; // Get the data from Laravel

  console.log(`Here is the data passed: ${JSON.stringify(socialLinks, null, 2)}`);

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

  if (!socialLinks || socialLinks.length === 0) {
    return null; // Don't render anything if there are no links
  }

  const icons = {
    github: <RxGithubLogo />,
    linkedin: <FiLinkedin />,
    email: <SiGmail />,
    twitter: <FaXTwitter />,
    whatsapp: <BsWhatsapp />,
  };

  return (
    <aside className="hidden lg:flex z-50 flex-col fixed top-1/2 left-0 transform -translate-y-1/2 p-4 space-y-8 text-3xl text-white bg-black bg-opacity-50 rounded-tr-3xl rounded-br-3xl">
      {socialLinks.map((link, index) => {
        return Object.entries(link).map(([key, url]) => (
          <a
            key={`${key}-${index}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            {icons[key]}
          </a>
        ));
      })}
    </aside>
  );
};

export default SocialLinks;
