import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
//import Pricing from './Pricing';
import LoginPage from './component/LoginRegistrationPage/LoginPage';
import RegistrationPage from './component/LoginRegistrationPage/RegistrationPage';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveDashboard from './component/Dashboard/ResponsiveDashboard';
import PricingPage from './component/LandingPage/PricingPage';
import SupportPage from './component/LandingPage/SupportPage';


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route  path='/' exact component={App} />
      <Route  path='/login' component={LoginPage} />
      <Route  path='/registration' component={RegistrationPage} />
      <Route  path='/responsivedashboard' component={ResponsiveDashboard} />
      <Route  path='/pricing' component={PricingPage} />
      <Route  path='/support' component={SupportPage} />
    
    </Switch>
  </Router>,

  document.getElementById('root')
);
