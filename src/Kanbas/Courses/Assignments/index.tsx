import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAssignment, MdCheckCircle } from "react-icons/md";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AssignmentControlButton from "./AssignmentControl";
import AssignmentButton from "./AssignmentButton";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import * as client from "./client";
import { setAssignments, addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { format } from 'date-fns';

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const saveAssignment = async (assignment: any) => {
    await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      removeAssignment(id);
    }
  };

  return (
    <div id="wd-assignments">
      <AssignmentControlButton />
      <br />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={assignment._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoMdArrowDropdown className="me-2 fs-3" />
                {assignment.title}
                <AssignmentButton assignmentId={assignment._id} deleteAssignment={handleDelete} />
              </div>
              <ul id="wd-assignments-list" className="list-group rounded-0">
                <li className="list-group-item p-3 d-flex justify-content-between align-items-center" key={assignment._id}>
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="text-success me-3 fs-3" />
                    <div>
                      <h6 className="mb-1 wd-black-bold">
                        <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-dark">
                          {assignment.title}
                        </a>
                      </h6>
                      <small style={{ color: "#a50c0c" }}>{"Multiple Modules"}</small>
                      <small className="text-muted">
                        {" | "}
                        <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                          Not available until
                        </span>{" "}
                        {assignment.availableDate ? format(new Date(assignment.availableDate), 'PPP p') : 'N/A'}
                      </small>
                      <br />
                      <small className="text-muted">
                        <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                          Due
                        </span>{" "}
                        {assignment.dueDate ? format(new Date(assignment.dueDate), 'PPP p') : 'N/A'} | {assignment.points} pts
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <MdCheckCircle className="text-success me-4 fs-4" />
                    <FaEllipsisV className="fs-4" />
                  </div>
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
