import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const RubberString = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const points = [
    { x: 0, y: 50 },
    { x: window.innerWidth / 2, y: 50 },
    { x: window.innerWidth, y: 50 },
  ];

  useEffect(() => {
    const updatePath = () => {
      const path = `M${points[0].x},${points[0].y} Q${points[1].x},${points[1].y} ${points[2].x},${points[2].y}`;
      pathRef.current.setAttribute("d", path);
    };

    const handleMouseMove = (e) => {
      gsap.to(points[1], {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
        onUpdate: updatePath,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    updatePath();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100px" }}>
      <svg width="100%" height="100" viewBox={`0 0 ${window.innerWidth} 100`}>
        <path
          ref={pathRef}
          stroke="yellow"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default RubberString;
