import React from "react";
import { Typography } from "antd";

const { Title, Text, Paragraph: Para } = Typography;

const MainTitle = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Title>YouTufe</Title>
      <Text>YouTube + Focus</Text>
      <Para type="secondary">stay focus when using YouTube</Para>
    </div>
  );
};

export default MainTitle;
