import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProtectedContent from "../Account/ProtectedContent";
import * as client from "../Courses/client";
import { setCourses, addCourse, deleteCourse, updateCourse } from "../Courses/reducer";

type DashboardProps = {
  courses: any[];
  course: any;
  setCourse: React.Dispatch<any>;
  addNewCourse: () => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: () => Promise<void>;
};

export default function Dashboard(props: DashboardProps) {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    name: "",
    description: "",
  });

  const fetchCourses = async () => {
    const coursesData = await client.fetchAllCourses();
    dispatch(setCourses(coursesData));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(addCourse(newCourse));
    setCourse({ name: "", description: "" });
  };

  const handleUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(updateCourse(course));
  };

  const handleDeleteCourse = async (courseId: any) => {
    await client.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard {currentUser && <>({currentUser.username})</>}</h1>
      <hr />
      <ProtectedContent>
        <h5>
          New Course
          <button className="btn btn-primary float-end" onClick={handleAddCourse}>
            Add
          </button>
          <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse}>
            Update
          </button>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <br />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </h5>
      </ProtectedContent>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/1234.jpg" height="160" alt="course" />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                    >
                      {course.name}
                    </span>
                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go
                    </Link>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        handleDeleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
