import { useMemo } from "react";

export function Embers({ count = 40 }: { count?: number }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        duration: 5 + Math.random() * 8,
        delay: Math.random() * 8,
        size: 2 + Math.random() * 4,
        drift: (Math.random() - 0.5) * 200,
        key: i,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <span
          key={e.key}
          className="ember"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            ["--drift" as never]: `${e.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
