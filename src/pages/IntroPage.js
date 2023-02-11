// welcome page with short intro, login and sign up buttons

import React from "react";
import { Layout, Space, Menu, Button, Card, Col, Row, Avatar } from "antd";
import intropage from "../assets//images/intropage.jpg";
import logo from "../assets//images/logo.png";
import bike from "../assets//images/bike.jpg";

import "./styles/intro.css";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;
const menuHeaders = ["About", "Press", "Contact"];

const headerStyle = {
  textAlign: "center",
  color: "#ff7e55",
  height: 70,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#eeeeee",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 400,
  lineHeight: "120px",
  color: "#303841",
  backgroundColor: "#eeeeee",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#303841",
};
export default function WelcomePage() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>
          <Menu
            style={{ backgroundColor: "#eeeeee", color: "#ff7e55" }}
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            // items={menuHeaders.map((header, index) => {
            //   const key = index;
            //   return {
            //     key,
            //     label: `${header}`,
            //   };
            // })}
          >
            <img height={60} src={logo} alt="logo" />
            <Menu.Item key="0">About</Menu.Item>
            <Menu.Item key="1">Press</Menu.Item>
            <Menu.Item key="2">Contact Us</Menu.Item>
            <Space wrap>
              <Button
                type="primary"
                style={{ backgroundColor: "#ff7e55", color: "white" }}
              >
                Sign Up
              </Button>
              <Button
                type="primary"
                style={{ backgroundColor: "#ff7e55", color: "white" }}
              >
                Login
              </Button>
            </Space>
          </Menu>
        </Header>

        <Content style={contentStyle}>
          <div class="container">
            <img width="100%" src={intropage} alt="intropage" />
            <div class="top-left">
              <h3>Give and Take</h3>
              <p>Your local app for giving and requesting things.</p>
            </div>
          </div>
          <h2>Here's how it works: </h2>

          <h2>These are some listings you might be interested in:</h2>

          <Row gutter={16}>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={bike} />}
                actions={[
                  <MessageOutlined key="message" />,
                  <LikeOutlined key="like" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Loco 2-Wheel Bike"
                  description="Brand new"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={bike} />}
                actions={[
                  <MessageOutlined key="message" />,
                  <LikeOutlined key="like" />,
                ]}
              >
                <Meta title="Loco 2-Wheel Bike" description="Brand new" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={bike} />}
                actions={[
                  <MessageOutlined key="message" />,
                  <LikeOutlined key="like" />,
                ]}
              >
                <Meta title="Loco 2-Wheel Bike" description="Brand new" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={bike} />}
                actions={[
                  <MessageOutlined key="message" />,
                  <LikeOutlined key="like" />,
                ]}
              >
                <Meta title="Loco 2-Wheel Bike" description="Brand new" />
              </Card>
            </Col>
          </Row>

          <Space wrap>
            <Button
              type="primary"
              style={{ backgroundColor: "#ff7e55", color: "white" }}
            >
              Sign Up
            </Button>
            <Button
              type="primary"
              style={{ backgroundColor: "#ff7e55", color: "white" }}
            >
              Login
            </Button>
          </Space>
        </Content>
        <Footer style={footerStyle}>Copyright(c) Give and Take 2023. </Footer>
      </Layout>
    </Space>
  );
}
