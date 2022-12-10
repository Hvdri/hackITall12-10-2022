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
        <h1>Welcome to Pasul 1!</h1>

        
        <li>
          <Link to="/Pasul2">Pasul2</Link>
        </li>
        <Footer />
    </div>
    );

}

export default Pasul1;
