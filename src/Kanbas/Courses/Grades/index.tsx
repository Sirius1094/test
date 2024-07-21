import { useParams } from "react-router-dom";
import { enrollments, users, assignments, grades } from "../../Database";
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function Grades() {
  const { cid } = useParams();

  const courseEnrollments = enrollments.filter(enrollment => enrollment.course === cid);
  const students = courseEnrollments.map(enrollment => users.find(user => user._id === enrollment.user));

  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Grades</h2>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-2">
            <FaFileImport className="me-2" />
            Import
          </button>
          <div className="btn-group me-2">
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaFileExport className="me-2" />
              Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Export as CSV
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-secondary">
            <FaCog />
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="searchStudents" className="form-label">
            Student Names
          </label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input
              type="text"
              className="form-control"
              id="searchStudents"
              placeholder="Search Students"
            />
            <span className="input-group-text"><FaFilter /></span>
          </div>
        </div>
        <div className="col">
          <label htmlFor="searchAssignments" className="form-label">
            Assignment Names
          </label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input
              type="text"
              className="form-control"
              id="searchAssignments"
              placeholder="Search Assignments"
            />
            <span className="input-group-text"><FaFilter /></span>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col d-flex align-items-center">
          <button className="btn btn-outline-secondary">
            <FaFilter className="me-2" />
            Apply Filters
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            {courseAssignments.map(assignment => (
              <th key={assignment._id}>{assignment.title} <br /> <small>Out of 100</small></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(student => {
            if (!student) return null;
            return (
              <tr key={student._id}>
                <td className="text-danger">{`${student.firstName} ${student.lastName}`}</td>
                {courseAssignments.map(assignment => {
                  const gradeRecord = grades.find(grade => grade.student === student._id && grade.assignment === assignment._id);
                  return <td key={assignment._id}>{gradeRecord ? `${gradeRecord.grade}%` : 'N/A'}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
