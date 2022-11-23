import React, { Component } from "react";
import { AppBar, Grid, Tab, Tabs, Toolbar, styled, alpha, InputBase } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../images/logoHeader.png"


const Search = styled('div')(({ theme }) => ({
     position: 'relative',
     borderRadius: theme.shape.borderRadius,
     backgroundColor: alpha(theme.palette.common.white, 0.15),
     '&:hover': {
       backgroundColor: alpha(theme.palette.common.white, 0.25),
     },
     marginLeft: 0,
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       marginLeft: theme.spacing(1),
       width: 'auto',
     },
   }));
   
   const SearchIconWrapper = styled('div')(({ theme }) => ({
     padding: theme.spacing(0, 2),
     height: '100%',
     position: 'absolute',
     pointerEvents: 'none',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   }));

   const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color: 'inherit',
     '& .MuiInputBase-input': {
       padding: theme.spacing(1, 1, 1, 0),
       // vertical padding + font size from searchIcon
       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
       transition: theme.transitions.create('width'),
       width: '100%',
       [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
           width: '20ch',
         },
       },
     },
   }));

const Navber = () => {
  return (
  <div>
    <AppBar sx={{backgroundColor: "gray"}}>
     <Toolbar>
      <Link to="/">
       <img className="Logo" src={Logo} alt="Logo" height={50} />
       </Link>
       <Grid container sx={{ justifyContent: 'flex-end' }}>
          <Grid>
            <Tabs>
              <Link to="/Roadmap" style={{ textDecoration: "none", color: 'black' }}>
               <Tab label="Roadmap" />
               </Link>
               <Link to="/Team" style={{ textDecoration: "none", color: 'black'  }}>
               <Tab label="Team" />
               </Link>
               <Link to="/Partner" style={{ textDecoration: "none", color: 'black'  }}>
               <Tab label="Partner" />
               </Link>
               <Tab label="Docs" />
               <Tab label="Kor" />
            </Tabs>
          </Grid>
       </Grid>
       <Search>
       <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
     </Toolbar>
    </AppBar>
    </div>
    
  );
}

export default Navber;