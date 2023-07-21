import React from 'react';
import ProfilePic from "../../assets/img/profile-photo.jpg";
import { Box, Button, Typography, createTheme, ThemeProvider } from '@mui/material';

// Crear un tema personalizado con tamaños de tipografía responsivos
const theme = createTheme({
  typography: {
    h2: {
      fontSize: '3rem', // Tamaño inicial
      '@media (max-width: 600px)': {
        fontSize: '2.25rem', // Tamaño para pantallas más pequeñas
      },
    },
    h5: {
      fontSize: '1.25rem', // Tamaño inicial
      '@media (max-width: 600px)': {
        fontSize: '1rem', // Tamaño para pantallas más pequeñas
      },
    },
  },
});

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{marginTop:5}}>
        <section>
          <Box sx={{ // toda la caja que envuelte, foto, nombre, btn
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            '@media (min-width: 600px)': {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
            }
          }}>
            <Box sx={{ // esta es la imagen
              width: 275,
              maxWidth: "100%",
              height: 275,
              maxHeight:"100%",
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              borderRadius: "5px",
              marginBottom: "0",
              '@media (min-width: 600px)': {
                marginBottom: 0,
                marginRight: "1rem",
              }
            }}>
              <img src={ProfilePic} alt="logo_cv" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "5px", display: "block", margin: 0}} />
            </Box>

            <Box sx={{ color: "inherit", flexGrow: 0 }}>
              <Typography
                variant="h3"
                component="h3"
                gutterBottom
                sx={{
                  fontSize: '2rem', // Tamaño para pantallas más pequeñas
                  '@media (min-width: 600px)': {
                    fontSize: '3rem', // Tamaño inicial
                  },
                }}
              >
                Hi, I am <br />
                <strong>Alexis Jimenez C</strong>
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
              >
                Full Stack Web-Developer
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#084d01", color: "#fff", width: 150, marginTop: 20 }}
              >
                CONTACT
              </Button>
            </Box>
          </Box>
        </section>
      </Box>
    </ThemeProvider>
  );
}
