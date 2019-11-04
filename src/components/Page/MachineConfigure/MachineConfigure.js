import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './MachineConfigure.css';
import Sidebar from '../../Sidebar/Sidebar';
import MachineItem from '../../MachineItem/MachineItem';
import Button from '../../../components/Button/Button';
import ConfigureFlow from '../../ConfigureFlow/ConfigureFlow';

import Dreiseitenkipper from '../../../assets/images/Dreiseitenkipper.png';
import Muldenkipper from '../../../assets/images/Muldenkipper.png';
import Hakenlift from '../../../assets/images/Hakenlift.png';
import Abschiebwagen from '../../../assets/images/Abschiebwagen.png';
import Plattformanhänger from '../../../assets/images/Plattformanhänger.png';
import Vorderwagen from '../../../assets/images/Vorderwagen.png';


function MachineConfigure() {
    let elements = [
        {name: 'Dreiseitenkipper', image: Dreiseitenkipper, selected: false},
        {name: 'Muldenkipper', image: Muldenkipper, selected: false},
        {name: 'Hakenlift', image: Hakenlift, selected: false},
        {name: 'Abschiebwagen', image: Abschiebwagen, selected: false},
        {name: 'Plattformanhänger', image: Plattformanhänger, selected: false},
        {name: 'Vorderwagen', image: Vorderwagen, selected: false},
    ];

    return (
        <div>
            <div className="d-flex">
                <Sidebar />
                <Container className="Machine-container justify-content-center">
                    <Row className="justify-content-md-center title">
                        Welchen Maschinentyp wollen Sie konfigurieren?
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={8}>
                            <Row className="justify-content-md-center">
                                {elements.map((object, index) => {
                                    return <Col md={4} key={index}><MachineItem content={object} /></Col>
                                })}
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-md-end"><Button /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ConfigureFlow />
        </div>
    );
}

export default MachineConfigure;
