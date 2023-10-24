import './globals.css';
import 'devicon/devicon.min.css';

import Navbar from '@/components/layout/Navbar';

const setInitialTheme = `
  const getUserThemePreference = () => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== "undefined" && localTheme !== null) {
      return localTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  document.body.dataset.theme = getUserThemePreference();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body data-theme='dark' className={'flex flex-col max-w-prose mx-auto text-xl px-6 py-10'}>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
