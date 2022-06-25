// Task input component with named props as handleSubmitfn, value state, setValue statefn

const TaskInput = ({ handleSubmit, value, setValue }) => {
  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-task-field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
