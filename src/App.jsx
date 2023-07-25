//App

import { Container } from "@mui/material";
import  Header  from "./components/Header/Header";
import Hero from "./components/body/Hero";
import Skills from "./components/body/Skills";
import AboutMe from "./components/body/AboutMe";
import MyProjects from "./components/body/MyProjects";

export default function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Hero />
      </Container>
        <Skills />
        <AboutMe />
        <MyProjects />
    </>
  );
}
