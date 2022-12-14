import "/styles/globals.css";

import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }) {
  document.documentElement.classList.add("dark");
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
