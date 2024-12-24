import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  // Simulating admin decision for account status
  const [accountStatus] = useState("Active"); // Options: "Active" or "Inactive"

  return (
    <div className="dashboard-container">
      {/* Left Div - Student Details */}
      <div className="left-section">
        <div className="heading-row">
          <h2>Student Details</h2>
        </div>
        <ul className="student-details">
          <li>
            <strong>Name:</strong> John Doe
          </li>
          <li>
            <strong>Current Year:</strong> Third Year
          </li>
          <li>
            <strong>D.O.B:</strong> 01/01/2000
          </li>
          <li>
            <strong>Blood Group:</strong> O+
          </li>
          <li>
            <strong>Mobile Number:</strong> 1234567890
          </li>
          <li>
            <strong>Email:</strong> johndoe@example.com
          </li>
          <li>
            <strong>Account:</strong>
            <span className={`account-status ${accountStatus.toLowerCase()}`}>
              {accountStatus}
            </span>
          </li>
        </ul>
      </div>

      {/* Right Div - News Updates */}
      <div className="right-section">
        <h2>News Updates</h2>
        <ul className="news-updates">
          <li>Upcoming Exam: Semester 5 - Dec 25, 2024</li>
          <li>Festival Holiday: Jan 1, 2025</li>
          <li>Workshop: Yoga and Wellness - Jan 10, 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
