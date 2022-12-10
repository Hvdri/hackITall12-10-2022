import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Pasul1 (){
    return (
    <div>
        <h1>Welcome to Pasul 1!</h1>

        
        <li>
          <Link to="/Pasul2">Pasul2</Link>
        </li>
    </div>
    );

}

export default Pasul1;
