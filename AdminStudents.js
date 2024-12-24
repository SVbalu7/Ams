import React, { useState } from "react";
import "./AdminStudents.css";

const AdminStudents = () => {
  const batches = {
    2024: [
      { name: "Alice Johnson", regNo: "2024A001" },
      { name: "Bob Smith", regNo: "2024A002" },
    ],
    2023: [
      { name: "Charlie Brown", regNo: "2023A001" },
      { name: "Diana Prince", regNo: "2023A002" },
    ],
    // Add more batches here...
  };

  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="admin-students">
      <div className="batch-list">
        <h2>Batches</h2>
        {Object.keys(batches).map((batch) => (
          <button key={batch} onClick={() => setSelectedBatch(batch)}>
            {batch} Batch
          </button>
        ))}
      </div>

      {selectedBatch && (
        <div className="student-list">
          <h2>{selectedBatch} Batch Students</h2>
          {batches[selectedBatch].map((student) => (
            <button
              key={student.regNo}
              onClick={() => setSelectedStudent(student)}
            >
              {student.name} ({student.regNo})
            </button>
          ))}
        </div>
      )}

      {selectedStudent && (
        <div className="student-profile">
          <h2>Student Profile</h2>
          <p>
            <strong>Name:</strong> {selectedStudent.name}
          </p>
          <p>
            <strong>Registration Number:</strong> {selectedStudent.regNo}
          </p>
          <p>
            <strong>Attendance:</strong> Daily: 85%, Weekly: 90%, Monthly: 88%,
            Overall: 89%
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminStudents;
