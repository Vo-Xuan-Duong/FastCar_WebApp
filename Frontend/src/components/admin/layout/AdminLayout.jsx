import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";

// import "antd/dist/reset.css";
import "./../../../assets/styles/main.css";
import "./../../../assets/styles/responsive.css";

const { Header: AntHeader, Content, Sider } = Layout;

function AdminLayout() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [sidenavColor, setSidenavColor] = useState("#1890ff");
  const [sidenavType, setSidenavType] = useState("transparent");
  const [fixed, setFixed] = useState(false);

  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type) => setSidenavType(type);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);

  let { pathname } = useLocation();
  pathname = pathname.replace("/admin/", "").replace("/admin", "");

  return (<Layout
    className={`layout-dashboard ${pathname === "profile" ? "layout-profile" : ""}`}
  >      <Drawer
    title={false}
    placement={placement === "right" ? "left" : "right"}
    closable={false}
    onClose={() => setVisible(false)}
    visible={visible}
    key={placement === "right" ? "left" : "right"}
    width={250}
    className="drawer-sidebar"
  >        <Layout className="layout-dashboard">
        <Sider
          trigger={null}
          width={250}
          theme="light"
          className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
            }`}
          style={{ background: sidenavType }}
        >
          <Sidenav color={sidenavColor} />
        </Sider>
      </Layout>
    </Drawer>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      trigger={null}
      width={250}
      theme="light"
      className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
        }`}
      style={{ background: sidenavType }}
    >
      <Sidenav color={sidenavColor} />
    </Sider>
    <Layout>
      {fixed ? (
        <Affix>
          <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
            <Header
              onPress={openDrawer}
              name={pathname}
              subName={pathname}
              handleSidenavColor={handleSidenavColor}
              handleSidenavType={handleSidenavType}
              handleFixedNavbar={handleFixedNavbar}
            />
          </AntHeader>
        </Affix>
      ) : (
        <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
          <Header
            onPress={openDrawer}
            name={pathname}
            subName={pathname}
            handleSidenavColor={handleSidenavColor}
            handleSidenavType={handleSidenavType}
            handleFixedNavbar={handleFixedNavbar}
          />
        </AntHeader>
      )}
      <Content className="content-ant">
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  </Layout>
  );
}

export default AdminLayout;
