import React from "react";

const Main: React.FC = (props) => {
  return <div style={{ position: "relative", top: 56 }}>{props.children}</div>;
};

export { Main };
