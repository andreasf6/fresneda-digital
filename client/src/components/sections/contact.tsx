import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're always open to new opportunities and collaborations.
            Reach out to us through any of these channels.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12"
          >
            <Button size="lg" className="text-lg">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
