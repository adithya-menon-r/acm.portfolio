import { createFileRoute } from "@tanstack/react-router";
import TeamCard from "@/components/TeamCard";
import { CoreTeam, Faculty } from "@/lib/team-details";

export const Route = createFileRoute("/team/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center gap-5 py-15 pt-8">
      <section className="flex h-fit w-full flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center gap-7">
          <p className="font-geist mb-4 font-sans text-3xl font-bold md:text-4xl">
            Our Guides & Mentors
          </p>

          <div className="flex flex-wrap justify-center gap-7 px-0 md:px-8 lg:px-16">
            {Faculty.map((faculty) => (
              <div
                key={faculty.name}
                className="flex max-w-[300px] min-w-[220px] flex-[1_0_28%] justify-center"
              >
                <TeamCard
                  key={faculty.name}
                  person={faculty}
                  type="large"
                  category="faculty"
                />
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="flex h-fit w-full flex-col items-center justify-center pt-16">
        <section className="flex flex-col items-center justify-center gap-7">
          <p className="font-geist mb-4 font-sans text-3xl font-bold md:text-4xl">
            Core Team
          </p>

          <div className="flex flex-wrap justify-center gap-7 px-10">
            {CoreTeam.map((coreteam) => (
              <div
                key={coreteam.name}
                className="flex max-w-[300px] min-w-[220px] flex-[1_0_21%] justify-center"
              >
                <TeamCard
                  key={coreteam.name}
                  person={coreteam}
                  type="large"
                  category="student"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
