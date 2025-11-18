import { Calendar, ExternalLink } from "lucide-react";
import type { Person } from "@/lib/team-details";

export default function TeamCard(props: {
  person: Person;
  type: "large" | "small";
  category: "faculty" | "student";
}) {
  const { name, title, photo, social, date } = props.person;
  const type = props.type;
  const category = props.category;

  const placeholder =
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALswKfIhfOcHDMqOXReZYVQo80htTjbNupnmUKx";

  return (
    <a
      href={social}
      target="_blank"
      className={`${type === "large" ? "h-80 w-70 flex-col hover:shadow-md" : "h-20 w-65 items-center justify-center gap-3 border-black hover:shadow-sm"} group relative flex items-center overflow-hidden rounded-2xl border transition-all duration-500 ease-in-out select-none`}
    >
      <div
        className={`${type === "large" ? "h-full w-full" : "h-15 w-15 rounded-full border border-blue-500"} pointer-events-none overflow-hidden`}
      >
        <img
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-102"
          src={photo ?? placeholder}
          alt={name}
        />
      </div>

      <div className="pointer-events-none absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:top-3 group-hover:right-3 group-hover:opacity-100">
        <ExternalLink size={18} color="#000000" />
      </div>

      {type === "small" && (
        <p className="font-sans font-normal text-black">{name}</p>
      )}

      {date && (
        <div
          className={`absolute top-2 left-2 z-10 flex items-center gap-2 ${category === "faculty" ? "bg-[#b50246]" : "bg-[#212529]"} rounded-4xl px-2 py-1 text-white`}
        >
          <Calendar size={15} color="#ffffff" />
          <p className="font-sans text-[0.7rem] font-bold">{date}</p>
        </div>
      )}

      {type === "large" && (
        <div
          className={`absolute bottom-3 flex h-15 w-[92%] items-center justify-center rounded-xl bg-white px-5 shadow-md`}
        >
          <span className="text-center">
            <p className="font-sans text-[0.95rem] leading-tight font-bold text-black">
              {name}
            </p>
            {title && (
              <p className="font-sans text-[0.8rem] font-bold text-black/50">
                {title}
              </p>
            )}
          </span>
        </div>
      )}
    </a>
  );
}
