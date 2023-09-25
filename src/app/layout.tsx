import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

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
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
