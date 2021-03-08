import React from "react";
import StyleWrapper from "../styles/components/homepage/styles";
import withAuth from "../hoc/withAuth";
const Homepage = () => {
  return (
    <React.Fragment>
      <StyleWrapper>Homepage</StyleWrapper>
    </React.Fragment>
  );
};
export default withAuth(Homepage);
