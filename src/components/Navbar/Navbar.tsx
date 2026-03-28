import { Link } from 'react-router';
import css from './Navbar.module.css';
export const Navbar = () => {
  return (
    <nav>
      <ul className={css.nav}>
        <Link className={css.link} to="/">
          <li>Home</li>
        </Link>
        <Link className={css.link} to="/products">
          <li>Products</li>
        </Link>
      </ul>
    </nav>
  );
};
