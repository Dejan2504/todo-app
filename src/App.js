import {useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

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
