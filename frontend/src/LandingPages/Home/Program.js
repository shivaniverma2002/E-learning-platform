import React from "react";
import { Link } from "react-router-dom";

function Program() {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1>Discover Our Top-Rated Courses</h1>
        <h5>
          Explore a curated selection of courses that are shaping the future of
          learning. Handpicked by experts, these courses offer the perfect blend
          of knowledge and hands-on practice to help you achieve your goals.
        </h5>
      </div>
      <div className="program-content">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
            <div className="card program">
              <img src="../Images/dataScience.JPEG" alt="Data Science" />
              <div className="card-body">
                <h5>Data Science Fundamentals</h5>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
            <div className="card program">
              <img src="../Images/webDevelopment.png" alt="Web Development" />
              <div className="card-body">
                <h5>Web Development Bootcamp</h5>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
            <div className="card program">
              <img src="../Images/digitalMarketing.JPEG" alt="Digital Marketing" />
              <div className="card-body">
                <h5>Digital Marketing Strategies</h5>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to={"/courses"}>
          <button className="btn btn-primary">Show all courses</button>
        </Link>
      </div>
      <style jsx>
        {`
          .program-content {
            margin-top: 2rem;
          }
          .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: #fff;
          }
          .card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          } 
        `}
      </style>
    </div>
  );
}

export default Program;
