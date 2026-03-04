import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Calendar } from "lucide-react";
import { type MotionProps, motion } from "framer-motion";
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

// Stable random placeholder per card instance — avoids re-randomising on re-render
function usePlaceholder() {
  return useRef(
    placeholders[Math.floor(Math.random() * placeholders.length)]
  ).current;
}

function AlumniCard({ person, index }: { person: AlumniPerson; index: number }) {
  const { name, photo, title, duration } = person;
  const placeholder = usePlaceholder();

  return (
    <motion.div
      // Slide up animation
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.15,
        delay: index * 0.05,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="group relative h-80 w-70 flex-col overflow-hidden rounded-2xl border flex items-center transition-all duration-500 ease-in-out select-none hover:shadow-md"
    >
      {/* Photo */}
      <div className="pointer-events-none h-full w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-102"
          src={photo ?? placeholder}
          alt={name}
        />
      </div>

      {/* Duration badge */}
      <div className="absolute top-2 left-2 z-10 flex items-center gap-2 bg-[#212529] rounded-4xl px-2 py-1 text-white">
        <Calendar size={15} color="#ffffff" />
        <p className="font-geist text-[0.7rem] font-bold">{duration}</p>
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
  const [selectedYear, setSelectedYear] = useState(AlumniData[0].year);

  const currentYear = AlumniData.find((y) => y.year === selectedYear);
  const members = currentYear?.members ?? [];

  const rows = Array.from({ length: Math.ceil(members.length / 3) }, (_, i) =>
    members.slice(i * 3, i * 3 + 3)
  );

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

        {/* Year Tabs */}
        <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-2 px-4">
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
        </motion.div>

        {/* Card Grid */}
        <div
          key={selectedYear}
          className="flex flex-col items-center gap-7 px-8 md:px-16 mt-4"
        >
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex justify-center gap-7">
              {row.map((person, colIdx) => (
                <AlumniCard
                  key={`${person.name}-${person.title}`}
                  person={person}
                  index={rowIdx * 3 + colIdx}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
