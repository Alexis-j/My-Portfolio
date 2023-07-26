import { Box, Container, Typography } from '@mui/material';
import AboutPic from "../../assets/img/about_me.jpg"

export default function AboutMe() {
  return (
    <Container
      id="AboutMe"
      maxWidth="md"
      sx={{
        padding: 5,
        display: "grid",
        gridTemplateColumns: "1fr", // Solo una columna en pantallas pequeñas
        gap: 2,
        height: "100%", // Esta línea hará que la sección ocupe toda la pantalla verticalmente
        '@media (min-width: 600px)': {
          gridTemplateColumns: "2fr 1fr", // 66% para el título, 33% para el contenido en pantallas grandes
          gridTemplateRows: "auto 0.15fr 2fr auto", // Ajustar las filas para una mejor distribución vertical
        },
      }}
    >
      <Typography
        variant="h2"
        component="h3"
        align="center"
        sx={{
          gridColumn: "1", // Toma toda la columna disponible
          '@media (min-width: 600px)': {
            gridColumn: "1 / -1", // Centra el título en pantallas grandes ocupando las dos columnas
          },
        }}
      >
        About Me
      </Typography>

          <Box
          sx={{
            bgcolor: "#001023",
            color: "#ffffff",
            borderRadius: "2px",
            textAlign: "start",
            gridColumn: "1", // Toma toda la columna disponible
            gridRow: "2", // Segunda fila en pantallas grandes
            '@media (min-width: 600px)': {
              gridColumn: "1", // Ocupa la primera columna en pantallas grandes
              gridRow: "2 / 3", // Ocupa solo una tercera parte de la altura en pantallas grandes
            },
          }}
        >
        <Typography style={{paddingLeft:10, fontSize:"24px"}}>
          Full Stack Web Dev
        </Typography>
      </Box>

      <Typography
        sx={{
          gridColumn: "1", // Toma toda la columna disponible
          gridRow: "3", // Tercera fila en pantallas grandes
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nemo cum nihil? Quibusdam nobis autem doloribus recusandae voluptates commodi libero ut laborum ullam, deleniti nam aperiam. Quod sapiente temporibus nemo.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore tempora adipisci amet exercitationem atque, quos ut maiores saepe voluptates sed non eligendi dicta. Non eligendi quidem assumenda esse iusto odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo modi, libero quisquam sequi distinctio amet rem similique! In animi repellat nostrum sunt ipsam id officiis delectus, commodi iste quam?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus beatae assumenda ea dolorum delectus nesciunt esse, aliquid similique, vel sapiente numquam odit. Non a dolorum aliquam commodi est asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas. Dicta accusamus, earum quia hic facilis suscipit! Quia, quis ipsam? Debitis consequatur illum est. Quidem id corrupti assumenda? Quidem, earum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quibusdam! Explicabo facere maxime corporis at excepturi, aperiam illo ad iure odit, sed eaque nihil, nulla aliquid quibusdam omnis eius cumque!
      </Typography>

      <Box
        sx={{
          // esta es la imagen
          width: "100%", // Toma todo el ancho disponible en pantallas pequeñas
          height: 350,
          maxHeight: "100%",
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          borderRadius: "5px",
          '@media (min-width: 600px)': {
            gridColumn: "2",
            gridRow: "3 / 4", // Ocupa las filas 2 y 3 en pantallas grandes
            minHeight: "275px", // Altura mínima para limitar el crecimiento del elemento
          },
        }}
      >
        <img
          src={AboutPic}
          alt="logo_cv"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "5px", }}
        />
      </Box>
    </Container>
  )
}
