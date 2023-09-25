import { TNavLink } from "@/types";

import Link from "next/link";

const NavLink = ({ href, label, children }: TNavLink) => {
  return (
    <Link href={href} className="w-full flex flex-col items-center justify-center max-md:hover:no-underline">
      {children}
      <span className="text-xs md:text-xl">{label}</span>
    </Link>
  );
};

export default NavLink;
