import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AILoader } from "@/components/AILoader";
import { Header } from "@/components/Header";
import { MainSection } from "@/components/MainSection";
import { Footer } from "@/components/Footer";
import { NeuralBackground } from "@/components/NeuralBackground";

export const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen flex flex-col bg-background neural-bg">
      <AnimatePresence mode="wait">
        {isLoading && (
          <AILoader key="loader" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            className="min-h-screen flex flex-col relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Neural Network Background */}
            <NeuralBackground />
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <MainSection />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};