import React from "react";
import { Layout, Button, Input, ConfigProvider, Row, Col, Menu } from "antd";
import CarouselBanner from "./components/CarouselBanner";
import ListingCards from "./components/ListingCards";
import { Pagination } from "antd";
import CategorySlider from "./components/CategorySlider";
import { Navbar } from "../../commoncomponents/Navbar/Navbar";
import SearchBar from "./components/SearchBar";
import {
  Sider,
  Footer,
  Content,
  siderStyle,
  contentStyle,
  footerStyle,
  replicateFooterStyle,
} from "../globalstyles.js";

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
