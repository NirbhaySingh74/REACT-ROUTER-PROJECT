import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-11 mt-2 cursor-pointer font-bold p-4">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
