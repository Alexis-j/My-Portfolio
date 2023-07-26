import { Box, Container, Typography } from "@mui/material";
import Soozie from "../../assets/img/Projecto Soozie.png";
import SunshineSage from "../../assets/img/Projecto Wheater.png";

export default function MyProjects() {
  return (
    <section id="Projects" style={{ backgroundColor: "black", alignItems: "center" }}>
      <Container maxWidth="lg" sx={{ padding: 1 }}>
        <Typography variant="h2" component="h4" align="center" gutterBottom style={{ color: "#ffffff" }}>
          My Projects
        </Typography>
        <Typography variant="h5" component="h4" align="center" gutterBottom style={{ color: "#ffffff" }}>
          A selection of my current work
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center", // Corregido a "center"
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box>
            <img
              src={SunshineSage}
              alt="Projecto Wheater"
              style={{ width: "350px", height: "175px", objectFit: "cover", borderRadius: "5px", margin: 0, border: "2px solid white" }} // Corregido "sold" a "solid"
            />
          </Box>
          <Box>
            <img
              src={Soozie}
              alt="Projecto Soozie"
              style={{ width: "350px", height: "175px", objectFit: "cover", borderRadius: "5px", margin: 0, border: "2px solid white" }}
            />
          </Box>
          <Box>
            <img
              src={SunshineSage}
              alt="Projecto Wheater"
              style={{ width: "350px", height: "175px", objectFit: "cover", borderRadius: "5px", margin: 0, border: "2px solid white" }} // Corregido "sold" a "solid"
            />
          </Box>
          <Box>
            <img
              src={Soozie}
              alt="Projecto Soozie"
              style={{ width: "350px", height: "175px", objectFit: "cover", borderRadius: "5px", margin: 0, border: "2px solid white" }}
            />
          </Box>
          <Box>
            <img
              src={SunshineSage}
              alt="Projecto Wheater"
              style={{ width: "350px", height: "175px", objectFit: "cover", borderRadius: "5px", margin: 0, border: "2px solid white" }} // Corregido "sold" a "solid"
            />
          </Box>
          <Box>
            <img
              src={Soozie}
              alt="Projecto Soozie"
              style={{ width: "350px", height: "175px", objectFit: "cover", borderRadius: "5px", margin: 0, border: "2px solid white" }}
            />
          </Box>

        </Box>
      </Container>
    </section>
  );
}
