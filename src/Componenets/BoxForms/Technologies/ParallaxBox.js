import React, { Component } from 'react';

import classes from './ParallaxBox.css'
import { withRouter } from 'react-router-dom';

class ScrollParallaxBox extends Component {

    clicked = () => {
        this.props.history.push('/parallax')
    };
    
    render() {
        return (
            <div className={classes.Boxform} onClick={this.clicked} >



            </div>
        )
    }
};


export default withRouter(ScrollParallaxBox);