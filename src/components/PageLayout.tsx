import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageLayout;
