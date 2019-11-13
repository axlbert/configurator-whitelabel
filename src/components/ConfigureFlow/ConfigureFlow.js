import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './ConfigureFlow.css';

function Step({content, index}) {
    return (
        <div className="d-flex justify-content-center flex-column">
            <div className="d-flex align-items-center justify-content-center">
                <div className={`${index === 0 ? 'no-line' : 'Connect-line'}`}></div>
                <div className="Step-wrap">
                    {content.done ? (
                        <div className="circle circle-done">
                            <i className="material-icons check">check</i>
                        </div>
                    ) : (
                        <div className="circle">{content.flowNumber}</div>
                    )}
                </div>
                <div className={`${index === 5 ? 'no-line' : 'Connect-line'}`}></div>
            </div>
            <p className="Step-name">{content.flowName}</p>
        </div>
    )
}

function ConfigureFlow({step}) {
    const elements = [
        {flowName: 'Kategorie', flowNumber: 1, done: true},
        {flowName: 'Produkt', flowNumber: 2, done: true},
        {flowName: 'Ausstattung', flowNumber: 3, done: step >= 2 ? true : false},
        {flowName: 'Kontaktdaten', flowNumber: 4, done: step >= 14 ? true : false},
        {flowName: 'Handler', flowNumber: 5, done: step >= 15 ? true : false},
        {flowName: 'Fertig', flowNumber: 6, done: step === 16 ? true : false},
    ];

    return (
        <div className="Configure-flow">
            <Container >
                <Row>
                    {elements.map((object, index) => {
                        return <Col className="Flow-container" key={index}><Step content={object} index={index}/></Col>
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default ConfigureFlow;
