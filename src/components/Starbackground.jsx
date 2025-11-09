import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 6000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // 1px - 4px
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2, // seconds
        animationDelay: Math.random() * 6,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
