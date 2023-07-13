import Header from './Header.js';
import Footer from './Footer.js';
import TodoPanel from './TodoPanel.js';
import Addtodo  from './Addtodo.js';
import './app.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const storedTodos = localStorage.getItem('todos');
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  function addNewTodo(todo) {
    setTodos([...todos,
          {...todo, id : todos.length+1}  // Append the new todo to the existing todos array
    ]);
  }

  // function to delete a todo
  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className="App">
      <Header/>
      <div className="body">
        <TodoPanel todos = {todos} onDelete = {onDelete}/>
        <Addtodo addNewTodo = {addNewTodo}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
