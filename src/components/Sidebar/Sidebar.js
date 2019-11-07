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

function getSelectedItems(state) {
    const items = [];
    if (Object.entries(state.trailer).length !== 0) {
        items.push({name: state.trailer.name});
        if (Object.entries(state.suspension).length !==0) {
            items.push({name: state.suspension.name});
        }
    }
    return items;
}

class Sidebar extends Component {
    render ()  {
        console.log('===========', this.props)
        const { items } = this.props;
        return (
            <div className="Sidebar-container">
                <div className="Sidebar-header">
                    <p className="primary-color lato-bold">Auswahl</p>
                    <i className="material-icons">keyboard_arrow_left</i>
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
