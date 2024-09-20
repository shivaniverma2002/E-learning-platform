import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link
            class="navbar-brand"
            to={"/"}
            style={{
              fontWeight: "800",
              fontSize: "1.6rem",
              marginLeft: "3rem",
              color: "orange",
            }}
          >
            LearnSphere
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li
                class="nav-item"
                style={{ marginRight: "2rem", fontWeight: "600" }}
              >
                <Link class="nav-link" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li
                class="nav-item"
                style={{ marginRight: "2rem", fontWeight: "600" }}
              >
                <Link class="nav-link" aria-current="page" to={"/courses"}>
                  Courses
                </Link>
              </li>
              <li
                class="nav-item"
                style={{ marginRight: "2rem", fontWeight: "600" }}
              >
                <Link class="nav-link" aria-current="page" to={"/batch"}>
                  My Batch
                </Link>
              </li>

              <li class="nav-item" style={{ marginRight: "2rem" }}>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  style={{
                    fontWeight: "600",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "0",
                    paddingBottom: "0",
                  }}
                >
                  <Link class="nav-link" to={"/login"} style={{ color: "white" }}>
                    Login
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
