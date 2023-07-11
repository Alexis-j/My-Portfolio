import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIconRounded from '@mui/icons-material/MenuRounded';
import InboxIcon from "@mui/icons-material/Inbox";
import { NavLink } from "react-router-dom";
import  HeaderPic  from "../assets/img/pngwing.com.png";

      const navLinks = [
        {
          title: "About", path: "/about",
        },
        {
          title: "Projects", path: "/login", icon: <InboxIcon />,
        }
      ]

export default function Navbar() {
    const [open, setOpen] = useState (false)

    return (
    <>
      <AppBar position="static" elevation={0}>
      <Toolbar>
        <Box sx={{ padding: 1, height:100, width:100}}>
          <img src={HeaderPic} alt="logo de mi pagina" style={{ width: '100%', height: '100%', }} />
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            color="inherit"
            size="larger"
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{ marginLeft: "auto" }}
          >
            <MenuIconRounded />
          </IconButton>
        </Box>
        <Box sx={{ justifySelf:"end", alignSelf: "middle",display: { xs: "none", sm: "block" } }}>
          {navLinks.map((item) => (
            <Button // estos son los botones de el header
              color="inherit"
              key={item.title}
              component={NavLink}
              to={item.path}
              disableRipple
              sx={{
                fontFamily: 'Arial, sans-serif', // Cambia el tipo de fuente aquí
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  color: 'inherit',
                  fontSize: '18px',// Cambia el tamaño de fuente aquí
                },
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>

      </AppBar>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        // sx={{ display: {xs: "flex", sm: "none"} }}
      >
        <NavListDrawer
          navLinks={navLinks}
          NavLink={NavLink}
          setOpen={setOpen}/>
      </Drawer>
    </>
  );
}
