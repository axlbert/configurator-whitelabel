import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MachineItem from '../../MachineItem/MachineItem';

export const MachineType = (props) => {
    const {items, onClick} = props;
    return (
        <Row className="justify-content-md-center Machine-container">
            {items.map((item, index) => {
                return (
                    <Col className="d-flex justify-content-center" md={4} key={index}>
                        <MachineItem content={item} step={1} onClick={onClick} />
                    </Col>
                )
            })}
        </Row>
    );
}

export const OptionType = (props) => {
    const {items, onClick} = props;
    return (
        <Row className="justify-content-center">
            {items.map((item, index) => {
                return (
                    <Col className="Configured-item d-flex align-items-center" md={7} key={index} 
                        onClick={() => {onClick(item)}}
                    >
                        <i className="material-icons gray-color mr-2">check</i>
                        <p>{item.name}</p>
                    </Col>
                )
            })}
        </Row>
    );
}
