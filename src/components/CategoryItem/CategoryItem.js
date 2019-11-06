import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";
import './CategoryItem.css'

class  CategoryItem extends Component {
    handleClick(e) {
        let history = useHistory();
        history.push('/machine-configure');
    }

    render () {
        return (
                <div className="Item-container d-flex flex-column align-items-center mb-3" onClick={() => {
                    this.props.history.push("/machine-configure");}}>
                    <div className="Item-block d-flex align-items-center justify-content-center">
                        <img src={this.props.content.image} className={`${this.props.content.name == 'Konfigurator'? 'Cat-item-image' : 'Cat-item-icon'}`} />
                    </div>
                    <p className="Cat-Item-name">{this.props.content.name}</p>
                </div>
        );
    }
}

export default withRouter(CategoryItem);
