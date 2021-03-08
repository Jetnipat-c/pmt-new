import React from "react";
import StyleWrapper from "../styles/components/layouts/styles";
const Layouts = (props) => {
  return (
    <React.Fragment>
      <StyleWrapper>
        <p>Layout</p>
        {props.children}
      </StyleWrapper>
    </React.Fragment>
  );
};
export default Layouts;
