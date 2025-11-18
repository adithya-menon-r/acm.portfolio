import { Link } from "@tanstack/react-router";
import { Calendar, Home, Menu, Users, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile drawer when the user scrolls, wheels, touches, resizes, or presses Escape
  useEffect(() => {
    if (!isOpen) return;

    const close = () => setIsOpen(false);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("wheel", close, { passive: true });
    window.addEventListener("touchstart", close, { passive: true });
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("wheel", close);
      window.removeEventListener("touchstart", close);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

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
      <header
        className={`fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between p-3 text-black transition-all duration-300 md:px-6 md:py-2 ${
          isScrolled || isOpen
            ? "border-b border-zinc-200 bg-white"
            : "border-b border-transparent bg-transparent"
        } `}
      >
        <div className="flex h-12 items-center gap-4 md:h-14">
          <Link to="/" className="flex h-full items-center gap-3">
            <img
              src="/acm_logo.png"
              alt="ACM Logo"
              className="my-auto h-10 md:h-12"
            />
            <img
              src="/amrita_logo.svg"
              alt="Amrita Logo"
              className="my-auto h-8 md:h-10"
            />
          </Link>
        </div>
        <nav className="hidden items-center gap-5 text-lg font-medium text-black md:flex">
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
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-black transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        className={`fixed top-[71px] left-0 z-50 w-full rounded-b-2xl bg-white text-black shadow-[0_8px_16px_-4px_rgba(0,0,0,0.18)] transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col p-4 text-black">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-lg py-3 text-black transition-colors hover:bg-gray-100"
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
            className="flex items-center gap-3 rounded-lg py-3 text-black transition-colors hover:bg-gray-100"
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
            className="flex items-center gap-3 rounded-lg py-3 text-black transition-colors hover:bg-gray-100"
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
