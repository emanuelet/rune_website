import { Award, Clock, HeartHandshake, ShieldCheck } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity="0.05"
          >
            <path
              d="M0 0L400 400M20 0L400 380M40 0L400 360M60 0L400 340M80 0L400 320M100 0L400 300M120 0L400 280M140 0L400 260M160 0L400 240M180 0L400 220M200 0L400 200M220 0L400 180M240 0L400 160M260 0L400 140M280 0L400 120M300 0L400 100M320 0L400 80M340 0L400 60M360 0L400 40M380 0L400 20"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity="0.05"
          >
            <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="200" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-[700px]">
            <p className="text-primary font-medium">Why Choose Us</p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">The Rune Finance Advantage</h2>
            <p className="text-muted-foreground text-lg">
              We're committed to providing exceptional service and expert financial guidance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="text-xl font-medium">Certified Expertise</h3>
              <p className="text-muted-foreground mt-2">
                With CFA and CA qualifications, Thivya brings world-class financial expertise to every client
                relationship.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <HeartHandshake className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="text-xl font-medium">Client-Centered Approach</h3>
              <p className="text-muted-foreground mt-2">
                We take the time to understand your unique financial situation and goals to provide truly personalized
                solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="text-xl font-medium">Transparent & Ethical</h3>
              <p className="text-muted-foreground mt-2">
                We believe in full transparency and always act in your best interest, providing clear explanations of
                all recommendations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="text-xl font-medium">Ongoing Support</h3>
              <p className="text-muted-foreground mt-2">
                Our relationship doesn't end after the initial service. We provide ongoing support and regular reviews
                to ensure your financial strategy remains on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

