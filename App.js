import { render } from "@testing-library/react";
import React, {useState} from "react"
import './App.css';
import ToDoList from "./Components.js/ToDoList";


function App() {
  const[inputList, setInputList] =   useState("");
  const[items,setItems] =  useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  }
  const listItems = () => {
     setItems((oldItems) => {
       return[...oldItems, inputList]
     });
     setInputList("")

  }
  return (
    <div className="main">
         <div className="center">
           <br />
           <h1>ToDo List</h1>
           <br />
           <input type="text" placeholder="Add a Items"value={inputList} onChange={itemEvent}/>
           <button onClick={listItems}> + </button>

           <ol>
             {/*<li>{inputList}</li>*/}

           { items.map( (itemval) => {
          return   <ToDoList list = {itemval} />
            } )}
           </ol>
         </div>
      </div>
  );
}

export default App;
