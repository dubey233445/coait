import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

export const TypewriterEffect = ({ words, className = "" }: TypewriterEffectProps) => {
  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <motion.h2
      className={`text-xl md:text-2xl font-medium text-ai-glow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {text}
      <Cursor cursorStyle="|" cursorColor="hsl(var(--ai-glow))" />
    </motion.h2>
  );
};