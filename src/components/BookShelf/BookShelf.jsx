import React, { useState } from 'react';

function BookShelf() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className='bookshelfDiv'>
      <div className='formDiv'>
        <h3>Add a Book</h3>
        {/* Form will go here */}
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            value={newBook.title}
            onChange={handleInputChange}
            placeholder='Book title'
          />
          <input
            type='text'
            name='author'
            id=''
            value={newBook.author}
            onChange={handleInputChange}
            placeholder='Author name'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='bookCardsDiv'>
        <ul>
          {books.map((book) => (
            <li key={books.indexOf(book)}>
              <p>
                {book.title} {book.author}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookShelf;
