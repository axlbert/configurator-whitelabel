import React, { Component } from 'react';
import './Sidebar.css';
import { connect } from 'react-redux';

function SelectedItem({item}) {
    return (
        <div>
            {item.map((object, index) => {
                return <div className="Configured-item" key={index}>
                            <i className="material-icons gray-color mr-2">check</i>
                            <p>{object.name}</p>
                        </div>
            })}
        </div>
    );
}

class Sidebar extends Component {
    render ()  {
        return (
            <div className="Sidebar-container">
                <div className="Sidebar-header">
                    <p className="blue-color lato-bold">Auswahl</p>
                    <i className="material-icons">keyboard_arrow_left</i>
                </div>
                <SelectedItem item={this.props.machines}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps)(Sidebar);
