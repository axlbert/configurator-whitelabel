import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './MachineConfigure.css';
import Sidebar from '../../Sidebar/Sidebar';
import MachineItem from '../../MachineItem/MachineItem';
import Button from '../../../components/Button/Button';
import ConfigureFlow from '../../ConfigureFlow/ConfigureFlow';
import strings from '../../../res/strings';
import jsonRes from '../../../res/jsonRes';

class MachineConfigure extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            trailers: jsonRes.trailers
        };
        this.onMachineItemClick = this.onMachineItemClick.bind(this);
    }

    onMachineItemClick(machine) {
        // this.setState({trailers:[]})
    }

    render () {
        const { trailers } = this.state;
        return (
            <div>
                <div className="d-flex">
                    <Sidebar />
                    <Container className="Main-container justify-content-center">
                        <Row className="justify-content-md-center title">
                            {strings.machineConfigure.title}
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={7}>
                                <Row className="justify-content-md-center mb-3 ml-3 mr-3 pb-2 border-bottom border-gray primary-color">
                                    {strings.machineConfigure.choose}
                                </Row>
                                <Row className="justify-content-md-center Machine-container">
                                    {trailers.map((object, index) => {
                                        return (
                                            <Col className="d-flex justify-content-center" md={4} key={index}>
                                                <MachineItem content={object} onClick={this.onMachineItemClick} />
                                            </Col>
                                        )
                                    })}
                                </Row>
                                {/* <Row>
                                    <Col className="d-flex justify-content-md-end"><Button /></Col>
                                </Row> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ConfigureFlow />
            </div>
        );
    }
}

export default MachineConfigure;
