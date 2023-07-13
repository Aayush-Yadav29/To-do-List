  import React from 'react'
  import './TodoPanel.css';
  import TodoItem from './TodoItem';

  export const TodoPanel = ({todos, onDelete}) => {
    return (
      <div className="TodoPanel">
      {todos.length === 0 ? (
        <div className="no-todos">No tasks lined up...</div>
      ) : (
        todos.map((todo) => (
          <TodoItem
          key={todo.id}
          title={todo.title}
          deadline={todo.deadline}
          description={todo.description}
          onDelete={() => onDelete(todo.id)} // Pass the id to onDelete function
          />
        ))
      )}
    </div>
    )
  }
  export default TodoPanel