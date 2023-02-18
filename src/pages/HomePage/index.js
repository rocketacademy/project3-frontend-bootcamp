import React from "react";
import { Layout, Button, Input, ConfigProvider, Row, Col, Menu } from "antd";
import CarouselBanner from "./components/CarouselBanner";
import ListingCards from "./components/ListingCards";
import { Pagination } from "antd";
import CategorySlider from "./components/CategorySlider";
import { Navbar } from "../../commoncomponents/Navbar/Navbar";
import SearchBar from "./components/SearchBar";

const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//   textAlign: "center",
//   color: "#ff7e55",
//   minHeight: 80,
//   paddingInline: 50,
//   lineHeight: "64px",
//   backgroundColor: "#eeeeee",
// };
const siderStyle = {
  backgroundColor: "white",
};

const contentStyle = {
  backgroundColor: "white",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#303841",
};

const replicateFooterStyle = {
  left: 0,
  bottom: 0,
  width: "100%",
  position: "absolute",
  backgroundColor: "#303841",
};

export default function HomePage() {
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
          <Sider width={250} style={siderStyle}>
            <Navbar />
            <Footer style={replicateFooterStyle}>{" yo "}</Footer>
          </Sider>

          <Layout>
            <Content style={contentStyle}>
              {/* banner  */}
              <CarouselBanner />

              <SearchBar />

              <CategorySlider />
              {/* Listing cards */}
              <ListingCards />
              <Pagination
                style={{ margin: "auto", padding: "20px 0px" }}
                defaultCurrent={1}
                total={50}
              />
            </Content>
            <Footer style={footerStyle}> Copyright© G&T 2023</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
