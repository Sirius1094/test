import { FaPlus, FaEllipsisV } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentButton() {
  return (
    <div className="float-end">
      <span className="badge bg-light text-dark border border-secondary rounded-pill me-2">
        40% of Total
      </span>

      <FaPlus className="me-3" />

      <FaEllipsisV />
    </div>
  );
}
