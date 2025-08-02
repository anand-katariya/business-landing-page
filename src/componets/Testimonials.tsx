"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

// Dynamic data from /data/testimonials.js
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    quote:
      "This gym transformed my life. The trainers are knowledgeable and the community is incredibly supportive. I've never felt better!",
    photo: "/photos/sarah.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marathon Runner",
    quote:
      "The personalized training program helped me shave 15 minutes off my personal best. Highly recommended for serious athletes!",
    photo: "/photos/michael.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    quote:
      "Clean facilities, top-notch equipment, and friendly staff. My go-to place for cross-training and strength building.",
    photo: "/photos/emma.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Personal Trainer",
    quote:
      "Even as a trainer myself, I learn new techniques every time I visit. World-class facility with amazing energy!",
    photo: "/photos/david.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Nutritionist",
    quote:
      "The perfect combination of great equipment and expert guidance. Love the nutrition workshops and meal planning support!",
    photo: "/photos/lisa.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: none, 1: left, -1: right
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, []);

  // Auto-rotate every 4 seconds when in view and not paused
  useEffect(() => {
    if (!inView || isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [inView, isPaused, handleNext]);

  // Animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Determine which testimonials to show based on screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleTestimonials = [];
  const cardsToShow = isMobile ? 1 : 3;
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    exit: { opacity: 0, x: direction === 1 ? 100 : -100 },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-darkBlue/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-semibold mb-4 md:mb-6">
            ⭐ What Our Members Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 md:mb-6">
            Real Stories, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-lg md:text-xl text-text-primary/80 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from our amazing
            community of fitness enthusiasts
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel */}
          <div className="overflow-hidden px-4">
            <div className="flex -mx-4">
              <AnimatePresence custom={direction} mode="wait">
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}-${index}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full px-2 sm:px-4 mb-6 md:mb-8"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Quote icon */}
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <FaQuoteLeft className="text-white text-2xl" />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-6">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Quote text */}
                        <p className="text-text-primary/90 mb-8 flex-grow leading-relaxed text-lg">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>

                        {/* Author info */}
                        <div className="flex items-center mt-auto pt-6 border-t border-text-primary/10">
                          <div className="w-14 h-14 rounded-full bg-gradient-primary p-0.5 mr-4">
                            <div className="w-full h-full rounded-full bg-white p-0.5">
                              <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-text-primary text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-text-primary/70 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white w-14 h-14 rounded-full shadow-card flex items-center justify-center hover:bg-accent-primary hover:text-white transition-all duration-300 z-10 group"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft className="text-lg group-hover:scale-110 transition-transform duration-300" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white w-14 h-14 rounded-full shadow-card flex items-center justify-center hover:bg-accent-primary hover:text-white transition-all duration-300 z-10 group"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight className="text-lg group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 mx-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-gradient-primary scale-125"
                  : "bg-text-primary/20 hover:bg-text-primary/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
