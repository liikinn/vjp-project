import React from "react";

const NewsFeed: React.FC = (props) => {
  return (
    <div>
      Ajankohtaista
      {props.children}
    </div>
  );
};

export { NewsFeed };
