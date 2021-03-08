import React from "react";
import StyleWrapper from "../styles/components/homepage/styles";
import withAuth from "../hoc/withAuth";
import Layouts from "../layouts/Layouts";
const Homepage = () => {
  return (
    <React.Fragment>
      <Layouts>
        <StyleWrapper>Homepage</StyleWrapper>
      </Layouts>
    </React.Fragment>
  );
};
export default withAuth(Homepage);
