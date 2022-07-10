import { Typography } from "antd";
import React from "react";
import SearchForm from "../../components/Form/SearchForm";
import MainTitle from "./MainTitle";

const { Title, Text, Paragraph: Para } = Typography;

const Home = () => {
  return (
    <div className="home-container">
      <MainTitle />
      <SearchForm />
    </div>
  );
};

export default Home;
