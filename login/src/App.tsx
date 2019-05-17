import React from 'react';
import './App.css';

import { Home } from './components/Home';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Router>
      </header>
    </div>
  );
};

export default App;
