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
            justifyContent: "center",
            alignItems: "center",
            gap: 3
          }}
        >
          <Box
            sx={{
              width: "350px",
              height: "175px",
              borderRadius: "5px",
              margin: 0,
              border: "2px solid white",
              overflow: "hidden", // Para recortar la imagen que se sale del contenedor
              transition: 'transform 3s', // Ajusta la duración de la transición aquí
              '&:hover img': {
                transform: 'scale(1.2)', // Ajusta el valor de escala para controlar el acercamiento de la imagen
              },
            }}
          >
            <img
              src={SunshineSage}
              alt="Projecto Wheater"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>

      </Container>
    </section>
  );
}
