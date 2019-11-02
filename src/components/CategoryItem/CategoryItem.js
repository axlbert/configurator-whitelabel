import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import './CategoryItem.css'

class  CategoryItem extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/machine-configure');
    }

    render () {
        console.log(this.props);
        return (
            <div className="Item-container d-flex flex-column align-items-center">
                <div className="Item-block d-flex align-items-center justify-content-center" onClick={this.handleClick}>
                    <img src={this.props.content.image} className="Item-icon" alt="logo" />
                </div>
                <p className="Item-name">{this.props.content.name}</p>
            </div>
        );
    }
}

export default CategoryItem;
