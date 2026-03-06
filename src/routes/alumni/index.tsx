import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { type MotionProps, motion, AnimatePresence } from "framer-motion";
import { AlumniData } from "@/lib/alumni-details";
import type { AlumniPerson } from "@/lib/alumni-details";

export const Route = createFileRoute("/alumni/")({
  component: RouteComponent,
});

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.0, ease: [0.33, 1, 0.68, 1] },
};

const placeholders = [
  "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsSv3c2JQ1JqWxis3a59BfhvSCQebw8rcLtlRM",
  "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsSlaGZdQ1JqWxis3a59BfhvSCQebw8rcLtlRM",
  "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsBH0rL9h5UV0odswLCzv8MPuXbm6A7EypfNhl",
  "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsS1RFkLQ1JqWxis3a59BfhvSCQebw8rcLtlRM",
];


function usePlaceholder() {
  return useRef(
    placeholders[Math.floor(Math.random() * placeholders.length)]
  ).current;
}

function useMobile() {
  const [mobile, setMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return mobile;
}

function AlumniCard({ person, index }: { person: AlumniPerson; index: number }) {
  const { name, photo, title } = person;
  const placeholder = usePlaceholder();
  const isMobile = useMobile();

  return (
    <motion.div
      initial={{ y: isMobile ? 0 : 40 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.35,
        delay: isMobile ? 0 : index * 0.05,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group relative h-64 w-full sm:w-[calc(50%-0.625rem)] md:h-80 md:w-70 flex-col overflow-hidden rounded-2xl border flex items-center transition-all duration-500 ease-in-out select-none hover:shadow-md"
    >
      {/* Photo */}
      <div className="pointer-events-none h-full w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-102"
          src={photo ?? placeholder}
          alt={name}
        />
      </div>

      {/* Name and Title panel */}
      <div className="absolute bottom-3 flex h-15 w-[92%] items-center justify-center rounded-xl bg-white px-5 shadow-md">
        <span className="text-center">
          <p className="font-sans text-[0.95rem] leading-tight font-bold text-black">
            {name}
          </p>
          {title && (
            <p className="font-geist text-[0.8rem] font-bold text-black/50">
              {title}
            </p>
          )}
        </span>
      </div>
    </motion.div>
  );
}

function RouteComponent() {
  const [selectedYear, setSelectedYear] = useState("2024 - 2025");
  const [isOpen, setIsOpen] = useState(false);

  const currentYear = AlumniData.find((y) => y.year === selectedYear);
  const members = currentYear?.members ?? [];

  function handleYearSelect(year: string) {
    setSelectedYear(year);
    setIsOpen(false);
  }

  return (
    <section className="flex min-h-full flex-col items-center justify-center gap-5 py-15 pt-8">
      <section className="flex flex-col items-center justify-center gap-7 w-full">
        <motion.p
          {...fadeUp}
          className="font-geist mb-2 text-3xl font-bold md:text-4xl"
        >
          Alumni
        </motion.p>
        <motion.p
          {...fadeUp}
          className="font-geist text-base text-black/50 -mt-4"
        >
          Past office-bearers of ACM Student Chapter
        </motion.p>

        {/* Year selector - dropdown on mobile and tabs on desktop*/}
        <motion.div {...fadeUp} className="w-full flex justify-center px-4">
          {/* Mobile custom dropdown */}
          <div className="relative md:hidden w-full max-w-xs">
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              className={`w-full flex items-center justify-between border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-black cursor-pointer transition-all duration-200 hover:border-zinc-300 ${isOpen ? "rounded-t-2xl rounded-b-none border-b-0" : "rounded-full"}`}
            >
              <span>{selectedYear}</span>
              <ChevronDown
                size={16}
                className={`ml-2 text-black/50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0.92 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0.92 }}
                  transition={{ duration: 0.18, ease: [0.33, 1, 0.68, 1] }}
                  style={{ originY: 0 }}
                  className="absolute z-20 w-full rounded-b-2xl border border-zinc-200 bg-white shadow-md overflow-hidden"
                >
                  {AlumniData.map((yearData) => (
                    <button
                      key={yearData.year}
                      type="button"
                      onClick={() => handleYearSelect(yearData.year)}
                      className={`w-full text-left px-5 py-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer
                        ${selectedYear === yearData.year
                          ? "bg-[#212529] text-white"
                          : "text-black hover:bg-zinc-50"
                        }`}
                    >
                      {yearData.year}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop pill tabs */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {AlumniData.map((yearData) => (
              <button
                key={yearData.year}
                type="button"
                onClick={() => setSelectedYear(yearData.year)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ease-in-out cursor-pointer
                  ${
                    selectedYear === yearData.year
                      ? "border-[#212529] bg-[#212529] text-white shadow-sm"
                      : "border-zinc-200 bg-white text-black/60 hover:border-zinc-400 hover:text-black"
                  }`}
              >
                {yearData.year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Card Grid */}
        <div
          key={selectedYear}
          className="flex flex-wrap justify-center gap-5 md:gap-7 px-4 sm:px-8 md:px-0 mt-4 w-full max-w-[912px]"
        >
          {members.map((person, idx) => (
            <AlumniCard
              key={`${person.name}-${person.title}`}
              person={person}
              index={idx}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
