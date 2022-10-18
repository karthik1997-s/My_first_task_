import React from "react";
import moment from "moment";
import { Typography, Avatar } from "antd";
import background from "../image/Rectangle.png";
import icon from "../image/icon.png";
const { Text } = Typography;

function DateTime() {
  const Today = moment().format("dddd");
  const Localtime = moment().format("LT");
  const date = moment().format("MMM Do");
  return (
    <div>
      <Text
        style={{
          width: 10,
          height: 30,
          paddingLeft: "600px",
          borderImageWidth: "500px",
          backgroundImage: `url(${background})`,

          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "190px ",
        }}
      >
        <span>
          {" "}
          {Today},{date},{Localtime}
        </span>
      </Text>

      <Avatar
        shape="square"
        size={40}
        src={icon}
        style={{ marginLeft: "60px" }}
      />
      <Text style={{ paddingLeft: "20px", marginTop: 0 }}>Michel Raj</Text>

      <Text type="secondary">cashier</Text>
    </div>
  );
}

export default DateTime;
