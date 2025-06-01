import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/10 rounded-full" />
          <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-primary/5 rounded-full" />
        </div>
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-[700px]">
            <p className="text-primary font-medium">Testimonials</p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                "Thivya helped me secure a mortgage with a great rate. Her knowledge of the market and personalized
                approach made all the difference."
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">SJ</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">First Home Buyer</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                "Rune Finance's advice has been instrumental in helping me plan for retirement. Thivya took the time to
                understand my goals and created a strategy that works for me."
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">MT</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Michael Thompson</p>
                  <p className="text-xs text-muted-foreground">Retirement Planning Client</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                "Setting up my SMSF seemed daunting, but Thivya made it simple. Her ongoing support and expertise have
                been invaluable to managing my fund effectively."
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">JL</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Jennifer Lee</p>
                  <p className="text-xs text-muted-foreground">SMSF Client</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

