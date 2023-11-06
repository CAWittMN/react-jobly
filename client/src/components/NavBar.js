import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser = null, logout, applicationIds }) => {
  return (
    <nav className="NavBar navbar navbar-expand-sm bg-primary fixed-top position-fixed">
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={
                  applicationIds.size > 0 ? "nav-link" : "nav-link disabled"
                }
                to="/applications"
              >
                Applications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <button onClick={() => logout()} className="btn">
              Log out
            </button>
          </ul>
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
