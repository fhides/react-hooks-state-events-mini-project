import React, { useState } from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const [list, setList] = useState(tasks);


  const handleDelete = (id) => {
    const filteredList = list.filter((item, index) => {
      return index !== id;
    });
    setList(filteredList)
  }
  return (
    <div className="tasks">
      {list.map((task, index) => {
       return <Task key={index} id={index} task={task} onDelete={handleDelete} />
      })}
    </div>
  );
}

export default TaskList;
