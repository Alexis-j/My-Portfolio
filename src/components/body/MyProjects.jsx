import { Box, Container, Typography } from "@mui/material";
import  Soozie  from "../../assets/img/Projecto Soozie.png";
import  SunshineSage  from "../../assets/img/Projecto Wheater.png";

export default function MyProjects() {
  return (
    <section  id="Projects" style={{ backgroundColor: "black", alignItems: "center" }}>
      <Container id="MyProjects" sx={{padding:5 }}
      maxWidth="md"
      >
        <Typography
        variant="h2"
        component="h4"
        align="center"
        gutterBottom
        style={{color:"#ffffff"}}
        >
        My Projects
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          align="center"
          gutterBottom
          style={{color:"#ffffff"}}
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
    </section>
  )
}
