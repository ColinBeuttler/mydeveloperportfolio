import React, { Component } from 'react';

import './App.css';
import Auxcomp from './hoc/AuxComp/AuxComp'
import { Route, Switch, withRouter } from 'react-router-dom'
import StartPage from './Componenets/Pages/StartPage';
import ContentPage from './Componenets/Pages/ContentPage';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {

  render() {

    return (

      <div className="App">

        <Auxcomp>

          <ParallaxProvider>

            <Switch>

              <Route path='/content' component={ContentPage} />
              <Route path='/' exact component={StartPage} />

            </Switch>

          </ParallaxProvider>

        </Auxcomp>

      </div>
    )
  }
}


export default withRouter(App);
