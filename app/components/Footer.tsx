"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mid-font text-white py-6 lg:py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <div>
            <p className="mode mb-0">
              <span>© 2025</span>
              <span className="text-primary font-bold"> </span>
              All Rights Reserved.
            </p>
          </div>

          <div>
            <p className="mode mb-0">
              Designed by{" "}
              <a
                href="#home"
                className="text-primary font-bold no-underline"
              >
                SYED SHABEH
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
