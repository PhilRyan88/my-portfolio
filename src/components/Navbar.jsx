import React, { useRef, useEffect } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import Works from "./Works";
import { Power3, gsap } from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const items = useRef(null);
  useEffect(() => {
    gsap.from(".li", {
      y: -20,
      duration: 0.2,
      opacity: 0,
      ease: Power3.in,
    });
    gsap.to(".li", {
      opacity: 1,
      y: 25,
      duration: 0.8,

      stagger: 0.3,
      ease: Power3.ease,
    });
  }, []);
  return (
    <div className="nav-container">
      <ul ref={items} className="nav-items">
        <li className="li">Home</li>
        <li className="li">
          <button className="service-btn" onClick={() => navigate("/services")}>
            Services
          </button>
        </li>
        <li className="li">Works</li>
        <li className="li">Connect</li>
      </ul>
      <Works />
    </div>
  );
};

export default Navbar;
