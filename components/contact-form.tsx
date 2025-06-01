"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  service: z.enum(["mortgage", "financial-advice", "smsf"], {
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "mortgage",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast({
        title: "Form submitted",
        description: "We'll get back to you as soon as possible.",
      })
    }, 1000)
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="John Smith"
              className="border-slate-200 focus:border-primary focus:ring-primary"
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="border-slate-200 focus:border-primary focus:ring-primary"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="0412 345 678"
              className="border-slate-200 focus:border-primary focus:ring-primary"
              {...form.register("phone")}
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-3">
            <Label className="text-sm font-medium">I'm interested in:</Label>
            <RadioGroup defaultValue="mortgage" className="flex flex-col space-y-2" {...form.register("service")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mortgage" id="mortgage" className="text-primary border-slate-200" />
                <Label htmlFor="mortgage" className="font-normal">
                  Mortgage Brokering
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="financial-advice"
                  id="financial-advice"
                  className="text-primary border-slate-200"
                />
                <Label htmlFor="financial-advice" className="font-normal">
                  Financial Advice
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="smsf" id="smsf" className="text-primary border-slate-200" />
                <Label htmlFor="smsf" className="font-normal">
                  Self-Managed Super Fund
                </Label>
              </div>
            </RadioGroup>
            {form.formState.errors.service && (
              <p className="text-sm text-destructive">{form.formState.errors.service.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your financial goals..."
              className="min-h-[120px] border-slate-200 focus:border-primary focus:ring-primary"
              {...form.register("message")}
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-4">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

