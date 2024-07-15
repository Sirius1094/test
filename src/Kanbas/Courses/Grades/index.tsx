import { FaFileImport, FaFileExport, FaCog, FaSearch, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function Grades() {
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
            <th>A1 SETUP <br /> <small>Out of 100</small></th>
            <th>A2 HTML <br /> <small>Out of 100</small></th>
            <th>A3 CSS <br /> <small>Out of 100</small></th>
            <th>A4 BOOTSTRAP <br /> <small>Out of 100</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-danger">Jane Adams</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>92.18%</td>
            <td>66.22%</td>
          </tr>
          <tr>
            <td className="text-danger">Christina Allen</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Samreen Ansari</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Han Bao</td>
            <td>100%</td>
            <td>100%</td>
            <td>
              <input
                type="text"
                className="form-control"
                defaultValue="88.03%"
              />
            </td>
            <td>98.99%</td>
          </tr>
          <tr>
            <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>98.37%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Siran Cao</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Kathryn Chalmers</td>
            <td>100%</td>
            <td>100%</td>
            <td>98.5%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Chih-Yang Chen</td>
            <td>100%</td>
            <td>81.67%</td>
            <td>79.93%</td>
            <td>54.46%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
