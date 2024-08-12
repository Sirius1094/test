import Modules from "../Modules";
import CourseStatus from "./Status";
import { useParams } from "react-router";

export default function Home() {
  const { cid } = useParams();

  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill me-5">
        <Modules courseId={cid as string} />
      </div>

      <div className="d-none d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}
