export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />

        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <br />

        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
              <option selected value="Assignments">ASSIGNMENTS</option>
              <option value="Quizes">Quizes</option>
              <option value="Exams">Exams</option>
              <option value="Project">Project</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
              <option selected value="Percentage">Percentage</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
              <option value="Letter Grade">Letter Grade</option>
              <option value="GPA Scale">GPA Scale</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
              <option selected value="Online">Online</option>
              <option value="On Paper">On Paper</option>
              <option value="No Submission">No Submission</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
                Online Entry Options
                <br />
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry"> Text Entry</label><br/>
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url"> Website URL</label><br/>
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings"> Media Recordings</label><br/>
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation"> Student Annotation</label><br/>
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload"> File Uploads</label><br/>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
                Assign to
                <br />
                <input id="wd-assign-to" placeholder="Everyone" value = "Everyone"/>
            </td>
          </tr>
          <br />

          <tr>
            <td></td>
            <td>
                Due
                <br />
                <input type="date" id="wd-due-date" value = "2024-05-13"/>
            </td>
          </tr>
          <br />

          <tr>
            <td></td>
            <td>
                Available from
                <br />
                <input type="date" id="wd-available-from" value = "2024-05-06"/>
            </td>
            <td>
                Until
                <br />
                <input type="date" id="wd-available-until" value = "2024-05-20"/>
            </td>
          </tr>
        </table>
        <hr />
        <button id="wd-save">Save</button>
        <button id="wd-cancel">Cancel</button>
      </div>

  
);}