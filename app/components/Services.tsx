"use client";

import React from "react";

export default function Services() {
  return (
    <div id="services" className="pt-10">
      <div className="section-3 bg-light pt-20">
        <div className="container mx-auto text-center pt-10">
          <span className="banner-3 bg-light text-primary px-2 py-1 font-bold">What I Do?</span>
          <p className="main-font text-4xl font-bold">How I can help your next project</p>
        </div>

        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full px-4">
              {/* Service 1 */}
              <div className="mx-auto max-w-sm">
                <p className="text-muted pt-6">
                  <i className="fa-solid fa-palette text-5xl text-light"></i>
                </p>
                <p className="mid-font text-light text-2xl font-bold pt-3">Graphic Design</p>
                <p className="co-font text-light pt-3">
                  Transforming ideas into stunning visuals with custom logos, branding materials,
                  and marketing collateral that captures your unique identity.
                </p>
              </div>

              {/* Service 2 */}
              <div className="mx-auto max-w-sm">
                <p className="text-muted pt-6">
                  <i className="fa-solid fa-desktop text-5xl text-light"></i>
                </p>
                <p className="mid-font text-light text-2xl font-bold pt-3">Web Design</p>
                <p className="co-font text-light pt-3">
                  Creating responsive, user-friendly websites with intuitive interfaces
                  that engage visitors and drive conversions.
                </p>
              </div>

              {/* Service 3 */}
              <div className="mx-auto max-w-sm">
                <p className="text-muted pt-6">
                  <i className="fa-solid fa-pen-ruler text-5xl text-light"></i>
                </p>
                <p className="mid-font text-light text-2xl font-bold pt-3">Web Development</p>
                <p className="co-font text-light pt-3">
                  Building react app, scalable web applications with clean code and modern frameworks
                  for optimal performance.
                </p>
              </div>

              {/* Service 4 */}
              <div className="mx-auto max-w-sm">
                <p className="text-muted pt-6">
                  <i className="fa-solid fa-paintbrush text-5xl text-light"></i>
                </p>
                <p className="mid-font text-light text-2xl font-bold pt-3">Brand Identity</p>
                <p className="co-font text-light pt-3">
                  Crafting cohesive brand experiences through strategic visual storytelling
                  and consistent design language.
                </p>
              </div>

              {/* Service 5 */}
              <div className="mx-auto max-w-sm">
                <p className="text-muted pt-6">
                  <i className="fas fa-chart-area text-5xl text-light"></i>
                </p>
                <p className="mid-font text-light text-2xl font-bold pt-3">Business Analysis</p>
                <p className="co-font text-light pt-3">
                  Identifying growth opportunities through data-driven insights and
                  actionable business intelligence.
                </p>
              </div>

              {/* Service 6 */}
              <div className="mx-auto max-w-sm">
                <p className="text-muted pt-6">
                  <i className="fas fa-bullhorn text-5xl text-light"></i>
                </p>
                <p className="mid-font text-light text-2xl font-bold pt-3">Digital Marketing</p>
                <p className="co-font text-light pt-3">
                  Amplifying your online presence with targeted campaigns, SEO optimization,
                  and social media strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
