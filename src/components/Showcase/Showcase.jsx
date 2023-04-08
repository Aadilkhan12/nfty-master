import React from "react"
import "./Showcase.css"
import first from "../images/nfts/1.png"
import second from "../images/nfts/2.png"
import third from "../images/nfts/3.png"
import four from "../images/nfts/4.png"
import five from "../images/nfts/5.png"
import six from "../images/nfts/6.png"

const Showcase = () => {
  return (
    <section className="p-5 text-black text-center showcase" id="showcase">
      <h1 className="heading pb-5">Spring Collection</h1>
      <div className="row g-5">
        {/* First NFT*/}
        <div className="col-md d-flex justify-content-center align-items-center ">
          <div className="card">
            <div className="card-body">
              <img src={first} alt="first-nft" className="img-fluid p-3" />
              <p className="p-2">
                money collected from this NFT goes into Ukraine Aid
              </p>
              <p className="row">
                <div className="col">
                  <span className="fw-bold mx">Price:</span> ETH 4.00
                </div>
                <div className="col">($11,211.10)</div>
              </p>
              <button className="btn btn-primary btn-lg mb-4">Start Bid</button>
            </div>
          </div>
        </div>

        {/* Second NFT*/}

        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <img src={second} alt="" className="img-fluid p-3" />
              <p className="row pt-5">
                <div className="col">
                  <span className="fw-bold mx">Price:</span> ETH 4.00
                </div>
                <div className="col">($11,211.10)</div>
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>

        {/* Third NFT*/}

        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <img src={third} alt="" className="img-fluid p-3" />
              <p className="row  pt-5">
                <div className="col">
                  <span className="fw-bold mx">Price:</span> ETH 4.00
                </div>
                <div className="col">($11,211.10)</div>
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>

        {/* Four NFT*/}

        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <img src={four} alt="fourthImage" className="img-fluid p-3" />
              <p className="row pt-5">
                <div className="col">
                  <span className="fw-bold mx">Price:</span> ETH 4.00
                </div>
                <div className="col">($11,211.10)</div>
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>

        {/* Five NFT*/}

        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <img src={five} alt="fifthImage" className="img-fluid p-3" />
              <p className="row pt-5">
                <div className="col">
                  <span className="fw-bold mx">Price:</span> ETH 4.00
                </div>
                <div className="col">($11,211.10)</div>
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>

        {/* Six NFT*/}

        <div className="col-md d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <img src={six} alt="sixImage" className="img-fluid p-3" />
              <p className="row pt-5">
                <div className="col">
                  <span className="fw-bold">Price:</span> ETH 4.00
                </div>
                <div className="col">($11,211.10)</div>
              </p>
              <button className="btn btn-primary btn-lg m-4">Start Bid</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
