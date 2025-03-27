import { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
} from "react-icons/hi";
import Btn from "./Btn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN/US");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative border-b border-white/90 text-white  shadow-md">
      <div className="layout py-3 flex items-center justify-between gap-10">
        {/* Logo here */}
        <a href="/" className="flex items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
              
                <span className="text-primary text-2xl font-bold">P</span>
            </div>
            <span className="ml-2 text-xl font-bold tracking-wider">
              REATON
            </span>
          </div>
        </a>

        {/* Navigation section */}
        <div className="hidden lg:flex items-center space-x-4">
          {[
            "Home",
            "Portfolio",
            "Legacy",
            "Pivatoni",
            "Rules & Perspectives",
            "Press & Media",
            "Contact Us",
          ].map((item, index) => (
            <a
              key={index}
              href={`#`}
              className="text-sm hover:text-primary "
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:flex gap-2 items-center hidden">
          <div className="relative group">
            <button className="flex items-center text-sm">
              {language}
              <HiOutlineChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-24 bg-zinc-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {["EN/US", "IT"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-700 ${
                    language === lang ? "text-amber-500" : ""
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <Btn label={"JOIN US NOW"} />
        </div>

        
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <HiOutlineX className="h-6 w-6" />
          ) : (
            <HiOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute w-full bg-zinc-800 z-50 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-2 space-y-2">
          {[
            "Home",
            "Portfolio",
            "Legacy",
            "Pivatoni",
            "Rules & Perspectives",
            "Press & Media",
            "Contact Us",
          ].map((item, index) => (
            <a
              key={index}
              href={`#`}
              className="block py-2 text-sm hover:text-amber-500 transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}

          <div className="py-2 flex flex-col space-y-3">
            <div className="relative">
              <button
                className="flex items-center text-sm"
                onClick={() =>
                  setLanguage(language === "EN/US" ? "IT" : "EN/US")
                }
              >
                {language}
                <HiOutlineChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div>
            <Btn label={"JOIN US NOW"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
