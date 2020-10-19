import React, { Component } from 'react';

import classes from './GoPlayRough.css';
import { withRouter } from 'react-router-dom';


class GoPlayRough extends Component {

    clicked = () => {
        this.props.history.push('/goplayrough')
    };

    render() {

        return (

            <div className={classes.Boxform} onClick={this.clicked}>

            </div>

        )
    }
};


export default withRouter(GoPlayRough);