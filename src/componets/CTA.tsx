"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-50px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
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
        delay: 0.3,
        duration: 0.5,
        ease: "backOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "var(--accent-hover)",
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
    tap: {
      scale: 0.98,
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
    <section className="py-24 bg-gradient-secondary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-hover/10" />

      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-10 text-accent-primary/20 text-6xl"
      >
        💪
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-20 right-10 text-accent-hover/20 text-5xl"
      >
        🏃‍♂️
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
              🚀 Ready to Transform Your Life?
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            Start Your <span className="text-gradient">Fitness Journey</span>
            <br />
            Today
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 opacity-90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Get personalized guidance from our fitness experts. We&apos;re just
            a message away from helping you achieve your goals!
          </p>

          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 md:mb-12 px-4"
          >
            <motion.a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-primary flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-white font-bold rounded-2xl text-base sm:text-lg shadow-glow hover:shadow-glow-hover w-full sm:w-auto"
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
              Message Us on WhatsApp
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-secondary flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-10 py-4 sm:py-5 font-bold rounded-2xl text-base sm:text-lg w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-darkBlue"
            >
              <FaPhone className="text-xl sm:text-2xl" />
              Call Us Now
            </motion.a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="opacity-80">Quick responses within 15 minutes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="opacity-80">Speak directly with our experts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="opacity-80">Get detailed information package</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 opacity-80 text-lg"
          >
            ⭐ Join 10,000+ satisfied members who transformed their lives with
            us
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
