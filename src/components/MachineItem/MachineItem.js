import React, { Component } from 'react';
import './MachineItem.css';

class MachineItem extends Component {
    render () {
        return (
            <div className="Item-container d-flex flex-column align-items-center" onClick={(e) => {
                this.props.content.selected = !this.props.content.selected;
                this.props.onClick(this.props.content);
            }}>
                <div className={`Item-block d-flex align-items-center justify-content-center ${this.props.content.selected ? 'active' : ''}`}>
                    <img src={this.props.content.image} alt="empty" className="Item-image" />
                </div>
                <p className="Item-name">{this.props.content.name}</p>
            </div>
        );  
    }
}

export default MachineItem;
