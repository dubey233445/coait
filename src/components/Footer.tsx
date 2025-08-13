import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-card/80 backdrop-blur-md border-t border-border mt-auto relative overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="hsl(var(--ai-glow))" />
              <path d="M0,20 L40,20 M20,0 L20,40" stroke="hsl(var(--ai-glow))" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
          
          {/* Animated flowing line */}
          <motion.path
            d="M0,50 Q100,30 200,50 T400,50"
            stroke="hsl(var(--ai-glow))"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-6 text-center relative z-10">
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          © 2025 Centre of Excellence in AI | Powered by Innovation
        </motion.p>
        
        <motion.div
          className="mt-2 flex justify-center space-x-4 text-xs text-muted-foreground/70"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="hover:text-ai-glow transition-colors cursor-pointer">Research</span>
          <span>•</span>
          <span className="hover:text-ai-glow transition-colors cursor-pointer">Innovation</span>
          <span>•</span>
          <span className="hover:text-ai-glow transition-colors cursor-pointer">Excellence</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};