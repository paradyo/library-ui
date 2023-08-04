import React, { useContext, useEffect, useState } from 'react';
import UserInformations from '../component/UserInformations';
import DataTable from '../component/DataTable';
import { AuthContext } from '../context/AuthContext';
import { emptyDataStyle } from '../styles/style';
import { Empty } from 'antd';
import { links } from '../utilities/api/links';
import ApiBase from '../utilities/api/ApiBase';
import { alerts } from '../utilities/AlertTypes';

const UserProfile = () => {
	const { isAuthenticated, token } = useContext(AuthContext)
	const [errorData, setErrorData] = useState()
	const [user, setUser] = useState()
	useEffect(() => {
		if (isAuthenticated) {
			GetUserInformations();
		}
	}, [isAuthenticated])
	const GetUserInformations = () => {
		console.log('girdi')
		let link = `${links.users}/me`
		// TODO: Implement search on author.
		ApiBase.Get({
			place: 'UserProfile - GetUserInformations',
			url: link,
			authorization: token,
			body: {},
			successFunction: (res) => {
				setUser(res)
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
			{!isAuthenticated && <Empty style={emptyDataStyle} />}
			{isAuthenticated && isAuthenticated == true &&
				<>
					{user && <UserInformations user={user} />}
					<hr />
					{/* TODO: INTEGRATE THE TABLE */}
					<DataTable />
				</>
			}

		</>
	);
};

export default UserProfile;
