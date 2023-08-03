import React from 'react';
import { Form, Input, Button } from 'antd';
import { registerFormStyle } from '../styles/style';

const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Form values:', values); // You can handle form submission here
    };

    return (
        <Form style={registerFormStyle} onFinish={onFinish}>
            <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!' }]}
            >
                <Input />
            </Form.Item>

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
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
