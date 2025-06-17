import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SvgIcon from '@mui/material/SvgIcon';
import { siMedium } from 'simple-icons/icons'; 
import '../assets/styles/Footer.scss'
function MediumIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d={siMedium.path} />
    </SvgIcon>
  );
}
function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/sriku2412" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/potlabathini/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://medium.com/@sriku2412" target="_blank" rel="noreferrer"><MediumIcon/></a>
        <a href="mailto:srikanth.potlabathini@gmail.com?subject=Hello%20Sreekanth%20Potlabathini" target="_blank" rel="noreferrer"><EmailOutlinedIcon/></a>
        <a href="https://calendar.app.google/QSuqQv8Z7QAj1hvg9" target="_blank" rel="noreferrer"><CalendarMonthIcon/></a>
        <a href="https://github.com/sriku2412/sriku2412/raw/main/Sreekanth-Resume-Jun-2025.pdf" target="_blank" rel="noreferrer"><FileDownloadIcon/></a>
        
      </div>
      <p>Thanks to your visit!  <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"> Built with react</a>💜</p>
    </footer>
  );
}

export default Footer;