import "./index.css";

export default function AssignmentEditor() {
    return (
      <div className="container mt-3" id="wd-assignments-editor">
      <div id="wd-assignment-name" className="mb-3">
        <label htmlFor="wd-assignment-name" className="form-label">
          Assignment Name
        </label>
      </div>
      <div id="name" className="mb-3">
        <input id="assignmentName" className="form-control" value="A1" />
      </div>

      <div id="wd-assignment-description" className="mb-3">
        <textarea
          id="assignmentDescription"
          className="form-control"
          rows={8}
          cols={80}
          defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </div>

      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="assignmentPoints" className="form-label">
            Points
          </label>
        </div>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="assignmentPoints" value={100} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="assignmentGroup" className="form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-sm-10">
          <select id="assignmentGroup" className="form-select">
            <option>ASSIGNMENTS</option>
            <option>Quizes</option>
            <option>Exams</option>
            <option>Project</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="displayGrade" className="form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-sm-10">
          <select id="displayGrade" className="form-select">
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
            <option>Letter Grade</option>
            <option>GPA Scale</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="submissionType" className="form-label">
            Submission Type
          </label>
        </div>
        <div className="col-sm-10">
          <select id="submissionType" className="form-select">
            <option>Online</option>
            <option>On Paper</option>
          </select>
        </div>
      </div>
      
      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="entry-options" className="form-label">
          </label>
        </div>
        <div className="col-sm-10">
        <label className="form-label">Online Entry Options</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="textEntry" />
          <label className="form-check-label" htmlFor="textEntry">
            Text Entry
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="websiteURL" defaultChecked />
          <label className="form-check-label" htmlFor="websiteURL">
            Website URL
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="mediaRecordings" />
          <label className="form-check-label" htmlFor="mediaRecordings">
            Media Recordings
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="studentAnnotation" />
          <label className="form-check-label" htmlFor="studentAnnotation">
            Student Annotation
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="fileUploads" />
          <label className="form-check-label" htmlFor="fileUploads">
            File Uploads
          </label>
        </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="assignTo" className="form-label">
            Assign to
          </label>
        </div>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="assignTo" value="Everyone" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2">
          <label htmlFor="dueDate" className="form-label">
            Due
          </label>
        </div>
        <div className="col-sm-10">
          <input type="datetime-local" className="form-control" id="dueDate" defaultValue="2024-05-13T00:00" />
        </div>
      </div>
      
      <div className="row mb-3">
        <div className="col-sm-6">
          <label htmlFor="availableFrom" className="form-label">
            Available from
          </label>
        </div>
        <div className="col-sm-6">
          <label htmlFor="availableUntil" className="form-label">
            Until
          </label>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-6">
          <input type="datetime-local" className="form-control" id="availableFrom" defaultValue="2024-05-06T00:00" />
        </div>
        <div className="col-sm-6">
          <input type="datetime-local" className="form-control" id="availableUntil" defaultValue="2024-05-16T00:00"/>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  
);}