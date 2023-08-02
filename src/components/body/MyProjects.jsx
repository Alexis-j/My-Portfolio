import { Box, Container, Typography } from "@mui/material";
import SunshinesageProject  from "../Projects/SunshinesageProject";
import SoozieProject from "../Projects/SoozieProjets";
import FreelancerProject from "../Projects/FreelancerProject";
import  BtnDemo  from "../btns/BtnDemo";
import BtnGithub from "../btns/BtnGithub";


export default function MyProjects() {
  return (
    <section id="MyProjects" style={{ backgroundColor: "#001023", alignItems: "center", padding: 20 }}>
      <Container maxWidth="lg" sx={{ padding: 1 }}>
        <Typography variant="h2" component="h4" align="center" gutterBottom style={{ color: "#ffffff" }}>
          My Projects
        </Typography>
        <Typography variant="h5" component="h4" align="center" gutterBottom style={{ color: "#fadb85", marginBottom:20}}>
          A selection of my current work
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 3
          }}
        >
          <Box>
            <SunshinesageProject />
              <Box sx={{display:"flex", justifyContent:"space-around"}}>
                <BtnDemo />
                <BtnGithub href="https://github.com/Alexis-j/SunshineSage" />
              </Box>
          </Box>
          <Box>
            <SoozieProject />
              <Box sx={{display:"flex", justifyContent:"space-around"}}>
                  <BtnDemo href="https://www.soozie.xyz/"/>
                  <BtnGithub href="https://github.com/Alexis-j/storyai"/>
              </Box>
          </Box>
          <Box>
            <FreelancerProject />
              <Box sx={{display:"flex", justifyContent:"space-around"}}>
                <BtnDemo />
                <BtnGithub href="https://github.com/Alexis-j/Freelancer" />
              </Box>
          </Box>
          {/* <Box>
            <SoozieProject />
              <Box sx={{display:"flex", justifyContent:"space-around"}}>
                  <BtnDemo />
                  <BtnGithub />
              </Box>
          </Box>
          <Box>
            <FreelancerProject />
              <Box sx={{display:"flex", justifyContent:"space-around"}}>
                  <BtnDemo />
                  <BtnGithub />
              </Box>
          </Box>
          <Box>
            <SunshinesageProject />
              <Box sx={{display:"flex", justifyContent:"space-around"}}>
                <BtnDemo />
                <BtnGithub />
              </Box>
          </Box> */}
        </Box>
      </Container>
    </section>
  );
}
