import React from "react";
import StyleWrapper from "../styles/components/signin/styles";
const Signin = () => {
  return (
    <React.Fragment>
      <StyleWrapper>
        <div className="container">
          <div className="container-signin">
            <div>
              <h1>Sign in</h1>
            </div>
            <div>
              <div className="container-input">
                <div>
                  <p>Username</p>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div>
              <div className="container-input">
                <div>
                  <p>Password</p>
                </div>
                <div>
                  <input type="password" />
                </div>
              </div>
            </div>
            <div>
              <button>Signin</button>
            </div>
            <div>
              <a href="#">Signup</a>
            </div>
          </div>
        </div>
      </StyleWrapper>
    </React.Fragment>
  );
};
export default Signin;
