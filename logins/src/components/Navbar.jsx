
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static"
    sx={{
      backgroundColor: '#008080', // Background color of the Navbar
      color: '#fff', // Text color
    }}
    >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon /> {/* Example icon */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           LOGIN AS
          </Typography>
          <Button color="inherit" component={Link} to="/">
            User
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Admin
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;