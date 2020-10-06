import React from 'react';

import './App.css';
import Auxcomp from './hoc/AuxComp/AuxComp'
import { Route, Switch, withRouter } from 'react-router-dom'
import StartPage from './Componenets/Pages/StartPage';
import ContentPage from './Componenets/Pages/ContentPage';

function App() {
  return (
    <div className="App">
      <Auxcomp>
        
          <Switch>

            <Route path='/content' component={ContentPage} />
            <Route path='/' exact component={StartPage} />

          </Switch>
       
      </Auxcomp>
    </div>
  );
}

export default withRouter(App);
