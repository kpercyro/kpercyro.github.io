import { motion } from "motion/react";
import { ExternalLink, Github, FileText, Figma } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// --- START: NEW IMAGE IMPORTS (assuming files are in the same folder as this component) ---
import fitspaceImage from "./fitspacePrototypeImage.png";
import hotelCancellationImage from "./hotelCancellationImage.png";
import volunteerImage from "./MSE 401 Group 6 EOT Design Review.png";
// --- END: NEW IMAGE IMPORTS ---

export function Projects() {
  const projects = [
    {
      title: "FitSpace – User-Centered Design Platform",
      description:
        "Designed and prototyped a fitness space booking and listing platform with mobile and desktop interfaces, improving usability and user satisfaction through iterative testing and design refinements.",
      image: fitspaceImage, // <-- UPDATED PHOTO SOURCE
      tags: ["Fimga", "UX Design", "Prototyping", "Teamwork"],
      presentationLink: "YOUR_FIGMA_LINK_HERE",
      figmaPrototype: "https://www.canva.com/design/DAG2_dCc4As/4uYEPo3gYPS27lKe4DpJUQ/edit?utm_content=DAG2_dCc4As&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", // FitSpace Figma Prototype Link
      // Fallback/unused links for FitSpace (needed for button logic)
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
      image: hotelCancellationImage, // <-- UPDATED PHOTO SOURCE
      tags: ["Python", "Random Forest", "Streamlit", "Machine Learning", "Data Analysis"],
      // --- UPDATED LINKS FOR HOTEL CANCELLATION ---
      github: "https://docs.google.com/presentation/d/1E2ZOkbeHrqg6QG8-Hw3T8TzcKcH8mtfP25MFQj7grwE/edit?usp=sharing", 
      demo: "https://github.com/kpercyro/Hotel-Cancellation-Classification",
      // --------------------------------------------
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
      image: volunteerImage, // <-- UPDATED PHOTO SOURCE
      tags: ["Python", "Optimization", "Project Management", "Collaborative Problem Solving"],
      // --- UPDATED LINKS FOR VOLUNTEER PLATFORM ---
      github: "https://drive.google.com/file/d/1X1sO1Hk2PV-IbMKwD3CJn6ujGXzMZoA8/view?usp=sharing", 
      demo: "https://github.com/kpercyro/CapstoneProject",
      // --------------------------------------------
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
                    {/* Conditional rendering for FitSpace project buttons */}
                    {project.title === "FitSpace – User-Centered Design Platform" ? (
                      <>
                        {/* Presentation (Remains the same as a report/external link) */}
                        <Button
                          size="sm"
                          variant="outline"
                          className={`flex-1 ${project.buttonColor}`}
                          asChild
                        >
                          <a href={project.presentationLink} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4 mr-2" /> {/* Changed from ExternalLink to FileText for "Report" context */}
                            Presentation {/* Renamed to Report */}
                          </a>
                        </Button>
                        {/* Prototype (Changed icon to Figma logo) */}
                        <Button
                          size="sm"
                          className={`flex-1 ${project.demoButtonColor}`}
                          asChild
                        >
                          <a href={project.figmaPrototype} target="_blank" rel="noopener noreferrer">
                            <Figma className="h-4 w-4 mr-2" /> {/* Changed icon to Figma */}
                            Prototype {/* Label remains Prototype */}
                          </a>
                        </Button>
                      </>
                    ) : (
                      // Button structure for all other projects
                      <>
                        {/* Original 'Code' button changed to 'Report' with FileText icon */}
                        <Button
                          size="sm"
                          variant="outline"
                          className={`flex-1 ${project.buttonColor}`}
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4 mr-2" /> {/* Changed icon to FileText */}
                            Report {/* Changed label from Code to Report */}
                          </a>
                        </Button>
                        {/* Original 'Demo' button changed to 'Code' with Github icon */}
                        <Button
                          size="sm"
                          className={`flex-1 ${project.demoButtonColor}`}
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" /> {/* Changed icon from ExternalLink to Github */}
                            Code {/* Changed label from Demo to Code */}
                          </a>
                        </Button>
                      </>
                    )}
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