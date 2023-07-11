import React from 'react';
import ProfilePic from "../assets/img/profile-photo.jpg";
import { Box, Button, Typography, Container, createTheme, ThemeProvider } from '@mui/material';

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

export default function Section1() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <section>
          <Box sx={{
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
            <Box sx={{
              width: 300,
              maxWidth: "100%",
              height: 300,
              maxHeight:"100%",
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              borderRadius: "5px",
              marginBottom: "0",
              '@media (min-width: 600px)': {
                marginBottom: 0,
                marginRight: "1rem",
              }
            }}>
              <img src={ProfilePic} alt="logo_cv" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "5px", display: "block", margin: 0 }} />
            </Box>

            <Box sx={{ color: "inherit", flexGrow: 1 }}>
              <Typography
                variant="h3"
                component="h3"
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
                style={{ backgroundColor: "#084d01", color: "#fff" }}
              >CONTACT</Button>
            </Box>
          </Box>
        </section>
      </Container>
    </ThemeProvider>
  );
}