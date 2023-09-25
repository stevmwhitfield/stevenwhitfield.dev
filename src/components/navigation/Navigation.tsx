import { HomeIcon, FolderIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <header className="fixed w-full bottom-0 left-0 z-50 border-t border-[#363636] md:relative md:max-w-3xl md:mx-auto md:border-0">
      <nav className="flex h-20 justify-between">
        <NavLink href={"/"} label={"Home"}>
          <HomeIcon className="w-6 h-6 md:hidden" />
        </NavLink>
        <NavLink href={"/"} label={"Projects"}>
          <FolderIcon className="w-6 h-6 md:hidden" />
        </NavLink>
        <NavLink href={"/"} label={"Contact"}>
          <PaperAirplaneIcon className="w-6 h-6 md:hidden" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
