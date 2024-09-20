import React, { useState } from "react";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to handle form submission (e.g., sending data to a server)
    console.log("Form submitted:", formData);

    // Show success message
    setSuccessMessage("Your message has been sent successfully!");

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Optionally, you can set a timeout to clear the success message after a few seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      id="contact"
    >
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-customBlue2 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Are you interested in collaborating and working with us? Please don’t
          hesitate to contact us. <br />
          You can give us a call at{" "}
          <a href="tel:+23408145622502" className="text-customBlue2">
            +234-(0)-814-5622-502
          </a>
          , or send us an email{" "}
          <a href="mailto:2107atelier@gmail.com" className="text-customBlue2">
            2107atelier@gmail.com
          </a>
          .
        </p>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/belloteslim645@gmail.com"
          method="POST"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue2 focus:border-customBlue2"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone No.
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue2 focus:border-customBlue2"
              placeholder="123 456 7890"
              required
            />
          </div>

          <div className="mb-4">
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
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue2 focus:border-customBlue2"
              placeholder="Enter your message"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-customBlue2 text-white rounded-md hover:bg-customBlue3 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
