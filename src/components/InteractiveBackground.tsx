import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  color: string;
}

interface InteractiveBackgroundProps {
  isDark?: boolean;
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ isDark = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDarkRef = useRef<boolean>(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position and velocity for the flashlight glow and particle splatter
    const mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
      prevX: width / 2,
      prevY: height / 3,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Greenish theme glowing colors
    const darkColors = ['#4CAF50', '#81C784', '#A5D6A7', '#66BB6A', '#2E7D32', '#00E676'];
    const lightColors = ['#2E7D32', '#388E3C', '#4CAF50', '#1B5E20', '#00C853', '#43A047'];

    // Initialize floating green light particles
    const particleCount = Math.min(Math.floor((width * height) / 9500), 110);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseVx = (Math.random() - 0.5) * 0.6;
      const baseVy = (Math.random() - 0.5) * 0.6 - 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        radius: Math.random() * 2.5 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.2,
        alpha: Math.random() * 0.4 + 0.2,
        color: darkColors[Math.floor(Math.random() * darkColors.length)],
      });
    }

    // Animation Loop
    const render = () => {
      const currentIsDark = isDarkRef.current;
      const palette = currentIsDark ? darkColors : lightColors;

      // Calculate mouse speed for splatter effect
      const mouseVx = mouse.x - mouse.prevX;
      const mouseVy = mouse.y - mouse.prevY;
      const mouseSpeed = Math.sqrt(mouseVx * mouseVx + mouseVy * mouseVy);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      // Smooth lerp for flashlight cursor movement
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // Background base fill
      ctx.fillStyle = currentIsDark ? '#061008' : '#eef8f1';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle ambient background glow
      const ambientGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        100,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );

      if (currentIsDark) {
        ambientGradient.addColorStop(0, 'rgba(13, 26, 15, 0.8)');
        ambientGradient.addColorStop(1, 'rgba(5, 12, 6, 1)');
      } else {
        ambientGradient.addColorStop(0, 'rgba(215, 240, 220, 0.8)');
        ambientGradient.addColorStop(1, 'rgba(238, 248, 241, 1)');
      }
      ctx.fillStyle = ambientGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw interactive Flashlight Beam following cursor (smaller, focused spotlight as requested)
      const flashlightRadius = Math.min(Math.max(width * 0.11, 125), 175);
      const splatterRadius = flashlightRadius * 1.15;
      const flashGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        flashlightRadius
      );

      if (currentIsDark) {
        flashGradient.addColorStop(0, 'rgba(76, 175, 80, 0.35)'); // Crisp emerald core for smaller beam
        flashGradient.addColorStop(0.35, 'rgba(46, 125, 50, 0.15)'); // Forest mid glow
        flashGradient.addColorStop(0.7, 'rgba(27, 94, 32, 0.04)'); // Outer soft aura
        flashGradient.addColorStop(1, 'rgba(6, 16, 8, 0)'); // Fade to bg
      } else {
        flashGradient.addColorStop(0, 'rgba(46, 125, 50, 0.28)'); // Crisp green core in light mode
        flashGradient.addColorStop(0.35, 'rgba(76, 175, 80, 0.12)'); // Mid soft glow
        flashGradient.addColorStop(0.7, 'rgba(129, 199, 132, 0.03)'); // Outer aura
        flashGradient.addColorStop(1, 'rgba(238, 248, 241, 0)'); // Fade
      }

      ctx.save();
      ctx.globalCompositeOperation = currentIsDark ? 'screen' : 'source-over';
      ctx.fillStyle = flashGradient;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Update and draw floating green light particles
      particles.forEach((p, index) => {
        // Calculate distance to flashlight cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Particle splatter & interaction in small area around cursor
        if (dist < splatterRadius && dist > 1) {
          const factor = (1 - dist / splatterRadius);
          p.alpha = Math.min(p.baseAlpha + factor * 0.8, 1.0);
          
          // Splatter outwards when cursor moves near particle
          if (mouseSpeed > 0.4) {
            const splatterForce = Math.min(mouseSpeed * 0.18, 5.5) * factor;
            p.vx += (dx / dist) * splatterForce + (mouseVx * 0.12 * factor);
            p.vy += (dy / dist) * splatterForce + (mouseVy * 0.12 * factor);
          } else {
            // Gentle continuous repulsion and swirl when cursor is hovering still
            p.vx += (dx / dist) * factor * 0.2 + (dy / dist) * factor * 0.15;
            p.vy += (dy / dist) * factor * 0.2 - (dx / dist) * factor * 0.15;
          }
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.08;
        }

        // Apply velocity with smooth damping back to base drift velocity
        p.vx = p.vx * 0.93 + p.baseVx * 0.07;
        p.vy = p.vy * 0.93 + p.baseVy * 0.07;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Update color to match current palette dynamically
        p.color = palette[index % palette.length];

        // Draw particle with glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, dist < flashlightRadius ? p.radius * 1.3 : p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = dist < flashlightRadius ? 15 : 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
