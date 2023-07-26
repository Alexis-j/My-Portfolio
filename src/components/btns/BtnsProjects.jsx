import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: "#084d01",
  color: "#fff",
  width: 150,
  marginTop: 20,
  transition: 'transform 0.3s', // Ajusta la duración de la transición aquí
  textTransform: "none",
  '&:hover': {
    backgroundColor: "#0a6101",
    transform: 'scale(1.1)',// Ajusta el valor de escala para controlar el crecimiento
    textTransform: "none",
  },
});



export default function BtnProjects() {
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
    <CustomButton
    variant="contained"
    onClick={handleButtonClick}>
      Some Projects
    </CustomButton>
  );
}