import { createFileRoute } from "@tanstack/react-router";
import TeamCard from "@/components/TeamCard";
import { CoreTeam, Faculty } from "@/lib/team-details";

export const Route = createFileRoute("/team/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 pt-8 py-15 min-h-full">
      <section className="w-full h-fit flex flex-col items-center justify-center">
        <section className="flex flex-col justify-center items-center gap-7">
          <p
            className="text-3xl md:text-4xl font-sans font-bold mb-4"
            style={{ fontFamily: "'Geist Sans', sans-serif" }}
          >
            Our Guides & Mentors
          </p>

          <div
            className="grid grid-cols-3 max-[942px]:grid-cols-2 max-[620px]:grid-cols-1 justify-center items-center gap-7 px-0 md:px-8 lg:px-16"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {Faculty.map((faculty) => (
              <div
                style={{
                  flex: "1 0 28%",
                  maxWidth: "300px",
                  minWidth: "220px",
                  display: "flex",
                  justifyContent: "center",
                }}
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

      <section className="w-full h-fit pt-16 flex flex-col items-center justify-center">
        <section className="flex flex-col justify-center items-center gap-7">
          <p
            className="text-3xl md:text-4xl font-sans font-bold mb-4"
            style={{ fontFamily: "'Geist Sans', sans-serif" }}
          >
            Core Team
          </p>

          <div
            className="px-10 grid grid-cols-4 max-[1246px]:grid-cols-3 max-[932px]:grid-cols-2 max-[620px]:grid-cols-1 justify-center items-center gap-7"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {CoreTeam.map((coreteam) => (
              <div
                style={{
                  flex: "1 0 21%",
                  maxWidth: "300px",
                  minWidth: "220px",
                  display: "flex",
                  justifyContent: "center",
                }}
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
