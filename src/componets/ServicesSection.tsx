"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaDumbbell,
  FaClipboardList,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

// Dynamic data from /data/services.js
const services = [
  {
    id: 1,
    title: "Monthly Plan",
    description:
      "Full access to all gym facilities with personalized workout plans updated monthly.",
    price: "$99/month",
    icon: <FaDumbbell className="text-3xl" />,
    color:
      "bg-gradient-to-br from-accent-primary/20 to-accent-hover/20 text-accent-primary",
    gradient: "from-accent-primary to-accent-hover",
  },
  {
    id: 2,
    title: "Personal Trainer",
    description:
      "One-on-one sessions with certified trainers to maximize your results.",
    price: "$299/month",
    icon: <FaClipboardList className="text-3xl" />,
    color:
      "bg-gradient-to-br from-darkBlue/20 to-accent-primary/20 text-darkBlue",
    gradient: "from-darkBlue to-accent-primary",
  },
  {
    id: 3,
    title: "Nutrition Guide",
    description:
      "Custom meal plans and nutritional counseling tailored to your goals.",
    price: "$149/month",
    icon: <FaUtensils className="text-3xl" />,
    color:
      "bg-gradient-to-br from-accent-hover/20 to-accent-primary/20 text-accent-hover",
    gradient: "from-accent-hover to-accent-primary",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-darkBlue/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 px-4"
        >
          <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-semibold mb-4 md:mb-6">
            💪 Our Premium Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 md:mb-6">
            Choose Your <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-text-primary/80 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Customized fitness solutions designed to help you achieve your goals
            faster and more effectively
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              className="group relative"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-text-primary/5 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon container */}
                <div
                  className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-text-primary/80 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-gradient">
                    {service.price}
                  </span>
                  <motion.button
                    className="p-3 rounded-full bg-accent-primary/10 text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaArrowRight />
                  </motion.button>
                </div>

                <motion.button
                  className="w-full py-4 bg-gradient-primary text-white font-bold rounded-2xl hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>

                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-transparent hover:border-accent-primary/30 rounded-3xl pointer-events-none transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-text-primary/70 mb-6">
            Not sure which plan is right for you?
          </p>
          <motion.a
            href="/consultation"
            className="btn-secondary inline-flex items-center gap-3 px-8 py-4 font-bold rounded-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
