import React from 'react';
import HomeBooks from '../component/HomeBooks';
import { Pagination } from 'antd';
import { paginationStyle } from '../styles/style';

const HomePage = () => {
	return (
		<>
			<HomeBooks />
			<Pagination style={paginationStyle} defaultCurrent={1} total={50} />
		</>
	);
};

export default HomePage;
