import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/home-page.components';
import Shop from './components/shop/shop.components';
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
