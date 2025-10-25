import { motion } from "motion/react";
import { GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Management Engineering program focused on optimization and engineering design",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200 hover:border-blue-400",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Data-driven decision making and process improvement",
      color: "pink",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200 hover:border-pink-400",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creating efficient solutions through technology and analytics",
      color: "yellow",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200 hover:border-yellow-400",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuously learning and adapting to new challenges",
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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 mb-6">
                I'm a management engineering student passionate about leveraging technology
                and analytical methods to solve complex business challenges. My academic
                journey has equipped me with a unique blend of technical expertise and
                business acumen.
              </p>
              <p className="text-gray-600 mb-6">
                Through my coursework and projects, I've developed strong skills in data
                analysis, optimization, and systems design. I thrive on transforming raw
                data into actionable insights and creating efficient processes that make a
                real impact.
              </p>
              <p className="text-gray-600">
                When I'm not working on projects, I'm exploring new technologies, reading
                about industry trends, and seeking opportunities to apply my skills to
                real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className={`p-6 hover:shadow-lg transition-all ${highlight.borderColor} ${highlight.bgColor} bg-opacity-20`}>
                    <div className={`w-12 h-12 ${highlight.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <highlight.icon className={`h-6 w-6 ${highlight.iconColor}`} />
                    </div>
                    <h3 className="mb-2 text-gray-900">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
