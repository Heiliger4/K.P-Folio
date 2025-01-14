import { FaAngleDoubleRight, FaAngleDoubleLeft, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert testimonials to an array if it's not already one
  const testimonialsArray = Array.isArray(testimonials) ? testimonials : Array.from(testimonials);

  console.log(`Here is the data from home testimonials: ${JSON.stringify(testimonialsArray, null, 2)}`);

  const handleNavigation = (direction) => {
    gsap.to(".testimonial-item", {
      opacity: 0,
      x: direction === "prev" ? 50 : -50,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex((prevIndex) =>
          direction === "prev"
            ? (prevIndex - 1 + testimonialsArray.length) % testimonialsArray.length
            : (prevIndex + 1) % testimonialsArray.length
        );
      },
    });
  };

  useEffect(() => {
    gsap.fromTo(
      ".testimonial-item",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, [currentIndex]);

  useEffect(() => {
    gsap.fromTo(
      ".testimonial-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="testimonial-container relative my-12 max-w-4xl mx-auto bg-[#1a1a1a] border border-gray-700 rounded-3xl p-8 overflow-hidden shadow-lg">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonialsArray.map(({ id, testimonial, name, title }) => (
          <div className="testimonial-item w-full flex-shrink-0 p-12 text-center" key={id}>
            <p className="text-lg italic text-gray-300">
              <FaQuoteLeft className="inline-block text-green-400 mr-2" />
              {testimonial}
              <FaQuoteRight className="inline-block text-green-400 ml-2" />
            </p>
            <div className="mt-4 flex items-center justify-center">
              <div className="ml-3">
                <h4 className="text-md font-semibold text-white">{name}</h4>
                <p className="text-sm text-gray-400">{title}</p> {/* Make sure to display the title or role */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => handleNavigation("prev")}
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-gray-700 rounded-full hover:bg-gray-600"
      >
        <FaAngleDoubleLeft className="text-green-400 text-2xl" />
      </button>

      <button
        onClick={() => handleNavigation("next")}
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-gray-700 rounded-full hover:bg-gray-600"
      >
        <FaAngleDoubleRight className="text-green-400 text-2xl" />
      </button>
    </div>
  );
};

export default Testimonial;
