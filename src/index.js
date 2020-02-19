import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDatail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  const authors = [
    {
      name: faker.name.findName(),
      img: faker.image.avatar(),
      date: faker.date.recent().toString(),
      text: faker.lorem.sentence()
    },
    {
      name: faker.name.findName(),
      img: faker.image.avatar(),
      date: faker.date.recent().toString(),
      text: faker.lorem.sentence()
    }
  ];

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>WARNING!</h4>
        Are you sure you want to do this?
      </ApprovalCard>
      {authors.map(author => (
        <ApprovalCard>
          <CommentDetail author={author} key={author.date} />
        </ApprovalCard>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
