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
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white min-h-screen font-sans">
      <div className="container p-4 mx-auto md:p-8">
        <section className="pt-2 pb-10 text-center md:pt-4 md:pb-14">
          <h1 className="text-3xl font-extrabold tracking-wide md:text-5xl text-zinc-700 dark:text-zinc-300">
            Our Past Events
          </h1>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {events.map(([slug, event]) => (
              <EventCard key={slug} slug={slug} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
