import { MdVerified } from "react-icons/md";
import certificate_1 from "../../../public/images/certificate_1.jpg";
import certificate_2 from "../../../public/images/certificate_2.png";
import certificate_3 from "../../../public/images/certificate_3.jpg";
import certificate_4 from "../../../public/images/certificate_4.png";
import certificate_5 from "../../../public/images/certificate_5.png";
import certificate_6 from "../../../public/images/certificate_6.png";

const CoursesCertificationsSection = () => {
    return (
        <section
            className="grid gap-8 p-8 mx-auto rounded-lg shadow-lg text-white"
            style={{ backgroundColor: "#0d0d0d" }}
        >
            {" "}
            <h1 className="text-3xl font-bold text-center mb-8">
                Courses and Certifications
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {/* ----------------------------------------------------------------------------------------------------------------- */}
                <div className="w-full h-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
                    <div className="flex justify-center">
                        <div className="w-full sm:w-80 md:w-96 h-96 overflow-hidden rounded-lg">
                            <img
                                src={certificate_1}
                                alt="Description of image"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <ul className="space-y-4 mt-4">
                        <li className="flex justify-center space-x-8 mt-4">
                            <MdVerified className="inline-block text-4xl text-blue-600 transition-colors" />
                            <a
                                href="https://drive.google.com/file/d/1gWTceoq9UVs1ldtGxcZEAdRNWMlsihlI/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="inline-block text-2xl text-gray-400 hover:text-blue-600 transition-colors">
                                    View credential
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>














            
            {/* <div className="grid grid-cols-3 gap-x-10 gap-y-16"> */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* <div className="w-full h-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
                    <div className="flex justify-center">
                        <div className="w-96 h-96 overflow-hidden rounded-lg">
                            <img
                                src={certificate_1}
                                alt="Description of image"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <ul className="space-y-4 mt-4">
                        <li className="flex justify-center space-x-8 mt-4">
                            <MdVerified className="inline-block text-4xl text-blue-600 transition-colors" />
                            <a
                                href="https://drive.google.com/file/d/1gWTceoq9UVs1ldtGxcZEAdRNWMlsihlI/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="inline-block text-2xl text-gray-400 hover:text-blue-600 transition-colors">
                                    View credential
                                </p>
                            </a>
                        </li>
                    </ul>
                </div> */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* <div className="w-full h-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
                    <div className="flex justify-center">
                        <div className="w-96 h-96 overflow-hidden rounded-lg">
                            <img
                                src={certificate_2}
                                alt="Description of image"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <ul className="space-y-4 mt-4">
                        <li className="flex justify-center space-x-8 mt-4">
                            <MdVerified className="inline-block text-4xl text-blue-600 transition-colors" />
                            <a
                                href="https://www.coursera.org/account/accomplishments/verify/K3MPZ64U4JW3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="inline-block text-2xl text-gray-400 hover:text-blue-600 transition-colors">
                                    View credential
                                </p>
                            </a>
                        </li>
                    </ul>
                </div> */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* <div className="w-full h-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-96 h-96 overflow-hidden rounded-lg">
              <img src={certificate_4} alt="Description of image" className="object-contain w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <MdVerified className='inline-block text-4xl text-blue-600 transition-colors' />
              <a href="https://drive.google.com/file/d/1MtKhDOLcv4334TVaqJvQmSbHTj4HkBWx/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                <p className='inline-block text-2xl text-gray-400 hover:text-blue-600 transition-colors'>View credential</p>
              </a>
            </li>
          </ul>
        </div> */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* <div className="w-full h-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-96 h-96 overflow-hidden rounded-lg">
              <img src={certificate_3} alt="Description of image" className="object-contain w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <MdVerified className='inline-block text-4xl text-blue-600 transition-colors' />
              <a href="https://app-eu1.hubspot.com/academy/achievements/x74dz36r/en/1/kidus-paulos/seo-ii" target="_blank" rel="noopener noreferrer">
                <p className='inline-block text-2xl text-gray-400 hover:text-blue-600 transition-colors'>View credential</p>
              </a>
            </li>
          </ul>
        </div> */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* <div className="w-full h-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-96 h-96 overflow-hidden rounded-lg">
              <img src={certificate_5} alt="Description of image" className="object-contain w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <MdVerified className='inline-block text-4xl text-blue-600 transition-colors' />
              <a href="https://www.credly.com/badges/b340c1bd-1166-49fc-8ca3-b005830c6f65" target="_blank" rel="noopener noreferrer">
                <p className='inline-block text-2xl text-gray-400 hover:text-blue-600 transition-colors'>View credential</p>
              </a>
            </li>
          </ul>
        </div> */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* <div className="w-full h-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-96 h-96 overflow-hidden rounded-lg">
              <img src={certificate_6} alt="Description of image" className="object-contain w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <MdVerified className='inline-block text-4xl text-blue-600 transition-colors' />
              <a href="https://www.credly.com/badges/b340c1bd-1166-49fc-8ca3-b005830c6f65" target="_blank" rel="noopener noreferrer">
                <p className='inline-block text-2xl text-gray-400 hover:text-blue-600 transition-colors'>View credential</p>
              </a>
            </li>
          </ul>
        </div> */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* </div> */}
        </section>
    );
};

export default CoursesCertificationsSection;
