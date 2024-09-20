import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{backgroundColor:"#dbd9d9", paddingBottom:"5rem"}}>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{ marginTop: "3rem" }}
          >
            <h1 style={{ color: "orange", fontWeight: "600" }}>LearnSphere</h1>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                fontSize: "1.1rem",
                opacity: "0.9",
              }}
            >
              Empowering Learners, Transforming Futures.
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{ marginTop: "3rem" }}
          >
            <ul style={{ listStyleType: "none", marginLeft: "-2rem" }}>
              <li
                style={{
                  marginBottom: "1.5rem",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                HELPFUL LINKS
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={"/courses"}
                  style={{ textDecoration: "none", opacity: "0.9" }}
                >
                  <i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Course
                </Link>
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={"/privacy"}
                  style={{ textDecoration: "none", opacity: "0.9" }}
                >
                  <i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Privacy
                  policy
                </Link>
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={"/refund"}
                  style={{ textDecoration: "none", opacity: "0.9" }}
                >
                  <i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Refund &
                  Cancellation Policy
                </Link>
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={"/terms"}
                  style={{ textDecoration: "none", opacity: "0.9" }}
                >
                  <i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Terms &
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{ marginTop: "3rem" }}
          >
            <ul style={{ listStyleType: "none", marginLeft: "-2rem" }}>
              <li
                style={{
                  marginBottom: "1.5rem",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                GET IN TOUCH
              </li>
              <li
                style={{
                  fontWeight: "500",
                  marginBottom: "0.7rem",
                  fontSize: "1.1rem",
                }}
              >
                <i class="fa-solid fa-envelope"></i>
                &nbsp;&nbsp;elearning@gmail.com
              </li>
              <li
                style={{
                  fontWeight: "500",
                  marginBottom: "0.7rem",
                  fontSize: "1.1rem",
                }}
              >
                <i class="fa-solid fa-tty"></i>&nbsp;&nbsp;0120-1234567
              </li>
              <li
                style={{
                  fontWeight: "500",
                  marginBottom: "0.7rem",
                  fontSize: "1.1rem",
                }}
              >
                <i class="fa-solid fa-users-gear"></i>&nbsp;&nbsp;Support Team :
                8am-6pm
              </li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{ marginTop: "3rem" }}
          >
            <ul style={{ listStyleType: "none", marginLeft: "-2rem" }}>
              <li
                style={{
                  marginBottom: "1.5rem",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                CONNECT WITH US
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={""}
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  Facebook&nbsp;&nbsp;<i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={""}
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  Instagram&nbsp;&nbsp;<i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={""}
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  Linkedin&nbsp;&nbsp;<i class="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={""}
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  Twitter&nbsp;&nbsp;<i class="fa-brands fa-x-twitter"></i>
                </Link>
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <Link
                  to={""}
                  style={{ textDecoration: "none", fontSize: "1.1rem" }}
                >
                  Youtube&nbsp;&nbsp;<i class="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h6 style={{textAlign:"center", marginTop:"3rem", fontWeight:"500", fontSize:"0.8rem"}}>All Right Reserved, Copyright <i class="fa-regular fa-copyright"></i> 2024</h6>
      </div>
    </div>
  );
}

export default Footer;
