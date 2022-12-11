import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';
import Footer from '../../sharepages/footer/Footer';

import './Pasul4.css';

function Pasul4() {
    return (
        <div className='container pt-5'>
        <Navbar />
        <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="d-flex align-items-center flex-column">
          <div class="text1 p-3">Salut!</div>
          <div class="p-3">Avem nevoie de datele tale pentru a face programarea.</div>
        </div>
  
        <div className='container col-align-items-center col-5'>
        
          <label class="input custom-file-label" for="inputGroupFile02">Nume:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Nume" aria-describedby="inputGroup-sizing-default" 
            placeholder='Nume'/>
          </div>
          
          <label class="input custom-file-label" for="inputGroupFile02">Prenume:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Prenume" aria-describedby="inputGroup-sizing-default" placeholder='Prenume'/>
          </div>
          
          <label class="input custom-file-label" for="inputGroupFile02">CNP:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="CNP" aria-describedby="inputGroup-sizing-default" placeholder='CNP'/>
          </div>
        
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1"/>
            <label class="form-check-label" for="gridCheck1"/>
            Sunt de acord cu <a href="https://www.bcr.ro/ro/persoane-fizice/informatii-utile/informare-prelucrare-date-personale-tranzactii-ocazionale">politica de preluare a datelor</a> cu caracter personal
          </div>
        
            <Link to="/Pasul5" className='link row mt-5'>
            <button className='btn btn-secondary'>
              Pasul urmator
            </button>
            </Link>
        </div>
      </div>
      );
}

export default Pasul4