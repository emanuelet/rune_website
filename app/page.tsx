import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Home,
  PiggyBank,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";
import { AbstractShape } from "@/components/abstract-shape";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={160}
              height={64}
              style={{
                objectFit: "contain", // cover, contain, none
              }}
              alt="Rune Finance"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-[80px]" />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
                  Financial clarity for your future
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                  Expert mortgage brokering, financial advice, and self-managed
                  super fund solutions tailored to your needs.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="#contact">
                      Book a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Link href="#services">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full" />
                <div className="relative aspect-square w-full max-w-md mx-auto">
                  <AbstractShape className="w-full h-full text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-[700px]">
                <p className="text-primary font-medium">Our Services</p>
                <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Comprehensive Financial Solutions
                </h2>
                <p className="text-muted-foreground text-lg">
                  We offer a range of professional services to help you navigate
                  your financial journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-medium">
                    Mortgage Brokering
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Expert guidance to find the right mortgage solution for your
                    needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Home loans & refinancing</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Investment property loans</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Access to multiple lenders</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 hover:text-primary p-0"
                    asChild
                  >
                    <Link href="#contact" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-medium">
                    Financial Advice
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Personalized strategies to help you achieve your financial
                    goals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Retirement planning</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Investment strategies</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Wealth management</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 hover:text-primary p-0"
                    asChild
                  >
                    <Link href="#contact" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <PiggyBank className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-medium">
                    SMSF Setup
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Expert guidance for setting up and managing your
                    self-managed super fund.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>SMSF establishment</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Compliance management</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                      <span>Investment strategy advice</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 hover:text-primary p-0"
                    asChild
                  >
                    <Link href="#contact" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-20 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-3/4 h-3/4 rounded-full bg-primary/5 animate-pulse"
                      style={{ animationDuration: "4s" }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full border-2 border-primary/20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 rounded-full bg-primary/10" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/profile.jpeg"
                      width={300}
                      height={500}
                      alt="Thivya Viswamohanan"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-primary font-medium">About</p>
                <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Meet Your Financial Advisor
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">
                    Thivya Viswamohanan, CFA, CA
                  </h3>
                  <p className="text-muted-foreground">
                    With over a decade of experience in the financial industry,
                    Thivya combines her Chartered Financial Analyst (CFA) and
                    Chartered Accountant (CA) expertise to provide comprehensive
                    financial solutions.
                  </p>
                  <p className="text-muted-foreground">
                    Based in Brisbane, Thivya founded Rune Finance with a
                    mission to deliver transparent, client-centered financial
                    advice that empowers individuals and businesses to achieve
                    their financial goals.
                  </p>
                  <p className="text-muted-foreground">
                    Her approach combines technical expertise with a deep
                    understanding of each client's unique circumstances,
                    ensuring personalized strategies that deliver real results.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="#contact">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        <Testimonials />

        <section
          id="contact"
          className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/20 rounded-full" />
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-primary/10 rounded-full" />
            <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-primary/5 rounded-full" />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-6">
                <p className="text-primary font-medium">Contact</p>
                <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-lg">
                  Ready to take the next step in your financial journey? Fill
                  out the form and Thivya will get back to you within 24 hours.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-4 h-5 w-5 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Operating in</h3>
                      <p className="text-muted-foreground">
                        Brisbane, Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-4 h-5 w-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">0411 472 237</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-4 h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        thivya@runefinance.com.au
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  width={64}
                  height={64}
                  style={{
                    objectFit: "contain", // cover, contain, none
                  }}
                  alt="Rune Finance"
                />
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Professional financial services tailored to your unique needs
                and goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Mortgage Brokering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Financial Advice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      SMSF Setup
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#about"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#testimonials"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Rune Finance. All rights reserved. Australian Financial
              Services License #123456.
            </p>
            <p className="text-xs text-muted-foreground mt-4 md:mt-0">
              Designed and developed with care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
