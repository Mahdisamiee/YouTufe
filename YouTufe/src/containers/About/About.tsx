import classes from "./About.module.css";
import { Avatar, Typography, Image, Timeline, Space } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SmileOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

const { Title, Paragraph: Para, Link } = Typography;

import image from "../../assets/images/bgr-01.jpg";
import mahdi from "../../assets/images/mahdi.jpg";
import youtufeLogo from "../../assets/images/logo/youtufe-logo-4.png";
import techtabLogo from "../../assets/images/logo/techtab-logo.png";

const About = () => {
  return (
    <div className="about-container">
      <div className={[classes.info, classes.infoWhy].join(" ")}>
        <img src={youtufeLogo} alt="image" />
        <Para>
          hi this is YOUTUFE. an idea that comes from the Deep Work book. the summary of idea is
          when we enter the YouTube site to see a tutorial or understand a topic, we realize that we
          have lost a lot of time. That's why we started making YOUTUFE so that we can focus more
          while working. We also wanted others to be able to use this tool to fulfill our duty to
          others
        </Para>
      </div>
      <div className={[classes.info, classes.infoMe].join(" ")}>
        <img src={mahdi} alt="image" />
        <Para>
          Hello friends, I am Mehdi. a person who likes to give ideas and turn ideas into products.
          That's why I became a front-end developer to implement ideas. You can contact me through
          my social networks or through TechTab team social networks. I would be happy to hear your
          ideas. you can hover other parts to see links. good luck 😀
        </Para>
      </div>
      <div className={[classes.info, classes.infoTechTab].join(" ")}>
        <img src={techtabLogo} alt="image" />
        <Para>
          TechTab is a team that created by some of graduted computer students. we provide services
          and products using AI and ML technology that help every person, from every where to have a
          business. It doesn't matter whether it is big or small, be a high performance business
          using our tools. you can visit our website to see our products.
        </Para>
      </div>

      <div className={[classes.info, classes.infoSocial].join(" ")}>
        <img src={image} alt="image" />
        <Para>
          <Link target="_blank" href="https://www.linkedin.com/in/mahdi-samieenia/">
            <Space>
              <LinkedinOutlined style={{ fontSize: "32px" }} />
              <span>Mahdi samieenia</span>
            </Space>
          </Link>
        </Para>
        <Para>
          <Link href="#">
            <Space>
              <FacebookOutlined style={{ fontSize: "32px" }} />
              <span>Mahdi Samieenia</span>
            </Space>
          </Link>
        </Para>
        <Para>
          <Link target="_blank" href="#">
            <Space>
              <TwitterOutlined style={{ fontSize: "32px" }} />
              <span>Lind_IR</span>
            </Space>
          </Link>
        </Para>
        <Para>
          <Link target="_blank" href="https://www.instagram.com/techtab.official/">
            <Space>
              <InstagramOutlined style={{ fontSize: "32px" }} />
              <span>TechTab Official</span>
            </Space>
          </Link>
        </Para>
        <Para>
          <Link target="_blank" href="https://github.com/Mahdisamiee/YouTufe">
            <Space>
              <GithubOutlined style={{ fontSize: "32px" }} />
              <span>YouTufe Source Code</span>
            </Space>
          </Link>
        </Para>
      </div>
    </div>
  );
};

export default About;
