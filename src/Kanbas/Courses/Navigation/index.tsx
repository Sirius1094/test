import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { courses } from "../../Database";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const { pathname } = useLocation(); // Add this line to get the pathname
    return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link key={index} to={`/Kanbas/Courses/${course?._id}/${link}`}
              className={`list-group-item text-danger border border-0
              ${pathname.includes(link) ? "active" : ""}`}>
          {link}
        </Link>
      ))}
      </div>
);}