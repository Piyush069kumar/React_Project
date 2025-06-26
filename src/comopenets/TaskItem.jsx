import React from "react";
import './TaskItem.css';

const TaskItem = ({ 
    todo ,
    editText,
     editId, 
     setEditText, 
     handleEdit,
     handleSave,
     handleDelete,
     handleComplete
    }) => {
    const isEditing = todo.id === editId;
  return (
    
    <div className="task-item">
        {
            isEditing ?
             (
                <form 
                onSubmit={ (e)=>{
                    e.preventDefault();
                    handleSave(todo.id)
                }}
                >
                    <input
                type="text"
                value={editText}
                onChange={(e)=>{setEditText(e.target.value)}}
                />
                <button type="submit" >Save</button>
                </form> 
                
            ) :
             (
                <div>
                    <input
                         type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleComplete(todo.id)} 
                    />
                    <span
                    style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#bbbbbb" : "#color: #bbbbbb;",
            }}
                     >{todo.text}</span>

                        <div className="button-group">
                            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div> 
                </div>
             )
        }
        {/* <button onClick={()=>{handleDelete(todo.id)}}>Delete</button> */}
      
    </div>
  );
};

export default TaskItem;
