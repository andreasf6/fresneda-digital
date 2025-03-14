import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "../ui/container";
import { Progress } from "../ui/progress";

const progressItems = [
  { label: "Design", progress: 85 },
  { label: "Development", progress: 65 },
  { label: "Testing", progress: 40 },
];

export function WorkProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section id="work" ref={ref} className="py-24 bg-gray-50">
      <Container>
        <motion.div
          style={{ opacity, y }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Work in Progress</h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch our project come to life. Here's a real-time look at our
            progress across different phases.
          </p>

          <div className="mt-16 space-y-8">
            {progressItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-gray-600">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1627389955611-70c92a5d2e2b"
                alt="Abstract shape"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">Design System</h3>
              <p className="mt-2 text-gray-600">
                Creating a cohesive and modern design language.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
                alt="Abstract pattern"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">Development</h3>
              <p className="mt-2 text-gray-600">
                Building robust and scalable solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
