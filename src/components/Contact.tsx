import { motion } from "motion/react";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import { Card } from "./ui/card";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kpercyro@uwaterloo.ca",
      link: "mailto:kpercyro@uwaterloo.ca",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/kathryn-percy-robb/",
      link: "https://www.linkedin.com/in/kathryn-percy-robb/",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      hoverColor: "hover:text-pink-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/kpercyro",
      link: "https://github.com/kpercyro",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverColor: "hover:text-yellow-600",
    },
      {
      icon: MapPin,
      label: "Location",
      value: "Toronto, Canada",
      link: null,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      hoverColor: "",

    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-yellow-50 via-green-50 to-pink-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-gray-900">Contact Information</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-600 mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* The following line has been removed:
          <h3 className="mb-6 text-gray-900 text-center">Contact Information</h3>
          */}
          {/* Apply w-fit mx-auto here to center the list block */}
          <div className="space-y-6 mb-8 w-fit mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                // Removed mx-auto w-fit and justify-start to left-align within the centered parent
                className="flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <info.icon className={`h-6 w-6 ${info.iconColor}`} />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className={`text-gray-600 ${info.hoverColor} transition-colors`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}