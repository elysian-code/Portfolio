"use client"

import { Badge } from "@/app/components/badge"
import { motion } from "framer-motion"

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "GraphQL", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "AWS", level: 75 },
  { name: "Docker", level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary" className="text-lg py-1 px-2">
                  {skill.name}
                </Badge>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

