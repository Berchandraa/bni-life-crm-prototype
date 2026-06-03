import { useEffect, useRef } from "react";

type LightRaysProps = {
  className?: string;
  color?: string;
  density?: number;
  speed?: number;
};

export function LightRays({
  className = "",
  color = "255, 255, 255",
  density = 9,
  speed = 0.22,
}: LightRaysProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const context = canvas.getContext("2d");
    if (!context) return;

    let frameId = 0;
    let elapsed = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawRay = (index: number) => {
      const centerX = width * 0.5;
      const originY = -height * 0.05;
      const drift = Math.sin(elapsed * speed + index * 0.82) * 54;
      const startX = centerX + drift + (index - density / 2) * 30;
      const rayWidth = 92 + (index % 4) * 34;
      const endX = centerX + (index - density / 2) * 150 + drift * 1.8;
      const alpha = 0.035 + (index % 3) * 0.018;

      const gradient = context.createLinearGradient(startX, originY, endX, height * 0.9);
      gradient.addColorStop(0, `rgba(${color}, ${alpha * 1.8})`);
      gradient.addColorStop(0.34, `rgba(${color}, ${alpha})`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);

      context.beginPath();
      context.moveTo(startX - rayWidth * 0.16, originY);
      context.lineTo(startX + rayWidth * 0.16, originY);
      context.lineTo(endX + rayWidth, height);
      context.lineTo(endX - rayWidth, height);
      context.closePath();
      context.fillStyle = gradient;
      context.fill();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      for (let index = 0; index < density; index += 1) {
        drawRay(index);
      }

      const glow = context.createRadialGradient(width * 0.5, height * 0.08, 0, width * 0.5, height * 0.08, width * 0.48);
      glow.addColorStop(0, `rgba(${color}, 0.12)`);
      glow.addColorStop(0.55, `rgba(${color}, 0.035)`);
      glow.addColorStop(1, `rgba(${color}, 0)`);
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      elapsed += 1 / 60;
      if (!mediaQuery.matches) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    resize();
    render();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [color, density, speed]);

  return <canvas ref={canvasRef} className={`light-rays ${className}`} aria-hidden="true" />;
}
