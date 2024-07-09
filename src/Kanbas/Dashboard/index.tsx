export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/1234.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
  
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
  
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
  
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <br />
            <img src="/images/5610.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5610/Home">
                CS5610 Web Development
              </a>
  
              <p className="wd-dashboard-course-title">
                Front end and back end development
              </p>
  
              <a href="#/Kanbas/Courses/5610/Home"> Go </a>
  
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <br />
            <img src="/images/5800.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5800/Home">
                CS5800 Algorithm
              </a>
  
              <p className="wd-dashboard-course-title">
                Algorithm for software developer
              </p>
  
              <a href="#/Kanbas/Courses/5800/Home"> Go </a>
  
            </div>
          </div>
        </div>
      </div>
  
  );}