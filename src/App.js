import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  //Setting initial state
  const localTodos = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []

  const [list, setList] = useState(localTodos);
  const [input, setInput] = useState('');

  //Setting new data in localStorage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  },[list]);
  
  const addTodo = function(todo){
    //creating objects for list items
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    
    //newList
    setList([...list, newTodo]);
    
    
    //clear input
    setInput('');
    
  }

  const removeTodo = function(todoId){
    //filter arr to remove exact todo
    const newList = list.filter(todo => todo.id !== todoId);

    //set new list
    setList(newList);
  }

  return (
    <div className="App">
      <Header />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTodo(input)}>Add Todo</button>
      <hr />
      <ul>
        {list.map((todo) => (
          <li key={todo.id} onClick={() => removeTodo(todo.id)}>
            {todo.todo}
          </li> 
        ))} 
      </ul>
    </div>
  );
}

export default App;
