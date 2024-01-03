import { List, ListItem, ListItemText, ListItemButton, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';

export default function NavListDrawer({ navLinks, NavLink, handleNavLinkClick, setOpen }) {
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
