import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Freelancer from "../../assets/img/Projecto Freelancer.png";

const WinProject = styled(Box)({
  width: "350px",
  height: "175px",
  borderRadius: "5px",
  margin: 0,
  border: "2px solid white",
  overflow: "hidden", // Asegura que el contenido desbordado no se muestre fuera del Box
});

const ImageContainer = styled('div')({
  width: "100%",
  height: "100%",
  transition: 'transform 0.5s', // Ajusta la duración de la transición aquí
  '& img': {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px", // Agregamos el borde redondeado aquí en lugar de en el contenedor
  },
  '&:hover': {
    transform: 'scale(1.2)', // Ajusta el valor de escala para controlar el crecimiento
  },
});

export default function FreelancerProject() {
  return (
    <WinProject>
      <ImageContainer>
        <img
          src={Freelancer}
          alt="Projecto Wheater"
        />
      </ImageContainer>
    </WinProject>
  )
}
