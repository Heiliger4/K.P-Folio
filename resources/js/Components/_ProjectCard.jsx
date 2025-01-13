import project_1 from '../../../public/images/project-1.png';
import project_2 from '../../../public/images/project-2.jpg'; 
import project_3 from '../../../public/images/project-3.jpg'; 
import project_4 from '../../../public/images/project-4.jpg'; 
import project_5 from '../../../public/images/project-5.jpg'; 
import project_6 from '../../../public/images/project-6.jpg'; 
import { IoLogoGameControllerB } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <section id="projects" className="grid gap-8 p-8 my-32 mx-auto text-white rounded-lg shadow-lg" style={{ backgroundColor: '#0d0d0d' }}>
      <h1 className="text-6xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        
        
        
        
        
        
        {/* Project Card-0 */}
        {/* <div className="w-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img src={project_1} alt="Description of image" className="object-cover w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <a href="https://heiliger.itch.io/john-lemons-midnight-escape" target="_blank" rel="noopener noreferrer">
                <IoLogoGameControllerB className='inline-block text-4xl text-blue-400 hover:text-blue-600 transition-colors' />
              </a>
              <a href="https://github.com/Heiliger4/Maliyo-GameUp-Africa-Bootcamp" target="_blank" rel="noopener noreferrer">
                <FaGithub className='inline-block text-4xl text-gray-400 hover:text-gray-600 transition-colors' />
              </a>
            </li>
            <li>
              <p className="text-xl font-bold uppercase text-green-400 mb-4 text-center">John the Haunted</p>
              <p className="text-lg mb-4 text-center">A thrilling Unity-based horror game where players guide John through a spooky, haunted house. Overcoming eerie obstacles and solving puzzles, the goal is to escape before the ghostly forces claim him.</p>
              <div className="flex justify-center">
                <p className="text-sm font-semibold mb-4 text-center text-gray-300 bg-gray-800 bg-opacity-50 rounded-lg p-2 inline-block">
                  C# Unity Itch.io
                </p>
              </div>
            </li>
          </ul>
        </div> */}































        {/* Project Card-1 */}
        <div className="w-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img src={project_1} alt="Description of image" className="object-cover w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <a href="https://heiliger.itch.io/john-lemons-midnight-escape" target="_blank" rel="noopener noreferrer">
                <IoLogoGameControllerB className='inline-block text-4xl text-blue-400 hover:text-blue-600 transition-colors' />
              </a>
              <a href="https://github.com/Heiliger4/Maliyo-GameUp-Africa-Bootcamp" target="_blank" rel="noopener noreferrer">
                <FaGithub className='inline-block text-4xl text-gray-400 hover:text-gray-600 transition-colors' />
              </a>
            </li>
            <li>
              <p className="text-xl font-bold uppercase text-green-400 mb-4 text-center">John the Haunted</p>
              <p className="text-lg mb-4 text-center">A thrilling Unity-based horror game where players guide John through a spooky, haunted house. Overcoming eerie obstacles and solving puzzles, the goal is to escape before the ghostly forces claim him.</p>
              <div className="flex justify-center">
                <p className="text-sm font-semibold mb-4 text-center text-gray-300 bg-gray-800 bg-opacity-50 rounded-lg p-2 inline-block">
                  C# Unity Itch.io
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Project Card-2 */}
        <div className="w-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img src={project_2} alt="Description of image" className="object-cover w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <a href="https://github.com/Heiliger4/ai-learning-agent" target="_blank" rel="noopener noreferrer">
                <IoLogoGameControllerB className='inline-block text-4xl text-blue-400 hover:text-blue-600 transition-colors' />
              </a>
              <a href="https://github.com/Heiliger4/ai-learning-agent" target="_blank" rel="noopener noreferrer">
                <FaGithub className='inline-block text-4xl text-gray-400 hover:text-gray-600 transition-colors' />
              </a>
            </li>
            <li>
              <p className="text-xl font-bold uppercase text-green-400 mb-4 text-center">AI-Powered Snake Game</p>
              <p className="text-lg mb-4 text-center">A classic snake game enhanced with a reinforcement learning AI agent, built using Python and Pygame to demonstrate autonomous decision-making in gameplay.</p>
              <div className="flex justify-center">
                <p className="text-sm font-semibold mb-4 text-center text-gray-300 bg-gray-800 bg-opacity-50 rounded-lg p-2 inline-block">
                  Python, Pygame, Reinforcement Learning
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Project Card-3 */}
        <div className="w-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img src={project_3} alt="Description of image" className="object-cover w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <a href="https://github.com/Heiliger4/EventManagement" target="_blank" rel="noopener noreferrer">
                <IoLogoGameControllerB className='inline-block text-4xl text-blue-400 hover:text-blue-600 transition-colors' />
              </a>
              <a href="https://github.com/Heiliger4/EventManagement" target="_blank" rel="noopener noreferrer">
                <FaGithub className='inline-block text-4xl text-gray-400 hover:text-gray-600 transition-colors' />
              </a>
            </li>
            <li>
              <p className="text-xl font-bold uppercase text-green-400 mb-4 text-center">Simplified Event Management</p>
              <p className="text-lg mb-4 text-center">A user-friendly website for managing events, built with Flask, enabling event creation, updates, and attendee tracking.</p>
              <div className="flex justify-center">
                <p className="text-sm font-semibold mb-4 text-center text-gray-300 bg-gray-800 bg-opacity-50 rounded-lg p-2 inline-block">
                  Python, Flask, HTML, CSS, Mysql
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Project Card-4 */}
        <div className="w-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img src={project_4} alt="Description of image" className="object-cover w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <a href="https://github.com/Heiliger4/Data-structure-in-C-plus-plus" target="_blank" rel="noopener noreferrer">
                <IoLogoGameControllerB className='inline-block text-4xl text-blue-400 hover:text-blue-600 transition-colors' />
              </a>
              <a href="https://github.com/Heiliger4/Data-structure-in-C-plus-plus" target="_blank" rel="noopener noreferrer">
                <FaGithub className='inline-block text-4xl text-gray-400 hover:text-gray-600 transition-colors' />
              </a>
            </li>
            <li>
              <p className="text-xl font-bold uppercase text-green-400 mb-4 text-center">DSA Hub</p>
              <p className="text-lg mb-4 text-center">A comprehensive collection of data structure and algorithm solutions implemented in C++ for efficient problem-solving.</p>
              <div className="flex justify-center">
                <p className="text-sm font-semibold mb-4 text-center text-gray-300 bg-gray-800 bg-opacity-50 rounded-lg p-2 inline-block">
                  C++
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Project Card-5 */}
        <div className="w-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img src={project_5} alt="Description of image" className="object-cover w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <a href="https://github.com/Heiliger4/Ping-Pong-java-game" target="_blank" rel="noopener noreferrer">
                <IoLogoGameControllerB className='inline-block text-4xl text-blue-400 hover:text-blue-600 transition-colors' />
              </a>
              <a href="https://github.com/Heiliger4/Ping-Pong-java-game" target="_blank" rel="noopener noreferrer">
                <FaGithub className='inline-block text-4xl text-gray-400 hover:text-gray-600 transition-colors' />
              </a>
            </li>
            <li>
              <p className="text-xl font-bold uppercase text-green-400 mb-4 text-center">Ping Pong Smash</p>
              <p className="text-lg mb-4 text-center">A classic ping pong game built with Java Swing, where players compete to keep the ball in play and outscore the opponent.</p>
              <div className="flex justify-center">
                <p className="text-sm font-semibold mb-4 text-center text-gray-300 bg-gray-800 bg-opacity-50 rounded-lg p-2 inline-block">
                  Java Swing
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Project Card-6 */}
        <div className="w-full bg-white bg-opacity-10 text-white rounded-3xl p-8 shadow-md transform transition-transform hover:scale-105">
          <div className="flex justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-lg">
              <img src={project_6} alt="Description of image" className="object-cover w-full h-full" />
            </div>
          </div>
          <ul className="space-y-4 mt-4">
            <li className="flex justify-center space-x-8 mt-4">
              <a href="https://github.com/Heiliger4/Dungeon-Adventure" target="_blank" rel="noopener noreferrer">
                <IoLogoGameControllerB className='inline-block text-4xl text-blue-400 hover:text-blue-600 transition-colors' />
              </a>
              <a href="https://github.com/Heiliger4/Dungeon-Adventure" target="_blank" rel="noopener noreferrer">
                <FaGithub className='inline-block text-4xl text-gray-400 hover:text-gray-600 transition-colors' />
              </a>
            </li>
            <li>
              <p className="text-xl font-bold uppercase text-green-400 mb-4 text-center">Dungeon Adventure</p>
              <p className="text-lg mb-4 text-center">A text-based dungeon adventure game, developed in Python, where players navigate through dungeons, solving puzzles and battling monsters.</p>
              <div className="flex justify-center">
                <p className="text-sm font-semibold mb-4 text-center text-gray-300 bg-gray-800 bg-opacity-50 rounded-lg p-2 inline-block">
                  Python
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
