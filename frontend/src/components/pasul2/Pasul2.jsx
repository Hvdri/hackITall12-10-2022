import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';
import './Pasul2.css';
import { useState } from 'react';
import axios from 'axios';

import Autocomplete from './Autocomplete';

function Pasul2(){

  

    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


    const [JSON, setJSON] = useState("");
    const [result, setResult] = useState("");
  
    axios.get('http://localhost/hackITall12-10-2022/backend/main.php?apicall=Search')
    .then(function (response) {
      setJSON(response);
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      console.log(JSON.stringify(JSON));
    });
    // const handleChange = (e) => {
    //   setDataMotiv(e.target.value);
    // };
  
    // const handleSumbit = (e) => {
    //     e.preventDefault();
        
    //     axios.post('http://localhost/hackITall12-10-2022/backend/main.php?apicall=Motiv', {
    //       dataMotiv: dataMotiv
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    //     .catch(error => setResult({ error: error.message }));
    // };

    return (
        <div className='container pt-5'>
        <Navbar />
        

        <div class="d-flex align-items-center flex-column">
          <div class="text1 p-3">In ce locatie vrei sa ne vizitezi?</div>
          <div class="p-3">Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate.</div>
        </div>
  
        <div className='d-flex justify-content-center'>
          
          
              
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">SEARCH</span>

                <div className=''>
                <Autocomplete 
                    suggestions={JSON}
                    // onChange={(event) => handleChange(event)} 
                    />
                <div
            // onClick={(event) => handleSumbit(event)}
          
          >
          <Link to="/Pasul3" className='link row mt-5'>
            <button className='btn btn-primary'>
            Pasul urmator
            </button>
          </Link>
          </div>
          </div>
          </div>
                <h1>{result}</h1>
          
        
  

        </div>
        </div>
      );
  
    
}

export default Pasul2;