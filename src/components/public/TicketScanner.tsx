import { useState, useRef, useEffect } from 'react';

export default function TicketScanner() {
  const [scanning, setScanning] = useState<'idle' | 'scanning' | 'success'>('idle');
  const scannerRef = useRef<null | HTMLDivElement>(null);
  const laserRef = useRef<null | HTMLDivElement>(null);
  const progressRef = useRef<null | HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const startScan = () => {
    setScanning('scanning');
    // Reset laser position
    if (laserRef.current) {
      laserRef.current.style.top = '0%';
    }
    // Reset progress
    if (progressRef.current) {
      progressRef.current.style.width = '0%';
    }

    // Animate laser and progress
    const duration = 3000; // 3 seconds
    const startTime = performance.now();

    function step(timestamp: number) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Update laser position (top to bottom)
      if (laserRef.current) {
        laserRef.current.style.top = `${progress * 100}%`;
      }
      // Update progress bar width
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        // Animation complete
        setScanning('success');
        // Reset after 2 seconds
        setTimeout(() => {
          setScanning('idle');
          cancelAnimationFrame(animationRef.current as number);
          animationRef.current = null;
        }, 2000);
      }
    }

    animationRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-neutral-900/90 backdrop-blur-md rounded-2xl p-6 max-w-md w-full mx-auto">
      <h2 className="text-xl font-bold text-center text-foreground mb-6">
        Ticket Scanner
      </h2>

      {/* Camera Viewport */}
      <div
        ref={scannerRef}
        className="relative aspect-video bg-neutral-800/50 rounded-xl overflow-hidden mb-6"
      >
        {/* Four corner brackets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-3 h-3 bg-[var(--nvidia-green)] border-[var(--nvidia-green)]/50"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-[var(--nvidia-green)] border-[var(--nvidia-green)]/50"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-[var(--nvidia-green)] border-[var(--nvidia-green)]/50"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--nvidia-green)] border-[var(--nvidia-green)]/50"></div>
        </div>

        {/* Laser line */}
        <div
          ref={laserRef}
          className="absolute inset-x-0 h-0.5 bg-[var(--nvidia-green)]/50 transition-all duration-300 ease-out"
        ></div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-neutral-800/50 rounded-full h-2.5 overflow-hidden">
          <div
            ref={progressRef}
            className="bg-[var(--nvidia-green)] h-2.5 transition-all duration-300 ease-out"
          ></div>
        </div>
      </div>

      {/* Scan Button */}
      <button
        onClick={startScan}
        disabled={scanning === 'scanning'}
        className="w-full bg-[var(--nvidia-green)]/20 hover:bg-[var(--nvidia-green)]/30 text-[var(--nvidia-green)] font-medium px-6 py-3 rounded-lg backdrop-blur-sm border border-[var(--nvidia-green)]/50 hover:border-[var(--nvidia-green)]/100 transition-all duration-300"
      >
        {scanning === 'scanning' ? 'Scanning...' : 'Scan Tiket Fizikal'}
      </button>

      {/* Success Message */}
      {scanning === 'success' && (
        <div className="mt-4 text-center text-[var(--nvidia-green)]/80 font-medium bg-[var(--nvidia-green)]/10 rounded-lg px-4 py-3">
          Padanan Ditemui! Tiket anda mempunyai 2 nombor &apos;Hot&apos;.
        </div>
      )}
    </div>
  );
}