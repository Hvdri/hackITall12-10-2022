import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Footer from '../../sharepages/footer/Footer';
import Navbar from '../../sharepages/navbar/Navbar';

import './Pasul1.css';


import { useState } from 'react';
// import axios from "axios";

function Pasul1 (){

  const [motiv, setMotiv] = useState('');
  
  let ofr = 'Operatiune fara numerar';

  const handleClick = (e) => {
    e.preventDefault();
    console.log(motiv);
    // axios.get('http://localhost:5000/api/pasul1')
    // .then(res => {
    //   console.log(res);
    //   setData(res.data);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }
  
  

  
    return (
      <div className='container pt-5'>
      <Navbar />
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div class="d-flex align-items-center flex-column">
        <div class="text1 p-3">Despre ce vrei sa vorbim?</div>
        <div class="p-3">Alege unul dintre subiectele de mai jos, pentru care programezi vizita in unitate.</div>
      </div>

      <div className='container col-align-items-center col-5'>
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
              Depunere sau retragere numerar
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" 
                  onClick={() => setMotiv(ofr)}
                  name='name'
          >
              Operatiune fara numerar
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" > 
              Credit
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Economisire
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Asigurare
          </button>
        </div>

      
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Asigurare
          </button>
        </div>

      
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Asigurare
          </button>
        </div>

      
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Asigurare
          </button>
        </div>

      
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Asigurare
          </button>
        </div>

      
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Asigurare
          </button>
        </div>

      
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
            Asigurare
          </button>
        </div>

      
          <Link to="/Pasul2" className='link row mt-5'>
          <button className='btn btn-secondary'>
            Pasul urmator
          </button>
          </Link>
      </div>
        <Footer />
    </div>
    );

}

export default Pasul1;
