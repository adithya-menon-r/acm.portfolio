import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Home, Menu, X, Users, Calendar } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinkClasses =
    "transition-all duration-200 ease-in-out hover:scale-103";

  const inactiveLinkProps = {
    className: `text-black opacity-60 hover:opacity-100 hover:text-black ${baseLinkClasses}`,
  };

  const activeLinkProps = {
    className: `text-black font-bold opacity-100 ${baseLinkClasses}`,
  };

  return (
    <>
      <header className="sticky top-0 z-50 p-4 flex items-center justify-between bg-white text-black shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/acm_logo.png" alt="ACM Logo" className="h-10" />
            <img src="/amrita_logo.svg" alt="Amrita Logo" className="h-8" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-md font-medium text-black">
          <Link
            to="/"
            activeProps={activeLinkProps}
            inactiveProps={inactiveLinkProps}
          >
            Home
          </Link>
          <Link
            to="/events"
            activeProps={activeLinkProps}
            inactiveProps={inactiveLinkProps}
          >
            Events
          </Link>
          <Link
            to="/team"
            activeProps={activeLinkProps}
            inactiveProps={inactiveLinkProps}
          >
            Team
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden text-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        className={`md:hidden fixed top-[71px] left-0 w-full bg-white text-black transition-all duration-300 ease-in-out z-50 rounded-b-md ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col p-4 text-black">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
            activeProps={{
              className:
                "flex items-center gap-3 py-3 rounded-lg text-black font-bold",
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>
          <Link
            to="/events"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
            activeProps={{
              className:
                "flex items-center gap-3 py-3 rounded-lg text-black font-bold",
            }}
          >
            <Calendar size={20} />
            <span className="font-medium">Events</span>
          </Link>
          <Link
            to="/team"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
            activeProps={{
              className:
                "flex items-center gap-3 py-3 rounded-lg text-black font-bold",
            }}
          >
            <Users size={20} />
            <span className="font-medium">Team</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
