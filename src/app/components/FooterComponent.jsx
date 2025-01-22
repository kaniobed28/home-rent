import React from "react";
import { Box, Typography } from "@mui/material";

const FooterComponent = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Typography>© 2025 RentEasy. All rights reserved.</Typography>
      <Typography>
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          Facebook
        </a>{" "}
        |{" "}
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          Twitter
        </a>{" "}
        |{" "}
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          Instagram
        </a>
      </Typography>
    </Box>
  );
};

export default FooterComponent;
