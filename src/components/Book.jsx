import React from "react";
import '../stylesheets/Book.css'

function Book(props){
    return (
      <div className="Book">
        <h1 onClick={props.delete}>Book: {props.name}</h1>
        <h2>Author: {props.author}</h2>
        <input type="text" onChange={props.inputName} value= {props.name}/>
      </div>
    );
}

export default Book; 