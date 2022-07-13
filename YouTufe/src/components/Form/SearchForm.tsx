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
      name="SearchForm"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{width: "45%"}}
    >
      <Form.Item
        name="search"
        rules={[{ required: true, message: "Please enter your search item!" }]}
      >
        <Input.Search size="large" autoFocus placeholder="Search what you want to watch..." enterButton onSearch={onFinish} />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
