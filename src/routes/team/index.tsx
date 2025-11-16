import { createFileRoute } from "@tanstack/react-router";
import TeamCard from "@/components/TeamCard";
import { CoreTeam, Faculty } from "@/lib/team-details";

export const Route = createFileRoute("/team/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 pt-20 py-15">
      <section className="w-full h-fit flex flex-col items-center justify-center">
        <section className="flex flex-col justify-center items-center gap-7">
          <p className="text-3xl font-sans font-bold">Our Guides & Mentors</p>

          <div className="grid grid-cols-3 max-[942px]:grid-cols-2 max-[620px]:grid-cols-1 justify-center items-center gap-7">
            {Faculty.map((faculty) => (
              <TeamCard
                key={faculty.name}
                person={faculty}
                type="large"
                category="faculty"
              />
            ))}
          </div>
        </section>
      </section>

      <section className="w-full h-fit pt-10 flex flex-col items-center justify-center">
        <section className="flex flex-col justify-center items-center gap-7">
          <p className="text-3xl font-sans font-bold">Core Team</p>

          <div className="grid grid-cols-4 max-[1246px]:grid-cols-3 max-[932px]:grid-cols-2 max-[620px]:grid-cols-1 justify-center items-center gap-7">
            {CoreTeam.map((coreteam) => (
              <TeamCard
                key={coreteam.name}
                person={coreteam}
                type="large"
                category="student"
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
