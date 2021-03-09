import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Tag } from "antd";
import StyleWrapper from "../styles/components/layouts/styles";
const Layouts = (props) => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("account")).username);
  }, []);
  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
    Router.reload();
  };
  return (
    <React.Fragment>
      <StyleWrapper>
        <div className="container">
          <div className="header">
            <i className="fa fa-glass logo" aria-hidden="true"></i>
            Patthotech
          </div>
          <div className="main">{props.children}</div>
          <div className="sidebar">
            <div className="menu-sidebar-grid">
              <div className="grid-item">
                <i className="fa fa-user-circle logo" aria-hidden="true"></i>
                <Tag color="blue">username : {username}</Tag>
              </div>
              <div className="grid-item">
                <i className="fa fa-home logo" aria-hidden="true"></i>หน้าแรก
              </div>
              <div className="grid-item">
                <div className="dropdown-grid">
                  <i className="fa fa-cog logo" aria-hidden="true"></i>
                  จัดการสินค้า
                </div>
                <div className="menu-dropdown">
                  <a href="#">
                    <i className="fa fa-plus logo" aria-hidden="true"></i>
                    เพิ่มสินค้า
                  </a>
                </div>
                <div className="menu-dropdown">
                  <a href="#">
                    <i className="fa fa-search logo" aria-hidden="true"></i>
                    ค้นหาสินค้า
                  </a>
                </div>
              </div>
              <div className="grid-item">
                <i className="fa fa-pencil logo" aria-hidden="true"></i>
                บันทึกขั้นตอนการทำงาน
              </div>
              <div className="grid-item">
                <i className="fa fa-tags logo" aria-hidden="true"></i>
                ตรวจเช็คกระจก
              </div>
              <div className="grid-item" onClick={logout}>
                <i className="fa fa-sign-out logo" aria-hidden="true"></i>
                ออกจากระบบ
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="text">
              Pattothec Design ©2021 Created by Pattothec Company
            </div>
          </div>
        </div>
      </StyleWrapper>
    </React.Fragment>
  );
};
export default Layouts;
