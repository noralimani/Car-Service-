import React from "react";
import { Box, Flex } from "rebass";
import { useContext } from "react";
import "./service-item.css";
import OrderContext from "src/data/order-context";

const ServiceItem = ({
  text,
  price,
  hour,
  icon,
  active,
  color,
  onClick,
  className,
}) => {
  console.log(active);
  return (
    <Box
      py={2}
      px={3}
      className={`serviceBtn ${active ? color : ""}`}
      // style={{ backgroundColor: active ? "#fff" : "" }}
      onClick={onClick}
      sx={{
        display: "block",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 2,
      }}
    >
      <Box>
        <Box width={1} className="textBtn">
          {text}
        </Box>
        <Box
          className="icon"
          width={1 / 2}
          sx={{
            color: "#d0d1d2",
            marginTop: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {icon}
        </Box>

        <Flex
          sx={{
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          <Box width={1 / 2} sx={{ textAlign: "left" }}>
            {price}
          </Box>
          <Box width={1 / 2} sx={{ textAlign: "right" }}>
            {hour}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ServiceItem;
