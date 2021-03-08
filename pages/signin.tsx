import React, { useState } from "react";
import { useRouter } from "next/router";
import { service } from "../service/index";
import StyleWrapper from "../styles/components/signin/styles";
const Signin = () => {
  const router = useRouter();
  const [signInfo, setSignInfo] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    let res: any = await service({
      url: `/auth/signin`,
      method: "post",
      data: {
        signInfo: signInfo,
        password: password,
      },
    });
    if (res && res.status === 200) {
      localStorage.setItem(
        "token",
        JSON.parse(JSON.stringify(res.data.access_token))
      );
      localStorage.setItem("account", JSON.stringify(res.data.payload));
      router.push("/homepage");
    } else {
      alert("ไม่สามารถเข้าสู่ระบบได้");
    }
  };
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
                  <input
                    type="text"
                    name="signInfo"
                    placeholder="E-mail, username"
                    onChange={(e) => setSignInfo(e.target.value)}
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
                    name="login"
                    placeholder="*****"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <button onClick={handleClick}>Signin</button>
            </div>
            <div>
              <a href="/signup">Signup</a>
            </div>
          </div>
        </div>
      </StyleWrapper>
    </React.Fragment>
  );
};
export default Signin;
