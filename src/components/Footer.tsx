"use client";

import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-300 py-16 px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="w-72 h-72 bg-blue-500/20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
        <div className="w-72 h-72 bg-purple-500/20 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
        <div className="w-60 h-60 bg-pink-500/10 rounded-full blur-3xl absolute bottom-20 left-1/3 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyAgency</h2>
          <p className="text-gray-400">
            Building next-gen websites, apps, and SaaS solutions for companies
            worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/services"
                className="hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="hover:text-white transition duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition transform hover:scale-110"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition transform hover:scale-110"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition transform hover:scale-110"
            >
              <Github />
            </a>
            <a
              href="mailto:info@myagency.com"
              className="hover:text-red-400 transition transform hover:scale-110"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyAgency. All rights reserved.
      </div>
    </footer>
  );
}
