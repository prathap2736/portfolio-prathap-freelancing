import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if non-touch desktop device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('data-cursor') === 'hover' ||
        target.closest('[data-cursor="hover"]')
      ) {
        setCursorVariant('hover');
      } else if (target.closest('.project-card') || target.getAttribute('data-cursor') === 'project') {
        setCursorVariant('project');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      border: '1.5px solid rgba(0, 240, 255, 0.6)',
      backgroundColor: 'rgba(0, 240, 255, 0.05)',
      transition: { type: 'spring', mass: 0.2, stiffness: 400, damping: 25 },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      border: '2px solid rgba(0, 240, 255, 0.9)',
      backgroundColor: 'rgba(0, 240, 255, 0.15)',
      transition: { type: 'spring', mass: 0.2, stiffness: 350, damping: 20 },
    },
    project: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      border: '2px solid rgba(138, 43, 226, 0.9)',
      backgroundColor: 'rgba(138, 43, 226, 0.2)',
      transition: { type: 'spring', mass: 0.25, stiffness: 300, damping: 20 },
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: '#00f0ff',
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: '#00ff9d',
      scale: 1.5,
    },
    project: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: '#8a2be2',
      scale: 2,
    },
  };

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
        animate={cursorVariant}
        variants={variants}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] hidden lg:block shadow-[0_0_10px_#00f0ff]"
        animate={cursorVariant}
        variants={dotVariants}
        transition={{ type: 'spring', mass: 0.1, stiffness: 800, damping: 30 }}
      />
    </>
  );
}
