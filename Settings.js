import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [theme, setTheme] = useState("System Mode"); // Default theme
  const [notifications, setNotifications] = useState(true); // Notifications toggle

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    alert(`Theme changed to: ${e.target.value}`);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
    alert(`Notifications turned ${notifications ? "Off" : "On"}`);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      {/* Theme Selector */}
      <div className="settings-section">
        <h2>Theme</h2>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="theme-selector"
        >
          <option value="Light Mode">Light Mode</option>
          <option value="Dark Mode">Dark Mode</option>
          <option value="System Mode">System Mode</option>
        </select>
      </div>

      {/* Notifications Toggle */}
      <div className="settings-section">
        <h2>Notifications</h2>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={notifications}
            onChange={toggleNotifications}
          />
          <span className="slider"></span>
        </label>
        <p>
          {notifications ? "Notifications are On" : "Notifications are Off"}
        </p>
      </div>
    </div>
  );
};

export default Settings;
