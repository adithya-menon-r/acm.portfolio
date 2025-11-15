import { createFileRoute, notFound } from "@tanstack/react-router";
import { eventDb } from "@/lib/event-data";
import { AnimatedStat } from "@/components/AnimatedStat";
import { motion, type MotionProps } from "framer-motion";

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
});

function EventDetailComponent() {
  const event = Route.useLoaderData();

  return (
    <div className="bg-background text-foreground py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Event Image */}
        <motion.div {...fadeUp} className="mb-8">
          <motion.img
            src={event.mainImage}
            alt={event.name}
            loading="eager"
            decoding="async"
            className="w-full h-[300px] md:h-[550px] object-cover rounded-xl shadow-lg"
            {...fadeUp}
          />
        </motion.div>

        {/* Event Info */}
        <motion.div {...fadeUp} className="text-center mb-5">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight"
            {...fadeUp}
          >
            {event.name}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            {...fadeUp}
          >
            {event.details}
          </motion.p>
        </motion.div>

        {/* Event Report */}
        <motion.div {...fadeUp} className="max-w-4xl mx-auto mb-10">
          <motion.p
            className="text-base md:text-lg leading-relaxed whitespace-pre-line"
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
                  className="bg-muted text-muted-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  {...fadeUp}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>

        <hr className="w-full border-t border-border my-8" />

        {/* Stats */}
        {event.stats && event.stats.length > 0 && (
          <motion.div {...fadeUp} className="w-full mb-4">
            <motion.div
              {...fadeUp}
              className="flex flex-row flex-wrap gap-x-8 gap-y-4 justify-center"
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
          <hr className="w-full border-t border-border my-8" />
        )}

        {event.sponsors && event.sponsors.length > 0 && (
          <motion.div {...fadeUp} className="mb-12">
            <motion.h2
              className="text-foreground text-2xl md:text-3xl font-bold text-center mb-6"
              {...fadeUp}
            >
              {event.sponsors.length > 1 ? "Our Sponsors" : "Our Sponsor"}
            </motion.h2>

            {(() => {
              const sponsors = event.sponsors;
              const numSponsors = sponsors.length;
              const imgClasses =
                "w-full h-30 object-contain rounded-lg transition-transform duration-300 p-4";

              if (numSponsors === 1)
                return (
                  <motion.div {...fadeUp} className="max-w-2xl mx-auto">
                    <motion.img
                      src={sponsors[0]}
                      loading="lazy"
                      decoding="async"
                      className={imgClasses}
                      {...fadeUp}
                    />
                  </motion.div>
                );

              if (numSponsors === 2)
                return (
                  <motion.div
                    {...fadeUp}
                    className="flex flex-col items-center gap-4 max-w-2xl mx-auto"
                  >
                    {sponsors.map((s: string, i: number) => (
                      <motion.img
                        key={i}
                        src={s}
                        loading="lazy"
                        decoding="async"
                        className={imgClasses}
                        {...fadeUp}
                      />
                    ))}
                  </motion.div>
                );

              if (numSponsors === 3)
                return (
                  <motion.div
                    {...fadeUp}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
                  >
                    <motion.img
                      src={sponsors[0]}
                      loading="lazy"
                      decoding="async"
                      className={imgClasses}
                      {...fadeUp}
                    />
                    <motion.img
                      src={sponsors[1]}
                      loading="lazy"
                      decoding="async"
                      className={imgClasses}
                      {...fadeUp}
                    />
                    <div className="sm:col-span-2 flex justify-center">
                      <motion.img
                        src={sponsors[2]}
                        loading="lazy"
                        decoding="async"
                        className="w-full sm:w-1/2 object-contain rounded-lg p-4 border border-border"
                        {...fadeUp}
                      />
                    </div>
                  </motion.div>
                );

              if (numSponsors >= 4)
                return (
                  <motion.div
                    {...fadeUp}
                    className="grid grid-cols-2 gap-4 max-w-4xl mx-auto"
                  >
                    {sponsors.slice(0, 4).map((s: string, i: number) => (
                      <motion.img
                        key={i}
                        src={s}
                        loading="lazy"
                        decoding="async"
                        className={imgClasses}
                        {...fadeUp}
                      />
                    ))}
                  </motion.div>
                );

              return null;
            })()}
          </motion.div>
        )}

        <hr className="w-full border-t border-border my-8" />

        {/* Event Gallery Grid */}
        {event.gallery && event.gallery.length > 0 && (
          <motion.div {...fadeUp}>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-center mb-6"
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
                      className="w-full md:w-1/2 object-contain rounded-lg"
                      {...fadeUp}
                    />
                  </motion.div>
                );

              if (numPhotos === 2)
                return (
                  <motion.div
                    {...fadeUp}
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl mx-auto"
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
                    className="grid gap-2 max-w-6xl mx-auto"
                  >
                    {photos.slice(0, -1).map((_p: string, i: number) => (
                      i % 2 === 0 && (
                        <div key={`row-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                      )
                    ))}
                    <div className="flex justify-center">
                      <motion.img
                        src={photos[numPhotos - 1]}
                        loading="lazy"
                        decoding="async"
                        className="w-full md:w-1/2 h-60 md:h-80 object-cover object-center rounded-lg"
                        {...fadeUp}
                      />
                    </div>
                  </motion.div>
                );

              // For even number of photos - all in pairs
              return (
                <motion.div
                  {...fadeUp}
                  className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl mx-auto"
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
