import { useEffect, useState, useRef } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { gsap } from "gsap";
import { Link } from 'react-scroll';

const FooterWithContactDetails = () => {
  const [time, setTime] = useState("");
  const contactSectionRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Africa/Addis_Ababa", timeStyle: "medium" };
      const currentTime = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
      );
      setTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      contactSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white">
      <section ref={contactSectionRef} className="pt-16 px-8 bg-[#0d0d0d]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-white">Contact Details</h3>
              <a className="block text-blue-400" href="tel:+251940070144">
                (+251) 940-070-144
              </a>
              <a className="block text-blue-400" href="mailto:www.kiduspaulos@gmail.com">
                www.kiduspaulos@gmail.com
              </a>
            </div>

            <div className="space-y-4 text-center sm:text-center">
              <h3 className="text-lg font-semibold text-white">My Digital Spaces</h3>
              <p className="text-gray-400">
                <a
                  href="https://github.com/Heiliger4" target="_blank"
                  className="hover:text-white flex items-center justify-center transition-colors"
                >
                  Github
                </a>
              </p>
              <p className="text-gray-400">
                <a
                  href="https://hashnode.com/@kptech247" target="_blank"
                  className="hover:text-white flex items-center justify-center transition-colors"
                >
                  Hashnode
                </a>
              </p>
            </div>

            <div className="space-y-4 text-center sm:text-right">
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="text-gray-400">9.145° N, 40.489673° E</p>
              <p className="text-gray-400">Addis Ababa, Ethiopia</p>
              <p className="text-gray-400">{time}</p>
            </div>
          </div>
        </div>
      </section>

      <footer ref={footerRef} className="bg-[#0d0d0d] text-gray-400 flex flex-col sm:flex-row justify-around items-center gap-4 p-4">
        <p className="text-center sm:text-left">Designed by K.P 🎶</p>
        <p className="text-center sm:text-left">&copy; 2024 | All rights reserved</p>
        <div className="flex items-center gap-2">
          <p className="text-center sm:text-left">Back to the top</p>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="flex items-center hover:text-green-600 transition-colors">
            <RxDoubleArrowUp className="ml-2 text-3xl sm:text-2xl" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterWithContactDetails;
