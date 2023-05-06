import React from "react";
import logo from "./textlogo.svg";
export default function Footer() {
  return (
    <div className="container my-2">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container pt-1">
          {/* <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section> */}
          <h6 className="text-center text-danger">
            <img src={logo} alt="Bootstrap" width="30" height="24" /> Designed
            by Kuchay Aashiq
          </h6>
        </div>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.2" }}
        >
          © 2023 Copyright:{" "}
          <a className="text-dark" href="/">
            {" "}
            AHK Softwares
          </a>
        </div>
      </footer>
    </div>
  );
}
