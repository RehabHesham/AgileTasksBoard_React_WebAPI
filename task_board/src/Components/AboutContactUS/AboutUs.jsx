import { Toolbar } from "@mui/material";
import React from "react";
import "../../assets/css/style.css";
import logo from "../../assets/images/counts-img.svg";

function AboutUs() {
  return (
    <>
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>About Us</h2>
            </div>

            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <span
                      className="iconify text-primary"
                      data-icon="akar-icons:double-check"
                      data-width="25"
                      data-height="25"
                    ></span>
                    {"  "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <span
                      className="iconify text-primary"
                      data-icon="akar-icons:double-check"
                      data-width="25"
                      data-height="25"
                    ></span>
                    {"  "}
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <span
                      className="iconify text-primary"
                      data-icon="akar-icons:double-check"
                      data-width="25"
                      data-height="25"
                    ></span>
                    {"  "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <div className="text-center">
                  <a className="btn-learn-more text-decoration-none">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <img src={logo} alt="" className="img-fluid" />
              </div>

              <div
                className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <div className="d-flex">
                          <span
                            className="iconify d-inline-block text-primary"
                            data-icon="entypo:emoji-happy"
                            data-width="40"
                            data-height="40"
                          ></span>
                          <span className="purecounter d-inline-block m-2">
                            65
                          </span>
                        </div>
                        <p>
                          <strong>Happy Clients</strong> consequuntur voluptas
                          nostrum aliquid ipsam architecto ut.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <div className="d-flex">
                          <span
                            className="iconify d-inline-block text-primary"
                            data-icon="iconoir:journal-page"
                            data-width="40"
                            data-height="40"
                          ></span>
                          <span className="purecounter d-inline-block m-2">
                            85
                          </span>
                        </div>
                        <p>
                          <strong>Projects</strong> adipisci atque cum quia
                          aspernatur totam laudantium et quia dere tan
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <div className="d-flex">
                          <span
                            className="iconify d-inline-block text-primary"
                            data-icon="akar-icons:clock"
                            data-width="40"
                            data-height="40"
                          ></span>
                          <span className="purecounter d-inline-block m-2">
                            18
                          </span>
                        </div>
                        <p>
                          <strong>Years of experience</strong> aut commodi
                          quaerat modi aliquam nam ducimus aut voluptate non vel
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <div className="d-flex">
                          <span
                            className="iconify d-inline-block text-primary"
                            data-icon="bi:award"
                            data-width="40"
                            data-height="40"
                          ></span>
                          <span className="purecounter d-inline-block m-2">
                            15
                          </span>
                        </div>
                        <p>
                          <strong>Awards</strong> rerum asperiores dolor alias
                          quo reprehenderit eum et nemo pad der
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutUs;
