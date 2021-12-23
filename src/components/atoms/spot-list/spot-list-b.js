import React from "react";
import { Box, Flex } from "rebass";
import SpotButton from "../spot-button/spot-button";

const SpotListB = () => {
  var num = Array(12).fill(0);

  return (
    <Flex flexWrap="wrap" alignContent="center">
      {num.map((item, index) => {
        return (
          <SpotButton
            key={`${index + 1}B`}
            id={`${index + 1}B`}
            active
            text={`${index + 1}B`}
          />
        );
      })}
    </Flex>
  );
};

export default SpotListB;
