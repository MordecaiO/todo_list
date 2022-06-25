import { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./Input";

function App() {
  // state used for form
  const [value, setValue] = useState("");

  // state used for displaying all tasks
  const [tasks, setTasks] = useState([]);

  // function to handle delete on delete button onClick event
  const handleDelete = (id) => {
    const newTasks = tasks.filter((taskObj) => id !== taskObj.id);
    setTasks(newTasks);
  };

  // function which takes new task state and updates all tasks with new task.
  const addTaskFunc = (newTaskData) => {
    const newTasks = [
      ...tasks,
      { text: newTaskData, completed: false, id: tasks.length + 1 },
    ];
    setTasks(newTasks);
  };

  // funtion to handle data onSubmit event from form and reset text input box.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTaskFunc(value);
    setValue("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <ul>
        <TaskList tasks={tasks} handleDelete={handleDelete} />
      </ul>
      <TaskInput
        handleSubmit={handleSubmit}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
