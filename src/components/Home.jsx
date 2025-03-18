import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import dp from "../assets/dp.jpg";
import gsap from "gsap";
import "../styles/Home.css";
// import Loader from "./Loader";
function Home() {
  const img = useRef(null);
  const tag = useRef(null);
  const cursor = useRef(null);
  useEffect(() => {
    gsap.from(img.current, {
      x: -100,
      duration: 0.2,
      opacity: 0,
    });
    gsap.to(img.current, {
      x: 1,
      duration: 1,
      opacity: 1,
    });
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.addEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div>
      {/* <Loader /> */}
      <div className="cursor" ref={cursor}></div>
      <Navbar />
      <img ref={img} className="dp" src={dp} alt="" height="250rem" />
      <div className="description">
        <span ref={tag}>Web Developer</span>
      </div>
    </div>
  );
}

export default Home;
