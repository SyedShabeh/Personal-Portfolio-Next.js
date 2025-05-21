"use client";

import React from "react";

export default function About() {
  return (
    <div id="about">
      <div id="section-2" className="pt-12 lg:pt-24">
        <div className="container mx-auto text-center pt-10">
          <span className="banner px-2 py-1">About Me</span>
          <p className="main-font text-4xl font-bold">Know Me More</p>
        </div>
      </div>

      <div className="section-2 container mx-auto py-8 lg:py-20">
        <div className="flex flex-col lg:flex-row w-full items-center">
          {/* Left Text */}
          <div className="order-1 text-center lg:text-left lg:order-1 w-full lg:w-2/3">
            <h1 className="main-font text-3xl">Hi, I&apos;m Syed Shabeh</h1>
            <p className="mid-font text-xl mt-4">
              I&apos;m a designer & developer with a passion for web design. I enjoy developing simple,
              clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional
              results while working with me. Delivering work within time and budget which meets client&apos;s
              requirements is our moto.
            </p>
          </div>

          {/* Experience Circle */}
          <div className="order-2 mt-6 lg:mt-0 lg:order-1 w-full lg:w-1/3 flex justify-center">
            <div className="text-center">
              <span
                className="circle fw-bold rounded-full px-6 py-3 inline-block"
                style={{ fontSize: "80px" }}
              >
                06
              </span>
              <p className="mt-4 text-2xl">
                Months of <span className="font-bold">Experience</span>
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ml-20 md:ml-0">
          <div>
            <p className="mid-font mb-0">Name:</p>
            <p className="co-font font-bold mb-0">Syed Shabeh</p>
          </div>
          <div>
            <p className="mid-font mb-0">Email:</p>
            <p className="co-font font-bold mb-0">xyz@gmail.com</p>
          </div>
          <div>
            <p className="mid-font mb-0">Date of Birth:</p>
            <p className="co-font font-bold mb-0">26 November, 2001</p>
          </div>
          <div>
            <p className="mid-font mb-0">From:</p>
            <p className="co-font font-bold mb-0">Karachi, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
