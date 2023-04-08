import React from "react"
import "./Navbar.css"
import logo from "../images/navbarLogo.png"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark py-3">
      <div class="container ">
        <div className="d-flex align-items-center justify-items-center ">
          <img src={logo} alt="nfty--logo" className="img-fluid mx-2" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link" href="#process">
              Process
            </a>
            <a class="nav-link" href="#showcase">
              Showcase
            </a>
            <a class="nav-link" href="#developers">
              Earn
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
