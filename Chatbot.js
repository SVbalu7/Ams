import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [issue, setIssue] = useState("");

  const chatbotFormRef = useRef(null);
  const chatbotContainerRef = useRef(null);

  const toggleChatbotForm = () => {
    setIsOpen(!isOpen);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !year || !issue) {
      alert("Please fill out all fields!");
      return;
    }

    const templateParams = {
      name,
      year,
      issue,
    };

    emailjs
      .send(
        "service_5hn430i", // Replace with your EmailJS Service ID
        "template_31s537n", // Replace with your EmailJS Template ID
        templateParams,
        "R-If9rxfdkQP4FDgE" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          alert("Complaint submitted successfully!");
          setName("");
          setYear("");
          setIssue("");
        },
        (error) => {
          alert("Failed to submit complaint. Please try again.");
          console.error(error);
        }
      );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatbotFormRef.current &&
        !chatbotFormRef.current.contains(event.target) && // Correct reference
        !chatbotContainerRef.current.contains(event.target)
      ) {
        closeForm();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="chatbot-container" ref={chatbotContainerRef}>
        <div className="chatbot-icon" onClick={toggleChatbotForm}>
          💬
        </div>
      </div>
      {isOpen && (
        <div className="chatbot-form" ref={chatbotFormRef}>
          <h3>Raise a Complaint</h3>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <label>Year</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter your year"
            />
            <label>Issue</label>
            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="Describe your issue"
            ></textarea>
            <div>
              <button type="submit">Submit</button>
              <button type="button" className="close-btn" onClick={closeForm}>
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
