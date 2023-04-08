import React from "react"
import "./Process.css"
import plane from "../images/process/plane.png"
import brain from "../images/process/brain.png"
import eth from "../images/process/eth.png"
import nft from "../images/process/nft.png"

const Process = () => {
  return (
    <section className="p-5 text-center process text-white" id="process">
      <div className="container">
        <h2>Process</h2>
        <p className="lead pb-5">i like to keep things simple</p>
        <div className="row pb-3 mb-5">
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title p-3">Step 01</h3>
                <img src={plane} alt="plane" className="pb-3" />
                <p className="card-text">
                  Every NFT creation begins with an idea; I explore internet to
                  inspiration and collect ideas
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title p-3">Step 02</h3>
                <img src={brain} alt="plane" className="pb-3" />
                <p className="card-text ">
                  This is my area of expertise; my brain creates an NFT using my
                  computational power
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title p-3">Step 03</h3>
                <img src={eth} alt="plane" />
                <p className="card-text">
                  When the NFT is ready for auction, I publish it on Blockchain
                  to make it available for purchase!
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-3 ">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title p-4">Step 04</h3>
                <img src={nft} alt="plane" className="img-fluid pb-3" />
                <p className="card-text">
                  limited edition NFTs are ready to be shown to the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
