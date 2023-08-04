import React from 'react';
import { Card, Col, Row } from 'antd';
import BookCard from '../component/BookCard';
import { homeBookRowStyle, homeBookDivStyle } from '../styles/style';
const { Meta } = Card;
const HomeBooks = ({ books }) => {
    return (
        <div style={homeBookDivStyle}>
            <Row style={homeBookRowStyle}>
                {books.map((book) => (
                    <Col key={book.id} xs={24} sm={24} md={12}>
                        <BookCard
                            title={book.name}
                            author={book.author}
                            image_s3_id={book.image_s3_id}
                        // Add more props here as needed
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
};
export default HomeBooks;