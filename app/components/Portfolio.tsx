"use client";

import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio pb-20"  id="portfolio">
      <div className="text-white max-w-7xl mx-auto py-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="banner px-2 py-1">Portfolio</span>
          <p className="main-font mode text-3xl md:text-4xl font-bold mt-2">
            Some of my most recent projects
          </p>
        </div>

        {/* Card Group */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Portfolio Card 1 */}
          <div className="bg-transparent border border-blue-600 text-white rounded overflow-hidden">
            <img
              src="/chloropath.png"
              className="w-full border-b border-blue-600"
              alt="Login Project"
            />
            <div className="card-body mode p-4">
              <h5 className="mid-font text-xl font-semibold mb-2">D3 CHLOROPLETH</h5>
              <p className="co-font text-sm">
                An interactive D3.js chloropleth map showcasing the percentage of adults (age 25+) with a bachelor’s degree or higher across U.S. regions (2010-2014). The visualization leverages color gradients to highlight geographic disparities in higher education attainment. Built with scalable vector graphics (SVG) and JSON data integration.
              </p>
            </div>
          </div>

          {/* Portfolio Card 2 */}
          <div className="bg-transparent border border-blue-600 text-white rounded overflow-hidden">
            <img
              src="/bootcamp.PNG"
              className="w-full border-b border-blue-600"
              alt="Bootcamp Project"
            />
            <div className="card-body mode p-4">
              <h5 className="mid-font text-xl font-semibold mb-2">CAREER TRAIL</h5>
              <p className="co-font text-sm">
                A dynamic career development platform featuring online courses, mock interviews, and resume parsing for unprofessional resumes—all under one hub (Success Center) to empower job seekers with end-to-end guidance. Designed to bridge skill gaps and streamline the path to professional success.
              </p>
            </div>
          </div>

          {/* Portfolio Card 3 */}
          <div className="bg-transparent border border-blue-600 text-white rounded overflow-hidden">
            <img
              src="/quotemachine.png"
              className="w-full border-b border-blue-600"
              alt="Registration Project"
            />
            <div className="card-body mode p-4">
              <h5 className="mid-font text-xl font-semibold mb-2">RANDOM QUOTE MACHINE</h5>
              <p className="co-font text-sm">
                A dynamic web app that generates inspirational quotes at the click of a button, built with React.js and integrated with a public API for fetching diverse quotes. Features include tweetable quotes, animated transitions, and a minimalist UI designed to deliver daily motivation with simplicity and style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
