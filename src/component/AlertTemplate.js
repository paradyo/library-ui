import React from 'react';
import { Alert, Space } from 'antd';

const AlertTemplate = ({ data }) => {
    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Alert
                message={data.message}
                description={data.description}
                type={data.alert.type}
                showIcon={data.showIcon}
                closable={data.alert.closable}
            />
        </Space>
    );
};

export default AlertTemplate;
