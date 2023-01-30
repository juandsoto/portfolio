interface SideMenuProps {
  close: () => void;
}

const SideMenu = ({ close }: SideMenuProps) => {
  return (
    <div onClick={() => close()} className="fixed z-10 top-0 left-0 w-screen h-screen bg-dark/40">
      <div
        onClick={e => e.stopPropagation()}
        className="absolute z-20 top-0 right-0 w-[60%] h-full px-2 pt-8 bg-light dark:bg-dark shadow-md shadow-dark"
      >
        <ul className="flex flex-col items-center gap-6">
          <li onClick={() => close()}>
            <a href="#experiences">Experience</a>
          </li>
          <li onClick={() => close()}>
            <a href="#skills">Skills</a>
          </li>
          <li className="btn-primary btn-hover" onClick={() => close()}>
            <a href="#projects">Personal Projects</a>
          </li>
          <li onClick={() => close()}>
            <a href="#certificates">Certificates</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
