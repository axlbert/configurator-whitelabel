import React, { Component } from 'react';
import './MachineItem.css';

class MachineItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.content.selected
        }
    }

    componentWillReceiveProps() {
        console.log('=============', this.props.content.selected)
        this.setState({selected: this.props.content.selected})
    }

    render () {
        return (
            <div className="Item-container d-flex flex-column align-items-center" onClick={(e) => {
                e.preventDefault()
                this.setState({selected: !this.state.selected})
                this.props.content.selected = this.state.selected;
                this.props.onClick(this.props.content);
            }}>
                <div className={`Item-block d-flex align-items-center justify-content-center ${this.state.selected ? 'active' : ''}`}>
                    <img src={this.props.content.image} alt="empty" className="Item-image" />
                </div>
                <p className="Item-name">{this.props.content.name}</p>
            </div>
        );  
    }
}

export default MachineItem;
