"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = true;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link href="/contact-details/about-us" className="hover:text-gray-300">
          About
        </Link>
      </li>
      <li>
        <Link href="#" className="hover:text-gray-300">
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/contact-details/contact-us"
          className="hover:text-gray-300"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link href="/auth/sign-in" className="hover:text-gray-300">
          Sign In
        </Link>
      </li>
      <li>
        <Link href="/auth/sign-up" className="hover:text-gray-300">
          Sign Up
        </Link>
      </li>
      {user ? (
        <li>
          <Link href="/profile" className="hover:text-gray-300">
            Profile
          </Link>
        </li>
      ) : null}
    </>
  );
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">MyLogo</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">{links}</ul>

        {/* Mobile hamburger button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center">{links}</ul>
      )}
    </nav>
  );
}
