import React from "react";
import { Button } from "antd";
import { Col, Row } from "antd";
import "./homepage.css";

export default function CategorySlider() {
  const categories = [
    "Sports & Equipment",
    "Home Appliances",
    "Furniture",
    "Clothes",
    "Video Games",
    "Photography",
    "View All Categories",
  ];
  return (
    <div className="homepage-categories">
      <p className="categories-title">Categories</p>
      <div>
        <Row gutter={[2, 2]}>
          {categories.map((category, index) => (
            <Col span={3.8} key={index}>
              <Button size="large" style={{ width: 190 }}>
                {category}
              </Button>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
