import React, { useContext, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { loginFormStyle } from '../styles/style';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { isAuthenticated, login } = useContext(AuthContext);

    const navigate = useNavigate();

    const onFinish = async (values) => {
        let isLoginSuccess = await login(values.username, values.password);
        if (isLoginSuccess) {
            navigate('/profile')
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])

    return (
        <Form style={loginFormStyle} onFinish={onFinish}>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
