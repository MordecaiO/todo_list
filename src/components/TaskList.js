const TaskList = (props) => {
  const tasks = props.tasks;
  const handleDelete = props.handleDelete;
  return (
    <div className="task-list">
      {tasks.map((taskObj) => (
        <div className="task-item" key={taskObj.id}>
          <input type="checkbox" className="cb"></input>
          {taskObj.text}
          <button
            className="delete-task-btn"
            onClick={() => handleDelete(taskObj.id)}
          >
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
