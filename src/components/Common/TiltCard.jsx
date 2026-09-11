import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 5,
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024) {
      setIsTouch(true);
    }
  }, []);

  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Invert y to rotate on X-axis naturally
    x.set(yPct * -maxTilt);
    y.set(xPct * maxTilt);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: 1000,
        rotateX: isTouch ? 0 : x,
        rotateY: isTouch ? 0 : y,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative rounded-3xl glass-card border border-white/10 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
