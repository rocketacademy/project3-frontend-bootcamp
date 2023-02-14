import React from "react";
import { Layout, Button, Input, ConfigProvider, Row, Col } from "antd";
import CarouselBanner from "./components/CarouselBanner";
import ListingCards from "./components/ListingCards";
import { Pagination } from "antd";
import CategorySlider from "./components/CategorySlider";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#ff7e55",
  minHeight: 80,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#eeeeee",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#303841",
};

export default function HomePage() {
  // search bar + button

  const { Search } = Input;

  return (
    <div>
      {/* Change theme primary */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff7e55",
          },
        }}
      >
        <Layout>
          <Header style={headerStyle}>
            <Row>
              <Col span={20}>
                <Search
                  placeholder="What are you looking for?"
                  allowClear
                  enterButton="Search"
                  size="large"
                  style={{ margin: "20px 0px" }}
                  // onSearch={onSearch}
                />
              </Col>

              <Col span={4}>
                <Button
                  size="large"
                  type="primary"
                  style={{
                    color: "white",
                    margin: "20px 0px",
                  }}
                >
                  Create Listing
                </Button>
              </Col>
            </Row>
          </Header>
          <Content>
            {/* banner  */}
            <CarouselBanner />
            <CategorySlider />
            {/* Listing cards */}
            <ListingCards />
            <Pagination
              style={{ margin: "auto", padding: "20px 0px", width: 1400 }}
              defaultCurrent={1}
              total={50}
            />
          </Content>
          <Footer style={footerStyle}> Copyright G&T 2023</Footer>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
