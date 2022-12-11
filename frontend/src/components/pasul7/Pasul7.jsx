import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';
import './Pasul7.css';

function Pasul7() {
    return (
        <div className='container pt-5'>
        <Navbar />
        <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="d-flex align-items-center flex-column">
          <div class="text1 p-3">Sumarul programarii</div>
          <div class="p-3">Confirma daca datele de mai jos sunt corecte.</div>
        </div>
  
        <div className='container col-align-items-center col-5'>
  
        
            <Link to="/Pasul8" className='link row mt-5'>
            <button className='btn btn-secondary'>
              Pasul urmator
            </button>
            </Link>
        </div>
      </div>
      );
}

export default Pasul7