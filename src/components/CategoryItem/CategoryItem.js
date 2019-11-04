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
                <div className="Item-container d-flex flex-column align-items-center" onClick={() => {
                    this.props.history.push("/machine-configure");
                  }}>
                    <div className="Item-block d-flex align-items-center justify-content-center">
                        <img src={this.props.content.image} className="Item-icon" alt="logo" />
                    </div>
                    <p className="Item-name">{this.props.content.name}</p>
                </div>
        );
    }
}

export default withRouter(CategoryItem);
