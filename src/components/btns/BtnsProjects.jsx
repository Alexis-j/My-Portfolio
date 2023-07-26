import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: "#084d01",
  color: "#fff",
  width: 150,
  marginTop: 20,
  transition: 'transform 0.3s', // Ajusta la duración de la transición aquí
  '&:hover': {
    backgroundColor: "#0a6101",
    transform: 'scale(1.1)', // Ajusta el valor de escala para controlar el crecimiento
  },
});

export default function BtnProjects() {
  return (
    <CustomButton variant="contained">
      Some Projects
    </CustomButton>
  );
}
