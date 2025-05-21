"use client";

import React from "react";

export default function Resume() {
  return (
    <div id="resume" className="pt-10">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center">
          <span className="banner-2 px-2 py-1">Resume</span>
          <p className="main-font text-4xl font-bold">A Summary of My Resume</p>
        </div>

        {/* Education & Experience */}
        <div className="flex flex-col md:flex-row items-start md:items-center pt-8 space-y-8 md:space-y-0 md:space-x-6">
          {/* Education */}
          <div className="md:w-1/2 border-l-4 border-primary pl-6 order-2 md:order-1">
            <h3 className="main-font font-bold text-xl">My Education</h3>
            <h4 className="mid-font pt-3 text-lg">BS Computer Science</h4>
            <h6 className="co-font pt-2 text-base">Hamdard University</h6>
            <p className="co-font pt-2 text-sm">
              Graduated with a Bachelor’s degree in Computer Science, where I gained a strong foundation in programming, algorithms, and software development. My coursework included advanced topics such as data structures, artificial intelligence, and web development, equipping me with the technical skills to tackle real-world challenges. Actively participated in coding competitions and collaborative projects, fostering problem-solving abilities and teamwork.
            </p>
          </div>

          {/* Experience */}
          <div className="md:w-1/2 border-l-4 border-primary pl-6 order-1 md:order-2">
            <h3 className="main-font font-bold text-xl">My Experience</h3>
            <h4 className="mid-font pt-3 text-lg">Frontend Developer</h4>
            <h6 className="co-font pt-2 text-base">Pakipeneur / 2025 - Current</h6>
            <p className="co-font pt-2 text-sm">
              As a Frontend Developer at pakipeneur, I design and implement responsive, user-friendly web applications using modern technologies like React, JavaScript, and CSS. Collaborating with cross-functional teams, I translate UI/UX designs into high-quality code, ensuring seamless performance across devices. My contributions include optimizing load times, improving accessibility, and implementing interactive features that enhance user engagement. Passionate about staying updated with industry trends to deliver cutting-edge solutions.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="main-font text-2xl font-bold pt-10">Skills</div>
        <div className="flex flex-col md:flex-row gap-8 pt-4">
          {/* Left Column */}
          <div className="md:w-1/2">
            {[
              { skill: "HTML", percent: 90 },
              { skill: "CSS", percent: 90 },
              { skill: "Javascript", percent: 60 },
            ].map(({ skill, percent }) => (
              <div key={skill} className="mb-4">
                <p className="co-font text-sm mb-1 flex justify-between">
                  {skill} <span>{percent}%</span>
                </p>
                <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percent}%`,
                      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 100%)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            {[
              { skill: "Bootstrap", percent: 90 },
              { skill: "Tailwind", percent: 80 },
              { skill: "React", percent: 60 },
            ].map(({ skill, percent }) => (
              <div key={skill} className="mb-4">
                <p className="co-font text-sm mb-1 flex justify-between">
                  {skill} <span>{percent}%</span>
                </p>
                <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percent}%`,
                      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 100%)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center pt-10">
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition px-6 py-3">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
