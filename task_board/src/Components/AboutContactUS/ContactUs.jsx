import React from "react";
import "../../assets/css/style.css";

function ContactUs() {
  return (
    <>
      <main id="main">
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Contact Us</h2>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="contact-about">
                  <h3>Vesperr</h3>
                  <p>
                    Cras fermentum odio eu feugiat. Justo eget magna fermentum
                    iaculis eu non diam phasellus. Scelerisque felis imperdiet
                    proin fermentum leo. Amet volutpat consequat mauris nunc
                    congue.
                  </p>
                  <div className="social-links">
                    <a href="#!" className="twitter">
                      <span
                        className="iconify"
                        data-icon="akar-icons:twitter-fill"
                        data-width="20"
                        data-height="20"
                      ></span>
                    </a>
                    <a href="#!" className="facebook">
                      <span
                        className="iconify"
                        data-icon="brandico:facebook"
                        data-width="20"
                        data-height="20"
                      ></span>
                    </a>
                    <a href="#!" className="instagram">
                      <span
                        className="iconify"
                        data-icon="akar-icons:instagram-fill"
                        data-width="20"
                        data-height="20"
                      ></span>
                    </a>
                    <a href="#!" className="linkedin">
                      <span
                        className="iconify"
                        data-icon="akar-icons:linkedin-fill"
                        data-width="20"
                        data-height="20"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="info">
                  <div className="d-flex">
                    <span
                      className="iconify text-primary"
                      data-icon="bx:map"
                      data-width="40"
                      data-height="40"
                    ></span>
                    <p>
                      A108 Adam Street
                      <br />
                      New York, NY 535022
                    </p>
                  </div>

                  <div className="d-flex">
                    <span
                      className="iconify text-primary"
                      data-icon="majesticons:mail-line"
                      data-width="30"
                      data-height="30"
                    ></span>
                    <p>info@example.com</p>
                  </div>

                  <div className="d-flex">
                    <span
                      className="iconify text-primary"
                      data-icon="ant-design:phone-filled"
                      data-width="30"
                      data-height="30"
                    ></span>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactUs;
