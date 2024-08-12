import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  const response = await axios.get(COURSES_API);
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};

export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}`);
  return response.data;
};
