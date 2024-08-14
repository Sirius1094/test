import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/a5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const updateCompleted = async () => {
    const response = await fetch(`${API}/${todo.id}/completed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: todo.completed }),
    });
    const data = await response.json();
    console.log(data);
  };
  
  const updateDescription = async () => {
    const response = await fetch(`${API}/${todo.id}/description`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: todo.description }),
    });
    const data = await response.json();
    console.log(data);
  };
  
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos{" "}
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        value={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />
      <h3>Deleting from an Array</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}{" "}
      </a>
      <input
        value={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end"
      >
        Update Todo
      </a>
      <input
        value={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        value={todo.title}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />
      <div id="wd-working-with-arrays">
        <h3>Editing Completed and Description by ID</h3>
        <div className="mb-3">
          <label className="form-label">Todo ID</label>
          <input
            value={todo.id}
            className="form-control"
            onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            placeholder="Enter Todo ID"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Completed</label>
          <select
            value={todo.completed.toString()} // Convert boolean to string
            className="form-select"
            onChange={(e) =>
              setTodo({ ...todo, completed: e.target.value === "true" })
            }
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <button onClick={updateCompleted} className="btn btn-primary float-end">
          Update Completed
        </button>
        <br />
        <br />

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            value={todo.description}
            className="form-control"
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            placeholder="Enter Todo Description"
          />
        </div>
        <button
          onClick={updateDescription}
          className="btn btn-primary float-end"
        >
          Update Description
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
