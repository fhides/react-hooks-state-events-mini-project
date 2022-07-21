import React,{useState}from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [list, setList]=useState(TASKS);

  const updateTasks=(newTask)=>{
    setList([...list,newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onAddTask={updateTasks} />
      <TaskList tasks={list} />
    </div>
  );
}

export default App;
