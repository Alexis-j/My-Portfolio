import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <section id="footer">
      <Container maxWidth="md" sx={{ backgroundColor: "#001023", height: "50px", display: "flex", alignItems: "center", justifyContent:"center" }}>
        <Typography
          variant="p"
          component="p"
          color="#fadb85"
        >
          © 2023 Alexis Jiménez Castillo. All rights reserved.
        </Typography>
      </Container>
    </section>
  );
}
