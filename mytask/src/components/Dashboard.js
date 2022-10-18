import React from "react";
import { Layout, Typography, Menu, Breadcrumb, Row } from "antd";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbMessage2 } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import background from "../image/Rectangle1.png";

import DateTime from "./DateTime";
import Logout from "./Logout";

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;
function CustomerDetails() {
  return (
    <div>
      <Layout>
        <Sider style={{ background: "#fff" }}>
          <Title level={5} style={{ padding: "20px", color: "green" }}>
            Property Management
          </Title>
          <hr />
          <Menu defaultSelectedKeys={["dashboard/chart"]}>
            <Menu.Item key="dashboard/chart" icon={<RiDashboardLine />}>
              <span> Dashboard</span> <Link to="/dashboard/chart" />
            </Menu.Item>
            <Menu.Item key="/dashboard/data" icon={<HiOutlineUserGroup />}>
              <span>Property Management</span> <Link to="/dashboard/data" />
            </Menu.Item>
            <Menu.Item key="info" icon={<TbMessage2 />}>
              <span> information</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff" }}>
            <Row>
              <Text
                className="text"
                style={{ backgroundImage: `url(${background})` }}
              >
                {" "}
                Cutomer Management
              </Text>
              <DateTime />
            </Row>
            <Logout />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 20, minHeight: 500 }}>
              <Outlet />
            </div>
          </Content>
          <Footer>
            <Breadcrumb
              style={{
                background: "#fff",
                padding: 20,
                margin: 0,
                minHeight: 50,
              }}
            >
              <Breadcrumb.Item>
                <Text strong>Login</Text>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default CustomerDetails;
