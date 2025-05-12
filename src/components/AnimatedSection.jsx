// components/AnimatedSection.jsx
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, shouldScrollToTop, onComplete, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay }}
      onAnimationComplete={() => {
        if (shouldScrollToTop) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (onComplete) onComplete();
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
