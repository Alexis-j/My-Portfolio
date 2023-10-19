import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function DarkModeBtn() {
  // Estado para controlar el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Configura el tema de Material-UI basado en el modo oscuro
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light', // Configura el tipo de paleta según el modo oscuro
    },
  });

  // Actualiza el estado del modo oscuro en el almacenamiento local y en el cuerpo del documento
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleDarkMode}>
        {darkMode ? 'Desactivar Modo Oscuro' : 'Activar Modo Oscuro'}
      </Button>
    </ThemeProvider>
  );
}
