import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIconRounded from '@mui/icons-material/MenuRounded';

const navLinks = [
  {
    title: "About",
    path: "#AboutMe",
  },
  {
    title: "Projects",
    path: "#MyProjects",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavLinkClick = (event, path) => {
    event.preventDefault();
    const targetElement = document.querySelector(path);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top;
      const headerOffset = 100;
      const totalOffset = topOffset + window.pageYOffset - headerOffset;

      // Desplazamiento suave
      setTimeout(() => {
        window.scroll({
          top: totalOffset,
          behavior: "smooth",
        });
      }, 200);

      setOpen(false); // Cerramos el menú después de hacer clic en un enlace
    }
  };

    return (
      <>
      <AppBar position="static" elevation={0} sx={{backgroundColor:"#fff"}}>
        <Toolbar>
        {/* aqui esta la imagen */}
          <Box sx={{ padding: 1, height: 1, width: 160 }}>
            <Typography
            style={{
              color:"#001023",
              fontWeight:"bold",
              fontSize:"25px"

            }}>
            &lt;Alexis-J /&gt;
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            color="inherit"
            size="larger"
            variant="contained"
            onClick={() => setOpen(true)} // Establecemos el estado "open" en true al hacer clic en el botón de menú
            sx={{ marginLeft: "auto" }}
          >
            <MenuIconRounded />
          </IconButton>
          </Box>
          <Box
            sx={{
              justifySelf: "end",
              alignSelf: "middle",
              display: { xs: "none", sm: "block" },
            }}
          >
            {navLinks.map((item) => (
              <Button
                // Utilizamos el atributo 'href' y manejamos el desplazamiento con 'onClick'
                href={item.path}
                color="inherit"
                key={item.title}
                disableRipple
                sx={{
                  fontFamily: 'Arial, sans-serif', // Cambia el tipo de fuente aquí
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: 'inherit',
                    color: 'inherit',
                    fontSize: '18px', // Cambia el tamaño de fuente aquí
                  },
                }}
                onClick={(e) => handleNavLinkClick(e, item.path)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="top"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer navLinks={navLinks} handleNavLinkClick={handleNavLinkClick} setOpen={setOpen} />
      </Drawer>
    </>
  );
}
