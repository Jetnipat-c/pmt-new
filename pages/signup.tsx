import React from "react";
import StyleWrapper from "../styles/components/signup/styles";
const Signup = () => {
  return (
    <React.Fragment>
      <StyleWrapper>
        <div className="container">
          <div className="container-signin">
            <div>
              <h1>Sign up</h1>
            </div>
            <div>
              <div className="container-input">
                <div>
                  <p className="email">E-mail</p>
                </div>
                <div>
                  <input type="text" placeholder="example@hotmail.com" />
                </div>
              </div>
            </div>
            <div>
              <div className="container-input">
                <div>
                  <p>Username</p>
                </div>
                <div>
                  <input type="text" placeholder="example_username" />
                </div>
              </div>
            </div>
            <div>
              <div className="container-input">
                <div>
                  <p>Password</p>
                </div>
                <div>
                  <input type="password" placeholder="Create password" />
                </div>
              </div>
            </div>
            <div>
              <button>Signin</button>
            </div>
            <div>
              <a href="/signin">Signin</a>
            </div>
          </div>
        </div>
      </StyleWrapper>
    </React.Fragment>
  );
};
export default Signup;
