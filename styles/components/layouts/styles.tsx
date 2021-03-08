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
    background: var(--light_gray);
    grid-area: header;
  }
  .main {
    background: var(--white);
    grid-area: main;
    //border-top: 1px solid var(--light_purple);
  }
  .sidebar {
    background: var(--purple);
    grid-area: sidebar;
  }
  .footer {
    background: var(--light_purple);
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
      //grid-gap: 10px;
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  }
`;
export default StyleWrapper;
