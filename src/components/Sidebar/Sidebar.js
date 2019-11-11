import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';

function SelectedItem({items}) {
    return (
        <div>
            {items.map((item, index) => {
                return <div className="Configured-item" key={index}>
                            <i className="material-icons gray-color mr-2">check</i>
                            <p>{item.name}</p>
                        </div>
            })}
        </div>
    );
}

class Sidebar extends Component {
    render ()  {
        const { items, onClick } = this.props;
        return (
            <div className="Sidebar-container">
                <div className="Sidebar-header">
                    <p className="primary-color lato-bold">Auswahl</p>
                    <i className="material-icons back-icon" onClick={onClick}>keyboard_arrow_left</i>
                </div>
                <SelectedItem items={items}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps)(Sidebar);
