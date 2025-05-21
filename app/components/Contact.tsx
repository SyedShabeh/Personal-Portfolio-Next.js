"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Define types for form data and status
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface StatusInfo {
  error: boolean;
  msg: string | null;
}

interface StatusState {
  submitted: boolean;
  submitting: boolean;
  info: StatusInfo;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<StatusState>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  React.useEffect(() => {
    emailjs.init("RGuUfuDQvrMYsnS0F"); // Replace with your actual EmailJS User ID
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      };

      console.log("Sending email with params:", templateParams);
      const response = await emailjs.send(
        "service_shabeh1976", // Replace with your EmailJS service ID
        "template_pm03z7w", // Replace with your EmailJS template ID
        templateParams
      );
      console.log("Email sent successfully:", response);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" }
      });

      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);

    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Something went wrong. Please try again later." }
      });
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="main-font font-bold text-3xl md:text-4xl">Let's get in touch</h1>
            <p className="mid-font text-lg mt-8 mb-6">
              I enjoy discussing new projects and design challenges. Please share as much info as possible
              so we can get the most out of our first catch-up.
            </p>

            <p className="mid-font font-bold mb-1 text-lg">Living In:</p>
            <p className="co-font mb-4 text-lg">Islamabad, Pakistan</p>

            <p className="mid-font font-bold mb-1 text-lg">Call:</p>
            <p className="co-font mb-6 text-lg">
              <a href="https://wa.me/03190028307" rel="noreferrer" target="_blank" className="underline">
                (+92) 319-0028307
              </a>
            </p>

            <div className="flex gap-4 text-white text-xl">
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://github.com/shabehhassan/" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h2 className="main-font font-bold text-2xl md:text-3xl">Estimate your Project?</h2>
            <form className="mt-10" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="mid-font block mb-2">What is Your Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="mid-font block mb-2">Your Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="mid-font block mb-2">How can I help you?:</label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                  required
                ></textarea>
              </div>

              {status.info.msg && (
                <div className={`mb-4 px-4 py-2 rounded ${status.info.error ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"}`}>
                  {status.info.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className={`bg-white text-black font-semibold px-6 py-2 rounded shadow-sm hover:shadow-lg transition ${
                  status.submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {status.submitting ? (
                  <span>Sending... <i className="fa-solid fa-spinner fa-spin ml-2"></i></span>
                ) : (
                  <span>Send <i className="fa-solid fa-arrow-right ml-2"></i></span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}