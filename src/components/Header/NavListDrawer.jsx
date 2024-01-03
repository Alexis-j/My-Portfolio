import { List, ListItem, ListItemText, ListItemButton, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";

export default function NavListDrawer({ navLinks, NavLink, handleNavLinkClick, setOpen }) {
  useEffect(() => {
    function handleResize() {
      // Cerrar el drawer cuando cambia el tamaño de la pantalla
      if (window.innerWidth > 768) { // Define aquí el ancho límite para cerrar el drawer
        setOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setOpen]);

  return (
    <Box sx={{ bgcolor: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <IconButton sx={{ alignSelf: "flex-end", ml: "8px", mt: "8px", color:"black" }} onClick={() => setOpen(false)}>
        <CloseIcon />
      </IconButton>
      <List sx={{ width: "100%" }}>
        {navLinks.map((item) => (
          <ListItem disablePadding key={item.title}>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={(event) => handleNavLinkClick(event, item.path)}
            >
              <ListItemText>
                <Typography sx={{ textAlign: "center", fontWeight: "500" }}>{item.title}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
