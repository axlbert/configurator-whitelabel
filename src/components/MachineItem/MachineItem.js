import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMachine } from '../../redux_setup/actions/index';
import './MachineItem.css';

class MachineItem extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: props.content.selected };
    }

    render () {
        return (
            <div className="Item-container d-flex flex-column align-items-center" onClick={(e) => {
                this.setState({selected: !this.state.selected});
                e.preventDefault();
                this.props.dispatch(addMachine(this.props.content));
            }}>
                <div className={`Item-block d-flex align-items-center justify-content-center ${this.state.selected ? "active" : ""}`}>
                    <img src={this.props.content.image} className="Item-image" />
                </div>
                <p className="Item-name">{this.props.content.name}</p>
            </div>
        );  
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addMachine, dispatch) }
}

export default connect(mapDispatchToProps)(MachineItem);
