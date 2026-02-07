import { useRef, useState } from 'react';
import './App.css';


function App() {

  const [toDos, setTodDos] = useState([]);
  const inputRef = useRef(null);

  const handleAddToDo = () => {
    const newItem = {completed: false, text: inputRef.current.value};
    if (newItem.text) {
      setTodDos([...toDos, newItem]);
      inputRef.current.value = "";

    }
  }
  const handleItemDone = (index) => {
    const newToDOs = [...toDos]
    newToDOs[index].completed = !newToDOs[index].completed;
    setTodDos(newToDOs)
  }
  const handelDeleteItem = (index) => {
    const newToDOs = [...toDos]
    newToDOs.splice(index, 1)
    setTodDos(newToDOs)

  }
  return (
    <div className="App">
      <div className = "to-do-container"> 
        <h2> To Do List </h2>
        <ul>  
          {toDos.map(({text, completed}, index) => {
            return (
              <div className = "item">  
                <li
                 className= {completed ? "done" : ""}
                 key = {index}
                onClick = {() => handleItemDone(index)}
                >
                {text}
                </li>
                <span onClick = {() => handelDeleteItem(index)} className = "trash"> ❌ </span>
              </div>
            ); 
          })}  
        </ul>
        <input ref = {inputRef} placeholder="Enter item" />
        <button onClick = {handleAddToDo}> Add </button>
      </div>
    </div>
  );
}

export default App;
