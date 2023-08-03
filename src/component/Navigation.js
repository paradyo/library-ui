import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { menuStyle } from '../styles/style';
import { Menu } from 'antd';

const Navigation = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: (
                <a href="/">
                    Home
                </a>
            ),
            key: 'home',
            icon: <AppstoreOutlined />,
        },
        {
            label: (
                <a href="/profile">
                    Profile
                </a>
            ),
            key: 'profile',
            icon: <AppstoreOutlined />,
        },
        {
            label: (
                <a href="/login">
                    Login
                </a>
            ),
            key: 'login',
            icon: <AppstoreOutlined />,
        },
        {
            label: (
                <a href="/register">
                    Register
                </a>
            ),
            key: 'register',
            icon: <AppstoreOutlined />,
        },
    ];
    return <Menu onClick={onClick} style={menuStyle} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Navigation;