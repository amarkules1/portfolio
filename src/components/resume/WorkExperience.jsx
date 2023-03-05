import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
        <div className="resumeSection workExperience">
            <div className="sectionTitle">
                Work Experience
            </div>
            <div className="experience">
                <div className="experienceName">Data Engineer, Data Services Team</div>
                <div className="timeline">September 2021 to Present</div>
                <br/>
                <div className="company">SalesPage Technologies</div>
                <div className="location">Kalamazoo, MI</div>
                <ul className="details">
                    <li className="detail">Designs and implements ETL pipelines to ingest trade and asset data from a variety of sources,
                     creating a holistic picture of the activities and holdings of the entire US financial advising industry.</li>
                    <li className="detail">Improves the flexibility and robustness of software tools by implementing and 
                    teaching others about best practices like unit testing and  Behavior Driven Development.</li>
                    <li className="detail">Leverages data science methodologies such as Record Linkage, Natural Language Processing and 
                    classification algorithms to improve the quality of various data products, in a way that can be articulated to non-technical
                     coworkers and clients</li>
                    <li className="detail">Migrates existing capabilities to a modern technology stack, making use of a cloud based microservice
                     architecure to improve the performance and robustness of data pipelines.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Associate Software Engineer, Street Pricing Team</div>
                <div className="timeline">June 2020 to September 2021</div>
                <br/>
                <div className="company">Gordon Food Service</div>
                <div className="location">Grand Rapids, MI</div>
                <ul className="details">
                    <li className="detail">Developed software tools to optimize sales revenue, updating hundreds of thousands of prices weekly
                     and bringing in $10 million in additional revenue to the company in the first year.</li>
                    <li className="detail">Designed and implemented web applications to provide sales and revenue management teams with better
                     control of pricing for individual customers, saving these teams hundreds of hours of work annually.</li>
                    <li className="detail">Participated in design and planning of integrations between custom-built applications and a new SAP 
                    based ERP system, integrating via REST and OData services and seizing opportunities to improve from legacy systems.</li>
                    <li className="detail">Served in an on-call rotation to assess and correct production issues, minimizing downtime.</li>
                    <li className="detail">Trained and assisted new developers on the team, to help them understand the business use 
                    of our applications, as well as some of our software development best practices like Test Driven Development and 
                    Automated Acceptance Testing.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Associate Software Engineer, eCommerce Team</div>
                <div className="timeline">May 2019 to April 2020</div>
                <br/>
                <div className="company">Gordon Food Service</div>
                <div className="location">Grand Rapids, MI</div>
                <ul className="details">
                    <li className="detail">Implemented new features for an enterprise eCommerce platform, reacting quickly to meet business needs.</li>
                    <li className="detail">Utilized technologies such as Angular, Typescript, Java, and Oracle ATG to create reliable, 
                    consistent, and highly functional web applications.</li>
                    <li className="detail">Provided technical expertise to collaborate on the design, planning, and architecture of new features
                     with a team of UX designers, software developers, testers, and a product owner.</li>
                    <li className="detail">Made use of best practices such as Scaled Agile (SAFe) development, continuous integration and development,
                     test driven development, and paired programming to create an effective, feature rich, stable product.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Software Development (Part Time), Finance and HR Enterprises Team</div>
                <div className="timeline">August 2018 to May 2019</div>
                <br/>
                <div className="company">Gordon Food Service</div>
                <div className="location">Grand Rapids, MI</div>
                <ul className="details">
                    <li className="detail">Collaborated with a development team to develop, test, and deploy financial software, implementing 
                    agile programming strategies to deliver high quality, useful software to meet business needs.</li>
                    <li className="detail">Took on new challenges such as updating and simplifying outdated applications to use modern frameworks
                     such as Maven, Spring, and Angular 2+.</li>
                    <li className="detail">Leveraged testing suites such as JUnit for java and Karma and Jasmine for javascript and typescript 
                    to build, and manage robust web applications.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Lead Facility Technician, Bernhard Center</div>
                <div className="timeline">January 2018 to October 2018</div>
                <br/>
                <div className="company">Western Michigan University</div>
                <div className="location">Kalamazoo, MI</div>
                <ul className="details">
                    <li className="detail">Responsible for setting up and troubleshooting A/V equipment for events, conferences, 
                    and meetings held on WMU’s campus.</li>
                    <li className="detail">Communicated to management the capabilities, availability, and needs of a team of technicians, 
                    in order to accomplish all tasks in a timely manner.</li>
                    <li className="detail">Provided training and assistance to other technicians to ensure their success in the role.</li>
                    <li className="detail">Developed training and reference materials for coworkers to provide consistent and 
                    knowledgeable service to guests at the facility.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Facility Technician, Bernhard Center</div>
                <div className="timeline">September 2016 to January 2018</div>
                <br/>
                <div className="company">Western Michigan University</div>
                <div className="location">Kalamazoo, MI</div>
                <ul className="details">
                    <li className="detail">Learned how to set up and troubleshoot audio/visual equipment for events, conferences, and meetings.</li>
                    <li className="detail">Provided expert service to guests and presenters in front of audiences up to 2000 people.</li>
                    <li className="detail">Performed my required duties in a fast paced and highly visible environment.</li>
                </ul>
            </div>
        </div>
    )
  }
}

export default WorkExperience;