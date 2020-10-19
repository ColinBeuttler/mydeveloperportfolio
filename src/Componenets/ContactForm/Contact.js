import React, { Component } from 'react';

import classes from './Contact.css';
import { withRouter } from 'react-router-dom'

class Contactform extends Component{

    github = () => {
        this.props.history.push('/github')
};

linkedin = () => {
    this.props.history.push('/linkedin')
};

resume = () => {
    this.props.history.push('/resume')
};



    render(){

        return(
              <div className={classes.Contactbox}>

        <h2>
            beutt102@mail.chapman.edu
      
        </h2>  
        <p className={classes.textbox} onClick={this.github}>
            GitHub
            </p>
        
        <p className={classes.textbox} onClick={this.linkedin}> 
            LinkedIn
     </p>
        <p className={classes.textbox} onClick={this.resume}>
 
            Resume
        </p>

    </div>
    
        )
    }
};



export default withRouter(Contactform);