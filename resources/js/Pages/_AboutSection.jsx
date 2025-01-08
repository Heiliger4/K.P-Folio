import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({abouts}) => {
  // console.log(`here is the data passed: ${JSON.stringify(abouts, null, 2)}`);

  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(aboutRef.current, 
      {
        opacity: 0,
        y: 100,
        scale: 0.5,
        rotation: 10,
      }, 
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",  
          end: "top 20%",  
          toggleActions: "play reverse play reverse",  
        },
      }
    );
  }, []);

  return (
      <div className="flex justify-center py-16" id="about">
          <div
              ref={aboutRef}
              className="max-w-4xl w-full bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
              style={{
                  width: "90%",
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)",
              }}
          >
              <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8">
                  About me
              </p>
              {abouts && (
                  <p className="text-base md:text-xl lg:text-3xl text-center">
                      {abouts && abouts.about_description
                          ? abouts.about_description
                          : "Hi, I'm Kidus Paulos! I'm currently studying Computer Science and have a passion for turning ideas into impactful digital solutions. Over the years, I've worked on various projects that have strengthened my skills in problem-solving, creativity, and teamwork. I thrive on challenges that push my boundaries and am excited to create solutions that make a real-world impact!"}
                  </p>
              )}
          </div>
      </div>
  );
};

export default AboutSection;
