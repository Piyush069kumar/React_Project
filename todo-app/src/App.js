import React, { useEffect, useState} from "react";
import AddTask from "./comopenets/AddTask";
import TaskList from "./comopenets/TaskList";
import "./App.css";
import {toast} from 'react-hot-toast';

function App() {
  const [task, setTask] = useState("");

  const [todos,setTodos] = useState([]);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const[filter,setFilter] = useState("all");


  const handleEdit =(id, currenttext)=>{
    setEditId(id);
    setEditText(currenttext);
  }

  const handleSave= (id)=>{
    const updateTodo = todos.map( (todo)=>(
      todo.id === id ? {...todo, text:editText}  : todo
    ));
    setTodos(updateTodo);
    setEditId(null)
    setEditText("");
    toast.success(" Edit successfully!");
  }



  const handleDelete = (id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
    toast.success("Task deleted successfully!");
  }
  

  const handleComplete = (id)=>{
    const updateTodo = todos.map( (todo)=>(
      todo.id === id ? {...todo, completed: !todo.completed} : todo
      
    ));
    setTodos(updateTodo);
  }
  
  const filteredTodos = todos.filter((todo) => {
  if (filter === "completed") return todo.completed;
  if (filter === "pending") return !todo.completed;
  return true; // "all" 
}
  
);






  useEffect( ()=>{
    const stored  = localStorage.getItem("todos");
    if(stored && stored !== "undefined"){
      setTodos(JSON.parse(stored))
    }
  },[]);

  useEffect( ()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);


  const handleAdd = () => {
    if (task.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
    toast.success("Task added successfully!");
  };


  return (
    <div className="app">
      

     <div className="nav">
  <h1>📝 To-Do List</h1>
  <div className="filter-container">
    <div className="filter-dropdown">
      <label htmlFor="filter-select">Filter:</label>
      <select
        id="filter-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  </div>
</div>


    
      

    


      <AddTask task={task} setTask={setTask} handleAdd={handleAdd} />
     <TaskList 
      todos={filteredTodos}
      editId={editId}
      editText={editText}
      setEditText={setEditText}
      handleEdit={handleEdit}
      handleSave={handleSave}
      handleDelete = {handleDelete}
      handleComplete={handleComplete}
     />
    </div>
  );
}

export default App;
