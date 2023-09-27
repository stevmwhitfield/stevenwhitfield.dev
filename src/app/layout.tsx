import "./globals.css";
import "devicon/devicon.min.css";

import NavLink from "@/components/advanced/NavLink";

import FolderIcon from "@heroicons/react/24/solid/FolderIcon";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import PaperAirplaneIcon from "@heroicons/react/24/solid/PaperAirplaneIcon";
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
      <body className={`${ubuntu.className} flex flex-col max-w-5xl mx-auto`}>
        <header className="fixed w-full bottom-0 left-0 z-50 border-t border-text bg-foreground md:bottom-auto md:border-0 dark:bg-background dark:border-[#363636]">
          <nav className="flex h-20 justify-between md:max-w-3xl md:mx-auto">
            <NavLink href={"/"} text={"Home"} icon={<HomeIcon className="w-6 h-6 md:hidden" />} />
            <NavLink href={"#projects"} text={"Projects"} icon={<FolderIcon className="w-6 h-6 md:hidden" />} />
            <NavLink href={"#contact"} text={"Contact"} icon={<PaperAirplaneIcon className="w-6 h-6 md:hidden" />} />
          </nav>
        </header>
        <main className="container mx-auto px-6 flex-1 md:pt-20">{children}</main>
        <footer className="py-24 md:pb-4">
          <p className="text-sm text-center">&copy; Steven Whitfield. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
