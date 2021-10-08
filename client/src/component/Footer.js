import React from 'react'
import {IconContext} from 'react-icons'
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer() {
    return <footer className="text-center text-white bg-dark mt-5">
    <div className="container">
      <section>
        <IconContext.Provider value={{ size: "1rem", color: "white"}}>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaFacebook /></a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaTwitter /></a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaGoogle /></a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaInstagram /></a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaLinkedin /></a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaGithub /></a>
        </IconContext.Provider>
      </section>
    </div>
    <div className="text-center text-white pb-4" >
      © 2021 Copyright
      <a href="#" className="text-danger text-decoration-none"> Ani Kutusu</a>
    </div>
  </footer>
}

export default Footer
