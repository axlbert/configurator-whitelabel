import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './MachineConfigure.css';
import Sidebar from '../../Sidebar/Sidebar';
import ConfigureFlow from '../../ConfigureFlow/ConfigureFlow';
import content from '../../../res/jsonRes';
import { addItemToBasket } from '../../../redux_setup/actions';


class MachineConfigure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: content.step1.title,
            subtitle: content.step1.subtitle,
            data: content.step1.data,
            stepNumber: content.step1.stepNumber,
            design: content.step1.design,
        }
        this.onMachineItemClick = this.onMachineItemClick.bind(this);
    }

    onMachineItemClick(item) {
        this.props.dispatch(addItemToBasket(item));
        const { stepNumber } = this.state;
        this.setState({
            title: content['step' + (stepNumber+1)].title,
            subtitle: content['step' + (stepNumber+1)].subtitle,
            data: content['step' + (stepNumber+1)].data,
            stepNumber: content['step' + (stepNumber+1)].stepNumber,
            design: content['step' + (stepNumber+1)].design,
        })
    }

    render () {
        const {title, subtitle, data, design} = this.state;
        const NewComponent = design;
        return (
            <div>
                <div className="d-flex">
                    <Sidebar />
                    <Container className="Main-container justify-content-center">
                        <Row className="justify-content-md-center title">
                            {title}
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={7}>
                                <Row className="justify-content-md-center mb-3 ml-3 mr-3 pb-2 border-bottom border-gray primary-color">
                                    {subtitle}
                                </Row>
                                <NewComponent items={data} onClick={this.onMachineItemClick}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ConfigureFlow />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {action: bindActionCreators(addItemToBasket, dispatch)}
}

export default connect(mapDispatchToProps)(MachineConfigure);
