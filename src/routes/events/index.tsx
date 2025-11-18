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
    <div className="text-zinc-900">
      <div className="container mx-auto p-4 md:p-8">
        <section className="pb-8 text-center md:pb-10">
          <h1 className="font-geist text-3xl font-bold md:text-2xl md:text-5xl">
            Our Past Events
          </h1>
        </section>

        <section className="mb-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {events.map(([slug, event]) => (
              <EventCard key={slug} slug={slug} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
