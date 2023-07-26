import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: "inherit",
  color: "#fff",
  width: 100,
  marginTop: 20,
  transition: 'transform 0.3s', // Ajusta la duración de la transición aquí
  '&:hover': {
    backgroundColor: "#ffffff",
    color:"black",
    transform: 'scale(1.05)', // Ajusta el valor de escala para controlar el crecimiento
  },
});

export default function BtnGithub() {
  return (
    <CustomButton variant="outlined">
      Github
    </CustomButton>
  );
}
