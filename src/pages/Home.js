import * as React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Box, CssBaseline, Typography } from "@mui/material";

const Home = () => {
     return (
       <div>
      <Navbar />
      <div>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: "#323232", height: "100vh" }}>
          <Box sx={{width: "70%", height: "30%", p: 2, border: '1px dashed grey'}} 
            position="absolute" 
            bottom="0px"
            marginLeft={10}
           >
            구역1
          </Box>
        </Box>
        <Box sx={{ bgcolor: '#fafafa', height: '40vh' }}>
         <Box sx={{width: "80%", height: "80%", p: 2, border: '1px dashed black'}}
            bottom="0px"
            marginLeft={20}
          >
            구역2
         </Box>
         </Box>
        <Box sx={{ bgcolor: "#ffffff", height: "100vh" }}>
          구역3
        </Box>
        <Box sx={{ bgcolor: '#fafafa', height: '25vh' }}>
         <Box sx={{width: "80%", height: "90%", p: 2, border: '1px dashed black'}}
            bottom="0px"
            marginLeft={20}
          >
            구역4
         </Box>
         </Box>
        <Box sx={{ bgcolor: "#ffffff", height: "80vh" }}>
          구역5
        </Box>
        </Container>
        </React.Fragment>
        </div>
        <Footer />
       </div>
     )
   }
   
   export default Home;