import { motion } from "motion/react";
import { Code, Database, BarChart3, Cpu, GitBranch, Layers } from "lucide-react";

export function Skills() {
  const skillCategories = [
  {
    icon: 'Figma', // Represents Design/UX
    title: 'Design & UX',
    skills: [
      'Figma',
      'Balsamiq',
      'Miro',
      'Usability Testing',
      'Wireframing',
      'Prototyping',
      'User Research',
      'Heuristic Evaluation',
    ],
    gradient: 'from-purple-50 to-purple-100', // New color for Design
    iconBg: 'bg-purple-600',
    borderColor: 'border-purple-200 hover:border-purple-400',
    tagBorder: 'border-purple-300',
  },
  {
    icon: 'BarChart3', // Represents Data Analysis
    title: 'Data Science & ML',
    skills: [
      'Python',
      'R',
      'Excel',
      'Power BI',
      'Machine Learning',
      'Predictive Modeling',
      'Statistical Analysis',
    ], // Merged from your "Programming" and "Data Analysis" resume sections
    gradient: 'from-pink-50 to-pink-100',
    iconBg: 'bg-pink-600',
    borderColor: 'border-pink-200 hover:border-pink-400',
    tagBorder: 'border-pink-300',
  },
  {
    icon: 'Database', // Represents Technical skills, focusing on Data/Systems
    title: 'Technical & Data Management',
    skills: [
      'SQL',
      'T-SQL',
      'PowerShell',
      'Active Directory',
      'Database Management',
      'Full-Stack Development',
      // Assuming you want to keep some of the existing technical tools:
      'MySQL',
    ], // Matches 'Technical' on resume
    gradient: 'from-green-50 to-green-100',
    iconBg: 'bg-green-600',
    borderColor: 'border-green-200 hover:border-green-400',
    tagBorder: 'border-green-300',
  },
  {
    icon: 'GitBranch', // Represents Project & Methodologies
    title: 'Project & Operations Management',
    skills: [
      'Jira',
      'Confluence',
      'Agile Practices',
      'Cross-Functional Collaboration',
      'Continuous Improvement',
      'Workflow Optimization',
      'Quality Control',
      'Process Automation',
    ], // Merged 'Processes & Operations' and 'Project & Stakeholder Management' from resume
    gradient: 'from-yellow-50 to-yellow-100',
    iconBg: 'bg-yellow-600',
    borderColor: 'border-yellow-200 hover:border-yellow-400',
    tagBorder: 'border-yellow-300',
  },
  {
    icon: 'Code', // Represents general programming/web dev
    title: 'Programming & Web Technologies',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'REST APIs',
      'Git', // Essential
    ], // Keeps existing relevant coding skills not tied to Data Science/SQL
    gradient: 'from-blue-50 to-blue-100',
    iconBg: 'bg-blue-600',
    borderColor: 'border-blue-200 hover:border-blue-400',
    tagBorder: 'border-blue-300',
  },
];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic coursework and hands-on project
            experience.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${category.gradient} p-6 rounded-lg border ${category.borderColor} transition-all hover:shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${category.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 bg-white text-gray-700 rounded-full border ${category.tagBorder}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
