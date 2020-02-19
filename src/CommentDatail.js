import React from "react";
import faker from "faker";

const CommentDetail = ({ author }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={author.img} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author.name}
        </a>
        <div className="metadata">
          <span className="date">{author.date}</span>
        </div>
        <div className="text">{author.text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
