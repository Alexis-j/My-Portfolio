import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: "inherit",
  color: "#fff",
  width: 100,
  marginTop: 20,
  border: "2px solid",
  transition: 'transform 0.3s',// Ajusta la duración de la transición aquí
  textTransform: "none",
  '&:hover': {
    backgroundColor: "#ffffff",
    color:"black",
    transform: 'scale(1.05)',
    textTransform: "none",// Ajusta el valor de escala para controlar el crecimiento
  },
});

export default function BtnGithub({ href }) {
  return (
    <CustomButton variant="outlined" href={href} target="_blank">
      Github
    </CustomButton>
  );
}
