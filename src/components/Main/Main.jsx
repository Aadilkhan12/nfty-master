import React from "react"
import "./Main.css"
import nftImage from "../images/mainNftImage.png"

const Main = () => {
  return (
    <section className="text-light text-center text-sm-start main p-2">
      <div className="container my-5">
        <div className="d-sm-flex align-items-center justify-content-center text-left">
          <div>
            <h1 className="mb-2">Nfty</h1>
            <p className="lead mb-2">limited edition nfts created by ai</p>
            <a href="#showcase">
              <button className="btn btn-primary btn-lg  mb-4">
                Watch Spring Collection
              </button>
            </a>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            src={nftImage}
            alt="nft-illustration"
          />
        </div>
      </div>
    </section>
  )
}

export default Main
