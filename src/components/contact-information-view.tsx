import React from "react";

const ContactInformation: React.FC = (props) => {
  return (
    <div>
      Yhteystiedot
      {props.children}
    </div>
  );
};

export { ContactInformation };
