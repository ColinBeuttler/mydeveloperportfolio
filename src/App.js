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
              <Route path='/parallax' component={() => {window.location.href = 'https://www.npmjs.com/package/react-scroll-parallax'; return null;}} />
              <Route path='/reactapp' component={() => {window.location.href = 'https://reactjs.org/docs/create-a-new-react-app.html'; return null;}} />
              <Route path='/css' component={() => {window.location.href = 'https://reactjs.org/docs/faq-styling.html'; return null;}} />
              <Route path='/goplayrough' component={() => {window.location.href = 'https://goplayruff.herokuapp.com/'; return null;}} />
              <Route path='/weatherblog' component={() => {window.location.href = 'https://updogsweatherfinder.herokuapp.com/'; return null;}} />
              <Route path='/linkedin' component={() => {window.location.href = 'https://www.linkedin.com/in/colin-beuttler-5683b8149/'; return null;}} />
              <Route path='/resume' component={() => {window.location.href = 'https://docs.google.com/document/d/1hxXd6geb2dst2L_sGhxh2LuiKeHr04Q6VKzWXeCrRkg/edit'; return null;}} />
              <Route path='/github' component={() => {window.location.href = 'https://github.com/ColinBeuttler'; return null;}} />
              <Route path='/' exact component={StartPage} />

            </Switch>

          </ParallaxProvider>

        </Auxcomp>

      </div>
    )
  }
}


export default withRouter(App);
