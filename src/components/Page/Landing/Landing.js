import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import landing_image from '../../../assets/images/landing.png'
import './Landing.css';
export default class Landing extends Component {
    render () {
        return (
            <div className="Landing-container fluid">
                <Row className="Landing-container d-flex justify-content-center">
                    <Col xs={12} className="d-flex justify-content-end align-items-center" onClick={() => this.props.history.push('/home')}>
                        <img src={landing_image} className="Landing" alt=""></img>
                    </Col>
                </Row>
            </div>
        );
    }
}
