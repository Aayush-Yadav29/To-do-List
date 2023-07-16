import React from 'react';
import './Addtodo.css';
import { useState } from 'react';

export const Addtodo = ({ addNewTodo }) => {
  const [Todo, setTodo] = useState({});

  function handleSubmit(e) {
    // e.preventDefault();
    console.log('add task');
    // Check if any of the input fields are empty
    if (!Todo.title || !Todo.deadline || !Todo.description) {
      alert('Please fill in all fields');
      return;
    }
    console.log(Todo);
    addNewTodo(Todo);
    setTodo({}); // Clear the Todo state by setting it to an empty object
  }

  function handleChange(e) {
    setTodo({
      ...Todo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="addtodo">
      <form className="form">
        <div className="taskname form-row">
          <label htmlFor="title">Task Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the title of your Task"
            value={Todo.title || ''}
            onChange={handleChange}
          />
        </div>

        <div className="deadline form-row">
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="time"
            id="deadline"
            name="deadline"
            value={Todo.deadline || ''}
            onChange={handleChange}
          />
        </div>

        <div className="description form-row">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Enter the description of your task..."
            value={Todo.description || ''}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="Submitbtn" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
