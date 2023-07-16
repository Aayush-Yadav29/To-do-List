import React, { useState } from 'react';
import './TodoPanel.css';
import TodoItem from './TodoItem';

export const TodoPanel = ({ todos, onDelete }) => {
  const [todoItems, setTodoItems] = useState(todos);

  function handleUp(id) {
    const currentIndex = todoItems.findIndex(todo => todo.id === id);
    if (currentIndex > 0) {
      const updatedItems = [...todoItems];
      const temp = updatedItems[currentIndex];
      updatedItems[currentIndex] = updatedItems[currentIndex - 1];
      updatedItems[currentIndex - 1] = temp;
      setTodoItems(updatedItems);
    }
  }

  function handleDown(id) {
    const currentIndex = todoItems.findIndex(todo => todo.id === id);
    if (currentIndex < todoItems.length - 1) {
      const updatedItems = [...todoItems];
      const temp = updatedItems[currentIndex];
      updatedItems[currentIndex] = updatedItems[currentIndex + 1];
      updatedItems[currentIndex + 1] = temp;
      setTodoItems(updatedItems);
    }
  }

  function handleDelete(id) {
    const updatedItems = todoItems.filter(todo => todo.id !== id);
    setTodoItems(updatedItems);
    onDelete(id);
  }


  return (
    <div className="TodoPanel">
      {todoItems.length === 0 ? (
        <div className="no-todos">No tasks lined up...</div>
      ) : (
        todoItems.map(todo => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            deadline={todo.deadline}
            description={todo.description}
            onDelete={() => handleDelete(todo.id)}
            handleUp={() => handleUp(todo.id)}
            handleDown={() => handleDown(todo.id)}
          />
        ))
      )}
    </div>
  );
};

export default TodoPanel;

