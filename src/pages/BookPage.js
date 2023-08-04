import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { kebabToTitleCase } from '../utilities/Helpers';
import ApiBase from '../utilities/api/ApiBase';
import { links } from '../utilities/api/links';
import { alerts } from '../utilities/AlertTypes';
import { emptyDataStyle } from '../styles/style';
import BookInfo from '../component/BookInfo';
import AlertTemplate from '../component/AlertTemplate';
import { Empty } from 'antd';

const BookPage = () => {
	const { bookUrl } = useParams();
	const [book, setBook] = useState();
	const [errorData, setErrorData] = useState();

	useEffect(() => {
		GetBookByName(bookUrl);
	}, [bookUrl])

	const GetBookByName = async (bookUrl) => {
		ApiBase.Get({
			place: 'BookPage - GetBookByName',
			url: `${links.books}?name=${kebabToTitleCase(bookUrl)}`,
			body: {},
			successFunction: (res) => {
				setBook(res.content[0]);
			},
			errorFunction: (res) => {
				let data = {
					alert: alerts.error,
					message: res.message,
					showIcon: true
				}
				setErrorData(data)
			},
			exceptionFunction: (res) => {
				//TODO: exception "HomePage - GetBooks"
			}
		});
	};

	return (
		<>
			{errorData && <AlertTemplate data={errorData} />}
			{book == null && <Empty style={emptyDataStyle} />}
			{book && <BookInfo book={book} />}
		</>
	);
};

export default BookPage;
