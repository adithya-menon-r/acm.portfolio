import { createFileRoute } from "@tanstack/react-router";
import { EventCard } from "@/components/EventCard";
import { eventDb } from "@/lib/event-data";

export const Route = createFileRoute("/events/")({
  component: RouteComponent,
});

function RouteComponent() {
  const events = Object.entries(eventDb).sort(([, eventA], [, eventB]) =>
    eventB.sortDate.localeCompare(eventA.sortDate),
  );
  return (
    <div className="text-zinc-900 min-h-screen">
      <div className="container p-4 mx-auto md:p-8">
        <section className="pb-8 text-center md:pb-10">
          <h1
            className="text-3xl md:text-2xl font-bold md:text-5xl"
            style={{
              fontFamily:
                'Noto Sans, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif',
            }}
          >
            Our Past Events
          </h1>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {events.map(([slug, event]) => (
              <EventCard key={slug} slug={slug} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
