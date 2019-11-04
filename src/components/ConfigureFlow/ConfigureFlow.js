import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './ConfigureFlow.css';

function Step({content}) {
    return (
        <div className="Step-wrap">
            {content.done ? (
                <div className="circle circle-done">
                    <i className="material-icons check">check</i>
                </div>
            ) : (
                <div className="circle">{content.flowNumber}</div>
            )}
            <p className="Step-name">{content.flowName}</p>
        </div>
    )
}

function ConfigureFlow(params) {
    const elements = [
        {flowName: 'Kategorie', flowNumber: 1, done: true},
        {flowName: 'Produkt', flowNumber: 2, done: true},
        {flowName: 'Ausstattung', flowNumber: 3, done: false},
        {flowName: 'Kontaktdaten', flowNumber: 4, done: false},
        {flowName: 'Handler', flowNumber: 5, done: false},
        {flowName: 'Fertig', flowNumber: 6, done: false},
    ];

    return (
        <div className="Configure-flow">
        <Container >
            <Row>
                {elements.map((object, index) => {
                    return <Col key={index}><Step content={object}/></Col>
                })}
            </Row>
        </Container>
        </div>
    );
}

export default ConfigureFlow;
