import styled from "styled-components";
const StyleWrapper = styled.div`
  .container {
    display: grid;
    grid-template:
      "header header" 1fr
      "sidebar main" 90vh
      "footer footer" 1fr
      / 300px 3fr;
    grid-gap: 10px;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .container > * {
    padding: 10px;
  }
  .header {
    background: #8cc152;
    grid-area: header;
  }
  .main {
    background: #f6bb42;
    grid-area: main;
  }
  .sidebar {
    background: #e9573f;
    grid-area: sidebar;
  }
  .footer {
    background: #d770ad;
    grid-area: footer;
  }
  @media only screen and (max-width: 425px) {
    .container {
      display: grid;
      grid-template:
        "header" 1fr
        "sidebar" 300px
        "main" 90vh
        "footer" 1fr
        / 1fr;
      grid-gap: 10px;
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  }
`;
export default StyleWrapper;
