import React, {useState} from "react";

function NewTaskForm({categories, onAddTasks}) {
  const [input, setInput] = useState({
    text: "",
    category: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInput({...input, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTasks(input)

  }
  return (
    <form onSubmit={handleChange} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
        {categories.map((category, index)=> {
            if(category !== "All"){
              return <option key={index} value={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
