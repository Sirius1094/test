import React, { useState } from "react";
import { courses } from "../../Kanbas/Database";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

  const [module, setModule] = useState({
    id: 1, name: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS",
    course: "NodeJS"
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/a5/assignment`
  const MODULE_API_URL = `${REMOTE_SERVER}/a5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/a5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/a5/assignment/title`}>
        Get Title
      </a><hr/>
      <h3>Module</h3>
      <h4>Retrieving Objects(Module)</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/a5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties(Module)</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/a5/module/name`}>
        Get Name
      </a><hr/>
      <h4>Modifying Properties(Module)</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <hr />
    </div>
);}
