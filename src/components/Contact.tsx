import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

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
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-pink-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having
            a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-gray-900">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`h-6 w-6 ${info.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-gray-900">{info.label}</p>
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-900">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Kathryn Percy-Robb"
                    className="border-pink-200 focus:border-pink-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-900">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-pink-200 focus:border-pink-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-900">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    className="border-pink-200 focus:border-pink-600"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-pink-600 to-green-600 hover:from-blue-700 hover:via-pink-700 hover:to-green-700"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
