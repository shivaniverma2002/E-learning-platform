import { React } from "react";

function company() {
  return (
    <div style={{backgroundColor:"#dee0df"}}>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "500",
            color: "orange",
          }}
        >
          Top Companies
        </h1>
        <div className="row mt-3">
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/airtel.png" alt="airtel" style={{width:"80%"}}/>
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/meesho.png" alt="meesho"style={{width:"80%"}} />
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/flipkart.png" alt="flipkart" style={{width:"80%"}}/>
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/google.png" alt="google" style={{width:"80%"}} />
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/eazydiner.png" alt="eazydiner" style={{width:"80%"}}/>
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/reliance.png" alt="reliance" style={{width:"80%"}} />
          </div>
         
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/hexaview.png" alt="hexaview" style={{width:"80%"}}/>
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/optimum.png" alt="optimum"style={{width:"80%"}} />
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/swiggy.png" alt="swiggy" style={{width:"80%"}}/>
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/tcs.png" alt="tcs" style={{width:"80%"}} />
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/zomato.png" alt="zomato" style={{width:"80%"}}/>
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-5">
            <img src="../Images/wipro.svg" alt="wipro" style={{width:"80%"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default company;
