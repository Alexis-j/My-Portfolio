//App

import { Container } from "@mui/material";
import  Header  from "./components/Header";
import { Route, Routes } from "react-router-dom";
import  Section1  from "./components/Section1";


const navLinks = [
  // {
  //   title: "Home",
  //   path: "/home",
  // },
  // {
  //   title: "Login",
  //   path: "/login",
  // },
  // {
  //   title: "ErroLog",
  //   path: "/Errorlog.jsx",
  // },
  // {
  //   title: "/Register",
  //   path: "/Register.jsx",
  // },
];

export default function App() {
  return (
    <>
      <Header navLinks={navLinks}/>
      <Container sx={{ mt: 5 }}>
        <Section1 />
        <Routes>
        </Routes>
      </Container>
    </>
  );
}
