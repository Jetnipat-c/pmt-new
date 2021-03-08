import styled from "styled-components";
const StyleWrapper = styled.div`
  .container {
    display: grid;
    grid-template:
      "header header" 50px
      "sidebar main" 90vh
      "footer footer" 40px
      / 300px 3fr;
    grid-gap: 10px;
    color: var(--light_gray);
    text-align: center;
    font-size: 1.3rem;
  }
  .container > * {
    padding: 10px;
  }
  .header {
    background: var(--light_gray);
    grid-area: header;
    color: var(--white);
    text-align: center;
    font-size: 1.5rem;
  }
  .main {
    background: var(--white);
    grid-area: main;
    //border-top: 1px solid var(--light_purple);
    color: #9e9e9e;
  }
  .sidebar {
    background: var(--purple);
    grid-area: sidebar;
    text-align: left;
  }
  .sidebar .grid-item i {
    margin-left: 1rem;
  }
  .menu-sidebar-grid .grid-item .menu-dropdown a {
    margin-left: 2rem;
  }
  .footer {
    background: var(--light_purple);
    grid-area: footer;
    color: #fff;
    font-size: 1rem;
  }
  .logo {
    margin-right: 1rem;
  }
  .sub-item .user {
    font-size: 1rem;
  }
  // SideBar
  .menu-sidebar-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px 0;
  }
  // Dropdown
  .menu-dropdown {
    display: none;
    margin: 20px 0;
  }
  .grid-item:hover .menu-dropdown {
    display: grid;
  }
  .grid-item a {
    color: var(--light_gray);
  }
  .grid-item a:hover {
    color: var(--white);
  }
  .grid-item:hover {
    color: var(--white);
    cursor: pointer;
  }
  @media only screen and (max-width: 425px) {
    .container {
      display: grid;
      grid-template:
        "header" 70px
        "sidebar" auto
        "main" 90vh
        "footer" 1fr
        / 1fr;
      //grid-gap: 10px;
      color: #fff;
      text-align: center;
    }
    .sidebar {
      font-size: 1rem;
    }
    .header {
      font-size: 2rem;
    }
    .footer {
      font-size: 1rem;
    }
  }
`;
export default StyleWrapper;
