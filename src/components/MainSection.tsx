import { motion } from "framer-motion";
import { AIButton } from "@/components/ui/ai-button";
import { TypewriterEffect } from "./TypewriterEffect";
import { ExternalLink, Sparkles, Brain, Zap } from "lucide-react";
import krMangalamLogo from "@/assets/kr-mangalam-logo.png";

export const MainSection = () => {
  const handleRegisterClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSegto-z74zObQzhSYVPd8l3UMe8E20TAMfC38OuJdMGxFNH2w/viewform", "_blank");
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src={krMangalamLogo} 
          alt="KR Mangalam University" 
          className="w-96 h-96 object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Hero Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--ai-glow)), hsl(var(--ai-glow-secondary)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Welcome to the Future
          </motion.h1>

          <TypewriterEffect
            words={[
              "Empowering the Future of AI",
              "Innovation Through Intelligence",
              "Research • Innovation • Excellence",
              "Building Tomorrow's Technology Today"
            ]}
            className="mb-8"
          />
        </motion.div>

        {/* Register Button */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <AIButton
            variant="ai"
            size="xl"
            onClick={handleRegisterClick}
            className="text-xl px-16 py-6 animate-glow-pulse relative group"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Sparkles className="w-6 h-6" />
              Register Now
              <ExternalLink className="w-5 h-5" />
            </motion.div>
            
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-ai-glow to-ai-glow-secondary opacity-0 group-hover:opacity-30 blur-xl"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </AIButton>
        </motion.div>

        {/* Description Card */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileInView={{ 
            boxShadow: "0 25px 50px -12px hsl(var(--ai-glow) / 0.25)",
          }}
          viewport={{ once: true }}
        >
          {/* Floating AI Icons */}
          <motion.div
            className="absolute top-4 right-4 text-ai-glow/20"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Brain className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 text-ai-glow-secondary/20"
            animate={{ 
              rotate: -360,
              y: [-5, 5, -5],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Zap className="w-6 h-6" />
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6 text-ai-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            About Our Initiative
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            The Centre of Excellence in AI is a dedicated space to foster innovation, research, 
            and collaboration among students and faculty, driving the future of intelligent technologies.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            {[
              { icon: Brain, title: "Research", desc: "Cutting-edge AI research initiatives" },
              { icon: Sparkles, title: "Innovation", desc: "Transform ideas into reality" },
              { icon: Zap, title: "Excellence", desc: "Pursuing the highest standards" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-4 rounded-xl bg-muted/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "hsl(var(--ai-glow) / 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="text-ai-glow mb-3"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <item.icon className="w-8 h-8 mx-auto" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};