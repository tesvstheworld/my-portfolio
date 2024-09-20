import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-field flex-col items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md ">
      <div className="contacts mb-6" id="contact">
        <header className="text-2xl font-bold text-gray-800">Contact Us</header>
        <h3 className="text-lg text-gray-700 mt-2">
          We’d love to hear from you. Would you like to discuss a project?
        </h3>
        <p className="text-gray-600 mt-4">
          Are you interested in collaborating and working with us? Please don’t
          hesitate to contact us. <br />
          You can give us a call on{" "}
          <a href="tel:+23408145622502" className="text-blue-600">
            +234-(0)-814-5622-502
          </a>
          , or send us an email{" "}
          <a href="mailto:2107atelier@gmail.com" className="text-blue-600">
            2107atelier@gmail.com
          </a>
          .
        </p>
      </div>
      <div className="container-1">
        <form
          action="https://formsubmit.co/belloteslim645@gmail.com"
          method="POST"
        >
          <div className="input-group mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="input-group mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone No.
            </label>
            <input
              type="tel"
              placeholder="123 456 7890"
              name="phone"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="input-group mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Id
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="input-group mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Enter your message"
              name="message"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
