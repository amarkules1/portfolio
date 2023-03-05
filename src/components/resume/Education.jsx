import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
        <div className="resumeSection education">
            <div className="sectionTitle">
                Education
            </div>
            <div className="experience">
                <div className="experienceName">Master of Science, Data Science and Analytics</div>
                <div className="timeline">Graduation: April 2023 - 3.97 GPA</div>
                <br/>
                <div className="company">Grand Valley State University</div>
                <div className="location">Allendale, Michigan</div>
                <ul className="details">
                    <li className="detail">Uses R, Python, and SAS programming languages to create, clean, and analyze datasets, 
                    learning the libraries and techniques available in each language</li>
                    <li className="detail">Interprets and explains finding, deriving practical and actionable knowledge from datasets.</li>
                    <li className="detail">Builds predictive models using algorithms such as linear regression, K-Means, 
                    K Nearest Neighbor, Support Vector Machines, and Artificial Neural Networks, among others.</li>
                    <li className="detail">Learns strategies for analyzing large datasets, such as parallel processing using CPU and GPU multithreading, 
                    and cloud techniques like message passing and map-reduce.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Bachelor of Science, Computer Science, Mathematics Minor</div>
                <div className="timeline">Graduation: April 2019 - 3.55 GPA</div>
                <br/>
                <div className="company">Western Michigan University</div>
                <div className="location">Kalamazoo, Michigan</div>
                <ul className="details">
                    <li className="detail">Developed software tools to optimize sales revenue, updating hundreds of thousands of prices weekly
                     and bringing in $10 million in additional revenue to the company in the first year.</li>
                    <div className="detail">Designed and implemented web applications to provide sales and revenue management teams with better
                     control of pricing for individual customers, saving these teams hundreds of hours of work annually.</div>
                    <li className="detail">Participated in design and planning of integrations between custom-built applications and a new SAP 
                    based ERP system, integrating via REST and OData services and seizing opportunities to improve from legacy systems.</li>
                    <li className="detail">Served in an on-call rotation to assess and correct production issues, minimizing downtime.</li>
                    <li className="detail">Trained and assisted new developers on the team, to help them understand the business use 
                    of our applications, as well as some of our software development best practices like Test Driven Development and 
                    Automated Acceptance Testing.</li>
                </ul>
            </div>
        </div>
    )
  }
}

export default Education;