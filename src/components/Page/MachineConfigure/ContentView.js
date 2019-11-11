import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactMapGL from 'react-map-gl';
import MachineItem from '../../MachineItem/MachineItem';
import Button from '../../Button/Button';
import './ContentView.css';

export const MachineType = (props) => {
    const {items, onClick} = props;
    return (
        <Row className="justify-content-md-center mt-3">
            <Col xs={7}>
                <Row className="justify-content-md-center Machine-container">
                    {items.map((item, index) => {
                        return (
                            <Col className="d-flex justify-content-center" md={4} key={index}>
                                <MachineItem content={item} onClick={onClick} />
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    );
}

export const OptionType = (props) => {
    const {items, onClick} = props;
    return (
        <Row className="justify-content-md-center mt-4">
            <Col xs={6}>
                <Row className="justify-content-center">
                    {items.map((item, index) => {
                        return (
                            <Col className="Option-item d-flex align-items-center" md={7} key={index} 
                                onClick={() => {
                                    item.selected = !item.selected;
                                    onClick(item)
                                }}
                            >
                                <i className="material-icons gray-color mr-2">check</i>
                                <p>{item.name}</p>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    );
}

export const DescribeView = (props) => {
    const {items, onClick} = props;
    return (
        <Row className="justify-content-md-center mt-4">
            <Col xs={6}>
                <Row className="justify-content-center">
                    <textarea className="text-field" cols="40" rows="5" placeholder={items}></textarea>
                </Row>
                <Row className="justify-content-end pt-5 mt-5">
                    <Button step={5} onClick={onClick}/>
                </Row>
            </Col>
        </Row>
    );
}

export const OfferView = (props) => {
    const {items, onClick} = props;
    return (
        <Row className="justify-content-md-center">
            <Col xs={6}>
                {items.map((item, index) => {
                    return <Row key={index} className="pt-3 pb-3">
                        <Col xs={8} className="">
                            <p>{item.type}</p>
                            <p>{item.product}</p>
                        </Col>
                        <Col className="justify-content-end">
                            <p className="price">{item.price}</p>
                        </Col>
                    </Row>
                })}
                <Row className="list-price pb-3">
                    <Col xs={8}>Listenpreis</Col>
                    <Col className="price">44.444,00 €</Col>
                </Row>
                <Row className="pt-2">
                    <Col xs={8}>19,00% MwSt.</Col>
                    <Col className="price">8.444,36 €</Col>
                </Row>
                <Row className="pt-2">
                    <Col xs={8}>Gesamtsumme EUR</Col>
                    <Col className="price">52.888,36 €</Col>
                </Row>
                <Row className="justify-content-end mt-3">
                    <Button onClick={onClick} />
                </Row>
            </Col>
        </Row>
    )
}

export const UserForm = (props) => {
    const {onClick} = props;
    return (
        <Row className="justify-content-md-center mt-4">
            <Col xs={4} className="d-flex flex-column">
                <form className="d-flex flex-column">
                    <input type="text" className="input" placeholder="Vorname & Nachname"></input>
                    <label className="mt-2">*Bitte füllen Sie diese Feld aus</label>
                    <input type="text" className="input" placeholder="Postleitzahl"  />
                    <input type="text" className="input" placeholder="Telefonnummer"></input>
                    <input type="text" className="input" placeholder="E.Mail"></input>
                    <div className="button-wrap mt-3">
                        <Button className="justify-cotent-center mt-3" onClick={onClick} />
                    </div>
                </form>
            </Col>
        </Row>
    );
}

export class DealerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 400,
                height: 217,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
            },
            items: this.props.items,
            onClick: this.props.onClick
        };
    }
    
    render () {
        const {items, onClick, viewport} = this.state;
        return (
            <Container>
                <Row className="justify-content-md-center map pt-3 pb-3">
                    <Col className="d-flex justify-content-center">
                        <ReactMapGL mapboxApiAccessToken={'pk.eyJ1IjoiYmtoZGV2NzgiLCJhIjoiY2sycXpncDYwMGtsdTNpcWV0cGtlODJyYyJ9.Bqj78bMgOjwU9Zqnc3qr2Q'}
                            {...viewport}
                                onViewportChange={(viewport) => this.setState({viewport})}
                            />
                    </Col>
                </Row>
                <Row><Col className="mt-3 mb-3 yellow-color Lato-bold">Ihre Händler</Col></Row>
                <Row className="dealars">
                    {items.map((item, index) => {
                        return (
                            <Col key={index} onClick={onClick}>
                                <div className="dealer-box p-2">
                                    <p className="Lato-bold">{item.dealer}</p>
                                    <p>{item.phone}</p>
                                    <p>{item.email}</p>
                                    <p>{item.address}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

export const FinalView = (props) => {
    const {items, onClick} = props;
    return (
        <Row className="justify-content-md-center mt-5">
            <Col xs={7}>
                <Row>
                    {items.map((item, index) => {
                        return (
                            <Col key={index} onClick={() => {onClick(item)}} className="d-flex justify-content-center">
                                <div className="Item-box d-flex flex-column align-items-center justify-content-center">
                                    <img src={item.image} className="final-image mb-3" alt=""></img>
                                    <p className="Lato-bold primary-color">{item.name}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    );
}
