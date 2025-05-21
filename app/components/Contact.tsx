"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div>
            <h1 className="main-font font-bold text-3xl md:text-4xl">Let&apos;s get in touch</h1>
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

            {/* Social Icons */}
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
              <a
                href="https://github.com/shabehhassan/Personal-Portfolio/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div>
            <h2 className="main-font font-bold text-2xl md:text-3xl">Estimate your Project?</h2>
            <form className="mt-10">
              <div className="mb-6">
                <label className="mid-font block mb-2">What is Your Name:</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                />
              </div>

              <div className="mb-6">
                <label className="mid-font block mb-2">Your Email Address:</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                />
              </div>

              <div className="mb-6">
                <label className="mid-font block mb-2">How can I help you?:</label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white text-black font-semibold px-6 py-2 rounded shadow-sm hover:shadow-lg transition"
              >
                Send <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
