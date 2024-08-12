import React, { useState, useEffect } from "react";
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import * as client from "./client";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import { useDispatch } from "react-redux";
import { setCourses } from "./reducer";

export default function Courses() {
  const { cid } = useParams();
  const [course, setCourse] = useState<any>({});
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    const coursesData = await client.fetchAllCourses();
    dispatch(setCourses(coursesData));
    const currentCourse = coursesData.find((c: { _id: string | undefined; }) => c._id === cid);
    setCourse(currentCourse);
  };

  useEffect(() => {
    fetchCourses();
  }, [cid]);

  const { pathname } = useLocation();

  const courseId = cid ? cid : "";

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules courseId={courseId} />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
