import React from "react";
import TaskItem from "./TaskItem";
import './TaskList.css'

const TaskList = ({
  todos,
  editId,
  editText,
  setEditText,
  handleEdit,
  handleSave,
  handleDelete,
  handleComplete
}) => {
  return (
    <div className="task-list">
      {todos.length === 0 && <p style={{color:"#fff"}}>No tasks found.</p>}
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          editId={editId}
          editText = {editText}
          setEditText={setEditText}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
