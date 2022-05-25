import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero-img.png";

function Home() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Grow your business with Our Service</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                This is a simplified version of the agile methodology. Have fun
                while using it.
              </h2>
              <div data-aos="fade-up" data-aos-delay="800">
                <Link to="/register" className="btn-get-started scrollto">
                  Get Started
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img src={hero} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
