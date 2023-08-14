//App
import { Container } from "@mui/material";
import  Header  from "./components/Header/Header";
import Hero from "./components/body/Hero";
import Skills from "./components/body/Skills";
import AboutMe from "./components/body/AboutMe";
import MyProjects from "./components/body/MyProjects";
import Contact from "./components/body/Contact"
import Footer from "./components/body/Footer";
// import MediaCard from "./components/body/Card";

export default function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Hero />
        {/* <MediaCard /> */}
      </Container>
        <Skills />
        <AboutMe />
        <MyProjects />
        <Contact />
        <Footer />
    </>
  );
}
