import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = { color: "red", textDecoration: "none" };
  return (
    <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/posts"
      >
        Posts
      </NavLink>
    </nav>
  );
};

export default Navbar;
