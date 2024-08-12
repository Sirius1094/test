import EncodingParametersInURLs from "./EncodingParametersInURLs";
import HttpClient from "./HttpClient";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <HttpClient />
      <div className="list-group">
        <a
          href="https://kanbas-node-server-app-f85f.onrender.com/lab5/welcome"
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <hr />
      <h2>Calculator</h2>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
    </div>
  );
}
