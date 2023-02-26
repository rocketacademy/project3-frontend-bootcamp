//edit individual listing
import React, { useState, useEffect } from "react";
import styles from "./editlisting.module.css";
import { Navbar } from "../../commoncomponents/Navbar/Navbar";
import {
  Button,
  Input,
  Row,
  Col,
  Radio,
  ConfigProvider,
  Layout,
  Form,
  notification,
  Select,
} from "antd";
// import { PlusOutlined } from '@ant-design/icons';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { UploadWidget } from "./UploadWidget";
import {
  SmileOutlined,
  FrownOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import {
  Footer,
  Sider,
  Content,
  siderStyle,
  contentStyle,
} from "../globalstyles";
import TextArea from "antd/es/input/TextArea";

export function EditListing() {
  const { logout } = useAuth0();
  const [formValues, setFormValues] = useState({});
  const { getAccessTokenSilently, user } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  let { original_id, user_id, listing_id } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    console.log(formValues);
  };

  const handleCategoryChange = (e) => {
    setFormValues({ ...formValues, category: e });
  };

  const handleListingTypeChange = (e) => {
    setFormValues({ ...formValues, listing_type: e });
    console.log(formValues);
  };

  const handleConditionChange = (e) => {
    setFormValues({ ...formValues, condition: e });
    console.log(formValues);
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const openSuccessNotification = (placement) => {
    api.info({
      message: `Yippee!`,
      description: "Edit listing successful!",
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
  const openFailureNotification = (placement) => {
    api.info({
      message: `Oh no!`,
      description: "Edit listing unsuccessful!",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3000/${user_id}/listings/${listing_id}`,
        formValues,
        configs
      )
      .then(function (response) {
        console.log(response);
        openSuccessNotification("top");
      })
      .catch(function (error) {
        console.log(error);
        openFailureNotification("top");
      });
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
    backgroundColor: "#303841",
    position: "fixed",
  };

  useEffect(() => {
    if (user && !accessToken) {
      getAccessTokenSilently().then((jwt) => setAccessToken(jwt));
    }
  }, [user]);

  const configs = {};
  if (accessToken) configs.headers = { Authorization: `Bearer ${accessToken}` };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${user_id}/listings/${listing_id}`, configs)
      .then(function (response) {
        console.log(response.data);
        setFormValues(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [accessToken]);

  return (
    <>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff7e55",
          },
        }}
      >
        <Layout>
          <Sider style={siderStyle} width={250}>
            <Navbar />
            <Footer style={replicateFooterStyle}> -- </Footer>
          </Sider>
          <Layout>
            <Content style={contentStyle}>
              <Row gutter={10}>
                <Col span={20}>
                  <div className={styles.listingRight}>
                    <div className={styles.card}>
                      <Form.Item label="Current Listing Photo" name="photo_url">
                        <img alt="" src={formValues.photo_url} width="150" />
                        <br></br>
                        <UploadWidget
                          setFormValues={setFormValues}
                          formValues={formValues}
                        />
                      </Form.Item>
                      <div className={styles.text}>
                        <Form.Item
                          label="Item name"
                          name="item_name"
                          onChange={handleInputChange}
                        >
                          <Input placeholder={formValues.item_name} />
                        </Form.Item>

                        <p>
                          <Form.Item
                            label="Description"
                            name="description"
                            onChange={handleInputChange}
                          >
                            <TextArea
                              style={{ width: "300px" }}
                              rows={5}
                              placeholder={formValues.description}
                            />
                          </Form.Item>
                        </p>
                        <Form.Item label="Condition" name="condition">
                          <Select
                            placeholder={formValues.condition}
                            onChange={handleConditionChange}
                          >
                            <Select.Option value="Brand New">
                              Brand New
                            </Select.Option>
                            <Select.Option value="Like New">
                              Like New
                            </Select.Option>
                            <Select.Option value="Lightly Used">
                              Lightly Used
                            </Select.Option>
                            <Select.Option value="Heavily Used">
                              Heavily Used
                            </Select.Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          label="Category"
                          name="category"
                          onChange={handleCategoryChange}
                        >
                          <Select
                            placeholder={formValues.category}
                            onChange={handleCategoryChange}
                          >
                            <Select.Option value="Shoes">Shoes</Select.Option>
                            <Select.Option value="Appliances">
                              Appliances
                            </Select.Option>
                            <Select.Option value="Furniture">
                              Furniture
                            </Select.Option>
                            <Select.Option value="Clothes">
                              Clothes
                            </Select.Option>
                            <Select.Option value="Sports">Sports</Select.Option>
                            <Select.Option value="Games">Games</Select.Option>
                            <Select.Option value="Photography">
                              Photography
                            </Select.Option>
                          </Select>
                          {/* <Input placeholder={formValues.category} /> */}
                        </Form.Item>

                        <Form.Item label="Listing Type:" name="listing-type">
                          <Select
                            placeholder={formValues.listing_type}
                            onChange={handleListingTypeChange}
                          >
                            <Select.Option value="Give">Give</Select.Option>
                            <Select.Option value="Take">Take</Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
                style={{
                  marginTop: "20px",
                  marginLeft: "700px",
                  marginRight: "20px",
                  marginBottom: "200px",
                }}
              >
                Save Changes
              </Button>
              <Link to={`/${original_id}/profile`} style={{ color: "#ff7e55" }}>
                {" "}
                <RollbackOutlined /> Back to Profile{" "}
              </Link>
            </Content>
            <Footer style={footerStyle}>Copyright © Give & Take 2023</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default EditListing;
