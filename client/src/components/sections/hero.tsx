import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { TypingAnimation } from "../ui/typing-animation";
import { AbstractBackground } from "../ui/abstract-background";

export function Hero() {
  return (
    <Container className="h-screen flex items-center justify-center">
      <div className="relative w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-6">
            We're{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Creating
            </span>
          </h1>
          <div className="text-2xl text-gray-600 mb-8">
            <TypingAnimation />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg text-gray-500 mt-12"
          >
            For enquiries, reach out to{" "}
            <a 
              href="mailto:work@fresneda.digital" 
              className="font-medium bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              work@fresneda.digital
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 -z-10"
        >
          <AbstractBackground />
        </motion.div>
      </div>
    </Container>
  );
}