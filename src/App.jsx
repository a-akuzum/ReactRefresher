import './App.css';
import React from "react";
import Person from "./Person"
// import Book from './components/Book';
import BookList from './components/BookList';

//JSX
function App() {
  return (
    <div className="App">
      <h1>Page is Up</h1>
      <Person />
      <BookList />
    </div>
  );
}


export default App;
