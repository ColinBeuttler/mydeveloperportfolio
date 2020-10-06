import React, { Component } from 'react';
import classes from './Card.css'



class Cardform extends Component {


    render() {
        return (
            <div className={classes.outerwrapper}>
                <div className={classes.wrapper}>
                    <div className={classes.one} ></div>
                    <div className={classes.two}></div>
                    <div className={classes.three}></div>
                    <div className={classes.four}></div>
                </div>
            </div>
        )


    }
}

export default Cardform;