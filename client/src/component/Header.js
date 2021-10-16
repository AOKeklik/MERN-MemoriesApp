import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return <nav id="top" className="navbar navbar-dark navbar-expand-lg bg-dark fs-5 py-lg-2 mb-5">
        <div className="container">
            <Link to='/'><div className="navbar-brand fs-3">Ani Kutusu</div></Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-link mx-auto me-lg-5">
                        <Link to='/create'><div className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Bir Ani Paylas</div></Link>
                    </li>
                    <li className="nav-link mx-auto me-lg-5">
                        <Link to='/auth'><div className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Giris Yap</div></Link>
                    </li>
                    <li className="nav-link mx-auto me-lg-5">
                        <Link to='/auth'><div className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Cikis Yap</div></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Header
