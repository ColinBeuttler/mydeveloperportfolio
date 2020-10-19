import React, { Component } from 'react';

import classes from './WeatherBlog.css';
import { withRouter } from 'react-router-dom';

class WeatherApp extends Component{

    clicked = () => {
        this.props.history.push('/weatherblog')
    };

    render(){
        return(
             <div className={classes.Boxform} onClick={this.clicked}>

    </div>
        )
    }
};

export default withRouter(WeatherApp);