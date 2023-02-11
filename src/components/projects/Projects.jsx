import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://45.56.125.213:5000/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: "Failed to load"
          });
        }
      )
  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <a href={item.url} style={{color: 'black', textDecoration: 'none'}}>
            <div key={item.id} className="projectContainer card" style={{width: '30%', margin: '10%'}}> 
              <h5  className="card-title">{item.title}</h5 >
              <div className="card-text">{item.description}</div>
            </div>
            </a>
          ))}
        </ul>
      );
    }
  }
}

export default Projects;