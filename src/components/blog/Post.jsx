import React, { useState, useEffect, useLayoutEffect, Component } from "react";
import { useParams } from "react-router";

class Post extends Component {

  render() {
    // let { postSlug } = useParams();

    return (

      <div className="home">
        <div className="container">
          <h1 className="mt-5">This is a Post Title</h1>
          <h6 className="mb-5">The post slug is, ???</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    );
  }
}
export default Post;