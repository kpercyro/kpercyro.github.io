import { motion } from "framer-motion"; // Corrected import path to resolve compilation error
import { GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react";
import React from 'react';

// NOTE: Since the original file imported Card from "./ui/card",
// a simple implementation is provided here to keep the file self-contained.
const Card = ({ className, children }) => (
  <div className={`rounded-xl border shadow-sm p-4 ${className}`}>
    {children}
  </div>
);

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Optimization, software development and engineering design.",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200 hover:border-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Teaching",
      description: "Management Engineering Concepts and Introduction to Computer Programming.",
      color: "pink",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200 hover:border-pink-400",
    },
    {
      icon: Lightbulb,
      title: "Research",
      description: "Planning to explore AI/ML through a URA next term.",
      color: "yellow",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200 hover:border-yellow-400",
    },
    {
      icon: Target, // Changed to Target for variety, although Lightbulb was used previously.
      title: "Interests",
      description: "UI/UX, Product Management, Data Analysis, Teaching.",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200 hover:border-green-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Section Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Updated Layout: Full-width responsive grid for cards */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Grid classes updated: 1 col on mobile, 2 on small screens, 4 on large screens
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="h-full" // Ensure cards are the same height
              >
                <Card className={`h-full p-6 shadow-md transition-all duration-300 border-2 ${highlight.borderColor} ${highlight.bgColor} bg-opacity-30 backdrop-blur-sm hover:shadow-xl`}>
                  
                  {/* Icon Container */}
                  <div className={`w-12 h-12 ${highlight.bgColor} rounded-full flex items-center justify-center mb-4 ring-2 ring-white`}>
                    <highlight.icon className={`h-6 w-6 ${highlight.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default App; // Required for single file React apps

// A simple wrapper component to ensure the preview works
function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-[Inter] antialiased">
      <About />
    </div>
  );
}