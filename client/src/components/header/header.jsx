"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Images/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center text-white text-xl">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <span className="ml-3 font-bold text-2xl lg:text-4xl">
            Laalabs
          </span>
        </Link>

        <nav className="hidden sm:flex space-x-8">
          {["services", "careers", "about", "contact"].map((item, index) => (
            <Link
              key={index}
              href={`/${item}`}
              className="text-white relative group hover:text-gray-300"
              onClick={handleLinkClick}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          className="sm:hidden text-white focus:outline-none p-2 rounded-md hover:bg-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-screen bg-gradient-to-r from-blue-900 to-indigo-900 w-2/3 sm:hidden shadow-xl ${
          mobileMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="space-y-6 py-12 px-6 text-white">
          {["services", "careers", "about", "contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item}`}
                className="block text-lg hover:text-gray-300 relative group"
                onClick={handleLinkClick}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
