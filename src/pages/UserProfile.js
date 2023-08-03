import React from 'react';
import UserInformations from '../component/UserInformations';
import DataTable from '../component/DataTable';

const UserProfile = () => {
  return (
    <>
      <UserInformations />
      <hr />
      <DataTable />
    </>
  );
};

export default UserProfile;
