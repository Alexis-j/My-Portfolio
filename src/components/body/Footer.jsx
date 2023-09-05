import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <section id="footer">
      <div style={{ backgroundColor: "#001023", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="body1" style={{ color: "#fadb85" }}>
          © 2023 Alexis Jiménez Castillo. All rights reserved.
        </Typography>
      </div>
    </section>
  );
}

