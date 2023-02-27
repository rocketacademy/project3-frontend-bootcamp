// specific listing
import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  Carousel,
  Image,
  Empty,
  Layout,
  Button,
  Row,
  Col,
  ConfigProvider,
  notification,
  Space,
} from "antd";
import {
  // LikeOutlined,
  // WhatsAppOutlined,
  // EnvironmentOutlined,
  WarningOutlined,
  DeleteOutlined,
  EditOutlined,
  SmileOutlined,
  FrownOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { Navbar } from "../../commoncomponents/Navbar/Navbar";
import styles from "./userindividuallisting.module.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserIndividualListing() {
  const { Meta } = Card;

  const [listingReturned, setListingReturned] = useState([]);
  const [data, setData] = useState(null);
  const { getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  let { original_id, user_id, listing_id } = useParams();
  const [api, contextHolder] = notification.useNotification();
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setConfirmVisible(false);
  };
  const handleCancel = () => {
    setConfirmVisible(false);
  };
  const openNotificationWithIcon = (placement) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button
          type="primary"
          size="small"
          style={{ backgroundColor: "#ff7e55" }}
          onClick={() => {
            axios
              .delete(`http://localhost:3000/delete/${listing_id}`, configs)
              .then(function (response) {
                console.log(response.data);
                openDeleteSuccessNotification("top");
              })
              .catch(function (error) {
                console.log(error);
                openDeleteFailureNotification("top");
              });
            api.destroy();
          }}
        >
          Confirm
        </Button>
        <Button
          type="primary"
          size="small"
          style={{ backgroundColor: "#ff7e55" }}
          onClick={() => api.destroy(key)}
        >
          Cancel
        </Button>
      </Space>
    );
    api.open({
      message: "Are you sure?",
      description: "Clicking 'Confirm' will delete this listing permanently!",
      placement,
      icon: <WarningOutlined style={{ color: "red" }} />,
      duration: 0,
      btn,
      key,
    });
  };
  const openDeleteSuccessNotification = (placement) => {
    api.info({
      message: `Yippee!`,
      description: "Delete listing successful!",
      placement,
      icon: (
        <SmileOutlined
          style={{
            color: "green",
          }}
        />
      ),
    });
  };
  const openDeleteFailureNotification = (placement) => {
    api.info({
      message: `Oh no!`,
      description: "Delete listing unsuccessful!",
      placement,
      icon: (
        <FrownOutlined
          style={{
            color: "red",
          }}
        />
      ),
    });
  };

  useEffect(() => {
    if (user && !accessToken) {
      getAccessTokenSilently().then((jwt) => setAccessToken(jwt));
    }
  }, [user]);
  console.log(accessToken);

  const configs = {};
  if (accessToken) configs.headers = { Authorization: `Bearer ${accessToken}` };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/listings`, configs)
      .then(function (response) {
        console.log(response.data);
        setListingReturned(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [accessToken]);

  const handleBackButtonClick = () => {
    navigate(`/${original_id}/profile`);
  };

  useEffect(() => {
    for (let i = 0; i < listingReturned.length; i++) {
      if (
        listingReturned[i].user_id === +original_id &&
        listingReturned[i].id === +listing_id
      ) {
        console.log(listingReturned[i]);
        setData(listingReturned[i]);
        return;
      }
    }
  }, [listingReturned]);

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
      {contextHolder}
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
          <Layout>
            <Content style={contentStyle}>
              {data === null ? (
                <div>
                  <h1>Sorry, information not found in database</h1>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </div>
              ) : (
                <div>
                  <Image.PreviewGroup>
                    <Carousel
                      dotPosition="bottom"
                      infinite={false}
                      slidesToShow={1}
                    >
                      <Image width={300} src={data.photo_url} />
                    </Carousel>
                  </Image.PreviewGroup>

                  <Row gutter={10}>
                    <Col span={18}>
                      <h1>{data.item_name}</h1>
                      <p>{data.description}</p>
                      <p>{data.condition}</p>
                      <Button type="primary">
                        <Link
                          to={`http://localhost:3001/${original_id}/editlisting/${listing_id}`}
                        >
                          <EditOutlined /> Edit
                        </Link>
                      </Button>
                      &nbsp;
                      <Button
                        type="primary"
                        onClick={() => openNotificationWithIcon("top")}
                        icon={<DeleteOutlined />}
                      >
                        Delete
                      </Button>
                      <Link
                        to={`/${original_id}/profile`}
                        style={{ color: "#ff7e55" }}
                      >
                        {" "}
                        <RollbackOutlined /> Back to Profile{" "}
                      </Link>
                    </Col>
                  </Row>
                </div>
              )}
            </Content>
            <Footer style={footerStyle}>Copyright © Give & Take 2023</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
