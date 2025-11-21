import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Cpu,
  ExternalLink,
  GraduationCap,
  Library,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/join-us/")({
  component: JoinUsComponent,
});

function BenefitItem({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-5 rounded-2xl p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white">
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <h3 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function TimelineStep({
  number,
  title,
  children,
  isLast = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-4 md:gap-8">
      <div className="flex shrink-0 flex-col items-center">
        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-xl font-bold text-white shadow-md ring-4 ring-white dark:bg-white dark:text-zinc-900 dark:ring-zinc-900">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-12 bottom-0 left-6 -ml-[1px] h-full w-0.5 bg-zinc-200 dark:bg-zinc-800" />
        )}
      </div>

      <div className={`flex-1 ${!isLast ? `pb-16` : `pb-0`}`}>
        <div className="pt-1">
          <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function JoinUsComponent() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:selection:bg-zinc-700">
      <main className="container mx-auto max-w-6xl p-4">
        <section className="border-b border-zinc-100 pt-5 pb-8 dark:border-zinc-800">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">
              Why Join Us?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Unlock a world of opportunities, from technical skill building to
              networking
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <BenefitItem
              icon={Library}
              title="ACM Digital Library"
              description="Access the world's largest educational and scientific computing library. Download research papers, journals, and technical resources for free."
            />

            <BenefitItem
              icon={GraduationCap}
              title="Summer & Winter Schools"
              description="Get exclusive discounts on ACM India Summer & Winter Schools. Attend 2-week immersive learning programs at top institutes like IITs and IIITs."
            />

            <BenefitItem
              icon={BookOpen}
              title="Student Magazine (XRDS)"
              description="Get a subscription to XRDS: Crossroads, the ACM magazine written specifically for students, covering industry trends and career advice."
            />

            <BenefitItem
              icon={Users}
              title="Community"
              description="Network with like-minded individuals, seniors, and industry experts. Build connections that last a lifetime."
            />

            <BenefitItem
              icon={Cpu}
              title="Projects & Skill Building"
              description="Work on cutting-edge open-source projects while gaining valuable technical and management experience."
            />

            <BenefitItem
              icon={Calendar}
              title="Event Organization"
              description="Take the lead. Organize workshops, hackathons, and tech talks. Build leadership on your resume."
            />
          </div>
        </section>

        <section className="pt-10 pb-10 md:pb-14">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">
                How to Apply
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Follow this simple roadmap to become a member
              </p>
            </div>

            <TimelineStep number="1" title="Get Your ACM India Membership">
              <p>
                To become a member of the local chapter, you first need an{" "}
                <strong>ACM India Student Membership</strong>.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400" />
                  <span>
                    Visit{" "}
                    <a
                      href="https://india.acm.org/membership"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      india.acm.org/membership{" "}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400" />
                  <span>
                    Select <strong>"Student Membership"</strong> and complete
                    the payment.
                  </span>
                </li>
              </ul>
              <div className="mt-2 inline-block rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300">
                <strong>Note:</strong> You will receive a 7-digit Membership
                ID. Save it!
              </div>
            </TimelineStep>

            <TimelineStep number="2" title="Join the Amrita Student Chapter">
              <p>
                Use your new Membership ID to register officially with our
                college chapter.
              </p>
              <div className="mt-2 flex items-start gap-2">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400" />
                <p>
                  Fill out the{" "}
                  <a
                    href="https://forms.microsoft.com/pages/responsepage.aspx?id=o835AF4H5USqC6ujrdZTn_FLxC1OeZtEip5BNnRkDw5UOEdOWk1QN04yUENOUklNU01CWEQ3V0g1QS4u&route=shorturl"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Local Chapter Registration Form{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>{" "}
                  to link your membership ID with ACM Amrita Student Chapter.
                </p>
              </div>
            </TimelineStep>

            {/* Step 3 */}
            <TimelineStep number="3" title="Review" isLast={true}>
              <p>
                Once you've submitted the form, our team will verify your
                membership details.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                We will contact you upon successful verification. If you don't hear from us in a few days, feel free to inform us.
              </p>
            </TimelineStep>
          </div>
        </section>
      </main>
    </div>
  );
}
