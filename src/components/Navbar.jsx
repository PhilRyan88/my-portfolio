import React, { useRef, useEffect } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

import { Power3, gsap } from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const items = useRef(null);
  useEffect(() => {
    gsap.to(items.current, {
      x: 20,
      duration: 1,

      delay: 0.5,
      opacity: 2,
      ease: Power3.ease,
    });
  }, []);
  return (
    <div className="nav-container">
      <ul ref={items} className="nav-items">
        <li>Home</li>
        <li>
          <button className="service-btn" onClick={() => navigate("/services")}>
            Services
          </button>
        </li>
        <li>Works</li>
        <li>Connect</li>
      </ul>
    </div>
  );
};

export default Navbar;
