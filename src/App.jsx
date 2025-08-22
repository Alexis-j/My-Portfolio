import AboutMe from "./components/body/aboutMe/AboutMe";
import Contact from "./components/body/Contact"
//App
import { Container } from "@mui/material";
import Footer from "./components/body/Footer";
import  Header  from "./components/Header/Header";
import Hero from "./components/body/Hero";
import MyProjects from "./components/body/MyProjects";
import Skills from "./components/body/Skills";
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
