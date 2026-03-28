import { Outlet } from 'react-router';
import { Navbar } from '../Navbar/Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
