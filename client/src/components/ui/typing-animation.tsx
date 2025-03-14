import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export function TypingAnimation() {
  const [scope, animate] = useAnimate();
  const text = "In Progress...";

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { opacity: 1 });
      for (let i = 0; i <= text.length; i++) {
        await animate(
          "span",
          { width: `${i}ch` },
          { duration: 0.1, ease: "linear" }
        );
      }
      await animate("span", { opacity: 0 }, { delay: 0.5 });
      animate(scope.current, { opacity: 0 }, { delay: 0.2 });
    };

    const interval = setInterval(() => {
      animation();
    }, 4000);

    animation();

    return () => clearInterval(interval);
  }, [animate]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      className="inline-block font-mono text-3xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
    >
      <span className="block overflow-hidden whitespace-nowrap border-r-4 border-primary"></span>
    </motion.div>
  );
}