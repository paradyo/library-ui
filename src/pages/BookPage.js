import React from 'react';
import { useParams } from 'react-router-dom';

const BookPage = () => {
	const { bookName } = useParams();
	return (
		<div>
			<h2>{bookName}</h2>
			<p>Book Author: test</p>
			<p>Book Availability: true</p>
		</div>
	);
};

export default BookPage;
