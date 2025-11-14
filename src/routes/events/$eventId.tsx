import { createFileRoute, notFound } from "@tanstack/react-router";
import { eventDb, type Event } from "@/lib/event-data";
import { AnimatedStat } from "@/components/AnimatedStat";
// import Header from "@/components/Header"; // Header Section to uncomment when header is ready
// import Footer from "@/components/Footer"; // Footer Section to uncomment when footer is ready

// This creates the dynamic route /events/$eventId
// We add a 'loader' to fetch data before the component renders
// Data is fetched from lib/event-data.tsx
export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const { eventId } = params;
    // Find event by its ID from event-data.tsx
    const event = eventDb[eventId];
    if (!event) {
      throw notFound();
    }
    return event;
  },
  // Compoenent to render when this route is matched (See below)
  component: EventDetailComponent,
});

// Main component
function EventDetailComponent() {
  const event = Route.useLoaderData();
  return (
    <div className="bg-background text-foreground min-h-screen py-6">
      {/* <Header /> */} {/* Header Section to uncomment when header is ready */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*Mian Event Picture*/}
        <div className="mb-8">
          <img
            src={event.mainImage}
            alt={event.name}
            className="w-full h-[300px] md:h-[550px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/*Event Info*/}
        <div className="text-center mb-5">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
            {event.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {event.details}
          </p>
        </div>

        {/* Event Report*/}
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-base md:text-lg text-left leading-relaxed whitespace-pre-line">
            {event.report}
          </p>
          {/* Hashtags Section*/}
          {/*Render hashtags only if list has items in event-data.tsx*/}
          {event.tags && event.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-muted-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
<hr className="w-full border-t border-border my-8" />
        {/* Stats*/}
        {event.stats && event.stats.length > 0 && (
          <div className="w-full mb-4">
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 justify-center">
              {event.stats.map((stat, index) => (
                <AnimatedStat key={index} stat={stat} />
              ))}
            </div>
          </div>
        )}

        {/* Sponsors*/}
        {/* Covers 4 cases: 1 sponsor, 2 sponsors, 3 sponsors and 4 sponsors Only. No other cases */}
        {event.sponsors && event.sponsors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
              Sponsors
            </h2>
            {(() => {
              const numSponsors = event.sponsors.length;
              const sponsors = event.sponsors;
              const imgClasses =
                "w-full h-48 object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105 p-4 border border-border";

              // Case 1: 1 Sponsor
              if (numSponsors === 1) {
                return (
                  <div className="max-w-2xl mx-auto">
                    <img
                      src={sponsors[0]}
                      alt="Sponsor 1"
                      className={imgClasses}
                    />
                  </div>
                );
              }

              // Case 2: 2 Sponsors (One below another, centered)
              if (numSponsors === 2) {
                return (
                  <div className="flex flex-col items-center gap-4 md:gap-6 max-w-2xl mx-auto">
                    <img
                      src={sponsors[0]}
                      alt="Sponsor 1"
                      className={imgClasses}
                    />
                    <img
                      src={sponsors[1]}
                      alt="Sponsor 2"
                      className={imgClasses}
                    />
                  </div>
                );
              }

              // Case 3: 3 Sponsors (2 on top, 1 centered below)
              if (numSponsors === 3) {
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    <img
                      src={sponsors[0]}
                      alt="Sponsor 1"
                      className={imgClasses}
                    />
                    <img
                      src={sponsors[1]}
                      alt="Sponsor 2"
                      className={imgClasses}
                    />
                    <div className="sm:col-span-2 flex justify-center">
                      <div className="w-full sm:w-1/2">
                        <img
                          src={sponsors[2]}
                          alt="Sponsor 3"
                          className={imgClasses}
                        />
                      </div>
                    </div>
                  </div>
                );
              }

              // Case 4: 4 Sponsors (2x2 Grid)
              if (numSponsors >= 4) {
                return (
                  <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {/* Show only the first 4 */}
                    {sponsors.slice(0, 4).map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc}
                        alt={`Sponsor ${index + 1}`}
                        className={imgClasses}
                      />
                    ))}
                  </div>
                );
              }

              return null; // Case 0 is handled by the outer wrapper
            })()}
          </div>
        )}
<hr className="w-full border-t border-border my-8" />
        {/* Event Photos Gride */}
        {event.gallery && event.gallery.length > 0 && (
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Event Photos
            </h3>

            {/* Conditional rendering based on number of photos in event-data.tsx */}
            {/* 4 cases: 1 photo, 2 photos, 3 photos and 4 photos only. No other cases*/}

            {(() => {
              const numPhotos = event.gallery.length;
              const photos = event.gallery;

              const imgClasses =
                "w-full h-40 md:h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-102 p-2 border border-border";

              // Case 1: 1 Photo (Centered)
              if (numPhotos === 1) {
                return (
                  <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                      <img
                        key={0}
                        src={photos[0]}
                        alt={`${event.name} photo 1`}
                        className={imgClasses}
                      />
                    </div>
                  </div>
                );
              }

              // Case 2: 2 Photos (One below another, centered)
              if (numPhotos === 2) {
                return (
                  <div className="flex flex-col items-center gap-4 md:gap-6 max-w-2xl mx-auto">
                    <img
                      key={0}
                      src={photos[0]}
                      alt={`${event.name} photo 1`}
                      className={imgClasses}
                    />
                    <img
                      key={1}
                      src={photos[1]}
                      alt={`${event.name} photo 2`}
                      className={imgClasses}
                    />
                  </div>
                );
              }

              // Case 3: 3 Photos (2 on top, 1 centered below)
              if (numPhotos === 3) {
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    <img
                      key={0}
                      src={photos[0]}
                      alt={`${event.name} photo 1`}
                      className={imgClasses}
                    />
                    <img
                      key={1}
                      src={photos[1]}
                      alt={`${event.name} photo 2`}
                      className={imgClasses}
                    />
                    <div className="sm:col-span-2 flex justify-center">
                      <div className="w-full sm:w-1/2">
                        <img
                          key={2}
                          src={photos[2]}
                          alt={`${event.name} photo 3`}
                          className={imgClasses}
                        />
                      </div>
                    </div>
                  </div>
                );
              }

              // Case 4: 4 Photos (2x2 Grid)
              if (numPhotos >= 4) {
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {photos.slice(0, 4).map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc}
                        alt={`${event.name} photo ${index + 1}`}
                        className={imgClasses}
                      />
                    ))}
                  </div>
                );
              }

              // Case 0: No photos
              return null;
            })()}
          </div>
        )}
      </div>
      {/* <Footer /> */} {/* Footer Section to uncomment when footer is ready */}
    </div>
  );
}