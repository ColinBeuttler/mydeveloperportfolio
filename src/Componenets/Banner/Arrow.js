import React, { Component } from 'react'
import classes from './Banner.css'
import { withRouter } from 'react-router-dom';

class Arrow extends Component {

    clicked = () => {
        this.props.history.push('/content')
    };


    render() {

        return (
            <div onClick={this.clicked} className={classes.arrow}>
                <span></span>
                <span></span>
                <span></span>

            </div>
        )
    }
}


export default withRouter(Arrow);