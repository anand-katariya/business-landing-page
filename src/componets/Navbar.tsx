"use client";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

const socialIcons = [
  { icon: <FaWhatsapp />, path: "https://wa.me/yournumber" },
  { icon: <FaFacebook />, path: "https://facebook.com/yourpage" },
  { icon: <FaInstagram />, path: "https://instagram.com/yourhandle" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.nav
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass shadow-lg backdrop-blur-md"
          : "py-6 bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          variants={linkVariants}
          custom={0}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl sm:text-3xl font-bold">
            <span className="text-text-primary">Fit</span>
            <span className="text-gradient">Life</span>
            <span className="text-xl sm:text-2xl ml-1">💪</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.li key={link.name} variants={linkVariants} custom={i + 1}>
                <Link
                  href={link.path}
                  className="relative group font-medium transition-all duration-300 hover:text-accent-primary text-text-primary"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={linkVariants}
            custom={navLinks.length + 1}
            className="flex space-x-4 ml-8"
          >
            {socialIcons.map((social, i) => (
              <motion.a
                key={i}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-accent-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-accent-primary/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          variants={linkVariants}
          custom={navLinks.length + 1}
          className="md:hidden"
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-text-primary focus:outline-none p-2 rounded-lg hover:bg-accent-primary/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass backdrop-blur-md overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className="block py-3 font-medium hover:text-accent-primary transition-all duration-300 text-text-primary border-b border-white/10 hover:border-accent-primary/30"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <div className="flex space-x-6 py-4 pt-6">
                {socialIcons.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-accent-primary transition-all duration-300 p-3 rounded-full hover:bg-accent-primary/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
