import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const BookCard = () => (
    <Card
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt="example" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334866.jpg" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
);
export default BookCard;