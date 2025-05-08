import { Icon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className="footer bg-amber-950 text-white py-4 mt-auto">
      <div className="categories">
        <ul className="texts flex flex-row items-center justify-center opacity-80 py-2">
          <li className="Sci-fi px-10 cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            Sci-fi
          </li>
          <li className="Action px-10 cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            Action
          </li>
          <li className="Comedy px-10 cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            Comedy
          </li>
          <li className="Adventure px-10 cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            Adventure
          </li>
          <li className="Romance px-10 cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            Romance
          </li>
        </ul>
      </div>
      <div className="faq">
        <ul className="faq flex flex-row items-center justify-center opacity-80 py-2">
          <li className="FAQ px-10 font-bold cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            FAQ
          </li>
          <CircleIcon
            sx={{ fontSize: "8px", margin: "0 4px", color: "#e4b165" }}
          />
          <li className="help px-10 font-bold cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            Help Center
          </li>
          <CircleIcon
            sx={{ fontSize: "8px", margin: "0 4px", color: "#e4b165" }}
          />
          <li className="contact px-10 font-bold cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
            Contact
          </li>
        </ul>
      </div>
      <div className="social">
        <ul className="social-icons flex flex-row items-center justify-center opacity-80 py-2">
          <li className="x px-3">
            <XIcon
              className="transition-all duration-300 hover:scale-120 cursor-pointer"
              sx={{ fontSize: "40px", margin: "0 4px", color: "#e4b165" }}
            />
          </li>
          <li className="Facebook px-3">
            <FacebookIcon
              className="transition-all duration-300 hover:scale-120 cursor-pointer"
              sx={{ fontSize: "40px", margin: "0 4px", color: "#e4b165" }}
            />
          </li>
          <li className="telegram px-3">
            <TelegramIcon
              className="transition-all duration-300 hover:scale-120 cursor-pointer"
              sx={{ fontSize: "40px", margin: "0 4px", color: "#e4b165" }}
            />
          </li>
          <li className="Github px-3">
            <GitHubIcon
              className="transition-all duration-300 hover:scale-120 cursor-pointer"
              sx={{ fontSize: "40px", margin: "0 4px", color: "#e4b165" }}
            />
          </li>
        </ul>
      </div>
      <div className="container">
        <p className="text-muted flex items-center justify-center opacity-80 text-xs pt-5 ml-17">
          Copyright © 2025, KineTown . All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
