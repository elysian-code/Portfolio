"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/app/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/avatar"
import { QuoteIcon } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    position: "CTO, Tech Innovators Inc.",
    avatar: "/placeholder.svg",
    content:
      "Your Name is an exceptional developer who consistently delivers high-quality work. Their expertise in full stack development has been invaluable to our team.",
  },
  {
    name: "Jane Smith",
    position: "Project Manager, WebSolutions Co.",
    avatar: "/placeholder.svg",
    content:
      "Working with Your Name was a pleasure. They have a keen eye for detail and always go above and beyond to ensure project success.",
  },
  {
    name: "Mike Johnson",
    position: "Founder, StartUp Ventures",
    avatar: "/placeholder.svg",
    content:
      "Your Name's contributions were crucial to the growth of our startup. Their technical skills and problem-solving abilities are truly impressive.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none">
                <CardContent className="flex-grow pt-6">
                  <QuoteIcon className="w-10 h-10 text-blue-400 mb-4" />
                  <p className="text-gray-100 italic mb-4">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter className="flex items-center border-t border-gray-700 pt-4">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.position}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

