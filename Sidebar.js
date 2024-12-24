import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ setActivePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [time, setTime] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".sidebar") &&
        !event.target.closest(".toggle-btn")
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="clock">{time}</div>
      </header>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <button
              onClick={() => {
                setActivePage("dashboard");
                closeSidebar();
              }}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePage("subjects");
                closeSidebar();
              }}
            >
              Subjects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePage("settings");
                closeSidebar();
              }}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePage("contact");
                closeSidebar();
              }}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
