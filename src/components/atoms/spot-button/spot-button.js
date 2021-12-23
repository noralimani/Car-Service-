import React from "react";
import { Box, Button } from "rebass";
import "./spot-button.css";

const SpotButton = ({ text, onClick, active, id }) => {
  return (
    <Box
      py={2}
      width={1 / 12}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div
        id={id}
        className={`spotButton ${active && "active"}`}
        onClick={onClick}
      >
        {text}
      </div>
    </Box>
  );
};

export default SpotButton;
