import React from "react";

function FooterT() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <span
                className="iconify"
                data-icon="brandico:facebook"
                data-width="20"
                data-height="20"
              ></span>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <span
                className="iconify"
                data-icon="akar-icons:twitter-fill"
                data-width="20"
                data-height="20"
              ></span>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <span
                className="iconify"
                data-icon="akar-icons:google-fill"
                data-width="20"
                data-height="20"
              ></span>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <span
                className="iconify"
                data-icon="akar-icons:instagram-fill"
                data-width="20"
                data-height="20"
              ></span>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <span
                className="iconify"
                data-icon="akar-icons:linkedin-fill"
                data-width="20"
                data-height="20"
              ></span>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <span
                className="iconify"
                data-icon="akar-icons:github-fill"
                data-width="20"
                data-height="20"
              ></span>
            </a>
          </section>
        </div>
        <div className="text-center p-3">
          © 2020 Copyright:&nbsp;
          <a className="text-white">Owner</a>
        </div>
      </footer>
    </>
  );
}

export default FooterT;
