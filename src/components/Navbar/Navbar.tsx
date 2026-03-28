import { Link } from 'react-router';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
      </ul>
    </nav>
  );
};
