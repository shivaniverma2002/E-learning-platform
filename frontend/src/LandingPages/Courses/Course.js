import React from "react";
import { courses } from "../../Data/data";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";

const Course = () => {
  return (
    <div className="container">
      <h1 className="title" style={{textAlign:"center", marginTop:"2rem"}}>Courses</h1>

      <div className="courses" style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly" }}>
        {courses.map((course, index) => {
          return (
            <Card style={{ marginTop: "2rem", width: "300px" }} key={index}>
              <div className="course">
                <img
                  src={course.imageUrl}
                  alt="thumbnail"
                  style={{ width: "100%" }}
                />
                <div style={{ padding: "0.5rem" }}>
                  <h4>{course.title}</h4>
                  <h6>
                    <i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "0.9rem" }}></i>
                    &nbsp;{course.price}
                  </h6>
                  <Link>
                    <button type="button" className="btn btn-primary">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
       
    </div>
  );
};

export default Course;
