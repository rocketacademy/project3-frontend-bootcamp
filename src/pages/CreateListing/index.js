import React from "react";
import { useState, useEffect } from "react";
import { Form, Image, Select, Upload } from "antd";
import { Layout, Button, Input, ConfigProvider, Row, Col } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined, InboxOutlined } from "@ant-design/icons";

export default function CreateListing() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <div>
        <Row style={{ margin: 50 }}>
          <Col span={12}>
            <Form
              form={form}
              layout="vertical"
              initialValues={{ requiredMarkValue: requiredMark }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
            >
              <Form.Item
                label="Title"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="What's the name of this product?" />
              </Form.Item>

              <Form.Item label="Category">
                <Select>
                  <Select.Option value="demo">
                    Sports and Equipment
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Condition">
                <Select>
                  <Select.Option value="demo">Brand New</Select.Option>
                  <Select.Option value="demo">Like New</Select.Option>
                  <Select.Option value="demo">Lightly Used</Select.Option>
                  <Select.Option value="demo">Heavily Used</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Description"
                tooltip={{
                  title: "Tooltip with customize icon",
                }}
              >
                <TextArea rows={4} placeholder="Describe this product." />
              </Form.Item>

              <Form.Item label="Upload" valuePropName="fileList">
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </div>
                </Upload>
              </Form.Item>

              <Form.Item label="Dragger">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>Listing Preview</Col>
        </Row>
      </div>
    </div>
  );
}
