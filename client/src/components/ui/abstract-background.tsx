import { motion } from "framer-motion";

export function AbstractBackground() {
  return (
    <div className="relative w-full h-full opacity-70">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "hsl(250, 95%, 60%)" }} />
              <stop offset="100%" style={{ stopColor: "hsl(280, 95%, 60%)" }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="softBlur">
              <feGaussianBlur stdDeviation="15" />
            </filter>
          </defs>

          {/* Animated blob 1 */}
          <motion.path
            d="M200,200 C250,150 300,150 350,200 C400,250 400,300 350,350 C300,400 250,400 200,350 C150,300 150,250 200,200"
            fill="url(#gradient)"
            filter="url(#softBlur)"
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 180, 360],
              d: [
                "M200,200 C250,150 300,150 350,200 C400,250 400,300 350,350 C300,400 250,400 200,350 C150,300 150,250 200,200",
                "M220,180 C280,160 320,180 360,220 C380,280 360,320 320,360 C260,380 220,360 180,320 C160,260 180,220 220,180",
                "M200,200 C250,150 300,150 350,200 C400,250 400,300 350,350 C300,400 250,400 200,350 C150,300 150,250 200,200"
              ]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Animated blob 2 */}
          <motion.path
            d="M150,150 C200,100 250,100 300,150 C350,200 350,250 300,300 C250,350 200,350 150,300 C100,250 100,200 150,150"
            fill="url(#gradient)"
            filter="url(#softBlur)"
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              rotate: [360, 180, 0],
              d: [
                "M150,150 C200,100 250,100 300,150 C350,200 350,250 300,300 C250,350 200,350 150,300 C100,250 100,200 150,150",
                "M170,130 C230,110 270,130 310,170 C330,230 310,270 270,310 C210,330 170,310 130,270 C110,210 130,170 170,130",
                "M150,150 C200,100 250,100 300,150 C350,200 350,250 300,300 C250,350 200,350 150,300 C100,250 100,200 150,150"
              ]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              r="4"
              fill="url(#gradient)"
              filter="url(#glow)"
              initial={{ 
                x: 250 + Math.cos(i * 45) * 100,
                y: 250 + Math.sin(i * 45) * 100,
                opacity: 0.5
              }}
              animate={{ 
                x: [
                  250 + Math.cos(i * 45) * 100,
                  250 + Math.cos((i * 45) + 180) * 150,
                  250 + Math.cos(i * 45) * 100
                ],
                y: [
                  250 + Math.sin(i * 45) * 100,
                  250 + Math.sin((i * 45) + 180) * 150,
                  250 + Math.sin(i * 45) * 100
                ],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}