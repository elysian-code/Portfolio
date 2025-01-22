"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from '@/app/components/ui/card' 
import { Badge } from "@/app/components/ui/badge"

const skills = [
  {skill: "JavaScript", ctg: "Frontend",},
  {skill: "TypeScript", ctg: "Backend",},
  {skill: "React", ctg: "Frontend",},
  {skill: "Next.js", ctg: "Frontend",},
  {skill: "Node.js", ctg: "Backend",},
  {skill: "Express", ctg: "Backend",},
  {skill: "MongoDB", ctg: "Database",},
  {skill: "PostgreSQL", ctg: "Database",},
  {skill: "GraphQL", ctg: "Database",},
  {skill: "REST APIs", ctg: "Backend",},
  {skill: "AWS", ctg: "DevOps",},
  {skill: "Docker", ctg: "DevOps",},
  {skill: "Git", ctg: "DevOps",},
  {skill: "CI/CD", ctg: "DevOps",},
  {skill: "Agile Methodologies", ctg: "Other",},
  {skill: "Test-Driven Development", ctg: "Other",},
  {skill: "Responsive Design", ctg: "Frontend",},
  {skill: "UI/UX Principles", ctg: "Other",},
]

const skillCategories = [
  { name: "Frontend", icon: "🖥️" },
  { name: "Backend", icon: "⚙️" },
  { name: "Database", icon: "🗄️" },
  { name: "DevOps", icon: "🚀" },
  { name: "Other", icon: "🛠️" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-white flex items-center">
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .map((skill) => (
                        (category.name === skill.ctg && <motion.div key={skill.skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge
                            variant="secondary"
                            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                          >
                            {skill.skill}
                          </Badge>
                        </motion.div>)
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

