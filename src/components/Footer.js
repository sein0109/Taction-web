import * as React from 'react';
import { Container, Box, CssBaseline, Typography } from "@mui/material";

const Footer = () => {
  return (
     <div>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: "#323232", height: "35vh" }}>
        </Box>
      </Container>
    </React.Fragment>
    </div>
  );
}

export default Footer;