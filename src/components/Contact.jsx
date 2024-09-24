import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your EmailJS service ID, template ID, and public key
    const serviceID = "service_2ly8q9l";
    const templateID = "template_eo5bini";
    const publicKey = "pI1wa3XGjkrB3nlm7";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      },
      (error) => {
        console.log("FAILED...", error);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
      id="contact"
    >
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-customBlue2 mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue2 focus:border-customBlue2"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue2 focus:border-customBlue2"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue2 focus:border-customBlue2"
              placeholder="Your Message"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`w-full py-3 px-4 bg-customBlue2 text-white rounded-md font-semibold hover:bg-customBlue3 transition-all duration-300 ease-in-out ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {successMessage && (
          <p className="mt-4 text-green-600 text-center">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
