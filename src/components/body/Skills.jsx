import { Box, Container, Typography } from '@mui/material';
import { HtmlIcon } from "devicon/icons/html5";


export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "black"}}>
      <Typography
        variant="h2"
        component="h3"
        align="center"
        padding={1}
        color="#ffffff"
      >
        Skills
      </Typography>
      <Container maxWidth="sm">
        <Box
        sx={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr",
          gridTemplateRows:"1fr 1fr 1fr 1fr",
          gap: 2,
          marginBottom: 2,
          maxWidth:"500px"
        }}>
          <HtmlIcon />
          <CssIcon />
          <JsIcon />
          <TsIcon />
          <ReactIcon />
          <BootstrapIcon />
          <GitIcon />
          <GithubIcon/>
        </Box>
      </Container>
    </section>
  )
}
