import { List, ListItem, ListItemText, ListItemButton, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';


export default function NavListDrawer({ navLinks, NavLink, setOpen }) {
  return (
    <Box sx={{ width: 200, bgcolor: "#ffffff" }}>
      <nav>
        <List>
          <Box sx={{ marginLeft: 20 }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {navLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
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
