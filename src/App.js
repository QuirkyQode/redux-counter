import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter  =useSelector((state) => state.counter)
  const dispatch = useDispatch()
  
  const increment =() =>{
    dispatch({type: 'INC'})
  }
  const decrement =() =>{
    dispatch({type: 'DEC'})
  }
  const addBy = () =>{
    const val = prompt("Add by how much?")
    dispatch({type: 'ADD', payload: val})
  }
  return (
    <div>
      <h1>counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add by</button>
    </div>
  );
}

export default App;
