import React, { useState, useEffect } from 'react';
import './TodoItem.css';

function TodoItem({ id, title, deadline, description, onDelete, handleUp, handleDown }) {
  const handleDelete = () => {
    onDelete(id);
  };

  const [fadeState, setFadeState] = useState(null);

  useEffect(() => {
    if (fadeState === 'fade-out') {
      const timeout = setTimeout(() => {
        setFadeState('fade-in');
      }, 300); // Wait for the fade-out transition duration
      return () => clearTimeout(timeout);
    }
  }, [fadeState]);

  const handleUpClick = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      handleUp();
    }, 300); // Wait for the fade-out transition duration before triggering handleUp
  };

  const handleDownClick = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      handleDown();
    }, 300); // Wait for the fade-out transition duration before triggering handleDown
  };

  return (
    <div className={`todoitem ${fadeState}`}>
      <div className="title">{title}</div>
      <div className="deadline">{deadline}</div>
      <div className="descriptionPrint">{description}</div>
      <button className="btn" onClick={handleDelete}>Delete</button>
      <button className="btn" onClick={handleUpClick}>Up</button>
      <button className="btn" onClick={handleDownClick}>Down</button>
    </div>
  );
}

export default TodoItem;


