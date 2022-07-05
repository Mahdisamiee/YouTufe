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
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["home"]}
          selectedKeys={[location.pathname]}
          items={[
            { label: <NavLink to="/">Home</NavLink>, key: "/" },
            { label: <NavLink to="/about">About</NavLink>, key: "/about" },
          ]}
        />
      </Header>
      <Content style={{ padding: "100px 50px" }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default BaseLayout;
