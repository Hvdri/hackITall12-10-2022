import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import './Navbar.css'



function Navbar() {
  return (

    <nav className="navbar fixed-top bg-light">
        <div className="">
            <a>
                <IoIosArrowBack />
            </a>
        </div>
        <div className=''>
            <a class="navbar-brand" href="#">
                <img src="https://cdn0.erstegroup.com/content/dam/ro/bcr/common/logo-svg/BCR_web_internal-material.svg" alt="BCR Banca Comerciala Romana" width="102" height="38"/>
            </a>
        </div>
        <div className="">
            <a>hello</a>
        </div>
    </nav>

  )
}

export default Navbar