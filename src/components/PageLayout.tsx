import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageLayout;
