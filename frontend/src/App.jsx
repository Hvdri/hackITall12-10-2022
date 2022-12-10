import React, { Component } from 'react';

import './index.css';

import Pasul1 from './components/pasul1/Pasul1';
import Pasul2 from './components/pasul2/Pasul2';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

  class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}

        <li>
          <Link to="/Pasul1">Pasul1</Link>
        </li>
        
      </ul>
      <Routes>
      <Route exact path='/' element></Route>
      <Route exact path='/Pasul1' element={< Pasul1 />}></Route>
      <Route exact path='/Pasul2' element={< Pasul2 />}></Route>
      </Routes>
    </div>
    </Router>
    
  );
}

  }

export default App;
