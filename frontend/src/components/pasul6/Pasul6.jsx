import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';
import './Pasul6.css';

function Pasul6() {
    return (
        <div className='container pt-5'>
        <Navbar />
        
        <div class="d-flex align-items-center flex-column">
          <div class="text1 p-3">Confirma numarul de telefon</div>
          <div class="p-3">Introdu codul din 4 cifre primit prin SMS pe numarul 0712345678</div>
        </div>
  
        <div className='container col-align-items-center col-5'>
        <label class="input custom-file-label" for="inputGroupFile02">Numar de telefon:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="CNP" aria-describedby="inputGroup-sizing-default" placeholder='(ex: RO)+407xx xxx xxx'/>
          </div>
          <p className='small' >Codul de verificare este valabil inca 4 minute 57 secunde </p>
  
        
            <Link to="/Pasul7" className='link row mt-5'>
            <button className='btn btn-secondary'>
              Pasul urmator
            </button>
            </Link>
        </div>
      </div>
      );
}

export default Pasul6