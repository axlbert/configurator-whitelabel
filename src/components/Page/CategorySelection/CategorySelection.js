
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CategorySelection.css';
import CategoryItem from '../../CategoryItem/CategoryItem';
import group from '../../../assets/images/group.png';

class CategorySelection extends Component {
    render () {
        const elements = [
            {image: group, name: 'Konfigurator'}, 
            {image: '', name: 'Mediathek'}, 
            {image: '', name: 'Service'}, 
            {image: '', name: 'Angebotsverwaltung'}, 
            {image: '', name: 'Nutzerverwaltung'}, 
            {image: '', name: 'Preislisten'}
        ];
        return (
            <Container>
                <Row className="justify-content-md-center title">Kategorieauswahl</Row>
                <Row className="justify-content-md-center">
                    <Col xs={8}>
                        <Row className="justify-content-md-center">
                            {elements.map((object, index) => {
                                return <Col className="d-flex justify-content-center" md={4} key={index}><CategoryItem content={object} /></Col>
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default CategorySelection;
