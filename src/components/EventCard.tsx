import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";

import type { Event } from "@/lib/event-data";

export function EventCard({ slug, event }: { slug: string; event: Event }) {
  return (
    <Link to="/events/$eventId" params={{ eventId: slug }} className="group">
      <Card className="cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white p-0 transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-lg md:rounded-xl dark:border-zinc-800 dark:bg-zinc-800">
        <div className="absolute top-4 right-4 z-20 flex h-10 w-10 translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-zinc-800/90">
          <ArrowUpRight className="h-5 w-5 text-zinc-900 dark:text-white" />
        </div>

        <div className="relative aspect-[16/9] overflow-hidden leading-[0]">
          <img
            src={event.mainImage}
            alt={event.name}
            className="block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="-mt-2.5 bg-white px-3 pt-0 pb-3 dark:bg-zinc-800">
          <div className="mb-2 flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
              <Tag className="h-3 w-3" />
              <span className="font-medium">{event.category}</span>
            </span>
            <span className="flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
              <CalendarDays className="h-3 w-3" />
              <span className="font-medium">{event.displayDate}</span>
            </span>
          </div>

          <h3 className="text:lg leading-tight font-bold text-zinc-900 md:line-clamp-1 md:text-xl dark:text-white">
            {event.name}
          </h3>
        </div>
      </Card>
    </Link>
  );
}
