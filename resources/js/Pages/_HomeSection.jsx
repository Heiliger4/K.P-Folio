import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { HiArrowRight } from "react-icons/hi";
import { LuDownload } from "react-icons/lu";
import { HiArrowLongDown } from "react-icons/hi2";
import myimage from "../../../public/images/myimage.jpg";
import { Link } from "react-scroll";

gsap.registerPlugin(TextPlugin);

const Home = () => {
    const pRef = useRef(null);

    useEffect(() => {
        const text =
          "I&apos;m Kidus Paulos, a passionate developer with 1.5 years of experience, crafting software solutions from Addis Ababa, Ethiopia.";
    
        // Typewriter effect for the text
        const typeWriterEffect = () => {
          gsap.to(pRef.current, {
            text: text,
            duration: 30,
            ease: "bounce.out",
            repeat: -1,
            repeatDelay: 1,
          });
        };
    
        // Animation for the image (scale and opacity)
        gsap.to(".image-beat", {
          scale: 1.2, 
          opacity: 0.8, 
          repeat: -1, 
          yoyo: true, 
          duration: 2,
          ease: "power1.inOut", 
        });
    
        gsap.to("a:hover", {
          keyframes: {
            "0%, 100%": { x: 0 },
            "25%": { x: -2 },
            "50%": { x: 2 },
            "75%": { x: -2 },
          },
          duration: 0.5,
          repeat: -1,
          ease: "power2.inOut",
        });
    
        gsap.to(".bounce-button", {
          y: 25, 
          repeat: -1, 
          yoyo: true, 
          duration: 1, 
          ease: "power1.inOut", 
        });
    
        typeWriterEffect();
    
        return () => {
          gsap.killTweensOf(pRef.current);
          gsap.killTweensOf(".image-beat");
          gsap.killTweensOf(".bounce-button");
        };
      }, []);

    return (
        <>
            <section
                id="contact"
                className="flex flex-col justify-center items-center min-h-screen px-6 py-12 md:px-12 md:py-16"
            >
                <h1 className="text-5xl md:text-9xl mb-4 mt-6 text-center">
                    <span className="flex items-center justify-center">
                        <span className="text-4xl md:text-9xl">Kidus</span>
                        <img
                            src={myimage}
                            className="w-0 h-0 md:w-48 md:h-48 rounded-full inline-block image-beat m-4 md:w-24 md:h-24"
                            alt="my photo"
                        />
                        <span className="text-4xl md:text-9xl">Paulos</span>
                    </span>
                </h1>
                <div className="relative w-full max-w-4xl h-32 mx-auto overflow-hidden bg-gray-800 p-6 mb-10 rounded-lg shadow-lg">
                    <p
                        className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl text-center text-white"
                        ref={pRef}
                    ></p>
                </div>
                <ul className="flex flex-wrap justify-center items-center text-xl md:text-2xl gap-6 mb-12">
                    <li>
                        <Link
                            to="contact-me"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="flex items-center underline underline-thick underline-offset-8 cursor-pointer"
                        >
                            <HiArrowRight className="mr-2 -mb-1" /> Contact me
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1Hg8teRW5ItZ5lS1fPRXap_h3cWECL07e/view?usp=sharing"
                            className="flex items-center underline underline-thick underline-offset-8"
                        >
                            <LuDownload className="mr-2 " /> Download CV
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kidus-p-26a0862a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            className="underline underline-thick underline-offset-8"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Heiliger4"
                            target="_blank"
                            className="underline underline-thick underline-offset-8"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
                <p className="text-lg md:text-xl mb-6">Scroll to discover</p>
                <HiArrowLongDown className="text-3xl md:text-4xl bounceBtn bounce-button" />
            </section>
        </>
    );
};

export default Home;
