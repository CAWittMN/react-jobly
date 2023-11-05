import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const NavBar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <nav className="NavBar navbar navbar-expand-sm bg-primary fixed-top">
      <div className="container-lg">
        <div className="navbar-brand">
          <NavLink
            className="text-white border border-warning p-2 rounded"
            to="/"
          >
            Jobly
          </NavLink>
        </div>
        {currentUser ? (
          <div className="navbar-nav">
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <Link to="/logout">Log out</Link>
          </div>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Sign up
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
