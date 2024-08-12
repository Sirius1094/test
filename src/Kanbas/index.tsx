import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as client from "./Courses/client";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/1234.jpg",
    description: "New Description",
  });

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, { ...course, newCourse }]);
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas">
          <div className="d-noe d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={async () => {
                      const newCourse = await client.createCourse(course);
                      setCourses([...courses, newCourse]);
                    }}
                    deleteCourse={async (courseId: string) => {
                      await client.deleteCourse(courseId);
                      setCourses(courses.filter(c => c._id !== courseId));
                    }}
                    updateCourse={async () => {
                      await client.updateCourse(course);
                      setCourses(
                        courses.map(c => (c._id === course._id ? course : c))
                      );
                    }}
                  />
                }
              />
              <Route
                path="Courses/:cid/*"
                element={<ProtectedRoute><Courses /></ProtectedRoute>}
              />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
