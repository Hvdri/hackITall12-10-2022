import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Footer from '../../sharepages/footer/Footer';
import Navbar from '../../sharepages/navbar/Navbar';
import $ from "jquery";
import './Pasul1.css';

import '../../App'

import { useState } from 'react';
// import axios from "axios";

function Pasul1 (){

    const [dataMotiv, setDataMotiv] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
      setDataMotiv(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            dataType: "json",
            success(data) {
              setResult(data);
              console.log(data);
            },
        });
    };
  
  
  

  
    return (
      <div className='container pt-5'>
      <Navbar />

      <div class="d-flex align-items-center flex-column">
        <div class="text1 p-3">Despre ce vrei sa vorbim?</div>
        <div class="p-3">Alege unul dintre subiectele de mai jos, pentru care programezi vizita in unitate.</div>
      </div>

      <div className='container col-align-items-center col-5'>
        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" 
          action="http://localhost/hackITall12-10-2022/backend/main.php?apicall=Motiv"
            method="post"
            onClick={(event) => handleSumbit(event)}
          >
              Depunere sau retragere numerar
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" 
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
