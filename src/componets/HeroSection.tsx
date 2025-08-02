"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaDumbbell, FaHeart, FaStar } from "react-icons/fa";

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative pt-20 min-h-screen w-full flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-darkBlue/5" />

      {/* Floating decorative elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-10 text-accent-primary/10 text-4xl md:text-6xl hidden sm:block"
      >
        <FaDumbbell />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "1s" }}
        className="absolute top-40 right-20 text-accent-hover/10 text-3xl md:text-4xl hidden sm:block"
      >
        <FaHeart />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-40 left-20 text-darkBlue/10 text-3xl md:text-5xl hidden sm:block"
      >
        <FaStar />
      </motion.div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={textVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-semibold mb-4">
              🏆 #1 Fitness Center in the City
            </span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary mb-6 md:mb-8 leading-tight px-4"
          >
            Transform Your <span className="text-gradient">Body.</span>
            <br />
            <span className="text-gradient">Start Today.</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg sm:text-xl md:text-2xl text-text-primary/80 mb-8 md:mb-12 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4"
          >
            Join thousands of satisfied clients who achieved their fitness goals
            with our personalized training programs and state-of-the-art
            facilities.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            animate={inView ? ["visible", "pulse"] : "hidden"}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.a
              href="/book-trial"
              className="btn-primary flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-white font-bold rounded-2xl text-base sm:text-lg shadow-glow hover:shadow-glow-hover w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Trial <FaArrowRight className="text-lg sm:text-xl" />
            </motion.a>

            <motion.a
              href="/learn-more"
              className="btn-secondary flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-4 sm:py-5 font-bold rounded-2xl text-base sm:text-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-text-primary/10 px-4"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                10K+
              </div>
              <div className="text-text-primary/70 text-sm sm:text-base">
                Happy Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                50+
              </div>
              <div className="text-text-primary/70 text-sm sm:text-base">
                Expert Trainers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                95%
              </div>
              <div className="text-text-primary/70 text-sm sm:text-base">
                Success Rate
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-darkBlue/10 to-transparent z-0" />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-primary/50"
      >
        <div className="w-6 h-10 border-2 border-text-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-primary/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
