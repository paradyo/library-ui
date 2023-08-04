import React, { useEffect, useState } from 'react';
import HomeBooks from '../component/HomeBooks';
import { Pagination, Empty, Input } from 'antd';
import { paginationStyle, emptyDataStyle, searchInputStyle } from '../styles/style';
import ApiBase from '../utilities/api/ApiBase';
import { links } from '../utilities/api/links';
import { alerts } from '../utilities/AlertTypes';
import AlertTemplate from '../component/AlertTemplate';
const { Search } = Input;

const HomePage = () => {
	const [books, setBooks] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalElements, setTotalElements] = useState();
	const [numberOfElements, setNumberOfElements] = useState();
	const [errorData, setErrorData] = useState();
	const [currentSearchOnBookName, setCurrentSearchOnBookName] = useState();

	useEffect(() => {
		GetBooks(currentPage);
	}, [currentPage])

	useEffect(() => {
		GetBooks(currentPage, currentSearchOnBookName);
	}, [currentSearchOnBookName])

	const GetBooks = async (page, search) => {
		let dummyPage = page - 1;
		let link = `${links.books}?page=${dummyPage}`
		if (search) {
			link = `${links.books}?search=${search}&name=${search}`
		}
		// TODO: Implement search on author.
		ApiBase.Get({
			place: 'HomePage - GetBooks',
			url: link,
			body: {},
			successFunction: (res) => {
				setBooks(res.content);
				setTotalElements(res.totalElements);
				setNumberOfElements(res.numberOfElements);
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

	const handlePaginationChange = (page) => {
		setCurrentPage(page);
	};

	const onSearchBookName = (value) => setCurrentSearchOnBookName(value);
	return (
		<>
			{errorData && <AlertTemplate data={errorData} />}
			<Search placeholder="Search a book name..." onSearch={onSearchBookName} style={searchInputStyle} />
			{errorData && <Empty style={emptyDataStyle} />}
			{books && <HomeBooks books={books} />}
			{currentPage && totalElements && numberOfElements &&
				<Pagination
					style={paginationStyle}
					current={currentPage}
					total={totalElements}
					pageSize={numberOfElements}
					onChange={handlePaginationChange}
				/>
			}

		</>
	);
};

export default HomePage;
