import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './MachineConfigure.css';
import Sidebar from '../../Sidebar/Sidebar';
import ConfigureFlow from '../../ConfigureFlow/ConfigureFlow';
import Button from '../../Button/Button';
import content from '../../../res/jsonRes';
import { addItemToBasket, clearBasket } from '../../../redux_setup/actions';


class MachineConfigure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: content.step1.title,
            subtitle: content.step1.subtitle,
            data: content.step1.data,
            stepNumber: content.step1.stepNumber,
            design: content.step1.design,
            multiSelection: false,
            itemSelected: false,
            noBasket: false,
        }
        this.onItemClick = this.onItemClick.bind(this);
    }

    componentWillUnmount() {
        this.props.dispatch(clearBasket());
    }

    onItemClick(item) {
        let stepNumber;
        if (item.redirect) {
            if (item.redirect === '/home') {
                this.props.history.push(item.redirect);
                return;
            } else {
                stepNumber = 0;
            }
            this.props.dispatch(clearBasket());
        } else {
            stepNumber = this.state.stepNumber;
        }
        
        const { multiSelection, noBasket } = this.state;
        
        this.setState({itemSelected: multiSelection ? true : false});
        const nextStep = item.nextStep ? item.nextStep : stepNumber + 1;

        if (!item.nextStep && !noBasket) {
            this.props.dispatch(addItemToBasket(item));
        }
        if (!multiSelection || item.nextStep) {
            this.setState({
                title: content['step' + nextStep].title,
                subtitle: content['step' + nextStep].subtitle,
                data: content['step' + nextStep].data,
                stepNumber: content['step' + nextStep].stepNumber,
                design: content['step' + nextStep].design,
                multiSelection: content['step' + nextStep].multiSelection,
                noBasket: content['step' + nextStep].noBasket
            })
        }
    }

    renderFurtherButton() {
        const { itemSelected, stepNumber } = this.state;
        return this.state.multiSelection && itemSelected ? <Button step={stepNumber} onClick={this.onItemClick}/> : null
    }

    render () {
        const {title, subtitle, data, design, noBasket, stepNumber} = this.state;
        const NewComponent = design;
        return (
            <div>
                <div className="d-flex Container">
                    {!noBasket ? <Sidebar /> : null}
                    <Container className="Main-container justify-content-center">
                        <Row className="justify-content-md-center title mt-1 mb-1">
                            {title}
                        </Row>
                        <Row className="justify-content-md-center primary-color">
                            <Col xs={7} className="d-flex justify-content-center border-bottom pb-2">{subtitle}</Col>
                        </Row>
                        <NewComponent items={data} step={stepNumber} onClick={this.onItemClick}/>
                        <Row className="justify-content-center">
                            <Col xs={7} className="d-flex justify-content-end">
                                {this.renderFurtherButton()}    
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
    return {action: bindActionCreators({addItemToBasket, clearBasket}, dispatch)}
}

export default connect(mapDispatchToProps)(MachineConfigure);
