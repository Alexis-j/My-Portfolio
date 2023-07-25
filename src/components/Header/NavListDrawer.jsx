import PropTypes from "prop-types";
import { List, ListItem, ListItemText, ListItemButton, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';

export default function NavListDrawer({ navLinks, NavLink, handleNavLinkClick, setOpen }) {
  return (
    <Box sx={{ bgcolor: "#ffffff", display: "flex", justifyContent: "flex-end"}}>
      <nav>
        <List>
          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "0 16px" }}>
            {/* Mueve el CloseIcon completamente a la izquierda */}
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box >
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={(event) => handleNavLinkClick(event, item.path)}
              >
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}

NavListDrawer.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      // Puedes agregar más validaciones de tipo para otros campos si es necesario
    })
  )
}
