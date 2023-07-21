import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIconRounded from '@mui/icons-material/MenuRounded';
import HeaderPic from "../../assets/img/pngwing.com.png";

const navLinks = [
  {
    title: "About",
    path: "#AboutMe", // Utilizamos el identificador para navegar a la sección "AboutMe"
  },
  {
    title: "Projects",
    path: "#MyProjects",// Utilizamos el identificador para navegar a la sección "MyProjects"
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavLinkClick = (event, path) => {
    event.preventDefault();
    const targetElement = document.querySelector(path);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top;
      const headerOffset = 100; // Ajusta este valor según la altura de tu barra de navegación
      const totalOffset = topOffset + window.pageYOffset - headerOffset;
      window.scroll({
        top: totalOffset,
        behavior: "smooth", // Esto realiza el desplazamiento suave
      });
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Box sx={{ padding: 1, height: 100, width: 100 }}>
            <img
              src={HeaderPic}
              alt="logo de mi pagina"
              style={{ width: '100%', height: '100%' }}
            />
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
        anchor="right"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
}
