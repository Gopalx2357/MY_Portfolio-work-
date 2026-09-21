"use client";

import { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Stars generation
    const starCount = Math.floor((width * height) / 3000);
    const stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      color: string;
    }[] = [];

    const colors = ["#ffffff", "#8b5cf6", "#6366f1", "#22d3ee", "#e0e7ff"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Shooting stars
    const shootingStars: {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
    }[] = [];

    const createShootingStar = () => {
      if (Math.random() < 0.03 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height / 2),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 4,
          angle: Math.PI / 4,
          alpha: 1,
        });
      }
    };

    let rotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ambient space gradient
      const bgGradient = ctx.createRadialGradient(
        width / 2,
        height / 3,
        100,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGradient.addColorStop(0, "#0d0a1a");
      bgGradient.addColorStop(0.5, "#070712");
      bgGradient.addColorStop(1, "#040407");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Twinkling Stars
      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Pulse alpha
        star.alpha += (Math.random() - 0.5) * 0.02;
        star.alpha = Math.max(0.1, Math.min(0.9, star.alpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.radius > 1 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      });

      // Draw Shooting Stars
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const endX = s.x - s.length * Math.cos(s.angle);
        const endY = s.y + s.length * Math.sin(s.angle);

        const grad = ctx.createLinearGradient(s.x, s.y, endX, endY);
        grad.addColorStop(0, "rgba(34, 211, 238, 1)");
        grad.addColorStop(0.5, "rgba(139, 92, 246, 0.5)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);
        s.alpha -= 0.015;

        if (s.alpha <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      // Draw Stylized Rotating Earth Globe Wireframe & Glow in top-right background
      rotationAngle += 0.003;
      const globeX = width * 0.85;
      const globeY = height * 0.25;
      const globeRadius = Math.min(width, height) * 0.22;

      ctx.save();
      ctx.translate(globeX, globeY);

      // Globe Outer Glow Atmosphere
      const globeGlow = ctx.createRadialGradient(0, 0, globeRadius * 0.8, 0, 0, globeRadius * 1.3);
      globeGlow.addColorStop(0, "rgba(139, 92, 246, 0.15)");
      globeGlow.addColorStop(0.5, "rgba(34, 211, 238, 0.1)");
      globeGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = globeGlow;
      ctx.beginPath();
      ctx.arc(0, 0, globeRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Outer Ring / Orbit
      ctx.rotate(rotationAngle * 0.5);
      ctx.beginPath();
      ctx.ellipse(0, 0, globeRadius * 1.4, globeRadius * 0.35, Math.PI / 6, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Earth Sphere outline
      ctx.beginPath();
      ctx.arc(0, 0, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Latitude lines
      for (let i = -3; i <= 3; i++) {
        if (i === 0) continue;
        const rY = (i / 4) * globeRadius;
        const rX = Math.sqrt(Math.max(0, globeRadius * globeRadius - rY * rY));
        ctx.beginPath();
        ctx.ellipse(0, rY, rX, rX * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(99, 102, 241, 0.12)";
        ctx.stroke();
      }

      // Longitude lines with rotation
      for (let i = 0; i < 6; i++) {
        const angle = rotationAngle + (i * Math.PI) / 6;
        const cos = Math.cos(angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, globeRadius * Math.abs(cos), globeRadius, Math.PI / 2, 0, Math.PI * 2);
        ctx.strokeStyle = cos > 0 ? "rgba(34, 211, 238, 0.15)" : "rgba(139, 92, 246, 0.08)";
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
    />
  );
}
