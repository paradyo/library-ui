import React from 'react';
import { Form, Input, Button } from 'antd';
import { loginFormStyle } from '../styles/style';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Form values:', values); // You can handle form submission here
    };

    return (
        <Form style={loginFormStyle} onFinish={onFinish}>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
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
