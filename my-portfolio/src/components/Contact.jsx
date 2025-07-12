import React, { useState } from "react";
import logo from "../assets/contact.svg"; // Use your actual contact image path

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-white flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Contact Form */}
        <div className="shadow-xl rounded-3xl p-8 bg-gradient-to-br from-white via-[#e8e7f1] to-[#dcdbe6]">
          <h2 className="text-3xl font-bold text-[#6c63ff] mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] bg-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#6c63ff] text-white px-6 py-2 rounded-full font-medium hover:bg-[#6c4ed9] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Floating Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={logo}
            alt="Contact illustration"
            className="w-[550px] sm:w-[500px] md:w-[660px] lg:w-[820px] h-auto floating-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
