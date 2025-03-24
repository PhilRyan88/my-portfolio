import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import dp from "../assets/dp.jpg";
import gsap from "gsap";
import "../styles/Home.css";
import Loader from "./Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false); // Controls when to show content
  const lettersRef = useRef([]);
  const titleRef = useRef(null);
  const img = useRef(null);

  useEffect(() => {
    gsap.to(".loader", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      onComplete: () => setIsLoading(false),
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Show "Web Developer" first, then zoom out
      gsap.fromTo(
        titleRef.current,
        { scale: 5, opacity: 1 },
        {
          scale: 1,
          duration: 2.5,
          opacity: 1,
          ease: "power2.out",
          onComplete: () => setShowContent(true),
        }
      );

      // Flip animation for each letter
      gsap.fromTo(
        lettersRef.current,
        { rotateX: 90, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [isLoading]);

  useEffect(() => {
    if (showContent) {
      // Animate the image and other content when Web Developer text finishes
      gsap.from(img.current, { x: -100, duration: 0.5, opacity: 0 });
      gsap.to(img.current, { x: 0, duration: 1, opacity: 1 });
    }
  }, [showContent]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-container">
          {!showContent && (
            <div className="fullscreen-title" ref={titleRef}>
              {"Web Developer".split("").map((char, index) => (
                <span
                  key={index}
                  ref={(el) => (lettersRef.current[index] = el)}
                  className="letter"
                >
                  {char}
                </span>
              ))}
            </div>
          )}

          {showContent && (
            <>
              <Navbar />
              <img ref={img} className="dp" src={dp} alt="" width="220rem" />
              <div className="description">
                <div className="web-dev">
                  {"Web Developer".split("").map((char, index) => (
                    <span key={index} className="letter">
                      {char}
                    </span>
                  ))}
                </div>
                <p>
                  I'm a creative developer with a passion for blending technical
                  expertise with creative edge. Driven by curiosity, I always
                  try to explore and learn new skills.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
