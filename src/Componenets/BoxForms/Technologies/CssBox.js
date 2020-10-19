import React, { Component } from 'react';

import classes from './CssBox.css'
import { withRouter } from 'react-router-dom';


class CssBox extends Component {

        clicked = () => {
                this.props.history.push('/css')
        };

        render() {
                return (
                        <div className={classes.Boxform} onClick={this.clicked}>

                                Pure CSS

                        </div>
                );

        }
};





export default withRouter(CssBox);