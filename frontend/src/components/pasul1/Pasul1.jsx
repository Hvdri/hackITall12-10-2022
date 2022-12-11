import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Footer from '../../sharepages/footer/Footer';
import Navbar from '../../sharepages/navbar/Navbar';
// import $ from "jquery";
import './Pasul1.css';
import axios from 'axios';
import '../../App'

import { useState } from 'react';
// import axios from "axios";

function Pasul1() {
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const [dataMotiv, setDataMotiv] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setDataMotiv(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    // axios({
    //   method: 'POST',
    //   url: `http://localhost/hackITall12-10-2022/backend/main.php?apicall=Motiv`,
    //   headers: { 'Content-Type': 'application/json', },
    //   data: result
    // })
    //   .then(result => {
    //     console.log(result);

    //   })
    axios.post('http://localhost/hackITall12-10-2022/backend/main.php?apicall=Motiv', {
      dataMotiv: 'pula'
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



  return (
    <div className='container pt-5'>
      <Navbar />

      <div class="d-flex align-items-center flex-column">
        <div class="text1 p-3">Despre ce vrei sa vorbim?</div>
        <div class="p-3">Alege unul dintre subiectele de mai jos, pentru care programezi vizita in unitate.</div>
      </div>

      <div className='container col-align-items-center col-5'>
        <div className='row'>
          <button id="m1" type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off"
            value="pula"
            onClick={(value) => handleChange(value)}
          >
            {op1}


          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off"
            name='name'
          >
            Operatiune fara numerar
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Credit
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Economisire
          </button>
        </div>

        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Asigurare
          </button>
        </div>


        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Asigurare
          </button>
        </div>


        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Asigurare
          </button>
        </div>


        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Asigurare
          </button>
        </div>


        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Asigurare
          </button>
        </div>


        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Asigurare
          </button>
        </div>


        <div className='row'>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" >
            Asigurare
          </button>
        </div>


        <Link to="/Pasul2" className='link row mt-5'>
          <button className='btn btn-secondary'
            method="post"
            onClick={(event) => handleSumbit(event)}
          >
            Pasul urmator
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );

}

export default Pasul1;
