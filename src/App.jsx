//App

import { Container } from "@mui/material";
import  Header  from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/body/Hero";
import Skills from "./components/body/Skills";
import AboutMe from "./components/body/AboutMe";
import MyProjects from "./components/body/MyProjects";

const navLinks = [
];

export default function App() {
  return (
    <>
      <Header navLinks={navLinks}/>
      <Container sx={{ mt: 5 }}>
        <Hero />
        <Skills />
        <AboutMe />
        <MyProjects />
        <Routes>
        </Routes>
      </Container>
    </>
  );
}
