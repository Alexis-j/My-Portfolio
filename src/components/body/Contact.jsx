import { Typography, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="Contact" style={{ alignItems: "center", marginTop: 50 }}>
      <Typography variant="h3" component="h3" align="center" gutterBottom style={{ color: "#001023" }}>
        Contact
      </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
        <MailOutlineIcon style={{ color: "#001023", fontSize: "24px", marginRight: "5px" }} />
        <Typography variant="p" component="h5" align="center" gutterBottom style={{ color: "#001023", fontSize: "24px", margin: 0 }}>
          <a href="mailto:alexis.jcastillo@outlook.com" style={{ textDecoration: "none", color: "#001023" }}>
            alexis.jcastillo@outlook.com
          </a>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 5 }}>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ margin: "0 10px", transition:"transform 0.5", "&:hover":{ transform: "scale(1.05)"}  }}>
          <a href="https://github.com/Alexis-j" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#001023" }}>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#001023", fontSize: "24px", margin: "10px" }} />
            <Typography component="p" align="center">
              Github
            </Typography>
          </a>
        </Box>
        {/* LinkedIn */}
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ margin: "0 10px", transition:"transform 0.5", "&:hover":{ transform: "scale(1.05)"} }}>
          <a href="https://www.linkedin.com/in/alexis-jim/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#001023" }}>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#001023", fontSize: "24px", margin: "10px" }} />
            <Typography component="p">
              LinkedIn
            </Typography>
          </a>
        </Box>
      </Box>
    </section>
  );
}
