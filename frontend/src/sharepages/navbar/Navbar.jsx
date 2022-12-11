import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
  return (

    <nav className="navbar fixed-top d-flex justify-content-between ">
        <div className="nav-item ">
            <a
                onClick={() => navigate(-1)}
              >
              <IoIosArrowBack />
            </a>
        </div>
        <div className='nav-item'>
            <a class="navbar-brand" href="#">
                <img src="https://cdn0.erstegroup.com/content/dam/ro/bcr/common/logo-svg/BCR_web_internal-material.svg" alt="BCR Banca Comerciala Romana" width="102" height="38"/>
            </a>
        </div>
        <div className="nav-item">
            <a>EN|RO</a>
        </div>
    </nav>

  )
}

export default Navbar