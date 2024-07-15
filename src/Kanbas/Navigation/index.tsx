import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function KanbasNavigation() {
    return (
      <div id="wd-kanbas-navigation"
           style={{ width: 120}}
           className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      >
        <a className="list-group-item bg-black text-white border-0 text-center"
           id="wd-neu-link"
           target="_blank"
           href="https://www.northeastern.edu/">
            <img src="/images/neu.jpg" width="55px" />
        </a>

        <a className="list-group-item bg-black text-white border-0 text-center"
           id="wd-account-link"
           href="#/Kanbas/Account">
            <FaRegCircleUser className="fs-1 text text-white" />
            <br />
            Account
        </a>

        <a className="list-group-item bg-white text-danger border-0 text-center"
           id="wd-dashboard-link"
           href="#/Kanbas/Dashboard">
            <AiOutlineDashboard className="fs-1 text-danger" />
            <br />
            Dashboard
        </a>

        <a className="list-group-item bg-black text-white border-0 text-center"
           id="wd-course-link"
           href="#/Kanbas/Courses">
            <LiaBookSolid className="fs-1 text-danger" />
            <br />
            Courses
        </a>

        <a className="list-group-item bg-black text-white border-0 text-center"
           id="wd-calendar-link"
           href="#/Kanbas/Calendar">
            <IoCalendarOutline className="fs-1 text-danger" />
            <br />
            Calendar
        </a>

        <a className="list-group-item bg-black text-white border-0 text-center"
           id="wd-inbox-link"
           href="#/Kanbas/Inbox">
            <FaInbox className="fs-1 text-danger" />
            <br />
            Inbox
        </a>

        <a className="list-group-item bg-black text-white border-0 text-center"
           id="wd-labs-link"
           href="#/Labs">
            <LiaCogSolid className="fs-1 text-danger" />
            <br />
            Labs
        </a>

        <a className="list-group-item bg-black text-white border-0 text-center" 
           id="wd-back-to-landing"
           href="/">
            <FaHome className="fs-1 text-danger" />
            <br />
            Landing Page
        </a>
      </div>
);}
  
  