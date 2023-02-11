import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="/profile.png"
                alt=""
              />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">About</h1>
              <p>
                Hi, I'm Alex. I'm currently a Masters Student in Data Science and Analytics at Grand Valley State University. 
                I also work as a Data Engineer for SalesPage Technologies. My interests range from Web Development to Machine Learning to Web3. 
                This site is a collection of some of the projects and articles I work on in my free time. 
                Check out some of my work, or reach out if there's something you'd be interested in collaborating on!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default About;