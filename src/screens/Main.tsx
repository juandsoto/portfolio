import { DarkMode, GitHub, Instagram, KeyboardArrowDown, LightMode, LinkedIn, Menu } from "@mui/icons-material";
import { SideMenu } from "components";
import { useState } from "react";
import useStore from "store";
import Picture from "../components/Picture";

const PageAnchors = () => {
  return (
    <ul className="hidden sm:flex items-center gap-6">
      <li>
        <a href="#experiences">Experience</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li className="btn-primary btn-hover px-2 py-1">
        <a href="#projects">Personal Projects</a>
      </li>
      <li>
        <a href="#certificates">Certificates</a>
      </li>
    </ul>
  );
};

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useStore();
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="section min-h-screen  flex flex-col">
      <div className="flex justify-between items-center">
        <div className="w-12">
          {theme === "light" ? <img src="logo.svg" alt="icons" /> : <img src="logoDark.svg" alt="icons" />}
        </div>
        <PageAnchors />
        <div className="flex gap-4 items-center">
          {theme === "light" ? (
            <span className="icon">
              <DarkMode className="cursor-pointer" onClick={() => setTheme("dark")} />
            </span>
          ) : (
            <span className="icon">
              <LightMode className="cursor-pointer" onClick={() => setTheme("light")} />
            </span>
          )}
          <div className="block sm:hidden">
            <Menu className="icon mb-1 cursor-pointer" onClick={toggleMenu} />
            {isMenuOpen && <SideMenu close={toggleMenu} />}
          </div>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="basis-6 md:basis-24 flex flex-col items-start justify-center">
          <div className="flex flex-col gap-8 items-center justify-center">
            <a className="icon social-media-button" href="https://www.instagram.com/jdsotoc06" target="_blank">
              <Instagram />
            </a>
            <a className="icon social-media-button" href="https://github.com/juandsoto" target="_blank">
              <GitHub />
            </a>
            <a
              className="icon social-media-button"
              href="https://www.linkedin.com/in/juan-david-soto-carmona-287a89206"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
        <div className="pl-6 md:pl-8 flex-1 flex items-center justify-between gap-8">
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="font-bold tracking-wide">Juan David Soto</h1>
            <span className="text-accent text-sm sm:text-xl uppercase font-semibold pre-line">
              Frontend software developer
            </span>
            <div className="max-w-xl">
              <p>
                <span className="font-bold text-lg pr-2">Hi!</span>I'm a self-taught ReactJS frontend web developer.
              </p>
              <p>
                Currently on the fourth year of the Software Engineer career at{" "}
                <a className="external-link" target="_blank" href="https://www.univalle.edu.co/">
                  Universidad del Valle
                </a>{" "}
                in Colombia
              </p>
            </div>
            <a className="btn-primary btn-hover px-6 py-4 flex items-center gap-4" href="#projects">
              Check out my work!
              <KeyboardArrowDown />
            </a>
          </div>
          <div className="hidden lg:block">
            <Picture />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
