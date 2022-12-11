import React from 'react';
import '../../App';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../sharepages/navbar/Navbar';
import Footer from '../../sharepages/footer/Footer';
import $ from "jquery";
import './Pasul2.css';
import { useState } from 'react';


function Pasul2(){
  const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
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
          <div class="text1 p-3">In ce locatie vrei sa ne vizitezi?</div>
          <div class="p-3">Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate.</div>
        </div>
  
        <div className='d-flex flex-column'>
          
          
              <form class="input-group mb-3 d-flex"
                action="http://localhost/hackITall12-10-2022/backend/main.php?apicall=nume"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
              >
              <div class="input-group-prepend d-flex">
                <span class="input-group-text" id="basic-addon1">@</span>
              </div>

                <label htmlFor="name"></label>
                <input type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)} class="form-control" placeholder="Introdu adresa/orasul/sectorul sau numele unitatii" aria-label="Username" aria-describedby="basic-addon1"
                />
                <button className='btn btn-primary' type="submit">Submit</button>
                </form>
                <h1>{result}</h1>
          
        
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