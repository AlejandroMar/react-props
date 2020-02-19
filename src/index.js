import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDatail";
import faker from "faker";

const App = () => {
  const authors = [
    {
      name: faker.name.findName(),
      img: faker.image.avatar(),
      date: faker.date.recent().toString(),
      text: faker.lorem.paragraph()
    },
    {
      name: faker.name.findName(),
      img: faker.image.avatar(),
      date: faker.date.recent().toString(),
      text: faker.lorem.paragraph()
    },
    {
      name: faker.name.findName(),
      img: faker.image.avatar(),
      date: faker.date.recent().toString(),
      text: faker.lorem.paragraph()
    }
  ];

  return (
    <div className="ui container comments">
      {authors.map(author => (
        <CommentDetail author={author} key={author.date} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
