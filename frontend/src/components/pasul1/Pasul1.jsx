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

      <div className='container'>
        <div className='btn'>
          <button className='btn'>
              Depunere sau retragere numerar
          </button>
        </div>

        <div className='btn'>
          <button>
              Operatiune fara numerar
          </button>
        </div>

        <div className='btn'>
          <button>
              Credit
          </button>
        </div>

        <div className='btn'>
          <button>
            Economisire
          </button>
        </div>

        <div className='btn'>
          <button>
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
