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

  const placeholders = [
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsSv3c2JQ1JqWxis3a59BfhvSCQebw8rcLtlRM",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsSlaGZdQ1JqWxis3a59BfhvSCQebw8rcLtlRM",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsBH0rL9h5UV0odswLCzv8MPuXbm6A7EypfNhl",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsS1RFkLQ1JqWxis3a59BfhvSCQebw8rcLtlRM",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsgOcQQcL5la2yJxvKHzLqc9PewpZnXOmMC3Qd",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALszwy6KIXVrusaXqw9CLojFvigZPnOD0Gdfcb3",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsY8F4I9i5IEU0aKlyfzZJvgkhYHmijBcMWXn9",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsoX2yYCufqFKXzUiN1WvM7txepmbDuY3lHh4B",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALswghf2COcHDMqOXReZYVQo80htTjbNupnmUKx",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsOcCM19ZpwzxuB2UA3jG4LetSPVIWMcgYHXv6",
    "https://ubveu2ibt1.ufs.sh/f/X8HcF4epeALsCQMP2F1QcGDl9Ej1WrFd0nLmYAP7powk2Kt6",
  ];

  function formatSinceDate(date: string | Date): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return `Since ${d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })}`;
  }

  return (
    <a
      href={social}
      target="_blank"
      className={`${type === "large" ? "h-80 w-70 flex-col hover:shadow-md" : "h-20 w-fit max-sm:w-85 py-2 px-5 items-center justify-center gap-3 border-black hover:shadow-sm hover:scale-103"} group relative flex items-center overflow-hidden rounded-2xl border transition-all duration-500 ease-in-out select-none`}
    >
      {type === "large" && (
        <div className={`h-full w-full pointer-events-none overflow-hidden`}>
          <img
            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-102"
            src={
              photo ??
              placeholders[Math.floor(Math.random() * placeholders.length)]
            }
            alt={name}
          />
        </div>
      )}

      {type === "small" && (
        <div className="bg-red-200 w-12 h-12 rounded-full bg-[url('/avatar.jpeg')] bg-cover">
          <img
            className="w-12 h-12 rounded-full"
            src={
              photo ??
              placeholders[Math.floor(Math.random() * placeholders.length)]
            }
            alt="avatar"
          />
        </div>
      )}

      {type === "large" && (
        <div className="pointer-events-none absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-500 ease-in-out group-hover:top-3 group-hover:right-3 group-hover:opacity-100">
          <ExternalLink size={18} color="#000000" />
        </div>
      )}

      {type === "small" && (
        <span>
          <p className="font-geist font-bold text-lg text-black text-nowrap">
            {name}
          </p>
          {date && (
            <p className="font-geist text-black/70 text-sm">
              {formatSinceDate(date)}
            </p>
          )}
        </span>
      )}

      {date && type === "large" && (
        <div
          className={`absolute top-2 left-2 z-10 flex items-center gap-2 ${category === "faculty" ? "bg-[#b50246]" : "bg-[#212529]"} rounded-4xl px-2 py-1 text-white`}
        >
          <Calendar size={15} color="#ffffff" />
          <p className="font-geist text-[0.7rem] font-bold">{date as string}</p>
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
              <p className="font-geist text-[0.8rem] font-bold text-black/50">
                {title}
              </p>
            )}
          </span>
        </div>
      )}
    </a>
  );
}
