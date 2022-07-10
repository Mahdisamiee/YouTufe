import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const SearchForm = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("failed ->", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="search"
        rules={[{ required: true, message: "Please enter your search item!" }]}
      >
        <Input.Search autoFocus placeholder="input search text" enterButton onSearch={onFinish} />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
