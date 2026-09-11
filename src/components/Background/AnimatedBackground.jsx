import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle setup
    const particleCount = Math.min(Math.floor(width / 25), 60);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        color: i % 2 === 0 ? 'rgba(0, 240, 255, ' : 'rgba(138, 43, 226, ',
        opacity: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Mouse glow target
    const mouse = { x: width / 2, y: height / 2, currentX: width / 2, currentY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Smooth mouse follow interpolation
      mouse.currentX += (mouse.x - mouse.currentX) * 0.05;
      mouse.currentY += (mouse.y - mouse.currentY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw mouse spotlight glow
      const radialGradient = ctx.createRadialGradient(
        mouse.currentX,
        mouse.currentY,
        0,
        mouse.currentX,
        mouse.currentY,
        450
      );
      radialGradient.addColorStop(0, 'rgba(0, 240, 255, 0.06)');
      radialGradient.addColorStop(0.5, 'rgba(112, 0, 255, 0.03)');
      radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particles & subtle line connections
      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.003;
        const currentOpacity = Math.max(0.1, Math.min(0.6, p.opacity));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.fill();

        // Connect near particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Animated Gradient Mesh Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-50"></div>

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
