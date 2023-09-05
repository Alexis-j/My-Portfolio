import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import SunshineSage from "../../assets/img/Projecto Wheater.png";

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
  },
  '&:hover': {
    transform: 'scale(1.2)', // Ajusta el valor de escala para controlar el crecimiento
  },
});

export default function SunshinesageProject() {
  return (
    <WinProject>
      <ImageContainer>
        <img
          src={SunshineSage}
          alt="Projecto Wheater"
        />
      </ImageContainer>
    </WinProject>
  )
}
