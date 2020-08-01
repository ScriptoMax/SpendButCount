import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import CostLog from './CostLog'

class App extends Component {
  state = {  }
  render() { 
    return (  
         <Router>
             <Switch>
                  <Route path='/' exact={true} component={Home} />
                  <Route path='/cat/total' exact={true} component={Category} />
                  <Route path='/costLog' exact={true} component={CostLog} />
              </Switch> 
         </Router>
    );
  }
}
 
export default App;
