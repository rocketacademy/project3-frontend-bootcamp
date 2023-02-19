// specific listing
import React from "react";
import { useState, useEffect } from "react";
import { Card, Carousel, Image, Avatar } from "antd";
import { Layout, Button, Input, Row, Col, ConfigProvider } from "antd";
import {
  LikeOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Navbar } from "../../commoncomponents/Navbar/Navbar";
import "./viewlisting.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Sider,
  Footer,
  Content,
  siderStyle,
  contentStyle,
} from "../globalstyles.js";

export default function ViewListing() {
  const { Meta } = Card;
  const navigate = useNavigate();

  const [listingName, setListingName] = useState("Used Canon 24GB Camera");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur varius nunc, sed tempor dui volutpat fringilla. Vivamus a tortor nunc. "
  );
  const [condition, setCondition] = useState("Like New");

  let { user_id, listing_id } = useParams();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/:user_id/listings/:listing_id")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
            <Footer style={replicateFooterStyle}></Footer>
          </Sider>
          <Layout>
            <Content style={contentStyle}>
              <Button
                type="link"
                style={{ marginLeft: 50, marginTop: 50 }}
                onClick={handleBackButtonClick}
              >
                {"< "}Back
              </Button>
              <div className="listing-right">
                <Image.PreviewGroup>
                  <Carousel
                    dotPosition="bottom"
                    infinite={false}
                    slidesToShow={3}
                  >
                    <Image
                      width={400}
                      src="https://images.unsplash.com/photo-1568840568548-478236d70df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    />

                    <Image
                      width={400}
                      alt="camera"
                      src="https://images.unsplash.com/photo-1548500853-17a234cbd378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                    <Image
                      width={400}
                      alt="camera"
                      src="https://images.unsplash.com/photo-1562749185-dfe5013f7223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    />
                    <Image
                      width={400}
                      alt="camera"
                      src="https://images.unsplash.com/photo-1548500853-17a234cbd378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Carousel>
                </Image.PreviewGroup>

                <Row gutter={10}>
                  <Col span={18}>
                    <h1>{listingName}</h1>
                    <p>{description}</p>
                    <p>{condition}</p>
                  </Col>

                  <Col span={6}>
                    <Card>
                      <Meta
                        avatar={
                          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                        }
                        title="PERSON-USERNAME"
                        description={
                          <>
                            <b>
                              <EnvironmentOutlined /> Bishan
                            </b>
                            <br />
                            <Button type="primary">
                              <WhatsAppOutlined />
                              Chat Now
                            </Button>
                            <Button type="default">
                              <LikeOutlined />
                              Like Listing
                            </Button>
                          </>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            </Content>
            <Footer style={footerStyle}></Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
