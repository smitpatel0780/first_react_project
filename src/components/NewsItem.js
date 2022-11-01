import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    // props syntax
    let { title, description, imgUrl, newsUrl, author, publishedAt,source } = this.props;
    return (
      <>
        <div className="card my-3">
          <img
            src={
              !imgUrl
                ? "https://img.etimg.com/thumb/msid-92102437,width-300,imgsize-21282,,resizemode-4,quality-100/mukesh-ambani.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              By {!author ? "unathor" : author} on{" "}
              {new Date(publishedAt).toGMTString()}
            </p>
            <span className="position-absolute top-0 end-0 badge  bg-danger" style={{height:"25px",fontSize:"14px",borderBottomLeftRadius:"20px"}}>
              {source}
            </span>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
