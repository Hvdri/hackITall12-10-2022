import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';
import Footer from '../../sharepages/footer/Footer';

import './Pasul2.css';

function Pasul2(){
    return (
        <div className='container pt-5'>
        <Navbar />
        <div class="progress">
        <div class="progress-bar2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div class="d-flex align-items-center flex-column">
          <div class="text1 p-3">In ce locatie vrei sa ne vizitezi?</div>
          <div class="p-3">Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate.</div>
        </div>
  
        <div className='d-flex flex-column'>
          
          <div class="input-group mb-3 d-flex">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
              </div>
            <input type="text" class="form-control" placeholder="Introdu adresa/orasul/sectorul sau numele unitatii" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        
          <Link to="/Pasul3" className='d-flex justify-content-center'>
            <button className='btn btn-secondary'>
              Pasul urmator
            </button>
          </Link>

        </div>
          <Footer />
        </div>
      );
  
    
}

export default Pasul2;