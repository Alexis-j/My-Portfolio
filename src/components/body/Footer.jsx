import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualizar el año actual
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section id="footer">
      <div style={{ backgroundColor: "#001023", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="body1" style={{ color: "#fadb85" }}>
          &copy; {currentYear} Alexis Jiménez Castillo. All rights reserved.
        </Typography>
      </div>
    </section>
  );
}
