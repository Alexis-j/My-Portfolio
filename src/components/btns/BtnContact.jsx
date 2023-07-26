import { Button } from "@mui/material";

export default function BtnContact() {
  const handleButtonClick = (event) => {
    event.preventDefault();
    const targetElement = document.querySelector("#Contact"); // Reemplaza "#Contact" con el identificador de tu sección de contacto
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top;
      const headerOffset = 100;
      const totalOffset = topOffset + window.pageYOffset - headerOffset;

      // Desplazamiento suave con retraso
      setTimeout(() => {
        window.scroll({
          top: totalOffset,
          behavior: "smooth",
        });
      }, 200); // Ajusta el tiempo de retraso aquí
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleButtonClick} // Utiliza el nuevo manejador de clic
      style={{ backgroundColor: "#084d01", color: "#fff", width: 150, marginTop: 20 }}
    >
      CONTACT
    </Button>
  );
}
