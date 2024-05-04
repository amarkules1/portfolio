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
                    <li className="detail">Provides domain and technical expertise when meeting with coworkers and clients, acting as technical lead for the Data Services team.</li>
                    <li className="detail">Plans and implements ETL pipelines to ingest, clean, and aggregate trade and asset data from a variety of sources.</li>
                    <li className="detail">Designs software solutions to meet complex business requirements.</li>
                    <li className="detail">Improves the flexibility and robustness of software by implementing and teaching others about best practices like unit testing and BDD.</li>
                    <li className="detail">Leverages record linkage, classification algorithms, and NLP to improve the quality of data products.</li>
                    <li className="detail">Documents and explains these tools in a way that can be articulated to non-technical coworkers and clients.</li>
                    <li className="detail">Migrates existing capabilities and new features to a modern technology stack, to improve speed and stability of data pipelines.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Associate Software Engineer, Street Pricing Team</div>
                <div className="timeline">June 2020 to September 2021</div>
                <br/>
                <div className="company">Gordon Food Service</div>
                <div className="location">Grand Rapids, MI</div>
                <ul className="details">
                    <li className="detail">Developed tools to optimize pricing for the full product catalog, bringing in $10 million in additional revenue to the company in the first year.</li>
                    <li className="detail">Designed and implemented applications to provide employees with control of prices for each client, saving countless hours of work annually.</li>
                    <li className="detail">Built integrations between existing applications and a new SAP based ERP system, while simultaneously optimizing legacy systems.</li>
                    <li className="detail">Trained and assisted new team members, helping them understand the purpose of our applications and teaching them best practices like Test Driven Development and Automated Acceptance Testing.</li>
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
                    <li className="detail">Provided technical expertise to collaborate on the design, planning, and architecture of new features with a team of UX designers, software developers, testers, and a product owner.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Software Development Intern, Finance and HR Enterprises Team</div>
                <div className="timeline">May 2018 to May 2019</div>
                <br/>
                <div className="company">Gordon Food Service</div>
                <div className="location">Grand Rapids, MI</div>
                <ul className="details">
                    <li className="detail">Used agile methodologies and project management tools to develop projects to benefit the company, including a location based sales tax calculation application which saved the company $200-300k annually.</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Information Technology Intern, Finance and HR Enterprises Team</div>
                <div className="timeline">May 2018 to August 2019</div>
                <br/>
                <div className="company">Gordon Food Service</div>
                <div className="location">Grand Rapids, MI</div>
                <ul className="details">
                    <li className="detail">Learned to effectively use agile methodologies and project management tools while working with the 
                    company’s Finance and HR Software Enterprises team, developing new projects to benefit the company.</li>
                    <li className="detail">Developed a web based sales tax calculation application which saves the company $200-300k annually, 
                    by ensuring all applicable municipalities are paid the proper taxes</li>
                    <li className="detail">Applied knowledge of high level software development strategies such as bottom up design and functional 
                    programming to adapt quickly to new technologies and prove my value and skill as a software developer.</li>
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