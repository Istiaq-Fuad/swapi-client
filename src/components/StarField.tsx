"use client";

import { useEffect, useState } from "react";

export default function Starfield() {
  const [stars, setStars] = useState<Array<{ top: string; left: string }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 opacity-30">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            animation: `twinkle ${Math.random() * 5 + 2}s infinite`,
          }}
        ></div>
      ))}
    </div>
  );
}
