import { Link } from 'react-router';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <h1>Logo</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
  <Link to="/projects">Projects</Link>
</li>
<li>
  <Link to="/contact">Contact</Link>
</li>
      </ul>
    </div>
  );
};

export default Navbar;