import React from "react";
import { Box, Text } from "rebass";

const TitleSection = ({ title, subtitle }) => {
  return (
    <Box px={4} py={3}>
      <Text
        px={2}
        fontSize={[3, 4, 5]}
        fontWeight="bold"
        sx={{ color: "#3C4173" }}
      >
        {title}
      </Text>
      <Text py={2} px={2} fontSize={[1, 2, 3]} sx={{ color: "#3C4173" }}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default TitleSection;
