import { Calendar } from "lucide-react";
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
      className={`${type === "large" ? "w-70 h-80 flex-col hover:shadow-2xl" : "w-65 h-20 justify-center items-center border-black gap-3 hover:shadow-xl"} border flex select-none items-center rounded-2xl overflow-hidden relative transition-all ease-in-out duration-500`}
    >
      <div
        className={`${type === "large" ? "w-full h-full" : "w-15 h-15 border rounded-full border-blue-500"} overflow-hidden pointer-events-none`}
      >
        <img
          className="w-full h-full object-cover"
          src={photo ?? placeholder}
          alt={name}
        />
      </div>

      {type === "small" && (
        <p className="font-sans text-black font-normal">{name}</p>
      )}

      {date && (
        <div
          className={`flex gap-2 items-center absolute top-2 left-2 z-10 ${category === "faculty" ? "bg-pink-800" : "bg-blue-800"} rounded-4xl text-white px-2 py-1`}
        >
          <Calendar size={15} color="#ffffff" />
          <p className="text-[0.7rem] font-bold font-sans">{date}</p>
        </div>
      )}

      {type === "large" && (
        <div
          className={`flex justify-center px-5 items-center w-[92%] h-15 bg-white shadow-2xl absolute bottom-3 rounded-xl`}
        >
          <span className="text-center">
            <p className="text-[0.95rem] leading-tight font-sans font-bold text-black">
              {name}
            </p>
            {title && (
              <p className="text-[0.8rem] font-sans text-black/50 font-bold">
                {title}
              </p>
            )}
          </span>
        </div>
      )}
    </a>
  );
}
