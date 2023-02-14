import React from "react";
import { Carousel, Card, Avatar, Button } from "antd";
import {
  LikeOutlined,
  WhatsAppOutlined,
  EyeOutlined,
  FilterFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "../homepage.css";
import { Col, Row } from "antd";

export default function ListingCards() {
  const { Meta } = Card;
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  function TestCarouselCard() {
    return (
      <Card
        style={{ width: 300 }}
        hoverable
        cover={
          <div>
            <Carousel afterChange={onChange}>
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1548500853-17a234cbd378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </Carousel>
          </div>
        }
        actions={[
          <EyeOutlined key="view" />,
          <WhatsAppOutlined key="message" />,
          <LikeOutlined key="like" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          }
          title="Used branded bicycle"
          description={
            <>
              <b>
                <EnvironmentOutlined /> MRT LOCATION HERE.
              </b>
              <br />
              "Posted by BLAHBLAHBLAH"
            </>
          }
        />
      </Card>
    );
  }

  function Test2Card() {
    return (
      <Card
        style={{ width: 300 }}
        hoverable
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
        }
        actions={[
          <EyeOutlined key="view" />,
          <WhatsAppOutlined key="message" />,
          <LikeOutlined key="like" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          }
          title="Harvey davidson bike"
          description={
            <>
              <b>
                <EnvironmentOutlined /> Bishan
              </b>
              <br />
              "Posted by BLAHBLAHBLAH"
            </>
          }
        />
      </Card>
    );
  }

  return (
    <div className="all-listing">
      <Row>
        <Col span={22}>
          <h2>Listings You May Want</h2>
        </Col>
        <Col span={2} style={{ alignItems: "center", margin: "auto" }}>
          <Button type="default">
            <FilterFilled style={{ fontSize: "15px", color: "#ff7e55" }} /> Sort
            By
          </Button>
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col span={6}>
          <TestCarouselCard />
        </Col>
        <Col span={6}>
          <Test2Card />
        </Col>
        <Col span={6}>
          <TestCarouselCard />
        </Col>
        <Col span={6}>
          <Test2Card />
        </Col>
        <Col span={6}>
          <TestCarouselCard />
        </Col>
      </Row>
    </div>
  );
}
