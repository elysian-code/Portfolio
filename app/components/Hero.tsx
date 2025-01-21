"use client"

import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-5xl font-bold mb-4">Yomi Japhet</h1>
        <h2 className="text-3xl text-gray-300 mb-6">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Specialist",
              2000,
              "Node.js Expert",
              2000,
              "Cloud Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          Passionate about creating robust and scalable web applications. Specializing in React, Node.js, and cloud
          technologies.
        </p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

