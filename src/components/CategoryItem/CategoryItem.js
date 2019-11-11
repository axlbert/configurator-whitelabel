import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './CategoryItem.css'

class  CategoryItem extends Component {
    render () {
        return (
                <div className="Category-container d-flex flex-column align-items-center mb-3" onClick={() => {
                    this.props.history.push("/machine-configure");}}>
                    <div className="Category-block d-flex align-items-center justify-content-center">
                        <img src={this.props.content.image} alt="empty" className={`${this.props.content.name === 'Konfigurator'? 'Cat-item-image' : 'Cat-item-icon'}`} />
                    </div>
                    <p className="Cat-Item-name">{this.props.content.name}</p>
                </div>
        );
    }
}

export default withRouter(CategoryItem);
