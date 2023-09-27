import { IIconLink } from "@/types";

import Link from "next/link";

const NavLink = ({ href, text, icon }: IIconLink) => {
  return (
    <Link
      href={href}
      className="w-full flex flex-col items-center justify-center max-md:hover:no-underline hover:text-greenAlt dark:hover:text-green"
    >
      {icon}
      <span className="text-xs md:text-xl">{text}</span>
    </Link>
  );
};

export default NavLink;
