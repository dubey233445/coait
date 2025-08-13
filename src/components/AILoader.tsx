import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AILoaderProps {
  onLoadingComplete: () => void;
}

export const AILoader = ({ onLoadingComplete }: AILoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background neural-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        {/* AI Neural Network Animation */}
        <div className="relative mb-8">
          <motion.div
            className="w-32 h-32 mx-auto relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Central Node */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-ai-glow rounded-full transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Orbiting Nodes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-ai-glow-secondary rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: 360,
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  },
                }}
                initial={{
                  x: Math.cos((i * 60) * (Math.PI / 180)) * 50,
                  y: Math.sin((i * 60) * (Math.PI / 180)) * 50,
                }}
              />
            ))}
            
            {/* Connecting Lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute bg-ai-glow h-px origin-center"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "50px",
                  transform: `rotate(${i * 60}deg)`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* AI Logo/Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-ai-glow mb-2">
            Centre of Excellence in AI
          </h2>
          <p className="text-muted-foreground">Initializing AI Systems...</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-2 bg-muted rounded-full mx-auto overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "16rem" }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-ai-glow to-ai-glow-secondary ai-glow"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.p
          className="mt-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {progress}% Complete
        </motion.p>
      </div>
    </motion.div>
  );
};