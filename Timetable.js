import React from "react";
import "./Timetable.css";

const Timetable = () => {
  const handleAttendance = (period) => {
    console.log(`Marking attendance for ${period}`);
  };

  return (
    <div className="timetable">
      <h1>Timetable</h1>
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Subject</th>
            <th>Time</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mathematics</td>
            <td>9:00 AM - 10:00 AM</td>
            <td>
              <button onClick={() => handleAttendance("Period 1")}>
                Mark Attendance
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Physics</td>
            <td>10:00 AM - 11:00 AM</td>
            <td>
              <button onClick={() => handleAttendance("Period 2")}>
                Mark Attendance
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
