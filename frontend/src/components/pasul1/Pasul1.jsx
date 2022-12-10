import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import '../../sharepages/footer/Footer';
import '../../sharepages/navbar/Navbar';
import Footer from '../../sharepages/footer/Footer';
import Navbar from '../../sharepages/navbar/Navbar';

function Pasul1 (){
    return (
      <div>
      <Navbar />
      <div className='container-title'>
        <h1>Welcome to Pasul 1!</h1>
        <p>Alege un motiv pentru care programezi vizita in unitate</p>
      </div>

      <div className='container' action='../../../backend/main.php'>
        <div className='btn'>
          <button className='btn btn-outline-primary' type='submit'>
          {/* <button className='btn btn-outline-primary' type='submit'>
          <button className='btn btn-outline-primary' type='submit'> */}
              Depunere sau retragere numerar
          </button>
        </div>

        <div className='btn'>
          <button className='btn btn-outline-primary' type='submit'>
              Operatiune fara numerar
          </button>
        </div>

        <div className='btn'>
          <button className='btn btn-outline-primary' type='submit'>
              Credit
          </button>
        </div>

        <div className='btn'>
          <button className='btn btn-outline-primary' type='submit'>
            Economisire
          </button>
        </div>

        <div className='btn'>
          <button className='btn btn-outline-primary' type='submit'>
            Asigurare
          </button>
        </div>

      </div>
        
        <li>
          <Link to="/Pasul2">Continua</Link>
        </li>
        <Footer />
    </div>
    );

}

export default Pasul1;
