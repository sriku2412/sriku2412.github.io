import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/sriku2412" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/potlabathini/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Thanks to Yuji Sato for the template <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"></a>💜</p>
    </footer>
  );
}

export default Footer;