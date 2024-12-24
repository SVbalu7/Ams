import React, { useState } from "react";
import Calendar from "./src/Components/Calendar.js"; // Assuming Calendar component is reusable
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [news, setNews] = useState([
    "Upcoming Exams",
    "Holiday Notice: Jan 1, 2025",
    "Yoga Workshop on Jan 10, 2025",
  ]);
  const [newNews, setNewNews] = useState("");

  const handleAddNews = () => {
    if (newNews.trim() !== "") {
      setNews([...news, newNews]);
      setNewNews("");
    }
  };

  const handleRemoveNews = (index) => {
    setNews(news.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-dashboard">
      <div className="left-section">
        <h2>Editable Calendar</h2>
        <Calendar editable={true} />
      </div>
      <div className="right-section">
        <h2>News Updates</h2>
        <ul className="news-list">
          {news.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => handleRemoveNews(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="add-news">
          <input
            type="text"
            value={newNews}
            onChange={(e) => setNewNews(e.target.value)}
            placeholder="Add new update"
          />
          <button onClick={handleAddNews}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
