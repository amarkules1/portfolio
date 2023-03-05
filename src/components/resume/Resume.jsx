import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'work-experience'
        };
    }
    render() {
        return (
            <div className="home">
                <div className="container">
                    <h1 className="text-center mt-5">Resume</h1>
                    <div className="resumeButton">
                    <Link to="/resume/work-experience"
                     onClick={() => this.setState({selected:'work-experience'})}
                     >Work Experience</Link>
                    </div>
                    <div className="resumeButton">
                    <Link  to="/resume/education"
                      onClick={() => this.setState({selected:'education'})}
                      >Education</Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Resume;