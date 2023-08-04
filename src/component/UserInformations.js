import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { informationFormStyle } from '../styles/style';


const UserInformations = ({ user }) => {
    useEffect(() => {

    }, [user])
    const onFinish = (values) => {
        console.log('Form values:', values); // You can handle form submission here
        // TODO
    };

    return (
        <Form
            style={informationFormStyle}
            onFinish={onFinish}
            initialValues={{
                fullName: user.fullName,
                username: user.username,
                email: user.email,
            }}

        >
            <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="User Name"
                name="username"
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
                    Save Changes
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserInformations;
