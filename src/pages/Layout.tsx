import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = () => {
  const { pathname } = useLocation();

  const [mode, setMode] = useState("light");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pathname === "/menu" || pathname === "/location")
      return setMode("dark");
    setMode("light");
  }, [pathname]);

  return (
    <>
      <NavBar mode={mode} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
