import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';

import './Pasul5.css';

function Pasul5() {
    return (
        <div className='container pt-5'>
        <Navbar />
        
        <div class="d-flex align-items-center flex-column">
          <div class="text1 p-3 ">Avem nevoie de datele dumneavoastra de contact</div>
          <div class="p-3">Pe datele furnizate it vom transmite informatiile pentru aceasta programare.</div>
        </div>
  
        <div className='container col-align-items-center col-5'>
        <label class="input custom-file-label" for="inputGroupFile02">Adresa de e-mail:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="CNP" aria-describedby="inputGroup-sizing-default" placeholder='nume@exemplu.ro'/>
          </div>
  
        <label class="input custom-file-label" for="inputGroupFile02">Numar de telefon:</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="CNP" aria-describedby="inputGroup-sizing-default" placeholder='(ex: RO)+407xx xxx xxx'/>
          </div>
        
            <Link to="/Pasul6" className='link row mt-5'>
            <button className='btn btn-secondary'>
              Pasul urmator
            </button>
            </Link>
        </div>
      </div>
      );
}

export default Pasul5