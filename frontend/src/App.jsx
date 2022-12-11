import React, { Component } from 'react';

import './index.css';

import Pasul1 from './components/pasul1/Pasul1';
import Pasul2 from './components/pasul2/Pasul2';
import Pasul3 from './components/pasul3/Pasul3';
import Pasul4 from './components/pasul4/Pasul4';
import Pasul5 from './components/pasul5/Pasul5';
import Pasul6 from './components/pasul6/Pasul6';
import Pasul7 from './components/pasul7/Pasul7';


import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

  class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/' element></Route>
      <Route exact path='/Pasul1' element={< Pasul1 />}></Route>
      <Route exact path='/Pasul2' element={< Pasul2 />}></Route>
      <Route exact path='/Pasul3' element={< Pasul3 />}></Route>
      <Route exact path='/Pasul4' element={< Pasul4 />}></Route>
      <Route exact path='/Pasul5' element={< Pasul5 />}></Route>
      <Route exact path='/Pasul6' element={< Pasul6 />}></Route>
      <Route exact path='/Pasul7' element={< Pasul7 />}></Route>
      </Routes>
    </div>
    </Router>
    
  );
}

  }

export default App;
