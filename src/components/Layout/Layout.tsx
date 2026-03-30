import { Outlet } from 'react-router';
import { Navbar } from '../Navbar/Navbar';

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
