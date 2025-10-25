import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
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
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      hoverColor: "hover:text-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toronto, Canada",
      link: null,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverColor: "",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having
            a chat about technology and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="mb-6 text-gray-900">Contact Information</h3>
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center justify-center gap-4"
              >
                <div
                  className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <info.icon className={`h-6 w-6 ${info.iconColor}`} />
                </div>
                <div className="text-left">
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

          <Card className="p-6 bg-gradient-to-br from-blue-600 via-pink-600 to-green-600 border-0 text-white">
            <h4 className="mb-2 text-white">Let's Work Together</h4>
            <p className="text-white/90">
              Whether you have a project in mind, need help with optimization, or just want
              to connect, I'd love to hear from you!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
