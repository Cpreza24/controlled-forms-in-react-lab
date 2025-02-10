import React, { useState } from 'react';

function BookShelf() {
  const [books, setBooks] = useState([
    {
      title: '',
      author: '',
    },
  ]);

  const handleInputChange = (e) => {
    const newBook = e.target.value;
    setBooks({ ...books, [e.target.name]: newBook });
    console.log(newBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='bookshelfDiv'>
      <div className='formDiv'>
        <h3>Add a Book</h3>
        {/* Form will go here */}
        <form onSubmit={() => handleSubmit}>
          <input
            type='text'
            name='title'
            onChange={handleInputChange}
            placeholder='Book title'
          />
          <input
            type='text'
            name='author'
            id=''
            onChange={handleInputChange}
            placeholder='Author name'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='bookCardsDiv'>{/* Book cards will display here */}</div>
    </div>
  );
}

export default BookShelf;
