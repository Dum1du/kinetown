import { Icon, List } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  //add genres if needed
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Horror",
    "Sci-Fi",
  ];

  return (
    <footer className="footer bg-amber-950 text-white py-4 px-4 mt-auto ">
      <div className="categories">
        <ul className="texts flex flex-row flex-wrap items-center sm:justify-around justify-between opacity-80 py-2">
          {genres.map((genre) => (
            <List className=" cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
              {genre}
            </List>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center opacity-70 visible sm:invisible">
        <hr className=" h-3 w-[50%] text-highlightColor" />
      </div>
      <div className="flex sm:flex-col items-center justify-around ">
        <div className="faq">
          <ul className="faq flex  flex-col sm:flex-row sm:items-center justify-center opacity-80 py-2">
            <li className="FAQ sm:px-10 font-bold cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
              <CircleIcon
                className="sm:invisible visible"
                sx={{ fontSize: "8px", margin: "0 4px", color: "#e4b165" }}
              />
              {"FAQ "}
            </li>
            <CircleIcon
              className="invisible sm:visible"
              sx={{ fontSize: "8px", margin: "0 4px", color: "#e4b165" }}
            />
            <li className="help sm:px-10 font-bold cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
              <CircleIcon
                className="sm:invisible visible"
                sx={{ fontSize: "8px", margin: "0 4px", color: "#e4b165" }}
              />
              {"Help Center "}
            </li>
            <CircleIcon
              className="invisible sm:visible"
              sx={{ fontSize: "8px", margin: "0 4px", color: "#e4b165" }}
            />
            <li className="contact sm:px-10 font-bold cursor-pointer transition-all duration-300 hover:text-amber-300 hover:text-shadow-glow">
              <CircleIcon
                className="sm:invisible visible"
                sx={{ fontSize: "8px", margin: "0 4px", color: "#e4b165" }}
              />
              {"Contact"}
            </li>
          </ul>
        </div>
        <div className="social">
          <ul className="social-icons grid grid-cols-2 gap-2 sm:gap-0 sm:flex flex-row items-center justify-center opacity-80 py-2 w-auto">
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
      </div>
      <div className="container">
        <p className="text-muted flex items-center justify-center opacity-80 text-[8px] sm:text-xs pt-5 ">
          Copyright © 2025, KineTown . All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
