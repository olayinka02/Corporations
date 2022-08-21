import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
//import Pricing from './Pricing';
import LoginPage from './component/LoginPage';
import RegistrationPage from './component/RegistrationPage';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPage from './component/DashboardPage';


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route  path='/' exact component={App} />
      <Route  path='/login' component={LoginPage} />
      <Route  path='/registration' component={RegistrationPage} />
      <Route  path='/dashboard' component={DashboardPage} />
    
    </Switch>
  </Router>,

  document.getElementById('root')
);
