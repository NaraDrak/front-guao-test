import "../styles/globals.css";
import StickyMenu from "../components/StickyMenu";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StickyMenu /> <Component {...pageProps} /> <Footer />
    </>
  );
}

export default MyApp;
