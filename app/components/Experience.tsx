"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/card"
import { Badge } from "@/app/components/badge"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description:
      "Lead developer for multiple high-traffic web applications, implementing microservices architecture and improving overall system performance.",
    achievements: [
      "Reduced server response time by 40% through optimized database queries and caching strategies",
      "Implemented a CI/CD pipeline that decreased deployment time by 60%",
      "Mentored junior developers, improving team productivity by 25%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Co.",
    period: "2018 - 2021",
    description:
      "Developed and maintained various client projects using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    achievements: [
      "Delivered 15+ successful projects for clients across various industries",
      "Introduced React hooks and context API, reducing codebase complexity by 30%",
      "Implemented serverless architecture, cutting operational costs by 50%",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    description:
      "Assisted in the development of the company's main product, gaining hands-on experience with modern web technologies and agile methodologies.",
    achievements: [
      "Contributed to the launch of the company's flagship product, acquiring 10,000+ users in the first month",
      "Developed a responsive design system, improving mobile user engagement by 35%",
      "Implemented unit testing, reducing bug reports by 40%",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader className="bg-gray-700">
                  <CardTitle className="text-2xl text-white">{exp.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "Node.js", "AWS", "CI/CD", "Agile"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-600 text-white">
                        {skill}
                      </Badge>
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

