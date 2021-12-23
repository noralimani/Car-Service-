import React from "react";
import { Box, Flex } from "rebass";
import SpotButton from "../spot-button/spot-button";

const SpotListA = () => {
  var num = Array(12).fill(0);

  return (
    <Flex flexWrap="wrap" alignContent="center">
      {num.map((item, index) => {
        return (
          <SpotButton
            key={`${index + 1}A`}
            id={`${index + 1}A`}
            text={`${index + 1}A`}
          />
        );
      })}
    </Flex>
  );
};

export default SpotListA;
