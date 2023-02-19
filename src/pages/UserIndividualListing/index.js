// view 1 listing (with delete/edit button for logged in user)
import React from "react";
import { useState, useEffect } from "react";
import { Avatar, Card, Image } from "antd";
import profilepic from "../../assets/images/profilepic.jpeg";
import {
  Layout,
  Button,
  Input,
  Row,
  Col,
  ConfigProvider,
  Popconfirm,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { Navbar } from "../../commoncomponents/Navbar/Navbar";
import "./userindividuallisting.css";
import axios from "axios";
import book from "../../assets/images/book.webp";
import { useNavigate, useParams } from "react-router-dom";

export default function ViewListing() {
  const { Meta } = Card;
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const handleConfirm = () => {
    setConfirmVisible(false);
  };
  const handleCancel = () => {
    setConfirmVisible(false);
  };
  const [listingName, setListingName] = useState("Used Canon 24GB Camera");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur varius nunc, sed tempor dui volutpat fringilla. Vivamus a tortor nunc. "
  );
  const [condition, setCondition] = useState("Like New");

  let { user_id, listing_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/:userId/listings/:listingId")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleBackButtonClick = () => {
    navigate(`/${user_id}/profile`);
  };
  const { Footer, Sider, Content } = Layout;

  const siderStyle = {
    backgroundColor: "white",
  };
  const contentStyle = {
    backgroundColor: "white",
    paddingTop: "30px",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#303841",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  const replicateFooterStyle = {
    left: 0,
    bottom: 0,
    width: "100%",
    // position: 'absolute',
    backgroundColor: "#303841",
    position: "fixed",
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff7e55",
          },
        }}
      >
        <Layout>
          <Sider width={250} style={siderStyle}>
            <Navbar />
            <Footer style={replicateFooterStyle}>{" -- "}</Footer>
          </Sider>

          {/* <Layout> */}
          <Content style={contentStyle}>
            <Button
              type="link"
              style={{ marginLeft: 50 }}
              onClick={handleBackButtonClick}
            >
              {"< "}Back
            </Button>

            <div className="listingInfo">
              <Row gutter={10}>
                <Col span={6}>
                  <Image
                    preview={{
                      visible: false,
                    }}
                    width={200}
                    src={book}
                    onClick={() => setVisible(true)}
                    style={{ maxWidth: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      display: "none",
                    }}
                  >
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image src={book} />
                    </Image.PreviewGroup>
                  </div>
                </Col>
                <Col span={18} style={{ alignItems: "center" }}>
                  <Row>
                    <Col span={6} style={{ padding: 0 }}>
                      <Avatar
                        size={{ xl: 80 }}
                        style={{ margin: 0 }}
                        src={profilepic}
                      />
                    </Col>
                    <Col
                      span={12}
                      style={{ padding: 0, justifyContent: "center" }}
                    >
                      <h1>username</h1>
                    </Col>
                    <Col span={6}>
                      <Button type="primary">
                        <EditOutlined />
                        Edit
                      </Button>
                      <br></br>
                      <Popconfirm
                        title="Are you sure you want to delete this listing?"
                        visible={confirmVisible}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                      >
                        <Button
                          type="primary"
                          danger
                          onClick={() => setConfirmVisible(true)}
                        >
                          <DeleteOutlined />
                          Delete
                        </Button>
                      </Popconfirm>
                    </Col>
                  </Row>

                  <h2>item name</h2>
                  <b>
                    <EnvironmentOutlined /> Bishan
                  </b>
                  <h2>Condition</h2>
                  <p>Item description</p>
                </Col>
              </Row>
            </div>

            <Footer style={footerStyle}> Copyright© G&T 2023</Footer>
          </Content>
        </Layout>
        {/* </Layout> */}
      </ConfigProvider>
    </div>
  );
}
