import React, { useState } from "react";
import "./Subjects.css";

const Subjects = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (year) => {
    setOpenDropdown((prev) => (prev === year ? null : year));
  };

  return (
    <div className="page-container">
      <h1>Subjects</h1>
      <div className="subjects">
        {/* First Year */}
        <div className="year" onClick={() => toggleDropdown("firstYear")}>
          <span>First Year</span>
          <span className="dropdown-icon">▼</span>
        </div>
        {openDropdown === "firstYear" && (
          <ul className="dropdown">
            <li>Anatomy</li>
            <li>Physiology</li>
            <li>Biochemistry</li>
            <li>Philosophy of Nature Cure</li>
            <li>Principles of Yoga</li>
          </ul>
        )}

        {/* Second Year */}
        <div className="year" onClick={() => toggleDropdown("secondYear")}>
          <span>Second Year</span>
          <span className="dropdown-icon">▼</span>
        </div>
        {openDropdown === "secondYear" && (
          <ul className="dropdown">
            <li>Pathology</li>
            <li>Microbiology</li>
            <li>Community Medicine</li>
            <li>Yoga Philosophy</li>
            <li>Basic Pharmacology</li>
            <li>Colour Therapy & Magneto Biology</li>
            <li>Forensic Medicine & Toxicology</li>
          </ul>
        )}

        {/* Third Year */}
        <div className="year" onClick={() => toggleDropdown("thirdYear")}>
          <span>Third Year</span>
          <span className="dropdown-icon">▼</span>
        </div>
        {openDropdown === "thirdYear" && (
          <ul className="dropdown">
            <li>Manipulative Therapies</li>
            <li>Acupuncture and Acupressure</li>
            <li>Yoga and Its Applications</li>
            <li>Nutrition and Medical Herbs</li>
            <li>Naturopathy Diagnosis</li>
            <li>Modern Diagnosis</li>
            <li>Psychology and Basic Psychiatry</li>
          </ul>
        )}

        {/* Fourth Year */}
        <div className="year" onClick={() => toggleDropdown("fourthYear")}>
          <span>Fourth Year</span>
          <span className="dropdown-icon">▼</span>
        </div>
        {openDropdown === "fourthYear" && (
          <ul className="dropdown">
            <li>Fasting Therapy & Dietetics</li>
            <li>Obstetrics & Gynecology</li>
            <li>Yoga Therapy</li>
            <li>Hydrotherapy & Mud Therapy</li>
            <li>Physical Medicine & Rehabilitation</li>
            <li>First Aid & Emergency Medicine</li>
            <li>Clinical Naturopathy</li>
            <li>Research Methodology & Recent Advances</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Subjects;
