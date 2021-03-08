import React from "react";
import StyleWrapper from "../styles/components/layouts/styles";
const Layouts = (props) => {
  return (
    <React.Fragment>
      <StyleWrapper>
        <div className="container">
          <div className="header">header</div>
          <div className="main">main{props.children}</div>
          <div className="sidebar">sidebar</div>
          <div className="footer">footer</div>
        </div>
      </StyleWrapper>
    </React.Fragment>
  );
};
export default Layouts;
