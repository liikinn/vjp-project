import React from "react";

const EducationInformation: React.FC = (props) => {
  return (
    <div>
      Opetus
      {props.children}
    </div>
  );
};

export { EducationInformation };
