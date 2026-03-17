import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-03-31T23:59:59").getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs md:text-sm">
        <span className="text-accent tracking-[0.2em] uppercase font-medium">Divine Days Offer</span>
        <div className="flex items-center gap-1 font-sans tabular-nums text-foreground">
          <span className="text-accent mr-2 hidden md:inline">Ends in:</span>
          <span>{pad(timeLeft.days)}D</span>
          <span className="text-accent/50">:</span>
          <span>{pad(timeLeft.hours)}H</span>
          <span className="text-accent/50">:</span>
          <span>{pad(timeLeft.minutes)}M</span>
          <span className="text-accent/50">:</span>
          <span>{pad(timeLeft.seconds)}S</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
