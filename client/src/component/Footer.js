import React from 'react'
import {IconContext} from 'react-icons'
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer() {
    return <footer class="fixed-bottom text-center text-white bg-dark" >
    <div class="container">
      <section>
        <IconContext.Provider value={{ size: "1rem", color: "white"}}>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaFacebook /></a>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaTwitter /></a>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaGoogle /></a>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaInstagram /></a>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaLinkedin /></a>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-lg-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><FaGithub /></a>
        </IconContext.Provider>
      </section>
    </div>
    <div class="text-center text-white pb-4" >
      © 2021 Copyright
      <a href="#" class="text-danger text-decoration-none"> Ani Kutusu</a>
    </div>
  </footer>
}

export default Footer
