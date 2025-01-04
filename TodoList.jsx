import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    let updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  return (
    <div className="todo-container">
      <p className="heading">Todo-List</p>
      <input
        className="input-task"
        type="text"
        placeholder="Enter the task...."
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button className="add-task-button" onClick={addTask}>
        Add Task
      </button>
      <ul className="tasks-list">
        {tasks.map((task, index) => (
          <li className="single-task" key={index}>
            {task}{" "}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
