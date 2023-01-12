import React, { Component } from 'react'
import Book from './Book'


export default class BookList extends Component {
  state = {
    books: [
      { id: 1, name: "Think GOD1", author: "someone1" },
      { id:2, name: "Think GOD3332", author: "someone2" },
      { id:3, name: "Think GOD3", author: "someone3" },
    ],
  };

  render() {
    const booksState = this.state.books;
    const books = booksState.map((book, index) => {
      return (
        <Book
          name={book.name}
          author={book.author}
          delete={() => this.deleteBookState(index)}
          key={book.id}
          inputName= {(event) => this.changeInput(event, index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>Booklist:</h1>

        {books}
      </div>
    );
  }

  //   changeBookState = () => {
  //     this.setState({
  //       books: [
  //         { name: "ALMIGHTY GOD1", author: "newwriter1" },
  //         { name: "ALMIGHTY GOD3332", author: "newwriter2" },
  //         { name: "ALMIGHTY GOD3", author: "newwriter3" },
  //       ],
  //     });
  //   };

  deleteBookState = (index) => {
    const books = this.state.books;
    books.splice(index,1)
    this.setState({
        books: books
    })
  };

  //VERY IMPORTATNT PART
  changeInput = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.name = event.target.value
    const books = [...this.state.books];
    books[index] = book;

    this.setState({
      books: books
    })
  };
}
