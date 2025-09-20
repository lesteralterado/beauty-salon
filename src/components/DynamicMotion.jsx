import React from 'react';
import useFramerMotion from '../utils/useFramerMotion';

// DynamicMotion: renders a motion element when framer-motion is loaded,
// otherwise renders the corresponding native element without animations.
const DynamicMotion = ({ as = 'div', children, ...motionProps }) => {
  const fm = useFramerMotion();

  // Determine tag to render when motion is not available
  const Tag = typeof as === 'string' ? as : as;

  if (!fm) {
    // Render plain element while framer-motion is loading
    return React.createElement(Tag, motionProps, children);
  }

  const { motion } = fm;
  // if motion and requested element exists (e.g., motion.div, motion.button)
  const MotionTag = motion && motion[as] ? motion[as] : (motion ? motion.div : Tag);

  return React.createElement(MotionTag, motionProps, children);
};

export default DynamicMotion;
