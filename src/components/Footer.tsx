import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Define the social/contact links using the same URLs
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/kathryn-percy-robb/", 
    github: "https://github.com/kpercyro", 
    email: "mailto:kpercyro@uwaterloo.ca", 
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Made by Kathryn Percy-Robb
            </p>
            <p className="text-gray-500 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {/* LinkedIn Link */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            {/* GitHub Link */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            {/* Email Link */}
            <a
              href={socialLinks.email}
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}