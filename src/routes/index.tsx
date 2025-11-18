import { createFileRoute } from "@tanstack/react-router";
import { EventCard } from "@/components/EventCard";
import { eventDb } from "@/lib/event-data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimatedStat } from "@/components/AnimatedStat";
import { motion, type MotionProps } from "framer-motion";

export const Route = createFileRoute("/")({
  component: App,
});

const NAVBAR_HEIGHT = "75px";

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
      <section
        id="hero"
        className="md:min-h-screen w-full bg-white relative"
        style={{ marginTop: `-${NAVBAR_HEIGHT}` }}
      >
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
        <div
          className="relative z-10 flex min-h-[80vh] md:min-h-[100vh] items-center justify-center"
          style={{ paddingTop: NAVBAR_HEIGHT }}
        >
          <div className="flex flex-col items-center text-center gap-6 w-full px-3">
            <motion.h1
              className="text-4xl md:text-7xl font-extrabold"
              style={{ fontFamily: "'Syne', sans-serif" }}
              {...fadeUp}
            >
              Amrita ACM Student Chapter
            </motion.h1>
            <motion.div
              className="max-w-xl text-base md:text-lg text-zinc-700 dark:text-zinc-200"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
            >
              <p className="md:whitespace-nowrap">
                <code
                  className="bg-zinc-100 text-black px-2 py-0.5 md:py-1 rounded text-base border border-zinc-300"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  sudo join
                </code>{" "}
                the best dev crew on campus. Your{" "}
                <span className="font-bold">localhost</span> for everything.
              </p>
            </motion.div>
            <motion.div
              className="mt-2 flex flex-row gap-3 justify-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
            >
              <a href="#">
                <button className="rounded-full bg-black text-white px-5 py-2 text-base md:px-8 md:py-2 md:text-lg font-semibold shadow-lg hover:bg-zinc-900 transition-colors cursor-pointer">
                  Join Us
                </button>
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("about");
                  if (el) {
                    const y =
                      el.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                <button className="rounded-full border border-black bg-transparent text-black px-5 py-2 text-base md:px-8 md:py-2 md:text-lg font-semibold transition-colors hover:bg-zinc-100 hover:border-zinc-800 hover:text-zinc-900 cursor-pointer">
                  More about us
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section id="latest-events" className="w-full bg-white pt-2 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start px-4 md:px-8">
          {typeof window !== "undefined" &&
          window.matchMedia("(max-width: 767px)").matches ? (
            <>
              <motion.h2
                className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-4 text-zinc-900 dark:text-white text-center md:text-left w-full"
                style={{ fontFamily: "'Geist Sans', sans-serif" }}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={fadeUp.transition}
              >
                Latest Events
              </motion.h2>
              <motion.div
                className="flex flex-col md:flex-row gap-6 md:gap-8 w-full"
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
                    <div key={slug} className="flex-1 min-w-0">
                      <EventCard slug={slug} event={event} />
                    </div>
                  ))}
              </motion.div>
              <motion.div
                className="w-full flex justify-center mt-6"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...fadeUp.transition, delay: 0.3 }}
              >
                <Link to="/events" className="inline-block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold gap-2 rounded-lg cursor-pointer transition-shadow hover:shadow-lg"
                  >
                    See More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              <h2
                className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-4 text-zinc-900 dark:text-white text-center md:text-left w-full"
                style={{ fontFamily: "'Geist Sans', sans-serif" }}
              >
                Latest Events
              </h2>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
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
                    <div key={slug} className="flex-1 min-w-0">
                      <EventCard slug={slug} event={event} />
                    </div>
                  ))}
              </div>
              <div className="w-full flex justify-center mt-6">
                <Link to="/events" className="inline-block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold gap-2 rounded-lg cursor-pointer transition-shadow hover:shadow-lg"
                  >
                    See More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start px-4 md:px-8">
          <h2
            className="text-2xl md:text-4xl font-extrabold mb-4 text-zinc-900 dark:text-white text-center md:text-left w-full"
            style={{ fontFamily: "'Geist Sans', sans-serif" }}
          >
            The Chapter Story
          </h2>
          <div className="flex flex-col md:flex-row gap-8 w-full items-center md:items-stretch">
            <div className="flex-1 flex flex-col justify-center text-zinc-700 text-base md:text-lg max-w-2xl">
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
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/events/bootstrap-2025/bootstrap-2025-5.jpg"
                alt="Bootstrap 5 Workshop"
                className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-lg w-full object-cover"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="w-full bg-white pt-2 pb-3 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center">
            {/* Years Active */}
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ fontFamily: "'Geist Sans', sans-serif" }}
              >
                <AnimatedStat
                  stat={{ value: 1 }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base md:text-lg text-zinc-700 dark:text-zinc-200 font-medium">
                Year Active
              </span>
            </div>
            {/* Members */}
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ fontFamily: "'Geist Sans', sans-serif" }}
              >
                <AnimatedStat
                  stat={{ value: 35, prefix: "", suffix: "+" }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base md:text-lg text-zinc-700 dark:text-zinc-200 font-medium">
                Members
              </span>
            </div>
            {/* Participants */}
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ fontFamily: "'Geist Sans', sans-serif" }}
              >
                <AnimatedStat
                  stat={{ value: 1000, prefix: "", suffix: "+" }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base md:text-lg text-zinc-700 dark:text-zinc-200 font-medium">
                Participants
              </span>
            </div>
            {/* Events */}
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ fontFamily: "'Geist Sans', sans-serif" }}
              >
                <AnimatedStat
                  stat={{ value: 10, prefix: "", suffix: "+" }}
                  plainDigits
                  digitClass="text-3xl md:text-4xl"
                  tightSuffix
                />
              </span>
              <span className="text-base md:text-lg text-zinc-700 dark:text-zinc-200 font-medium">
                Events
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="w-full py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative w-full overflow-hidden rounded-lg md:rounded-3xl shadow-lg md:shadow-2xl">
            <img
              src="/events/winter-of-code-24-25/woc-24-25-1.JPG"
              alt="Join the Community"
              className="w-[92vw] max-w-[420px] mx-auto md:w-full md:max-w-none md:max-h-[600px] object-cover object-bottom rounded-md shadow-lg transition-transform duration-300 md:rounded-3xl md:shadow-2xl"
            />
            {/* Desktop overlay with black fade */}
            <div className="hidden md:block">
              {/* Black fade overlay */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 w-full h-1/4 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.0) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-4 md:p-6 z-20">
                <div
                  className="text-white text-lg font-semibold drop-shadow-lg"
                  style={{ fontFamily: "'Geist Sans', sans-serif" }}
                >
                  Come for the code, stay for the community.
                </div>
                <a href="#join" className="ml-2">
                  <button
                    className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold shadow-md transition-colors hover:bg-zinc-200 hover:text-black cursor-pointer"
                    style={{ fontFamily: "'Geist Sans', sans-serif" }}
                  >
                    Join the Community
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Mobile: text and button below image */}
          <div className="block md:hidden mt-4 px-2">
            <div className="flex justify-center">
              <a href="#join">
                <button
                  className="rounded-full bg-black text-white px-5 py-2 text-sm font-semibold shadow-md transition-colors hover:bg-zinc-900"
                  style={{ fontFamily: "'Geist Sans', sans-serif" }}
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
