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
        const { onClick, items, id, stepNumber } = this.props;
        
        return (
            <div className="Sidebar-container" key={id}>
                <div className="Sidebar-header">
                    <p className="primary-color lato-bold">Auswahl</p>
                    <i className={`material-icons back-icon ${stepNumber === 1 ? 'gray-color' : ''}`} onClick={onClick}>keyboard_arrow_left</i>
                </div>
                <SelectedItem items={items}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const id = state.items.length;
    return {items: state.items, id: id}
};

export default connect(mapStateToProps)(Sidebar);
