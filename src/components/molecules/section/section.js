import React from "react";
import { Flex, Box, Button } from "rebass";
import SpotButton from "src/components/atoms/spot-button/spot-button";
import SpotListA from "src/components/atoms/spot-list/spot-list-a";
import SpotListB from "src/components/atoms/spot-list/spot-list-b";
import TitleSection from "src/components/atoms/title-section/title-section";

const Section = (props) => {
  const { title, subtitle } = props;

  return (
    <Box>
      <Box px={2}>
        <TitleSection title={title} subtitle={subtitle} />
      </Box>
      <Flex>{props.children}</Flex>
      <Box px={4}>
        <SpotListA />
        <SpotListB />
      </Box>
    </Box>
  );
};

export default Section;
