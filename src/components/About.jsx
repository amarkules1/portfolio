import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/profile.png"
              alt=""
            />
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
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

export default About;