import { useState } from "react";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import Footer from "../components/Footer";

export default function Layout(props) {
  const [visible, setVisible] = useState(false);

  const handleCambiarVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Header cambiarVisible={handleCambiarVisible} />
      {visible ? (
        <MenuMobile />
      ) : (
        <>
          {props.children} <Footer />
        </>
      )}
    </>
  );
}
