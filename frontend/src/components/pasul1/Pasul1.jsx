import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Footer from '../../sharepages/footer/Footer';
import Navbar from '../../sharepages/navbar/Navbar';
// import $ from "jquery";
import './Pasul1.css';
import axios from 'axios';
import '../../App'

import { useState } from 'react';
// import axios from "axios";


function Pasul1 (){
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    const [dataMotiv, setDataMotiv] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
      setDataMotiv(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost/hackITall12-10-2022/backend/main.php?apicall=Motiv', {
          dataMotiv: dataMotiv
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .catch(error => setResult({ error: error.message }));
    };
  
    let op1 = "Operatiune cu numerar";
    let op2 = "Plata rata credit ";
    let op3 = "Operatiune fara numerar";
    let op4 = "Deschidere cont curent ";
    let op5 = "Deschidere cont minori ";
    let op6 = "Deschidere conturi refugiati ";
    let op7 = "Suport utilizare aplicatie George ";
    let op8 = "Diagnostic financiar gratuit ";
    let op9 = "Credit de nevoi personale ";
    let op10 = "Credit ipotecar ";
    let op11 = "Economisire  ";
    let op12 = "Contracte BpL  ";
    let op13 = "Investitii - subscriere  ";
    let op14 = "Investitii - rascumparare  ";
    let op15 = "Asigurare  ";
    let op16 = "Pensie privata";
  

  
    return (
      <div className='container pt-5'>
      <Navbar />

      <div class="d-flex align-items-center flex-column">
        <div class="text1 p-3">Despre ce vrei sa vorbim?</div>
        <div class="p-3">Alege unul dintre subiectele de mai jos, pentru care programezi vizita in unitate.</div>
      </div>

      <div className='container col-align-items-center col-5'>
        
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op1}
            onClick={(value) => handleChange(value)}
          >
              {op1}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op2}
            onClick={(value) => handleChange(value)}
          >
              {op2}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op3}
            onClick={(value) => handleChange(value)}
          >
              {op3}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op4}
            onClick={(value) => handleChange(value)}
          >
              {op4}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op5}
            onClick={(value) => handleChange(value)}
          >
              {op5}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op6}
            onClick={(value) => handleChange(value)}
          >
              {op6}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op7}
            onClick={(value) => handleChange(value)}
          >
              {op7}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op8}
            onClick={(value) => handleChange(value)}
          >
              {op8}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op9}
            onClick={(value) => handleChange(value)}
          >
              {op9}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op10}
            onClick={(value) => handleChange(value)}
          >
              {op10}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op11}
            onClick={(value) => handleChange(value)}
          >
              {op11}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op12}
            onClick={(value) => handleChange(value)}
          >
              {op12}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op13}
            onClick={(value) => handleChange(value)}
          >
              {op13}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op14}
            onClick={(value) => handleChange(value)}
          >
              {op14}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op15}
            onClick={(value) => handleChange(value)}
          >
              {op15}
          </button>
        </div>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"  autoComplete="off" 
            value = {op16}
            onClick={(value) => handleChange(value)}
          >
              {op16}
          </button>
        </div>
        

        

          <div
            onClick={(event) => handleSumbit(event)}
          
          >
          <Link to="/Pasul2" className='link row mt-5'>
          <button className='btn btn-primary'
            >
            Pasul urmator
          </button>
          </Link>
          </div>
      </div>
        <Footer />
    </div>
    );
}

export default Pasul1;
