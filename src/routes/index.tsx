import { createFileRoute, Link } from "@tanstack/react-router";
import { type MotionProps, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedStat } from "@/components/AnimatedStat";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { eventDb } from "@/lib/event-data";

export const Route = createFileRoute("/")({
  component: App,
});

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: {
    duration: 1.0,
    ease: [0.33, 1, 0.68, 1],
  },
};

function App() {
  return (
    <>
      <section className="relative -mt-[var(--navbar-height)] w-full bg-white md:min-h-screen">
        {/* Top Fade Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 flex min-h-[80vh] items-center justify-center pt-[var(--navbar-height)] md:min-h-[100vh]">
          <div className="flex w-full flex-col items-center gap-6 px-3 text-center">
            <motion.h1
              className="font-syne text-4xl font-extrabold md:text-7xl"
              {...fadeUp}
            >
              Amrita ACM Student Chapter
            </motion.h1>
            <motion.div
              className="max-w-xl text-base text-zinc-700 md:text-lg dark:text-zinc-200"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
            >
              <p className="md:whitespace-nowrap">
                <code className="font-jetBrains-mono rounded border border-zinc-300 bg-zinc-100 px-2 py-0.5 text-base text-black md:py-1">
                  sudo join
                </code>{" "}
                the best dev crew on campus. Your{" "}
                <span className="font-bold">localhost</span> for everything.
              </p>
            </motion.div>
            <motion.div
              className="mt-2 flex flex-row justify-center gap-3"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
            >
              <a
                href="/join-us"
                className="inline-block rounded-full bg-black px-5 py-2 text-base font-semibold text-white shadow-lg transition-colors hover:bg-zinc-900 md:px-8 md:py-2 md:text-lg"
              >
                Join Us
              </a>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("about");
                  if (el) {
                    const y =
                      el.getBoundingClientRect().top + window.scrollY - 60;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="cursor-pointer rounded-full border border-black bg-transparent px-5 py-2 text-base font-semibold text-black transition-colors hover:border-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 md:px-8 md:py-2 md:text-lg"
              >
                More about us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="w-full bg-white pt-2 pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 md:items-start md:px-8">
          {window?.matchMedia?.("(max-width: 767px)").matches ? (
            <>
              <motion.h2
                className="font-geist mb-6 w-full text-center text-2xl font-extrabold text-zinc-900 md:mb-4 md:text-left md:text-3xl dark:text-white"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={fadeUp.transition}
              >
                Latest Events
              </motion.h2>
              <motion.div
                className="flex w-full flex-col gap-6 md:flex-row md:gap-8"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
              >
                {Object.entries(eventDb)
                  .sort(([, a], [, b]) => {
                    const eventA = a as { sortDate?: string };
                    const eventB = b as { sortDate?: string };
                    return (eventB.sortDate || "").localeCompare(
                      eventA.sortDate || "",
                    );
                  })
                  .slice(0, 3)
                  .map(([slug, event]: any) => (
                    <div key={slug} className="min-w-0 flex-1">
                      <EventCard slug={slug} event={event} />
                    </div>
                  ))}
              </motion.div>
              <motion.div
                className="mt-6 flex w-full justify-center"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...fadeUp.transition, delay: 0.3 }}
              >
                <Link to="/events" className="inline-block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="cursor-pointer gap-2 rounded-lg font-semibold transition-shadow hover:shadow-lg"
                  >
                    See More <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              <h2 className="font-geist mb-6 w-full text-center text-2xl font-extrabold text-zinc-900 md:mb-4 md:text-left md:text-3xl dark:text-white">
                Latest Events
              </h2>
              <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
                {Object.entries(eventDb)
                  .sort(([, a], [, b]) => {
                    const eventA = a as { sortDate?: string };
                    const eventB = b as { sortDate?: string };
                    return (eventB.sortDate || "").localeCompare(
                      eventA.sortDate || "",
                    );
                  })
                  .slice(0, 3)
                  .map(([slug, event]: any) => (
                    <div key={slug} className="min-w-0 flex-1">
                      <EventCard slug={slug} event={event} />
                    </div>
                  ))}
              </div>
              <div className="mt-6 flex w-full justify-center">
                <Link to="/events" className="inline-block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="cursor-pointer gap-2 rounded-lg font-semibold transition-shadow hover:shadow-lg"
                  >
                    See More <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 md:items-start md:px-8">
          <h2 className="font-geist mb-4 w-full text-center text-2xl font-extrabold text-zinc-900 md:text-left md:text-4xl dark:text-white">
            The Chapter Story
          </h2>
          <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-stretch">
            <div className="flex max-w-2xl flex-1 flex-col justify-center text-base text-zinc-700 md:text-lg">
              <p>
                We're the Amrita ACM Chapter at{" "}
                <span className="font-bold">
                  Amrita Vishwa Vidyapeetham, Coimbatore{" "}
                </span>
                - a community built by students who simply love to build things.
                We are huge believers in the open source spirit, where knowledge
                is shared freely and learning tech shouldn't be a barrier for
                anyone. We're all about making hard concepts easy and believe
                the best way to learn is by doing it together.
              </p>
              <p className="mt-4">
                This entire chapter runs on peer-to-peer support. This is that
                one place on campus where you can always go when you're stuck,
                whether it's a bug you've stared at for hours or a new concept
                that just isn't clicking. From "Hello World" to complex new
                frameworks, we're all just here to help each other learn and
                grow.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <img
                src="/events/bootstrap-2025/bootstrap-2025-5.jpg"
                alt="Bootstrap 5 Workshop"
                className="max-h-[300px] w-full max-w-lg rounded-2xl object-cover shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white pt-2 pb-3 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-4 md:gap-6">
            {/* Years Active */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-geist mb-1 text-3xl font-bold md:text-4xl">
                <AnimatedStat
                  stat={{ value: 1 }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base font-medium text-zinc-700 md:text-lg dark:text-zinc-200">
                Year Active
              </span>
            </div>
            {/* Members */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-geist mb-1 text-3xl font-bold md:text-4xl">
                <AnimatedStat
                  stat={{ value: 35, prefix: "", suffix: "+" }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base font-medium text-zinc-700 md:text-lg dark:text-zinc-200">
                Members
              </span>
            </div>
            {/* Participants */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-geist mb-1 text-3xl font-bold md:text-4xl">
                <AnimatedStat
                  stat={{ value: 1000, prefix: "", suffix: "+" }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base font-medium text-zinc-700 md:text-lg dark:text-zinc-200">
                Participants
              </span>
            </div>
            {/* Events */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-geist mb-1 text-3xl font-bold md:text-4xl">
                <AnimatedStat
                  stat={{ value: 10, prefix: "", suffix: "+" }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base font-medium text-zinc-700 md:text-lg dark:text-zinc-200">
                Events
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="w-full py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg md:rounded-3xl md:shadow-2xl">
            <img
              src="/events/winter-of-code-24-25/woc-24-25-1.JPG"
              alt="Join the Community"
              className="mx-auto w-[92vw] max-w-[420px] rounded-md object-cover object-bottom shadow-lg transition-transform duration-300 md:max-h-[600px] md:w-full md:max-w-none md:rounded-3xl md:shadow-2xl"
            />
            <div className="hidden md:block">
              <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-1/4 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_60%,rgba(0,0,0,0)_100%)]" />
              <div className="absolute bottom-0 left-0 z-20 flex w-full items-end justify-between p-4 md:p-6">
                <div className="font-geist text-lg font-semibold text-white drop-shadow-lg">
                  Come for the code, stay for the community.
                </div>
                <a href="#join" className="ml-2">
                  <button
                    type="button"
                    className="font-geist cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-md transition-colors hover:bg-zinc-200 hover:text-black"
                  >
                    Join the Community
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Mobile: text and button below image */}
          <div className="mt-4 block px-2 md:hidden">
            <div className="flex justify-center">
              <a href="#join">
                <button
                  type="button"
                  className="font-geist rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-zinc-900"
                >
                  Join the Community
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
