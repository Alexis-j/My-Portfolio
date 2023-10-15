import { Button } from "@mui/material";

export default function DarkModeBtn() {
  const CustomButton = styled(Button)({
    backgroundColor: "inherit",
    color: "#fff",
    width: 100,
    marginTop: 20,
    border: "2px solid",
    transition: 'transform 0.3s', // Ajusta la duración de la transición aquí
    textTransform: "none",
    '&:hover': {
      backgroundColor: "#fadb85",
      color:"#001023",
      transform: 'scale(1.05)',
      textTransform: "none", // Ajusta el valor de escala para controlar el crecimiento
    },
  });
  
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  if (isDarkMode) {
      body.classList.add('dark-mode');
      darkModeToggle.checked = true;
  }
  darkModeToggle.addEventListener('change', () => {
      if (darkModeToggle.checked) {
          body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
      } else {
          body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', 'disabled');
      }
  });

  return(

  )
}
