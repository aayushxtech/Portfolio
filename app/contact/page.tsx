import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Contact() {
  return (
    <section className="min-h-screen text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            using the form below.
          </p>
        </div>

        <ErrorBoundary>
          <ContactForm />
        </ErrorBoundary>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Or connect with me on social media:
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const socialLinks = [
  {
    href: "https://github.com/aayushxtech",
    icon: <Github className="w-6 h-6" />,
  },
  {
    href: "https://linkedin.com/in/aayush-samal",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    href: "mailto:aayushxtech@gmail.com",
    icon: <Mail className="w-6 h-6" />,
  },
];
