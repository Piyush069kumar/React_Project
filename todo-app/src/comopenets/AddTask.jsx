import React from "react";
import './AddTaask.css';

const AddTask = ({ task, setTask, handleAdd }) => {
  return (
    <div className="add-task">

    <form  className="add"
      onSubmit={ (e)=>{
        e.preventDefault();
        handleAdd();
      }
    }>
       
          <input className="input"
            type="text"
            placeholder="Enter the task"
            value={task}
            onChange={(e)=>{setTask(e.target.value)}}
            />
       
          <button className="button" type="submit">
          <span className="button__text">Add Item</span>
          <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
        </button>
        
        {/* <button type="submit"  className="btn-12">Add</button> */}
    </form>
    </div>
  );
};

export default AddTask;
