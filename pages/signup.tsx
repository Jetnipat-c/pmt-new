import React, { useState } from "react";
import { useRouter } from "next/router";
import { service } from "../service/index";
import Link from "next/link";
import StyleWrapper from "../styles/components/signup/styles";
const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log(email);
  const handleClick = async () => {
    let res: any = await service({
      url: `/auth/signup`,
      method: "post",
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    if (res && res.status === 200) {
      console.log(res.data);
      router.push("/");
    } else {
      console.error("ไม่สามารถสมัครสมาชิกได้");
    }
  };
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
                  <input
                    type="text"
                    name="email"
                    placeholder="example@hotmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="container-input">
                <div>
                  <p>Username</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="example_username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="container-input">
                <div>
                  <p>Password</p>
                </div>
                <div>
                  <input
                    type="password"
                    name="signup password"
                    placeholder="Create password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <button onClick={handleClick}>Signin</button>
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
