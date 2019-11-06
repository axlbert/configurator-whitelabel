import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import MachineItem from '../../../MachineItem/MachineItem';
import strings from '../../../../res/strings';
import jsonRes from '../../../../res/jsonRes';
import { addMachine } from '../../../../redux_setup/actions/index';

class TrailerSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: strings.machineConfigure.title,
            items: jsonRes.trailers
        }
        this.onMachineItemClick = this.onMachineItemClick.bind(this);
    }

    onMachineItemClick(item) {
        this.props.dispatch(addMachine(item));
        this.props.history.push('/machine-configure/suspension');
    }

    render () {
        const { title, items } = this.state;
        return (
            <Container className="Main-container justify-content-center">
                <Row className="justify-content-md-center title">
                    {title}
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={7}>
                        <Row className="justify-content-md-center mb-3 ml-3 mr-3 pb-2 border-bottom border-gray primary-color">
                            {strings.machineConfigure.choose}
                        </Row>
                        <Row className="justify-content-md-center Machine-container">
                            {items.map((item, index) => {
                                return (
                                    <Col className="d-flex justify-content-center" md={4} key={index}>
                                        <MachineItem content={item} step={1} onClick={this.onMachineItemClick} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {action: bindActionCreators(addMachine, dispatch)};
}

export default connect(mapDispatchToProps)(withRouter(TrailerSelection));
