import { Box, Typography } from '@mui/material';
import BtnProjects from "../btns/BtnsProjects";
import 'devicon/devicon.min.css';

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "#001023", alignItems: "center" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: 12, marginTop: 10 }}>
        <Typography variant="h2" component="h3" color="#ffffff" sx={{marginBottom:5}}>
          Skills
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", // 3 columns en pantallas mas pequenas
            gap: 1,
            width: "100%",
          }}
        >
          <i className="devicon-html5-plain colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-css3-plain colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-javascript-plain colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-bootstrap-plain-wordmark colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-react-original colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-git-plain colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-vscode-plain colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-ruby-plain colored" style={{ fontSize: "75px" }}></i>
          <i className="devicon-github-original colored" style={{ fontSize: "75px", color: "#ffffff" }}></i>
        </Box>
          <BtnProjects />
        </Box>
    </section>
  );
}
