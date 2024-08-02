import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';


export default function Home() {
  const imgstyle = {
    width: "100vw",
    height: "65vh"
  }
  return (
    <div>
      <h3 className='my-3' style={{ textAlign: 'center' }}>People's Government</h3>
      <div className='container'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} style={imgstyle} className="d-block w-100" alt="Click 1" />
            </div>
            <div className="carousel-item">
              <img src={img2} style={imgstyle} className="d-block w-100" alt="Click 2" />
            </div>
            <div className="carousel-item">
              <img src={img3} style={imgstyle} className="d-block w-100" alt="Click 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row container mx-auto my-3">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Trust</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, facilis.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Honest</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, omnis.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row container mx-auto my-3">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">For People</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">By People</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, atque.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
