import React, { Component } from 'react';

import classes from './ReactBox.css'
import { withRouter } from 'react-router-dom';

class ReactBox extends Component{

  clicked = () => {
    this.props.history.push('/reactapp')
}; 


  render(){
    return(
           <div className={classes.Boxform} onClick={this.clicked}>
    
            React App
        

    </div>
    )
  }
};

export default withRouter(ReactBox);