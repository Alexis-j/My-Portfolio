import { Box, Container, Typography } from "@mui/material";
import React from "react";
import  Soozie  from "../../assets/img/Projecto Soozie.png";
import  SunshineSage  from "../../assets/img/Projecto Wheater.png";

export default function Myprofile() {
  return (
    <Container
    maxWidth="md"
    >
      <Typography
      variant="h2"
      component="h4"
      align="center"
      gutterBottom
      >
      My Projects
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        align="center"
        gutterBottom
      >
      A selection of my current work
      </Typography>
      <Box
        sx={{
          display:"columns",
          justifyContent:"center",
          alignItems:"center",

        }}
      >
        <Box
        sx={{ // esta es la imagen
          width: 300,
          height: 275,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          borderRadius: "5px",
          marginBottom: 0,
          '@media (min-width: 600px)': {
            marginBottom: 0,
            marginRight: "1rem",
          }
        }}>
          <img src={SunshineSage} alt="Projecto Wheater"style={{ width: "auto", height: '100%', objectFit: 'cover', borderRadius: "5px", display: "block", margin: 0}} />
        </Box>
        <Box
        sx={{ // esta es la imagen
          width: 300,
          height: 275,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          borderRadius: "5px",
          marginBottom: "0",
          '@media (min-width: 600px)': {
            marginBottom: 0,
            marginRight: "1rem",
          }
        }}>
          <img src={Soozie} alt="Projecto Soozie" style={{ width: "auto", height: '100%', objectFit: 'cover', borderRadius: "5px", display: "block", margin: 0}}/>
        </Box>
      </Box>
    </Container>
  )
}
