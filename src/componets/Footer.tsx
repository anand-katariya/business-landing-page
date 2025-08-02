"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

// Dynamic data from /data/footer.js
const footerData = {
  contact: {
    title: "Contact Us",
    items: [
      { icon: <FaPhone />, text: "+1 (555) 123-4567" },
      { icon: <FaEnvelope />, text: "info@fitlife.com" },
      { icon: <FaMapMarkerAlt />, text: "123 Fitness St, City, ST 12345" },
    ],
  },
  links: {
    title: "Quick Links",
    items: [
      { text: "Home", href: "/" },
      { text: "Classes", href: "/classes" },
      { text: "Trainers", href: "/trainers" },
      { text: "Membership", href: "/membership" },
      { text: "Contact", href: "/contact" },
    ],
  },
  social: {
    title: "Connect With Us",
    items: [
      { icon: <FaFacebook />, href: "https://facebook.com" },
      { icon: <FaInstagram />, href: "https://instagram.com" },
      { icon: <FaYoutube />, href: "https://youtube.com" },
      { icon: <FaWhatsapp />, href: "https://wa.me/15551234567" },
    ],
  },
};

const Footer = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-secondary text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-hover/5" />

      <div className="container mx-auto px-6 relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-2xl font-bold">
                Fit<span className="text-gradient">Life</span>
              </h3>
            </div>
            <p className="text-white/80 mb-8 leading-relaxed">
              Transform your life with our state-of-the-art facilities and
              expert trainers. Join thousands of satisfied members who achieved
              their fitness goals.
            </p>
            <h4 className="text-xl font-bold mb-6">
              {footerData.contact.title}
            </h4>
            <ul className="space-y-4">
              {footerData.contact.items.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-accent-primary/20 rounded-full flex items-center justify-center group-hover:bg-accent-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-accent-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8">
              {footerData.links.title}
            </h3>
            <ul className="space-y-4">
              {footerData.links.items.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-white/80 hover:text-accent-primary transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-accent-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.text}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter signup */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-accent-primary transition-colors"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-primary text-white rounded-2xl font-semibold hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Media Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8">
              {footerData.social.title}
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Follow us on social media for fitness tips, workout videos, and
              community updates.
            </p>
            <div className="flex gap-4 mb-8">
              {footerData.social.items.map((item, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center text-2xl hover:bg-gradient-primary hover:border-accent-primary hover:scale-110 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Social media link ${index}`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            {/* Business hours */}
            <div>
              <h4 className="text-lg font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/20 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70">
              © {new Date().getFullYear()} FitLife. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-white/70 hover:text-accent-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/70 hover:text-accent-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-primary text-white rounded-2xl shadow-glow hover:shadow-glow-hover transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp className="text-xl" />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
