"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image src="/images/hero.png?width=500&height=500" alt="Yomi Japhet" width={400} height={400} className="rounded-full h-[410px] origin-top object-cover mx-auto" />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6">
              With experience in full stack development, I've had the privilege of working on a diverse
              range of projects that have honed my skills and fueled my passion for creating exceptional web
              applications.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My journey in tech began Zeroes and Ones Hi-Tech, where I developed a strong
              foundation in algorithms, data structures, and software engineering principles. Since then, I've been
              continuously learning and adapting to the ever-evolving landscape of web technologies.
            </p>
            <p className="text-lg text-gray-300">
            When I'm not immersed in coding, you can often find me dedicating my time to contributing to open-source projects, crafting technical blog posts, or sharing my expertise with aspiring developers through mentorship. My creative problem-solving approach to development challenges is greatly inspired by the beauty and complexity of nature, which serves as a constant source of motivation and innovation for me.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

