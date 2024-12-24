import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing login and main components
import AdminLogin from "./Auth/AdminLogin/AdminLogin";
import TeacherLogin from "./Auth/Teacherlogin/TeacherLogin";
import StudentLogin from "./Auth/StudentLogin/StudentLogin";
import AdminDashboard from "./Auth/AdminLogin/AdminDashboard";
import TeacherDashboard from "./Auth/Teacherlogin/Dashboard";
import StudentDashboard from "./Auth/StudentLogin/Dashboard/Dashboard";
import AdminStudents from "./Auth/AdminLogin/AdminStudents";
import Timetable from "./Auth/Teacherlogin/Timetable";
import Settings from "./Components/Settings";
import ContactUs from "./Components/Contactus";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />

        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/timetable" element={<Timetable />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />

        {/* Common Components */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
