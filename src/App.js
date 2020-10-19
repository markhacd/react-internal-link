import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import SubPages from './components/subPages';

export default () => {
  return (
    <>
      <h1>Hello world</h1>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/subPages">Sub Pages</Link></li>
          </ul>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/subPages" component={SubPages} />
      </Router>


    </>
  );
}