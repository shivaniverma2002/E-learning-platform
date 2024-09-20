import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div style={{ marginTop: "5rem", marginBottom:"5rem"}}>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-lg-6 col-sm-12">
            <h1 style={{ fontSize: "2.5rem" }}>Unlock Your Potential with</h1>
            <h1 style={{ color: "orange", fontSize: "2.5rem" }}>
              Expert-Led Online Courses
            </h1>
            <p
              style={{
                fontSize: "1.4rem",
                marginTop: "2rem",
                lineHeight: "1.6",
              }}
            >
              Join a global community of learners. Master new skills and achieve
              your goals with our flexible and engaging courses, available
              anytime, anywhere.
            </p>
            <div
              style={{ fontSize: "1.5rem", fontWeight: "600", color: "purple" }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Empowering Learners,")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Transforming Futures.")
                    .start(1000)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Empowering Learners,")
                    .start(1000)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Transforming Futures.")
                    .start(1000);
                }}
              />
            </div>
            <Link to={"/courses"}>
              <button type="button" class="btn btn-outline-primary mt-4" style={{fontWeight:"600", fontSize:"1.1rem"}}>
                Start Learning Today&nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i>
              </button>
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12" style={{ textAlign: "center" }}>
            <img
              src="../Images/home2.jpg"
              alt="home pic"
              style={{ width: "80%", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
     
    </div>
    
  );
}

export default Hero;
