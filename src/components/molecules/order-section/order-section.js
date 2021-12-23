import React from "react";
import { Box } from "rebass";
import Order from "src/components/atoms/order/order";
import TitleSection from "src/components/atoms/title-section/title-section";

const OrderSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TitleSection title="Your Order" />
      <Box
        sx={{
          backgroundColor: "tomato",
          marginLeft: "auto",
          marginRight: "auto",
          width: 250,
          height: 250,
          borderRadius: 8888,
        }}
      ></Box>
      <Order />
    </Box>
  );
};

export default OrderSection;
