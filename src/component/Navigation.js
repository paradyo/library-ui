import React, { useContext, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { menuStyle } from '../styles/style';
import { Menu } from 'antd';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [current, setCurrent] = useState('mail');
    const { logout, isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
    const onClick = (e) => {
        setCurrent(e.key);
        if (e.key == 'logout') {
            logout()
            navigate('/login')
        }
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
            show: true,
        },
        {
            label: (
                <a href="/profile">
                    Profile
                </a>
            ),
            key: 'profile',
            icon: <AppstoreOutlined />,
            show: isAuthenticated,
        },
        {
            label: (
                <a href="/login">
                    Login
                </a>
            ),
            key: 'login',
            icon: <AppstoreOutlined />,
            show: !isAuthenticated,
        },
        {
            label: (
                <a href="/register">
                    Register
                </a>
            ),
            key: 'register',
            icon: <AppstoreOutlined />,
            show: !isAuthenticated,
        },
        {
            label: 'Logout',
            key: 'logout',
            icon: <AppstoreOutlined />,
            show: isAuthenticated,
        },
    ];
    return <Menu
        onClick={onClick}
        style={menuStyle}
        selectedKeys={[current]}
        mode="horizontal"
        items={items.filter((item) => item.show)}
    />;
};

export default Navigation;