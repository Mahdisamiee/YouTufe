import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { NavLink, Link, Outlet, useResolvedPath, useMatch, useLocation } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const BaseLayout = () => {
  let location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);

  return (
    <Layout>
      <Header style={{ zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={[
            { label: <NavLink to="/">Home</NavLink>, key: "/" },
            { label: <NavLink to="/about">About</NavLink>, key: "/about" },
          ]}
        />
      </Header>
      <Content
        className="layout-container"
      >
        <div className="main-container">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>TechTab ©2022 Created by TechTab</Footer>
    </Layout>
  );
};

export default BaseLayout;
