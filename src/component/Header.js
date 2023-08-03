import React from 'react';
import { Layout } from 'antd';
import Navigation from './Navigation';
import { headerStyle } from '../styles/style';
const { Header } = Layout;

const HeaderTemplate = () => {
    return (
        <Header style={headerStyle}><Navigation /></Header>
    );
};

export default HeaderTemplate;
