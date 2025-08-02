"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaCheckCircle, FaUsers, FaTrophy, FaClock } from "react-icons/fa";
import Image from "next/image";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const stats = [
    { icon: <FaUsers />, number: "10K+", label: "Happy Members" },
    { icon: <FaTrophy />, number: "15+", label: "Years Experience" },
    { icon: <FaClock />, number: "24/7", label: "Support Available" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-darkBlue/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Image Column - Left Side */}
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-hover/20 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern gym facility with state-of-the-art equipment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video lg:aspect-auto"
                  priority
                />
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">95%</div>
                    <div className="text-text-primary/70 text-sm">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column - Right Side */}
          <motion.div variants={textVariants} className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-semibold mb-6">
              🏆 About Our Excellence
            </span>
            
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-8 leading-tight">
              Your Journey to{" "}
              <span className="text-gradient">Fitness Excellence</span>
            </h2>

            <div className="space-y-6 text-text-primary/90 mb-10 text-lg leading-relaxed">
              <p>
                Founded in 2010, we&apos;ve been transforming lives through
                fitness with our state-of-the-art facilities and expert
                trainers. Our mission is to make premium fitness accessible to
                everyone.
              </p>

              <p>
                With over 10,000 square feet of training space, cutting-edge
                equipment, and a supportive community, we provide the perfect
                environment to achieve your fitness goals.
              </p>

              <p>
                Our certified trainers bring an average of 8 years experience,
                specializing in everything from weight loss to competitive
                athletic training.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-text-primary/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/about"
                className="btn-primary flex items-center gap-3 px-8 py-4 text-white font-bold rounded-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <FaArrowRight />
              </motion.a>

              <motion.a
                href="/tour"
                className="btn-secondary flex items-center gap-3 px-8 py-4 font-bold rounded-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take a Virtual Tour
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
