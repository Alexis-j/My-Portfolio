//App

import { Container } from "@mui/material";
import  Header  from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Introduction from "./components/body/Introduction";
import Skills from "./components/body/Skills";
import AboutMe from "./components/body/AboutMe";
import Myprofile from "./components/body/MyProjects";

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
        <Introduction />
        <Skills />
        <AboutMe />
        <Myprofile />
        <Routes>
        </Routes>
      </Container>
    </>
  );
}
