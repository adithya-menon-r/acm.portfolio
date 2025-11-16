import { Card } from '@/components/ui/card'
import { CalendarDays, Tag, ArrowUpRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import { type Event } from '@/lib/event-data'

export function EventCard({ slug, event }: { slug: string; event: Event }) {

  return (
    <Link
      to="/events/$eventId"
      params={{ eventId: slug }}
      className="group"
    >
      <Card className="overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:scale-[1.01] hover:shadow-lg border border-zinc-200 dark:border-zinc-800 rounded-lg md:rounded-xl bg-white dark:bg-zinc-800 p-0">
        <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-zinc-900 dark:text-white" />
        </div>

        <div className="relative overflow-hidden aspect-[16/9] leading-[0]">
          <img
            src={event.mainImage}
            alt={event.name}
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 block"
          />
        </div>

        <div className="px-3 pb-3 pt-0 -mt-2.5 bg-white dark:bg-zinc-800">
          <div className="flex items-center gap-2 text-xs mb-2">
            <span className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-700 px-2 py-0.5 rounded-full text-zinc-700 dark:text-zinc-300">
              <Tag className="w-3 h-3" />
              <span className="font-medium">{event.category}</span>
            </span>
            <span className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-700 px-2 py-0.5 rounded-full text-zinc-700 dark:text-zinc-300">
              <CalendarDays className="w-3 h-3" />
              <span className="font-medium">{event.displayDate}</span>
            </span>
          </div>

          <h3 className="text:lg md:text-xl font-bold leading-tight text-zinc-900 dark:text-white md:line-clamp-1">
            {event.name}
          </h3>
        </div>
      </Card>
    </Link>
  )
}