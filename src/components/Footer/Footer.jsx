import React from "react"
import "./Footer.css"
import footerLogo from "../images/footerLogo.png"
const Footer = () => {
  return (
    <footer className="text-light text-center p-4 footer">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <img src={footerLogo} alt="nfty--logo" className="img-fluid mb-2" />
            <h1>Nfty</h1>
            <p className="mb-3">limited edition nfts created by ai</p>
            <p>Copyright ©2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
