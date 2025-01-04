import { BsFillSendFill } from "react-icons/bs";

const ContactForm = () => {
  return (
    <>
      <h2 id="contact-me" className="text-4xl font-bold mb-8 text-center sm:text-3xl">Contact me</h2>
      <form
        action=""
        method="post"
        className="flex flex-col gap-6 mb-8 p-6 w-full max-w-lg mx-auto bg-[#1a1a1a] rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-400 text-white"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-400 text-white"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            className="p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-400 text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-3 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 sm:text-base"
        >
          Send <BsFillSendFill className="inline ml-2" />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
