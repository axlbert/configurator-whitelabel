import React, { Component } from 'react';
import './MachineItem.css'

class MachineItem extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: props.content.selected };
    }

    render () {
        return (
            <div className="Item-container d-flex flex-column align-items-center" onClick={() => {
                this.setState({selected: !this.state.selected})
            }}>
                <div className={`Item-block d-flex align-items-center justify-content-center ${this.state.selected ? "active" : ""}`}>
                    <img src={this.props.content.image} className="Item-icon" alt="logo" />
                </div>
                <p className="Item-name">{this.props.content.name}</p>
            </div>
        );  
    }
}

export default MachineItem;
