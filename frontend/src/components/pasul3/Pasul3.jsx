import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';

import './Pasul3.css';


function Pasul3() {
    return (
        <div className='container pt-5'>
        <Navbar />
        <div class="d-flex align-items-center flex-column">
          <div class="text1 p-3">In ce zi vrei sa ne vizitezi?</div>
          <div class="p-3">Alege data si intervalul orar pentru vizita la sucursala selectata.</div>
        </div>
  
        
  
        
            <Link to="/Pasul5" className='link row mt-5'>
            <button className='btn btn-secondary'>
              Pasul urmator
            </button>
            </Link>
        </div>
      );
}

export default Pasul3