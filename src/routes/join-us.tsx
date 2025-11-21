import { createFileRoute } from '@tanstack/react-router'
import { 
  Users, 
  Trophy, 
  Calendar, 
  Cpu, 
  Library, 
  BookOpen, 
  ArrowRight,
  ExternalLink,
  GraduationCap 
} from 'lucide-react'

export const Route = createFileRoute('/join-us')({
  component: JoinUsComponent,
})


function BenefitItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex gap-5 items-start p-4 rounded-2xl transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

function TimelineStep({ 
  number, 
  title, 
  children, 
  isLast = false 
}: { 
  number: string, 
  title: string, 
  children: React.ReactNode, 
  isLast?: boolean 
}) {
  return (
    <div className="flex gap-4 md:gap-8 relative">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center text-xl font-bold z-10 shadow-md ring-4 ring-white dark:ring-zinc-900">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 bg-zinc-200 dark:bg-zinc-800 h-full absolute top-12 bottom-0 left-6 -ml-[1px]" />
        )}
      </div>

      <div className={`flex-1 ${!isLast ? 'pb-16' : 'pb-0'}`}>
        <div className="pt-1">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{title}</h3>
          <div className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


function JoinUsComponent() {
  
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white min-h-screen font-sans selection:bg-zinc-200 dark:selection:bg-zinc-700">
      
      <main className="container p-4 mx-auto md:p-8 max-w-6xl">
        
        <section id="benefits" className="pt-10 pb-10 border-b border-zinc-100 dark:border-zinc-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-zinc-900 dark:text-white">Why Join Us?</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Unlock a world of opportunities, from technical skill-building to networking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            
            
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

        <section id="apply" className="pt-10 pb-20 md:pb-32">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-zinc-900 dark:text-white">How to Apply</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Follow this simple roadmap to become a member.
              </p>
            </div>
            
            <TimelineStep 
              number="1" 
              title="Get Your ACM Membership"
            >
              <p>
                To become a member of the local chapter, you first need an <strong>ACM India Student Membership</strong>.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-zinc-400 shrink-0" />
                  <span>Visit <a href="https://india.acm.org/membership" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-1">india.acm.org/membership <ExternalLink className="w-3 h-3"/></a></span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-zinc-400 shrink-0" />
                  <span>Select <strong>"Student Membership"</strong> and complete the payment.</span>
                </li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-3 rounded-lg text-sm border border-blue-100 dark:border-blue-800/50 inline-block mt-2">
                <strong>Note:</strong> You will receive a 7-digit Membership Number. Save it!
              </div>
            </TimelineStep>

            <TimelineStep 
              number="2" 
              title="Join Amrita Chapter"
            >
              <p>
                Use your new Membership Number to register officially with our college chapter.
              </p>
              <div className="flex items-start gap-2 mt-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-zinc-400 shrink-0" />
                  <p>
                    Fill out the <a href="https://forms.microsoft.com/pages/responsepage.aspx?id=o835AF4H5USqC6ujrdZTn_FLxC1OeZtEip5BNnRkDw5UOEdOWk1QN04yUENOUklNU01CWEQ3V0g1QS4u&route=shorturl" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-1">Local Chapter Registration Form <ExternalLink className="w-3 h-3"/></a> to link your membership ID with ACM Amrita Chapter.
                  </p>
              </div>
              <p className="text-sm text-zinc-500 mt-2">
                This gives you access to member perks and core team recruitment.
              </p>
            </TimelineStep>

            {/* Step 3 */}
            <TimelineStep 
              number="3" 
              title="Review" 
              isLast={true}
            >
              <p>
                Once you've submitted the form, our team will verify your membership details.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  You will receive a confirmation upon successful verification,if not feel free to contact us.
              </p>
            </TimelineStep>

          </div>
        </section>

      </main>
    </div>
  )
}