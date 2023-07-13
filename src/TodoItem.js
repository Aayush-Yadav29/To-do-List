import React from 'react'
import './TodoItem.css'
function TodoItem({id,title,deadline,description,onDelete}){
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="todoitem">
      <div className="title">{title}</div>
      <div className="deadline">{deadline}</div>
      <div className="descriptionPrint">{description}</div>
      <button className='btn' onClick={handleDelete}>Delete</button>
    </div>
  );
}
 
export default TodoItem;
