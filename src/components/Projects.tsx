import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "FitSpace – User-Centered Design Platform",
      description:
        "Designed and prototyped a fitness space booking and listing platform with mobile and desktop interfaces, improving usability and user satisfaction through iterative testing and design refinements.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxMjA2NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Fimga", "UX Design", "Prototyping", "Teamwork"],
      github: "#",
      demo: "#",
      accentColor: "blue",
      overlayColor: "bg-blue-900",
      borderColor: "border-t-blue-500",
      buttonColor: "border-blue-600 text-blue-600 hover:bg-blue-50",
      demoButtonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Hotel Cancellation Prediction IDSS",
      description:
        "Developed a machine learning-powered decision support system to predict hotel booking cancellations, enabling hotels to optimize overbooking strategies and improve operational efficiency. Built an interactive Streamlit dashboard for real-time predictions and insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTE5MTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Random Forest", "Streamlit", "Machine Learning", "Data Analysis"],
      github: "#",
      demo: "#",
      accentColor: "pink-600",
      overlayColor: "bg-pink-900",
      borderColor: "border-t-pink-500",
      buttonColor: "border-pink-600 text-pink-600 hover:bg-pink-50",
      demoButtonColor: "bg-pink-600 hover:bg-pink-700",
    },
    {
      title: "Volunteer Selection and Scheduling Platform",
      description:
        "Created a data-driven system to streamline volunteer selection and scheduling for UW Engineering Outreach, automating assessment of 100+ applicants with a custom ranking algorithm and optimization model, reducing manual effort and improving transparency.",
      image: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlbmdpbmVlcmluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEyNTIwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "Optimization", "Project Management", "Collaborative Problem Solving"],
      github: "#",
      demo: "#",
      accentColor: "green-600",
      overlayColor: "bg-green-900",
      borderColor: "border-t-green-500",
      buttonColor: "border-green-600 text-green-600 hover:bg-green-50",
      demoButtonColor: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-pink-50 to-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in data analysis, optimization,
            and system design.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className={`overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col group border-t-4 ${project.borderColor}`}>
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 ${project.overlayColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className={`bg-${project.accentColor}-100 text-${project.accentColor}-700 hover:bg-${project.accentColor}-200`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`flex-1 ${project.buttonColor}`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 ${project.demoButtonColor}`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}