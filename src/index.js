import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDatail";
import faker from "faker";

const App = () => {
  const authors = [
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName()
  ];

  return (
    <div className="ui container comments">
      {authors.map(author => (
        <CommentDetail author={author} key={author} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
