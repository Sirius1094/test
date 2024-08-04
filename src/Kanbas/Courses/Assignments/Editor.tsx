import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, Assignment } from "./reducer";
import { RootState } from "../../store";
import { useState, useEffect, ChangeEvent } from "react";
import * as client from "./client";
import "./index.css";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingAssignment = useSelector((state: RootState) =>
    state.assignmentsReducer.assignments.find((assignment: Assignment) => assignment._id === aid)
  );

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableDate: "",
    course: cid || "",
  });

  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [id]: value,
    }));
  };

  const handleSave = async () => {
    if (existingAssignment) {
      await client.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    } else {
      const newAssignment = await client.createAssignment(cid as string, assignment);
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container mt-3" id="wd-assignments-editor">
      <div id="wd-assignment-name" className="mb-3">
        <label htmlFor="title" className="form-label">
          Assignment Name
        </label>
        <input id="title" className="form-control" value={assignment.title} onChange={handleChange} />
      </div>

      <div id="wd-assignment-description" className="mb-3">
        <textarea
          id="description"
          className="form-control"
          rows={8}
          cols={80}
          value={assignment.description}
          onChange={handleChange}
        />
      </div>

      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="points" value={assignment.points} onChange={handleChange} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-6">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input type="datetime-local" className="form-control" id="dueDate" value={assignment.dueDate} onChange={handleChange} />
        </div>
        <div className="col-sm-6">
          <label htmlFor="availableDate" className="form-label">
            Available from
          </label>
          <input type="datetime-local" className="form-control" id="availableDate" value={assignment.availableDate} onChange={handleChange} />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
