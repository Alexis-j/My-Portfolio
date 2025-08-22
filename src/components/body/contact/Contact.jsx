import "./Contact.css";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <h3 className="contact-title">Contact</h3>

      {/* Email */}
      <div className="contact-row">
        <MailOutlineIcon className="contact-icon" />
        <h5 className="contact-email">
          <a href="mailto:alexis.jcastillo@outlook.com">
            alexis.jcastillo@outlook.com
          </a>
        </h5>
      </div>

      {/* Socials */}
      <div className="contact-socials">
        {/* GitHub */}
        <div className="social-box">
          <a
            href="https://github.com/Alexis-j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
            <p>Github</p>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="social-box">
          <a
            href="https://www.linkedin.com/in/alexis-jim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );
}
