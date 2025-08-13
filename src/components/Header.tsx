import { motion } from "framer-motion";
import { useState } from "react";
import coaiLogo from "@/assets/coai-logo.png";

export const Header = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleTitleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <>
      <motion.header
        className="w-full bg-card/80 backdrop-blur-md border-b border-border shadow-lg relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* College Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <img 
                src={coaiLogo} 
                alt="COAI Logo" 
                className="w-10 h-10 object-contain filter brightness-0 invert"
              />
            </div>
          </motion.div>

          {/* Centered Title */}
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-bold text-center cursor-pointer select-none"
            style={{ 
              fontFamily: "'Orbitron', 'Inter', sans-serif",
              background: "linear-gradient(135deg, hsl(var(--ai-glow)), hsl(var(--ai-glow-secondary)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px hsl(var(--ai-glow) / 0.5)"
            }}
            onClick={handleTitleClick}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Centre of Excellence in AI - 2025
          </motion.h1>

          {/* Spacer for layout balance */}
          <div className="w-12 h-12"></div>
        </div>
      </motion.header>

      {/* Easter Egg Animation */}
      {showEasterEgg && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="text-center p-8 glass-card rounded-2xl"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🤖
            </motion.div>
            <h2 className="text-2xl font-bold text-ai-glow mb-2">
              AI Mode Activated!
            </h2>
            <p className="text-muted-foreground">
              The future of intelligence is here...
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};