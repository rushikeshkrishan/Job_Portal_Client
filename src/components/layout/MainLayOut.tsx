"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Advertisement from "../Advertisement";
import { usePathname } from "next/navigation";

const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(<Link href="/">Home</Link>, '1', <PieChartOutlined />),
  getItem(<Link href="/job">Job</Link>, '2', <DesktopOutlined />),
  getItem(<Link href="/company">Company</Link>, '15', <DesktopOutlined />),
  getItem('New Post', 'sub1', <UserOutlined />, [
    getItem(<Link href="/user/new-post/job">Job</Link>, '3'),
    getItem(<Link href="/user/new-post/company">Company</Link>, '4'),
  ]),
  getItem('Save for later', 'sub2', <TeamOutlined />, [getItem(<Link href="/user/save-for-later/job">Job</Link>, '6'), getItem(<Link href="/user/save-for-later/company">Company</Link>, '8')]),
  getItem(<Link href="/user/applied-jobs">Applied Job</Link>, '9', <FileOutlined />),
  getItem(<Link href="/user/connection-list">Connection List</Link>, '10', <FileOutlined />),
  getItem(<Link href="/user/job-list">Job List</Link>, '12', <FileOutlined />),
  getItem(<Link href="/user/company-list">Company List</Link>, '11', <FileOutlined />),
  getItem(<Link href="/user/profile">Profile</Link>, '13', <FileOutlined />),
  getItem(<Link href="/user/setting">Setting</Link>, '14', <FileOutlined />),
];
const MainLayOut: React.FC = ({ children }: any) => {
  const pathName = usePathname();
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log("pathName", pathName);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} defaultCollapsed={true}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, height: "7vh", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
            }}
          />
          <div style={{ padding: ".6rem", display: "flex", gap: ".5rem" }}>
            <Link href="/login">
              <Button
                type="primary"
              >Login </Button>
            </Link>
            <Link href="/register">
              <Button
                type="default"
              >Register </Button>
            </Link>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "87vh",
            minWidth:"768px",
            // background: colorBgContainer,
            background: "transparent",
            overflow: "auto",
            overflowX: "hidden",
            borderRadius: borderRadiusLG,

          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", flex: "wrap" }}>
            <div style={{ width: pathName === "/" ? "100%" : "80%" }}>{children}</div>
            {pathName !== "/" && <Advertisement />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayOut;
