'use client';

import { useRef } from 'react';

type LottieAnimationItem = {
  play: () => void;
  pause: () => void;
  goToAndStop: (value: number, isFrame: boolean) => void;
  destroy: () => void;
};

type LottiePlayer = {
  loadAnimation: (params: {
    container: HTMLElement;
    renderer: 'svg' | 'canvas' | 'html';
    loop: boolean;
    autoplay: boolean;
    path: string;
    rendererSettings?: Record<string, unknown>;
  }) => LottieAnimationItem;
};

type DonateHeartProps = {
  path?: string;
  size?: number;
};

export default function DonateHeart({ path = '/assets/heart.json', size = 16 }: DonateHeartProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<LottieAnimationItem | null>(null);
  const playerRef = useRef<LottiePlayer | null>(null);
  const isReadyRef = useRef(false);

  const ensureLoaded = async () => {
    try {
      if (!playerRef.current) {
        const mod = await import('lottie-web');
        const lottie = (mod as any).default ?? (mod as any);
        playerRef.current = lottie as LottiePlayer;
      }
      if (!animRef.current && containerRef.current && playerRef.current) {
        const anim = playerRef.current.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: false,
          path,
          rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
        });
        animRef.current = anim;
        isReadyRef.current = false;
        // Wait until DOM is built to seek a frame
        (anim as any).addEventListener?.('DOMLoaded', () => {
          try {
            anim.goToAndStop(0, true);
          } catch {}
          isReadyRef.current = true;
        });
      }
    } catch {
      // If lottie-web is not available (not installed), do nothing.
    }
  };

  const handleEnter = async () => {
    await ensureLoaded();
    if (isReadyRef.current) {
      animRef.current?.play();
    } else {
      // If not yet ready, try to play shortly after DOMLoaded callback
      setTimeout(() => animRef.current?.play(), 50);
    }
  };

  const handleLeave = () => {
    try {
      animRef.current?.goToAndStop(0, true);
    } catch {}
  };

  return (
    <span
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="inline-block align-middle"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div ref={containerRef} style={{ width: size, height: size }} />
    </span>
  );
}
