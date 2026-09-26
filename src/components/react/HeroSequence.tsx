import React, { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 250;
const FRAME_PATH = (n: number) =>
  `/Frames/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

// Preload all images up front, outside the component, so they survive re-mounts
const images: HTMLImageElement[] = [];
let preloadStarted = false;

function preloadAll() {
  if (preloadStarted) return;
  preloadStarted = true;
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = FRAME_PATH(i);
    images[i - 1] = img;
  }
}

interface Props {
  /** 0–1, driven externally by the scroll observer in HeroSection */
  progress: number;
}

export default function HeroSequence({ progress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastDrawnFrameRef = useRef(-1);

  // Preload on first component mount
  useEffect(() => {
    preloadAll();
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const idx = frameIndexRef.current;
    if (idx === lastDrawnFrameRef.current) return;
    lastDrawnFrameRef.current = idx;

    const img = images[idx];
    if (!img || !img.complete || !img.naturalWidth) return;

    // Fit image inside canvas preserving aspect ratio (contain)
    const cw = canvas.width;
    const ch = canvas.height;
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;

    let dx = 0, dy = 0, dw = cw, dh = ch;

    if (ir > cr) {
      dw = cw;
      dh = cw / ir;
      dy = (ch - dh) / 2;
    } else {
      dh = ch;
      dw = ch * ir;
      dx = (cw - dw) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh);
  }, []);

  // Update frame index when progress changes, schedule a rAF draw
  useEffect(() => {
    const clamped = Math.max(0, Math.min(1, progress));
    const idx = Math.round(clamped * (TOTAL_FRAMES - 1));
    frameIndexRef.current = idx;

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(draw);
  }, [progress, draw]);

  // Resize handler — keep canvas pixel-perfect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (
          canvas.width !== Math.round(width) ||
          canvas.height !== Math.round(height)
        ) {
          canvas.width = Math.round(width);
          canvas.height = Math.round(height);
          lastDrawnFrameRef.current = -1;
          if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(draw);
        }
      }
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Mithera sweets animation — scroll to watch"
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
