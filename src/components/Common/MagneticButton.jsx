import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', onClick, href, target, rel, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Limit maximum pull offset to 8px
    const maxPull = 8;
    const pullX = Math.max(-maxPull, Math.min(maxPull, distanceX * 0.2));
    const pullY = Math.max(-maxPull, Math.min(maxPull, distanceY * 0.2));

    setPosition({ x: pullX, y: pullY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
