import React from 'react';
import { Card, Col, Row } from 'antd';
import BookCard from '../component/BookCard';
import { homeBookRowStyle, homeBookDivStyle } from '../styles/style';
const { Meta } = Card;
const HomeBooks = () => (
    <div style={homeBookDivStyle}>
        <Row gutter={[24, 24]} style={homeBookRowStyle}>
            <Col xs={24} sm={24} md={12}>
                <BookCard />
            </Col>
            <Col xs={24} sm={24} md={12}>
                <BookCard />
            </Col>
            <Col xs={24} sm={24} md={12}>
                <BookCard />
            </Col>
        </Row>
        <Row gutter={[16, 16]} style={homeBookRowStyle}>
            <Col xs={24} sm={24} md={12}>
                <BookCard />
            </Col>
            <Col xs={24} sm={24} md={12}>
                <BookCard />
            </Col>
            <Col xs={24} sm={24} md={12}>
                <BookCard />
            </Col>
        </Row>
    </div>
);
export default HomeBooks;