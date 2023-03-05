import React, { Component } from "react";

class CertsSkills extends Component {
  render() {
    return (
        <div className="resumeSection education">
            <div className="sectionTitle">
                Certifications and Skills
            </div>
            <div className="experience">
                <div className="experienceName">Certifications</div>
                <ul className="details">
                    <li className="detail">Certified Scaled Agile Framework (SAFe) Practitioner</li>
                    <li className="detail">Data Engineering, Big Data, and Machine Learning on GCP Specialization</li>
                    <li className="detail">Developing Applications with Google Cloud Platform Specialization</li>
                    <li className="detail">Architecting with Google Compute Engine Specialization</li>
                    <li className="detail">SAS Base Programming Specialist</li>
                </ul>
            </div>
            <div className="experience">
                <div className="experienceName">Skills</div>
                <ul className="details">
                    <li className="detail">Ability to develop robust, functional, and maintainable software using a wide variety of programming languages: 
                    Java, R, Python, Javascript, and Typescript, among others.</li>
                    <li className="detail">Knowledge of a wide variety of statistical and machine learning strategies for analyzing datasets 
                    and building predictive models.</li>
                    <li className="detail">Ability to extract or create clean, practical datasets and reports using sources such as REST services, 
                    SQL databases, and web scraping</li>
                    <li className="detail">Experience in the full software development cycle and best practices like test driven development, 
                    efficient software development and testing strategies, continuous integration and effective Agile programming.</li>
                    <li className="detail">Knowledge of enterprise software development technology, including web frameworks such as Spring, 
                    acceptance testing with cucumber, and use of cloud hosted applications on platforms such as GCP and AWS.</li>
                    <li className="detail">Attributes such as an analytical mindset, eagerness for learning new skills and technologies, 
                    and team oriented mentality, which make me the ideal candidate for any data science or software development team.</li>
                </ul>
            </div>
        </div>
    )
  }
}

export default CertsSkills;