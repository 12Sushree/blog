import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap -mx-4">
          {/* Logo Section */}
          <div className="w-full p-4 md:w-1/2 lg:w-5/12">
            <div className="mb-6">
              <Logo width="200px" />
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full p-4 md:w-1/2 lg:w-3/12">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
              Legals
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2023 DevUI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
