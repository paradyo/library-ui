import React from 'react';
import { Card } from 'antd';
import { titleToKebabCase } from '../utilities/Helpers';
const { Meta } = Card;
const BookCard = ({ title, author, image_s3_id }) => (
    <a href={`/${titleToKebabCase(title)}`}>
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334866.jpg" />}
        >
            <Meta title={title} description={author} />
        </Card>
    </a>
);
export default BookCard;