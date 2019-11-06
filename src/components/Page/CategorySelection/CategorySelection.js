
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CategorySelection.css';
import CategoryItem from '../../CategoryItem/CategoryItem';
import jsonRes from '../../../res/jsonRes';

class CategorySelection extends Component {
    render () {
        const elements = jsonRes.categories;
        return (
            <Container>
                <Row className="justify-content-md-center title mb-5 mt-5">Kategorieauswahl</Row>
                <Row className="justify-content-md-center">
                    <Col xs={8}>
                        <Row className="justify-content-md-center">
                            {elements.map((object, index) => {
                                return <Col className="d-flex justify-content-center" md={3} key={index}><CategoryItem content={object} /></Col>
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default CategorySelection;
