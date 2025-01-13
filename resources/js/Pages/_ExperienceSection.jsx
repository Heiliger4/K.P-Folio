import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = ({ experiences }) => {
  console.log(`here is the experience data passed: ${JSON.stringify(experiences, null, 2)}`);

  useEffect(() => {
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".timeline-item",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="experience" className="min-h-screen text-white px-8 py-16" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h1 className="w-full text-4xl md:text-6xl font-bold text-center mb-8">Experience</h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-0.5 bg-red-300 h-full"></div>
          </div>

          {/* Render Timeline Items */}
          {experiences?.map((experience, index) => (
            <div
              key={index}
              className={`timeline-item flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              {/* Text Card */}
              <div className="w-full md:w-1/2 pr-8 text-left">
                <div className="bg-black text-white p-6 rounded shadow-md">
                  <h3 className="font-bold">{experience.title}</h3>
                  <p>{experience.sub_title}</p>
                  <p>Addis Ababa, ET</p>
                  <ul className="text-sm mt-2 space-y-2">
                    <li>Details about the role</li>
                    <li>Transport issues, etc.</li>
                  </ul>
                </div>
              </div>

              {/* Year Card */}
              <div className="w-full md:w-1/2 pl-8 text-left mt-4 md:mt-0">
                <p className="text-gray-500 my-4">{experience.start_year} - {experience.end_year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
