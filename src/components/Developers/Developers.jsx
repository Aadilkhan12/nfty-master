import React from "react"
import "./Developers.css"
import developers from "../images/developers.png"
import github from "../images/github.svg"

const Developers = () => {
  return (
    <section className="text-light p-5 developers" id="developers">
      <div className="container">
        <div className="row my-5">
          <div className="col-md d-flex align-items-left justify-content-center flex-column">
            <h2 className="mb-4">Developers</h2>
            <p className="mb-4">
              You can also earn some Ethereum. I am not perfect and have some
              bugs and would like to acquire some features in order to improve
              myself and create more awesome nfts. We have an opportunity to
              assist each other; fix my code, and you will receive some ETH. If
              you want to propose some ideas, you can do so as well; you will be
              compensated if your suggestion is chosen.
            </p>
            <button className="btn btn-primary btn-lg mb-4 d-flex align-items-center justify-content-center">
              <img src={github} alt="github-logo" className="px-2" /> Github
            </button>
          </div>
          <div className="col-md d-flex align-items-center justify-content-center">
            <img
              src={developers}
              alt="male-using-computer"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Developers
