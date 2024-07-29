import { FaSearch, FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function AssignmentControlButton() {
  const navigate = useNavigate();
  const { cid } = useParams<{ cid: string }>();

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  return (
    <div className="d-flex align-items-center text-nowrap">
      <div className="input-group me-5">
        <span className="input-group-text" id="basic-addon1">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="d-flex">
        <button className="btn btn-outline-secondary me-2">
          <FaPlus className="me-2 fs-7" style={{ bottom: "1px" }} />
          Group
        </button>
        <button className="btn btn-danger" onClick={handleAddAssignment}>
          <FaPlus className="me-2 fs-7" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    </div>
  );
}