import styled from "styled-components";
const StyleWrapper = styled.div`
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: radial-gradient(
      circle,
      #94a5b4,
      #96b0bd,
      #99bbc4,
      #9ec6c9,
      #a7d1cb
    );
  }
  .container-signin {
    display: flex;
    width: 310px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
  }
  .container-input {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .container-input > div {
    margin-right: 0.5rem;
  }
  .container-signin > div:last-of-type {
    margin: 1rem 1rem 1rem 0;
    width: 100%;
    text-align: right;
    font-size: 0.8rem;
  }
  a {
    text-decoration: none;
    color: #0067b8;
  }
  input[type="text"],
  input[type="password"] {
    border: none;
    border-bottom: 2px solid red;
    background: transparent;
    border-color: rgba(0, 0, 0, 0.6);
  }
  input:focus {
    outline: none;
  }
  p,
  h1 {
    color: #1b1b1b;
  }
`;
export default StyleWrapper;
