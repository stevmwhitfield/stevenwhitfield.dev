import "./globals.css";
import NavLink from "@/components/ui/NavLink";

import { HomeIcon, FolderIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata = {
  title: "Steven Whitfield - Full Stack Software Engineer",
  description: "A recent graduate and full stack software engineer. Open to work opportunities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} flex flex-col`}>
        <header className="fixed w-full bottom-0 left-0 z-50 border-t border-[#363636] md:relative md:max-w-3xl md:mx-auto md:border-0">
          <nav className="flex h-20 justify-between">
            <NavLink href={"/"} label={"Home"}>
              <HomeIcon className="w-6 h-6 md:hidden" />
            </NavLink>
            <NavLink href={"#projects"} label={"Projects"}>
              <FolderIcon className="w-6 h-6 md:hidden" />
            </NavLink>
            <NavLink href={"#contact"} label={"Contact"}>
              <PaperAirplaneIcon className="w-6 h-6 md:hidden" />
            </NavLink>
          </nav>
        </header>
        <main className="container mx-auto px-6 flex-1">{children}</main>
      </body>
    </html>
  );
}
