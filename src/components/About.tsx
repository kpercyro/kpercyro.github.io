import { motion } from "motion/react";
import { GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Optimization, software development and engineering design",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200 hover:border-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Teaching",
      description: "Management Engineering Concepts and Introduction to Computer Programming",
      color: "pink",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200 hover:border-pink-400",
    },
    {
      icon: Lightbulb,
      title: "Research",
      description: "Planning to explore AI/ML through a URA next term",
      color: "yellow",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200 hover:border-yellow-400",
    },
    {
      icon: Lightbulb,
      title: "Interests",
      description: "UI/UX, Product Management, Data Analysis, Teaching",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200 hover:border-green-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className={`p-6 h-full hover:shadow-lg transition-all ${highlight.borderColor} ${highlight.bgColor} bg-opacity-20`}>
                  <div className={`w-12 h-12 ${highlight.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                    <highlight.icon className={`h-6 w-6 ${highlight.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
