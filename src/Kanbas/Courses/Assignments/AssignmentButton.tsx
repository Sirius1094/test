import { FaPlus, FaEllipsisV, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentButton({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteAssignment(assignmentId)}
      />
      <span className="badge bg-light text-dark border border-secondary rounded-pill me-2">
        40% of Total
      </span>

      <FaPlus className="me-3" />

      <FaEllipsisV />
    </div>
  );
}
