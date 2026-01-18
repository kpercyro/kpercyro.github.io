import { motion } from "motion/react";
import { Lightbulb, Code, Users, Palette, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

const journeySteps = [
  {
    id: 1,
    icon: Code,
    title: "The Engineering Foundation",
    period: "2021–2023",
    description:
      "Started my journey in Management Engineering, combining engineering design principles with data analytics and software development to optimize processes.",
    highlight: "Teaching Figma helped me realize the power of design tools",
    accent: "blue",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Data Meets Design",
    period: "2023–2024",
    description:
      "Projects like Hotel Cancellation Prediction taught me that insights only matter if users can understand them—sparking my interest in UI/UX.",
    highlight: "Built dashboards that made complex data accessible",
    accent: "green",
  },
  {
    id: 3,
    icon: Users,
    title: "Understanding Users",
    period: "2024",
    description:
      "Through the Teambuildr UX case study, I conducted interviews, analyzed task flows, and proposed design improvements centered on user needs.",
    highlight: "Learned to prioritize UX over technical complexity",
    accent: "pink",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "AI & The Future of UX",
    period: "2026",
    description:
      "Selected for the Futures Lab workshop, an AI/UX prototyping program sponsored by Google, where I design GenAI learning tools.",
    highlight: "Prototyping human–AI collaboration",
    accent: "orange",
  },
  {
    id: 5,
    icon: Palette,
    title: "Where I’m Going",
    period: "Present & Beyond",
    description:
      "I now bring together engineering rigor, data insight, and human-centered design to build products that are intuitive and meaningful.",
    highlight: "Building experiences that matter",
    accent: "blue",
  },
];

const accentStyles: Record<string, string> = {
  blue: "border-blue-400 bg-blue-100 text-blue-600",
  green: "border-green-400 bg-green-100 text-green-600",
  pink: "border-pink-400 bg-pink-100 text-pink-600",
  orange: "border-orange-400 bg-orange-100 text-orange-600",
};

export function About() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">The Journey to UX</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-600 mx-auto" />
        </motion.div>

        <div className="space-y-16">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className="flex items-start gap-6"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center transition-transform ${
                    accentStyles[step.accent]
                  } ${isActive ? "scale-110" : ""}`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <Card
                  className={`flex-1 p-6 transition-all ${
                    isActive ? "shadow-xl" : "shadow-md"
                  }`}
                >
                  <p className="text-sm font-semibold mb-1 text-gray-500">
                    {step.period}
                  </p>
                  <h3 className="mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <p className="text-sm italic text-gray-700">
                    ✨ {step.highlight}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
