import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import landing_image from '../../../assets/images/landing.png'
import './Landing.css';
export default class Landing extends Component {
    render () {
        return (
            <Container className="Landing-container">
                <Row className="Landing-container d-flex justify-content-center">
                    <Col xs={7} className="d-flex justify-content-center align-items-center" onClick={() => this.props.history.push('/home')}>
                        <img src={landing_image} className="Landing" alt=""></img>
                    </Col>
                </Row>
            </Container>
        );
    }
}
