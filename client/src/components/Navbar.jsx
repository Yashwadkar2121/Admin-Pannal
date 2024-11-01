import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const authLinks = isLoggedIn ? [
    { to: "/logout", label: "Logout" },
  ] : [
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
  ];

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">YashWadkar</NavLink>
          </div>

          <nav>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className={location.pathname === link.to ? "active" : ""}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              {authLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};