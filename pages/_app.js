import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
