import React from 'react';
const BookInfo = ({ book }) => (
    <div>
        <h2>{book.name}</h2>
        <p>Author: {book.author}</p>
        <p>Visibility: {book.visible.toString()}</p>
    </div>
);
export default BookInfo;