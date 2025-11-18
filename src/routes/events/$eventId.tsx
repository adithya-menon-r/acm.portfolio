import { createFileRoute, notFound } from "@tanstack/react-router";
import { type MotionProps, motion } from "framer-motion";
import { AnimatedStat } from "@/components/AnimatedStat";
import { NotFound } from "@/components/NotFound";
import { eventDb } from "@/lib/event-data";

// Slide-up fade-in animation
const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: {
    duration: 1.0,
    ease: [0.33, 1, 0.68, 1],
  },
};

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }: { params: { eventId: string } }) => {
    const event = eventDb[params.eventId];
    if (!event) throw notFound();
    return event;
  },
  component: EventDetailComponent,
  notFoundComponent: () => <NotFound />,
});

function EventDetailComponent() {
  const event = Route.useLoaderData();

  return (
    <div className="text-foreground py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Event Image */}
        <motion.div {...fadeUp} className="mb-8">
          <motion.img
            src={event.mainImage}
            alt={event.name}
            loading="eager"
            decoding="async"
            className="h-[300px] w-full rounded-xl object-cover shadow-lg md:h-[550px]"
            {...fadeUp}
          />
        </motion.div>

        {/* Event Info */}
        <motion.div {...fadeUp} className="mb-5 text-center">
          <motion.h1
            className="mb-3 text-3xl font-extrabold tracking-tight md:text-5xl"
            {...fadeUp}
          >
            {event.name}
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl"
            {...fadeUp}
          >
            {event.details}
          </motion.p>
        </motion.div>

        {/* Event Report */}
        <motion.div {...fadeUp} className="mx-auto mb-10 max-w-4xl">
          <motion.p
            className="text-base leading-relaxed whitespace-pre-line md:text-lg"
            {...fadeUp}
          >
            {event.report}
          </motion.p>

          {/* Hashtags */}
          {event.tags?.length > 0 && (
            <motion.div {...fadeUp} className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag: string) => (
                <motion.span
                  key={tag}
                  className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  {...fadeUp}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>

        <hr className="border-border my-8 w-full border-t" />

        {/* Stats */}
        {event.stats && event.stats.length > 0 && (
          <motion.div {...fadeUp} className="mb-4 w-full">
            <motion.div
              {...fadeUp}
              className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4"
            >
              {event.stats.map(
                (
                  stat: { value: number; prefix?: string; suffix?: string },
                  index: number,
                ) => (
                  <motion.div key={index} {...fadeUp}>
                    <AnimatedStat stat={stat} />
                  </motion.div>
                ),
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Sponsors */}
        {event.sponsors && event.sponsors.length > 0 && (
          <hr className="border-border my-8 w-full border-t" />
        )}

        {event.sponsors && event.sponsors.length > 0 && (
          <motion.div {...fadeUp} className="mb-6">
            <motion.h2
              className="text-foreground mb-6 text-center text-2xl font-bold md:text-3xl"
              {...fadeUp}
            >
              {event.sponsors.length > 1 ? "Event Sponsors" : "Event Sponsor"}
            </motion.h2>

            <motion.div
              {...fadeUp}
              className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 md:gap-8"
            >
              {event.sponsors.map((sponsor: string, index: number) => (
                <motion.div
                  key={index}
                  {...fadeUp}
                  className="w-40 sm:w-48 md:w-56 lg:w-64"
                >
                  <motion.img
                    src={sponsor}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-lg object-contain p-4 transition-transform duration-300 hover:scale-105"
                    alt={`Sponsor ${index + 1}`}
                    {...fadeUp}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        <hr className="border-border my-8 w-full border-t" />

        {/* Event Gallery Grid */}
        {event.gallery && event.gallery.length > 0 && (
          <motion.div {...fadeUp}>
            <motion.h3
              className="mb-6 text-center text-2xl font-bold md:text-3xl"
              {...fadeUp}
            >
              Event Gallery
            </motion.h3>

            {(() => {
              const photos = event.gallery;
              const numPhotos = photos.length;
              const imgClasses =
                "w-full h-60 md:h-80 object-cover object-center rounded-lg p-1";

              if (numPhotos === 1)
                return (
                  <motion.div {...fadeUp} className="flex justify-center">
                    <motion.img
                      src={photos[0]}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-lg object-contain md:w-1/2"
                      {...fadeUp}
                    />
                  </motion.div>
                );

              if (numPhotos === 2)
                return (
                  <motion.div
                    {...fadeUp}
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-2 md:grid-cols-2"
                  >
                    {photos.map((p: string, i: number) => (
                      <motion.img
                        key={i}
                        src={p}
                        loading="lazy"
                        decoding="async"
                        className={imgClasses}
                        {...fadeUp}
                      />
                    ))}
                  </motion.div>
                );

              // For odd numbers of photos - last image centered, rest in pairs
              if (numPhotos % 2 !== 0)
                return (
                  <motion.div
                    {...fadeUp}
                    className="mx-auto grid max-w-6xl gap-2"
                  >
                    {photos.slice(0, -1).map(
                      (_p: string, i: number) =>
                        i % 2 === 0 && (
                          <div
                            key={`row-${i}`}
                            className="grid grid-cols-1 gap-2 md:grid-cols-2"
                          >
                            <motion.img
                              src={photos[i]}
                              loading="lazy"
                              decoding="async"
                              className={imgClasses}
                              {...fadeUp}
                            />
                            <motion.img
                              src={photos[i + 1]}
                              loading="lazy"
                              decoding="async"
                              className={imgClasses}
                              {...fadeUp}
                            />
                          </div>
                        ),
                    )}
                    <div className="flex justify-center">
                      <motion.img
                        src={photos[numPhotos - 1]}
                        loading="lazy"
                        decoding="async"
                        className="h-60 w-full rounded-lg object-cover object-center md:h-80 md:w-1/2"
                        {...fadeUp}
                      />
                    </div>
                  </motion.div>
                );

              // For even number of photos - all in pairs
              return (
                <motion.div
                  {...fadeUp}
                  className="mx-auto grid max-w-6xl grid-cols-1 gap-2 md:grid-cols-2"
                >
                  {photos.map((p: string, i: number) => (
                    <motion.img
                      key={i}
                      src={p}
                      loading="lazy"
                      decoding="async"
                      className={imgClasses}
                      {...fadeUp}
                    />
                  ))}
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </div>
    </div>
  );
}
