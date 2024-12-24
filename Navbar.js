import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="sidebar-toggle">☰</button>
        <span className="navbar-brand">AMS Portal</span>
      </div>
      <div className="navbar-right">{time}</div>
    </nav>
  );
};

export default Navbar;
