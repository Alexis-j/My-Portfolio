import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIconRounded from '@mui/icons-material/MenuRounded';
import InboxIcon from "@mui/icons-material/Inbox";
import { NavLink } from "react-router-dom";

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
      <AppBar position="static">
      <Toolbar>
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
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navLinks.map((item) => (
            <Button
              color="inherit"
              key={item.title}
              component={NavLink}
              to={item.path}
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
